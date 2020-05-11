/*:
 * @plugindesc ステートの拡張（ステート解除時に別のステートを自動付与など）を行います。
 * @author hiz
 * 
 * @help
 *  ステートのメモに記述を追加することで、ステートの拡張を行います。
 *  行える拡張は以下の通りです。
 *  　・ステートがターン数/歩数/ダメージで自動解除された際、別のステートを付与
 *  　・アイテム又はスキルによってステートが解除された際、別のステートを付与
 *  　・他のステートが付与された際、別のステートに変わる
 *  　・全回復・戦闘不能時に、ステートを解除しない。
 * 
 * ステートメモ:
 * <hzExState_auto:[nextStateId]>             # ステートがターン数/歩数/ダメージで自動解除された際、ID[nextStateId]のステートを付与
 * <hzExState_item:[nextStateId]>             # アイテム又はスキルによってステートが解除された際、ID[nextStateId]のステートを付与
 * <hzExState_stack:[stateId],[nextStateId]>  # 他のステート[stateID]が付与された際、ステート[nextStateId]に変わる
 *                                            # ※ ステート[stateID]は解除される
 * <hzExState_remain>                         # 全回復・戦闘不能時に、ステートを解除しない。
 *                                            # ※ 自動解除、アイテム・スキルによる解除は可能です。
 * 
 * 例）
 * <hzExState_auto:10>                  # ステートがターン数/歩数/ダメージで自動解除された際、ID10のステートを付与
 *                                      # 例）病気のステートを歩数で自動解除するように設定し、
 *                                      # 　　解除の際に重病のステートを付与するように設定すれば、
 *                                      #    歩数で悪化するステートを実現できます。
 *                                      
 * <hzExState_item:12>                  # アイテム又はスキルによってステートが解除された際、ID12のステートを付与
 *                                      # 例）重病のステートをスキルで回復すると病気のステートが付与されるように設定すれば、
 *                                      #    複数回の回復が必要なステートを実現できます。
 *                                      
 * <hzExState_stack:10, 11>             # ID10のステートが付与された際、ID11のステートを付与。
 *                                      # 例）攻撃力上昇のステート(ID:10)が付与されたキャラに更に攻撃力上昇のステートを重ねると
 *                                      #    攻撃力超上昇のステート(ID:11)が付与されるなど、スタックされるステートを実現できます。 
 *                                      #    ※ 攻撃力超上昇のステートが付与されたキャラに攻撃力上昇のステートを重複できないようにするには、
 *                                      #      攻撃力超上昇のステートのメモにも、<hzExState_stack:10, 11>を記載して下さい。
 *                                      
 * <hzExState_remain>                   # 全回復・戦闘不能時に、ステートを解除しない。
 *                                      # 例）呪いなど、宿屋で回復できないステートを実現できます。
 *                                      #    また、有利なステートを全回復時に解除したく無い場合にも利用できます。
 */

(function() {
    
    var hzRemoveStateType = '';
    
    var _Game_Battler_addState = Game_Battler.prototype.addState;
    var _Game_Battler_removeState = Game_Battler.prototype.removeState;
    
    // ステート追加処理
    Game_Battler.prototype.addState = function(stateId) {
        var added = this.isStateAddable(stateId);
        var stackStates;
        if(added) {
            // 関連するスタック設定を持つステートの有無をチェック
            stackStates = this._states.filter(function(id) {
                if($dataStates[id].meta.hzExState_stack !== undefined) {
                    var stackParms = $dataStates[id].meta.hzExState_stack.split(",");
                    return stateId === Number(stackParms[0]);
                }
                return false;
            });
        }
        _Game_Battler_addState.call(this, stateId);
        if(added) {
             // スタック処理（変更後のステート付与メッセージのみ表示）
            if(stackStates.length !== 0) {
                var self = this;
                var nextStates = [];
                // ステート付与のメッセージを削除
                this._result.addedStates = this._result.addedStates.filter(function(elm) {
                    return elm !== stateId;
                });
                
                // 関連スタック設定を持つステートがある場合
                stackStates.forEach(function(id) {
                    // スタック設定を持つステートを解除し、次のステートを付与
                    var stackParms = $dataStates[id].meta.hzExState_stack.split(",");
                    var nextStateId = Number(stackParms[1]);
                    if(id === nextStateId) return;
                    _Game_Battler_removeState.call(self, id);
                    // ステート解除のメッセージを削除
                    self._result.removedStates = self._result.removedStates.filter(function(elm) {
                        return elm !== id;
                    });
                    _Game_Battler_addState.call(self, nextStateId);
                    if(stateId === nextStateId) {
                        // ステート付与のメッセージを削除
                        self._result.addedStates = self._result.addedStates.filter(function(elm) {
                            return elm !== stateId;
                        });
                    }
                });
                // 追加したステートを解除
                _Game_Battler_removeState.call(this, stateId);
                // ステート解除のメッセージを削除
                this._result.removedStates = this._result.removedStates.filter(function(elm) {
                    return elm !== stateId;
                });
            }
        }
    };
    
    // ステート解除処理
    Game_Battler.prototype.removeState = function(stateId) {
        var affected = this.isStateAffected(stateId);
        // ステート解除実行
        _Game_Battler_removeState.call(this, stateId);
        if(affected) {
            if(hzRemoveStateType === 'item') {
                // アイテム・スキルによる解除（ステート解除メッセージのみ表示）
                var nextState  = $dataStates[stateId].meta.hzExState_item;
                if(nextState !== undefined) {
                    var nextStateId = Number(nextState);
                     // 次のステートを付与
                     this.addState(nextStateId);
                     // ステート付与のメッセージを削除
                    this._result.addedStates = this._result.addedStates.filter(function(elm) {
                        return elm !== nextStateId;
                    });
                }
            } else if(hzRemoveStateType === 'auto') {
                // ターン数/歩数/ダメージで自動解除（ステート付与メッセージのみ表示）
                var nextState  = $dataStates[stateId].meta.hzExState_auto;
                if(nextState !== undefined) {
                    // ステート解除のメッセージを削除
                    this._result.removedStates = this._result.removedStates.filter(function(elm) {
                        return elm !== stateId;
                    });
                    var nextStateId = Number(nextState);
                     // 次のステートを付与
                     this.addState(nextStateId);
                }
            }
        }
    };
    
    // ステート初期化処理(Game_BattlerBase)
    var _Game_BattlerBase_clearStates = Game_BattlerBase.prototype.clearStates;
    Game_BattlerBase.prototype.clearStates = function() {
        if(hzRemoveStateType !== 'recoverAll' && hzRemoveStateType !== 'die') {
            _Game_BattlerBase_clearStates.call(this);
        } else {
            // 全回復・戦闘不能時に、<hzExState_remain>が指定されたステートを解除しない。
            this._states = this._states.filter(function(id) {
                return $dataStates[id].meta.hzExState_remain;
            });
            var tmpStateTurns = {};
            for(var i=0;i<this._states.length;i++) {
                tmpStateTurns[this._states[i]] = this._stateTurns[this._states[i]];
            }
            this._stateTurns = tmpStateTurns;
        }
    };
    
    // ステート初期化処理(Game_Actor)
    var _Game_Actor_clearStates = Game_Actor.prototype.clearStates;
    Game_Actor.prototype.clearStates = function() {
        Game_Battler.prototype.clearStates.call(this);
        if(hzRemoveStateType !== 'recoverAll') {
            this._stateSteps = {};
        } else {
            // 全回復・戦闘不能時に、<hzExState_remain>が指定されたステートを解除しない。（解除までの歩数も引き継ぐ）
            var tmpStateSteps = {};
            for(var i=0;i<this._states.length;i++) {
                tmpStateSteps[this._states[i]] = this._stateSteps[this._states[i]];
            }
            this._stateSteps = tmpStateSteps;
        }
    };
    
    // アイテム・スキルによるステート解除
    var _Game_Action_itemEffectRemoveState = Game_Action.prototype.itemEffectRemoveState;
    Game_Action.prototype.itemEffectRemoveState = function(target, effect) {
        // ステート解除タイプ：アイテム（スキル）
        hzRemoveStateType = 'item';
        // 処理実行
        _Game_Action_itemEffectRemoveState.call(this, target, effect);
        // ステート解除タイプ初期化
        hzRemoveStateType = '';
    };
    
    // ターン数によるステートの自動解除
    var _Game_Battler_removeStatesAuto = Game_Battler.prototype.removeStatesAuto;
    Game_Battler.prototype.removeStatesAuto = function(timing) {
        // ステート解除タイプ：自動解除
        hzRemoveStateType = 'auto';
        // 処理実行
        _Game_Battler_removeStatesAuto.call(this, timing);
        // ステート解除タイプ初期化
        hzRemoveStateType = '';
    };
    
    // ダメージによるステートの自動解除
    var _Game_Battler_removeStatesByDamage = Game_Battler.prototype.removeStatesByDamage;
    Game_Battler.prototype.removeStatesByDamage = function() {
        // ステート解除タイプ：自動解除
        hzRemoveStateType = 'auto';
        // 処理実行
        _Game_Battler_removeStatesByDamage.call(this);
        // ステート解除タイプ初期化
        hzRemoveStateType = '';
    };
    
    // 歩数によるステートの更新
    var _Game_Actor_updateStateSteps = Game_Actor.prototype.updateStateSteps;
    Game_Actor.prototype.updateStateSteps = function(state) {
        // ステート解除タイプ：自動解除
        hzRemoveStateType = 'auto';
        // 処理実行
        _Game_Actor_updateStateSteps.call(this, state);
        // ステート解除タイプ初期化
        hzRemoveStateType = '';
    };
    
    // 全回復
    var _Game_Interpreter_command314 = Game_Interpreter.prototype.command314;
    Game_Interpreter.prototype.command314 = function() {
        // ステート解除タイプ：全回復
        hzRemoveStateType = 'recoverAll';
        // 処理実行
        var result = _Game_Interpreter_command314.call(this);
        // ステート解除タイプ初期化
        hzRemoveStateType = '';
        return result;
    };
    
    // 敵キャラの全回復
    var _Game_Interpreter_command334 = Game_Interpreter.prototype.command334;
    Game_Interpreter.prototype.command334 = function() {
        // ステート解除タイプ：全回復
        hzRemoveStateType = 'recoverAll';
        // 処理実行
        var result = _Game_Interpreter_command334.call(this);
        // ステート解除タイプ初期化
        hzRemoveStateType = '';
        return result;
    };
    
    // 戦闘不能
    var _Game_BattlerBase_die = Game_BattlerBase.prototype.die;
    Game_BattlerBase.prototype.die = function() {
        // ステート解除タイプ：戦闘不能
        hzRemoveStateType = 'die';
        // 処理実行
        _Game_BattlerBase_die.call(this);
        // ステート解除タイプ初期化
        hzRemoveStateType = '';
    };
    
    // アイテム・スキル使用可否判定
    var _Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
    Game_Action.prototype.testItemEffect = function(target, effect) {
        // スタックステートの場合、既にステート付与済みでもステートの追加ができるように
        if(effect.code === Game_Action.EFFECT_ADD_STATE) {
            if(!target.isStateAffected(effect.dataId)) return true;
            if($dataStates[effect.dataId].meta.hzExState_stack !== undefined) {
                var stackParms = $dataStates[effect.dataId].meta.hzExState_stack.split(",");
                return effect.dataId === Number(stackParms[0]);
            }
        }
        return _Game_Action_testItemEffect.call(this, target, effect);
    };
})();