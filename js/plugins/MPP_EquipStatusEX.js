//=============================================================================
// MPP_EquipStatusEX.js
//=============================================================================
// Copyright (c) 2017 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.2.0】装備ステータスの拡張
 * @author 木星ペンギン
 *
 * @help 武器・防具のメモ:
 *   <mppEqSt:name1[,name2[,name3[,...]]]>   # 装備変更時に name が表示されます。
 * 
 * ================================
 * ▼ 武器・防具のメモの例
 *  <mppEqSt:炎半減,氷半減> と記述したアイテムを装備した場合、
 *  [炎半減]と[氷半減]が能力値上昇の色で表示されます。
 *  
 * ▼ ステータス (Status) について
 *  [通常ステータス]   : 装備スロット選択中に表示されるステータス
 *  [固定ステータス]   : 変更後のアイテムを選択中、常に表示されるステータス
 *  [装備品ステータス] : 変更後のアイテムを選択中、
 *                       装備品に含まれる場合に表示されるステータス
 *  [変動ステータス]   : 変更後のアイテムを選択中、
 *                       ステータスに変更がある場合に表示されるステータス
 *  
 *  設定する数値は以下の通りです。
 *  
 *    0:最大ＨＰ, 1:最大ＭＰ, 2:攻撃力, 3:防御力,
 *    4:魔法力,   5:魔法防御, 6:敏捷性, 7:運,
 *  
 *    8:命中率,      9:回避率,     10:会心率, 11:会心回避率,
 *   12:魔法回避率, 13:魔法反射率, 14:反撃率, 15:ＨＰ再生率,
 *   16:ＭＰ再生率, 17:ＴＰ再生率,
 *  
 *   18:狙われ率,   19:防御効果率,     20:回復効果率,   21:薬の知識,
 *   22:ＭＰ消費率, 23:ＴＰチャージ率, 24:物理ダメージ, 25:魔法ダメージ,
 *   26:床ダメージ, 27:経験獲得率
 * 
 * ▼ 特徴(Traits)について
 *  反転表示を true とした場合、表示される数値が (1 - 有効度)*100 となります。
 *  (例：有効度80%の場合は20、有効度30%の場合は70)
 *  これは[有効度]ではなく[耐性値]として表示するための機能です。
 *  
 *  表示タイプにて表示する条件を指定します。
 *   0 : 非表示
 *   1 : [固定ステータス]として表示
 *   2 : [装備品ステータス]として表示
 *   3 : [変動ステータス]として表示
 *   4 : [装備品ステータス]または[変動ステータス]として表示
 * 
 * ▼ プラグインパラメータの配列
 *  数値を配列で設定する際、
 *  n-m と表記することでnからmまでの数値を指定できます。
 *  (例 : 1-4,8,10-12 => 1,2,3,4,8,10,11,12)
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 *
 * @param Status Window Row
 * @type number
 * @min 1
 * @desc ステータスウィンドウの行数
 * @default 7
 * 
 * @param Gauge Height
 * @type number
 * @min 1
 * @desc ゲージの高さ
 * @default 8
 * 
 * @param Gauge Color
 * @desc 現在値のゲージの色
 * @default 232,255,255
 * 
 * @param === Gauge Max ===
 * 
 * @param param Gauge Max
 * @type struct<ParamGaugeMax>
 * @desc 通常能力値ゲージの最大値
 * @default {"mhp":"10000","mmp":"2000","atk":"200","def":"200","mat":"200","mdf":"200","agi":"400","luk":"400"}
 * @parent === Gauge Max ===
 * 
 * @param xparam Gauge Max
 * @type number
 * @min 1
 * @decimals 2
 * @desc 追加能力値ゲージの最大値
 * @default 3.00
 * @parent === Gauge Max ===
 * 
 * @param sparam Gauge Max
 * @type number
 * @min 1
 * @decimals 2
 * @desc 特殊能力値ゲージの最大値
 * @default 3.00
 * @parent === Gauge Max ===
 * 
 * @param rate Gauge Max
 * @type number
 * @min 1
 * @decimals 2
 * @desc 有効度ゲージの最大値
 * @default 3.00
 * @parent === Gauge Max ===
 * 
 * @param === Status ===
 * 
 * @param Default Status
 * @desc 通常ステータスの配列
 * @default 2-7
 * @parent === Status ===
 * 
 * @param Fixing Status
 * @desc 固定ステータスの配列
 * @default 
 * @parent === Status ===
 * 
 * @param Item Status
 * @desc 装備品ステータスの配列
 * @default 0-27
 * @parent === Status ===
 * 
 * @param Flow Status
 * @desc 変動ステータスの配列
 * @default 0-27
 * @parent === Status ===
 * 
 * @param === Traits ===
 * 
 * @param Draw Elements
 * @desc 表示する属性IDの配列
 * @default 1-9
 * @parent === Traits ===
 * 
 * @param Element Rate Reverse?
 * @type boolean
 * @desc 属性有効度の反転表示
 * @default true
 * @parent === Traits ===
 * 
 * @param Element Rate Type
 * @type number
 * @max 4
 * @desc 属性有効度の表示タイプ
 * (0:非表示, 1:固定, 2:装備, 3:変動, 4:装備or変動)
 * @default 4
 * @parent === Traits ===
 * 
 * @param Debuff Rate Reverse?
 * @type boolean
 * @desc 弱体有効度の反転表示
 * @default true
 * @parent === Traits ===
 * 
 * @param Debuff Rate Type
 * @type number
 * @max 4
 * @desc 弱体有効度の表示タイプ
 * (0:非表示, 1:固定, 2:装備, 3:変動, 4:装備or変動)
 * @default 4
 * @parent === Traits ===
 * 
 * @param Draw States
 * @desc 表示するステートIDの配列
 * (有効度と無効化共通)
 * @default 1-10
 * @parent === Traits ===
 * 
 * @param State Rate Reverse?
 * @type boolean
 * @desc ステート有効度の反転表示
 * @default true
 * @parent === Traits ===
 * 
 * @param State Rate Type
 * @type number
 * @max 4
 * @desc ステート有効度の表示タイプ
 * (0:非表示, 1:固定, 2:装備, 3:変動, 4:装備or変動)
 * @default 4
 * @parent === Traits ===
 * 
 * @param State Resist Type
 * @type number
 * @max 4
 * @desc ステート無効化の表示タイプ
 * (0:非表示, 1:固定, 2:装備, 3:変動, 4:装備or変動)
 * @default 3
 * @parent === Traits ===
 * 
 * @param Equip Feature Type
 * @type number
 * @max 4
 * @desc メモ欄で追加したステートの表示タイプ
 * (0:非表示, 1:固定, 2:装備, 3:変動, 4:装備or変動)
 * @default 3
 * @parent === Traits ===
 * 
 * @param === Terms ===
 * 
 * @param xparams
 * @type struct<xparams>
 * @desc 用語[追加能力値]
 * @default {"hit":"命中率","eva":"回避率","cri":"会心率","cev":"会心回避率","mev":"魔法回避率","mrf":"魔法反射率","cnt":"反撃率","hrg":"ＨＰ再生率","mrg":"ＭＰ再生率","trg":"ＴＰ再生率"}
 * @parent === Terms ===
 * 
 * @param sparams
 * @type struct<sparams>
 * @desc 用語[特殊能力値]
 * @default {"tgr":"狙われ率","grd":"防御効果率","rev":"回復効果率","pha":"薬の知識","mcr":"ＭＰ消費率","tcr":"ＴＰチャージ率","pdr":"物理ダメージ率","mdr":"魔法ダメージ率","fdr":"床ダメージ率","exr":"経験獲得率"}
 * @parent === Terms ===
 * 
 * @param Element Rate
 * @desc 用語[属性有効度]
 * (%1が属性名となります)
 * @default %1耐性
 * @parent === Terms ===
 * 
 * @param Debuff Rate
 * @desc 用語[弱体有効度]
 * (%1が能力値名となります)
 * @default %1ダウン耐性
 * @parent === Terms ===
 * 
 * @param State Rate
 * @desc 用語[ステート有効度]
 * (%1がステート名となります)
 * @default %1耐性
 * @parent === Terms ===
 * 
 * @param State Resist
 * @desc 用語[ステート無効化]
 * (%1がステート名となります)
 * @default %1無効化
 * @parent === Terms ===
 * 
 * 
 */

/*~struct~ParamGaugeMax:
 * @param mhp
 * @type number
 * @desc 最大ＨＰ
 * @default 10000
 *
 * @param mmp
 * @type number
 * @desc 最大ＭＰ
 * @default 2000
 * 
 * @param atk
 * @type number
 * @desc 攻撃力
 * @default 200
 * 
 * @param def
 * @type number
 * @desc 防御力
 * @default 200
 * 
 * @param mat
 * @type number
 * @desc 魔法力
 * @default 200
 * 
 * @param mdf
 * @type number
 * @desc 魔法防御
 * @default 200
 *
 * @param agi
 * @type number
 * @desc 敏捷性
 * @default 400
 * 
 * @param luk
 * @type number
 * @desc 運
 * @default 400
 *
 */

/*~struct~xparams:
 * @param hit
 * @desc 命中率
 * @default 命中率
 *
 * @param eva
 * @desc 回避率
 * @default 回避率
 * 
 * @param cri
 * @desc 会心率
 * @default 会心率
 * 
 * @param cev
 * @desc 会心回避率
 * @default 会心回避率
 * 
 * @param mev
 * @desc 魔法回避率
 * @default 魔法回避率
 * 
 * @param mrf
 * @desc 魔法反射率
 * @default 魔法反射率
 *
 * @param cnt
 * @desc 反撃率
 * @default 反撃率
 * 
 * @param hrg
 * @desc ＨＰ再生率
 * @default ＨＰ再生率
 *
 * @param mrg
 * @desc ＭＰ再生率
 * @default ＭＰ再生率
 *
 * @param trg
 * @desc ＴＰ再生率
 * @default ＴＰ再生率
 *
 */

/*~struct~sparams:
 * @param tgr
 * @desc 狙われ率
 * @default 狙われ率
 *
 * @param grd
 * @desc 防御効果率
 * @default 防御効果率
 * 
 * @param rev
 * @desc 回復効果率
 * @default 回復効果率
 * 
 * @param pha
 * @desc 薬の知識
 * @default 薬の知識
 * 
 * @param mcr
 * @desc ＭＰ消費率
 * @default ＭＰ消費率
 * 
 * @param tcr
 * @desc ＴＰチャージ率
 * @default ＴＰチャージ率
 * 
 * @param pdr
 * @desc 物理ダメージ率
 * @default 物理ダメージ率
 *
 * @param mdr
 * @desc 魔法ダメージ率
 * @default 魔法ダメージ率
 * 
 * @param fdr
 * @desc 床ダメージ率
 * @default 床ダメージ率
 *
 * @param exr
 * @desc 経験獲得率
 * @default 経験獲得率
 *
 */

(function() {

var MPPlugin = {};

(function() {
    
    var parameters = PluginManager.parameters('MPP_EquipStatusEX');
    var keys = Object.keys(parameters);
    for (var i = 0; i < keys.length; i++) {
        try {
            parameters[keys[i]] = JSON.parse(parameters[keys[i]]);
        } catch (e) {
            
        }
    }

    function convertParam(name) {
        var param = parameters[name];
        var result = [];
        if (param) {
            var data = param.split(',');
            for (var i = 0; i < data.length; i++) {
                if (/(\d+)\s*-\s*(\d+)/.test(data[i])) {
                    for (var n = Number(RegExp.$1); n <= Number(RegExp.$2); n++) {
                        result.push(n);
                    }
                } else {
                    result.push(Number(data[i]));
                }
            }
        }
        return result;
    };

    MPPlugin.statusWindowRow = Number(parameters['Status Window Row'] || 7);
    MPPlugin.gaugeHeight = Number(parameters['Gauge Height'] || 8);
    MPPlugin.GaugeColor = 'rgb(%1)'.format(parameters['Gauge Color'] || '224,255,255');

    // Gauge Max
    var param = parameters['param Gauge Max'];
    MPPlugin.paramGaugeMax = [];
    MPPlugin.paramGaugeMax[0] = Number(param.mhp);
    MPPlugin.paramGaugeMax[1] = Number(param.mmp);
    MPPlugin.paramGaugeMax[2] = Number(param.atk);
    MPPlugin.paramGaugeMax[3] = Number(param.def);
    MPPlugin.paramGaugeMax[4] = Number(param.mat);
    MPPlugin.paramGaugeMax[5] = Number(param.mdf);
    MPPlugin.paramGaugeMax[6] = Number(param.agi);
    MPPlugin.paramGaugeMax[7] = Number(param.luk);
    MPPlugin.xparamGaugeMax = Number(parameters['xparam Gauge Max'] || 3.0);
    MPPlugin.sparamGaugeMax = Number(parameters['sparam Gauge Max'] || 3.0);
    MPPlugin.rateGaugeMax = Number(parameters['rate Gauge Max'] || 3.0);

    // Status
    MPPlugin.defaultStatus = convertParam('Default Status');
    MPPlugin.fixingStatus = convertParam('Fixing Status');
    MPPlugin.itemStatus = convertParam('Item Status');
    MPPlugin.flowStatus = convertParam('Flow Status');

    // Traits
    MPPlugin.drawElements = convertParam('Draw Elements');
    MPPlugin.elementRateReverse = !!eval(parameters['Element Rate Reverse?']);
    MPPlugin.elementRateType = Number(parameters['Element Rate Type'] || 3);
    MPPlugin.debuffRateReverse = !!eval(parameters['Debuff Rate Reverse?']);
    MPPlugin.debuffRateType = Number(parameters['Debuff Rate Type'] || 3);
    MPPlugin.drawStates = convertParam('Draw States');
    MPPlugin.stateRateReverse = !!eval(parameters['State Rate Reverse?']);
    MPPlugin.stateRateType = Number(parameters['State Rate Type'] || 3);
    MPPlugin.stateResistType = Number(parameters['State Resist Type'] || 2);
    MPPlugin.equipFeatureType = Number(parameters['Equip Feature Type'] || 2);

    // Terms
    MPPlugin.terms = {};
    param = parameters['xparams'];
    MPPlugin.terms[8]  = param.hit;
    MPPlugin.terms[9]  = param.eva;
    MPPlugin.terms[10] = param.cri;
    MPPlugin.terms[11] = param.cev;
    MPPlugin.terms[12] = param.mev;
    MPPlugin.terms[13] = param.mrf;
    MPPlugin.terms[14] = param.cnt;
    MPPlugin.terms[15] = param.hrg;
    MPPlugin.terms[16] = param.mrg;
    MPPlugin.terms[17] = param.trg;
    param = parameters['sparams'];
    MPPlugin.terms[18] = param.tgr;
    MPPlugin.terms[19] = param.grd;
    MPPlugin.terms[20] = param.rec;
    MPPlugin.terms[21] = param.pha;
    MPPlugin.terms[22] = param.mcr;
    MPPlugin.terms[23] = param.tcr;
    MPPlugin.terms[24] = param.pdr;
    MPPlugin.terms[25] = param.mdr;
    MPPlugin.terms[26] = param.fdr;
    MPPlugin.terms[27] = param.exr;
    MPPlugin.terms.elementRate = parameters['Element Rate'] || '';
    MPPlugin.terms.debuffRate = parameters['Debuff Rate'] || '';
    MPPlugin.terms.stateRate = parameters['State Rate'] || '';
    MPPlugin.terms.stateResist = parameters['State Resist'] || '';

})();

var Alias = {};

//-----------------------------------------------------------------------------
// Game_BattlerBase

Game_BattlerBase.prototype.allMetadata = function(name) {
    return this.traitObjects().map(function(obj) {
        return obj.meta[name];
    }).filter(Boolean);
};

Game_BattlerBase.prototype.allEquipFeatures = function() {
    var features = [];
    var data = this.allMetadata('mppEqSt');
    for (var n = 0; n < data.length; n++) {
        var names = data[n].split(',');
        for (var m = 0; m < names.length; m++) {
            if (!features.contains(names[m])) features.push(names[m]);
        }
    }
    return features;
};

//-----------------------------------------------------------------------------
// Window_EquipItem

//57
Alias.WiEqIt_updateHelp = Window_EquipItem.prototype.updateHelp;
Window_EquipItem.prototype.updateHelp = function() {
    if (this._actor && this._statusWindow) {
        this._statusWindow.setNewItem(this.item());
    }
    Alias.WiEqIt_updateHelp.call(this);
};

//-----------------------------------------------------------------------------
// Window_EquipStatus

//30
Window_EquipStatus.prototype.numVisibleRows = function() {
    return MPPlugin.statusWindowRow;
};

Window_EquipStatus.prototype.setNewItem = function(item) {
    this._item = item;
};

if (Window_EquipStatus.prototype.hasOwnProperty('update')) {
    Alias.WiEqSt_update = Window_EquipStatus.prototype.update
}
Window_EquipStatus.prototype.update = function() {
    if (this._gaugeCount > 0) this._gaugeCount--;
    if (Alias.WiEqSt_update) {
        Alias.WiEqSt_update.call(this);
    } else {
        Window_Base.prototype.update.call(this);
    }
};

//41
Window_EquipStatus.prototype.refresh = function() {
    this.clearUpdateDrawer();
    this.contents.clear();
    if (this._actor) {
        this._gaugeCount = 24;
        this.drawActorName(this._actor, this.textPadding(), 0);
        var height = this.lineHeight();
        var maxRow = Math.floor((this.contentsHeight() - height) / height);
        this.drawParameters(0, height, maxRow);
    }
};

Window_EquipStatus.prototype.drawParameters = function(x, y, maxRow) {
    var actor = this._actor;
    var tempActor = this._tempActor;
    var height = this.lineHeight();
    var row = 0;
    if (tempActor) {
        var status = this.getFixingStatus().clone();
        var idList = this.getItemStatus();
        for (var i = 0; i < idList.length; i++) {
            var id = idList[i];
            if (!status.contains(id) && this.includeParam(id)) status.push(id);
        }
        idList = this.getFlowStatus();
        for (var i = 0; i < idList.length; i++) {
            var id = idList[i];
            if (!status.contains(id) &&
                this.getActorParam(actor, id) !== this.getActorParam(tempActor, id))
                    status.push(id);
        }
        status.sort(function(a, b) { return a - b; });
        for (var i = 0; i < status.length; i++) {
            this.drawItem(x, y + row * height, 'param', status[i]);
            if (row++ === maxRow - 1) return;
        }
        function include(obj, id, method) {
            if (type === 1) return true;
            if (type === 2) return obj.includeTrait(code, id);
            if (type === 3)
                return actor[method](id) !== tempActor[method](id);
            if (type === 4)
                return obj.includeTrait(code, id) ||
                    actor[method](id) !== tempActor[method](id);
            return false;
        }
        var type = this.getElementRateType();
        if (MPPlugin.terms.elementRate && type > 0) {
            var code = Game_BattlerBase.TRAIT_ELEMENT_RATE;
            idList = MPPlugin.drawElements;
            for (var i = 0; i < idList.length; i++) {
                if (include(this, idList[i], 'elementRate')) {
                    this.drawItem(x, y + row * height, 'elementRate', idList[i]);
                    if (row++ === maxRow - 1) return;
                }
            }
        }
        type = this.getDebuffRateType();
        if (MPPlugin.terms.debuffRate && type > 0) {
            var code = Game_BattlerBase.TRAIT_DEBUFF_RATE;
            idList = [0,1,2,3,4,5,6,7];
            for (var i = 0; i < idList.length; i++) {
                if (include(this, idList[i], 'debuffRate')) {
                    this.drawItem(x, y + row * height, 'debuffRate', idList[i]);
                    if (row++ === maxRow - 1) return;
                }
            }
        }
        type = this.getStateRateType();
        if (MPPlugin.terms.stateRate && type > 0) {
            var code = Game_BattlerBase.TRAIT_STATE_RATE;
            idList = MPPlugin.drawStates;
            for (var i = 0; i < idList.length; i++) {
                if (include(this, idList[i], 'stateRate')) {
                    this.drawItem(x, y + row * height, 'stateRate', idList[i]);
                    if (row++ === maxRow - 1) return;
                }
            }
        }
        type = this.getStateResistType();
        if (MPPlugin.terms.stateResist && type > 0) {
            var code = Game_BattlerBase.TRAIT_STATE_RESIST;
            idList = MPPlugin.drawStates;
            for (var i = 0; i < idList.length; i++) {
                if (include(this, idList[i], 'isStateResist')) {
                    this.drawItem(x, y + row * height, 'stateResist', idList[i]);
                    if (row++ === maxRow - 1) return;
                }
            }
        }
        type = this.getEquipFeatureType();
        if (type > 0) {
            var features = [];
            if (type === 2 || type === 4) {
                if (this._item && this._item.meta.mppEqSt) {
                    features = this._item.meta.mppEqSt.split(',');
                }
            }
            if (type === 3 || type === 4) {
                var curFeatures = actor.allEquipFeatures();
                var newFeatures = tempActor.allEquipFeatures();
                for (var i = 0; i < curFeatures.length; i++) {
                    var f = curFeatures[i];
                    if (!features.contains(f) && !newFeatures.contains(f))
                        features.push(f);
                }
                for (var i = 0; i < newFeatures.length; i++) {
                    var f = newFeatures[i];
                    if (!features.contains(f) && !curFeatures.contains(f))
                        features.push(f);
                }
            }
            for (var i = 0; i < features.length; i++) {
                this.drawItem(x, y + row * height, 'features', features[i]);
                if (row++ === maxRow - 1) return;
            }
        }
    } else {
        var status = MPPlugin.defaultStatus;
        for (var i = 0; i < status.length; i++) {
            this.drawItem(x, y + row * height, 'param', status[i]);
            if (row++ === maxRow - 1) return;
        }
    }
};

//58
Window_EquipStatus.prototype.drawItem = function(x, y, status, value, drawer) {
    switch (status) {
        case 'param':
            this.drawParam(x, y, value);
            break;
        case 'elementRate':
            this.drawElement(x, y, value);
            break;
        case 'debuffRate':
            this.drawDebuff(x, y, value);
            break;
        case 'stateRate':
            this.drawState(x, y, value);
            break;
        case 'stateResist':
            this.drawResist(x, y, value);
            break;
        case 'features':
            this.drawFeature(x, y, value);
            break;
    }
    
    if (this._tempActor && status !== 'features' && drawer !== false) {
        var process = this.itemDrawer.bind(this, this._actor, this._tempActor,
                                            x, y, status, value);
        this.addUpdateDrawer(process);
    }
};

Window_EquipStatus.prototype.itemDrawer = function(actor, tempActor, x, y, status, value) {
    var count = this._gaugeCount;
    if (count <= 16 || count % 2 === 0) {
        this.contents.clearRect(x, y, 273, this.lineHeight());
        this._actor = actor;
        this._tempActor = tempActor;
        this.drawItem(x, y, status, value, false);
    }
    return count > 0;
};

Window_EquipStatus.prototype.getFixingStatus = function() {
    return MPPlugin.fixingStatus;
};
Window_EquipStatus.prototype.getItemStatus = function() {
    return MPPlugin.itemStatus;
};
Window_EquipStatus.prototype.getFlowStatus = function() {
    return MPPlugin.flowStatus;
};
Window_EquipStatus.prototype.getElementRateType = function() {
    return MPPlugin.elementRateType;
};
Window_EquipStatus.prototype.getDebuffRateType = function() {
    return MPPlugin.debuffRateType;
};
Window_EquipStatus.prototype.getStateRateType = function() {
    return MPPlugin.stateRateType;
};
Window_EquipStatus.prototype.getStateResistType = function() {
    return MPPlugin.stateResistType;
};
Window_EquipStatus.prototype.getEquipFeatureType = function() {
    return MPPlugin.equipFeatureType;
};

Window_EquipStatus.prototype.drawParamGauge = function(x, y, width, curValue, newValue, max, down) {
    var count = Math.min(this._gaugeCount, 18);
    var curWidth = width * curValue / max;
    var value = curValue + (newValue - curValue) * Math.sqrt(18 - count) / Math.sqrt(18);
    var newWidth = width * value / max;
    var gh = MPPlugin.gaugeHeight;
    var gy = y + this.lineHeight() - 3 - gh / 2;
    var newX, sx, sw;
    
    if (curWidth >= 0) {
        if (curWidth <= newWidth) {
            newX = Math.max(curWidth - gh, x);
            sx = x;
            sw = newWidth;
        } else if (newWidth >= 0) {
            newX = Math.max(x + newWidth - gh, x);
            sx = x;
            sw = curWidth;
            curWidth = newWidth;
            newWidth = sw;
        } else {
            newX = x + newWidth;
            newWidth = curWidth - newWidth;
            curWidth = 0;
            sx = newX;
            sw = newWidth;
        }
    } else {
        if (curWidth >= newWidth) {
            newX = Math.min(curWidth + gh, x);
            sx = x;
            sw = newWidth;
        } else if (newWidth <= 0) {
            newX = Math.min(x + newWidth + gh, x);
            sx = x;
            sw = curWidth;
            curWidth = newWidth;
            newWidth = sw;
        } else {
            newX = x + newWidth;
            newWidth = curWidth - newWidth;
            curWidth = 0;
            sx = newX;
            sw = newWidth;
        }
    }
    
    this.drawArcShadow(sx, gy, sw);
    if (curValue !== value) {
        var color = this.paramchangeTextColor((newValue - curValue) * (down ? -1 : 1));
        this.drawArcLine(newX, gy, newWidth - newX + x, color);
    }
    this.drawArcLine(x, gy, curWidth, MPPlugin.GaugeColor);
};

Window_EquipStatus.prototype.drawArcLine = function(x, y, width, color) {
    var minX = Math.min(x, x + width);
    var maxX = Math.max(x, x + width);
    var h = MPPlugin.gaugeHeight;
    var context = this.contents.context;
    context.save();
    
    var gradient = context.createLinearGradient(x, y, x, y + h * 2);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'black');
    
    if (maxX - minX < h) {
        var r = h / 2;
        var angle = Math.acos((r - (maxX - minX)/2) / r);
        context.beginPath();
        context.arc(minX + r, y, r, Math.PI-angle, Math.PI+angle);
        context.arc(maxX - r, y, r, -angle, angle);
        context.fillStyle = gradient;
        context.fill();
    } else {
        context.lineWidth = h;
        context.lineCap = 'round';
        
        context.beginPath();
        context.moveTo(minX + h / 2, y);
        context.lineTo(maxX - h / 2, y);
        context.strokeStyle = gradient;
        context.stroke();
    }
    
    context.restore();
};

Window_EquipStatus.prototype.drawArcShadow = function(x, y, width) {
    var context = this.contents.context;
    context.shadowColor = 'black';
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 1;
    this.drawArcLine(x, y, width, 'black');
    context.shadowColor = 'transparent';
};

Window_EquipStatus.prototype.drawParam = function(x, y, paramId) {
    var curValue = this.getActorParam(this._actor, paramId);
    var newValue = this._tempActor ? this.getActorParam(this._tempActor, paramId) : curValue;
    var max = this.getParamMax(paramId);
    this.drawParamGauge(x + 140, y, 130, curValue, newValue, max);
    this.drawParamName(x + this.textPadding(), y, paramId);
    if (this._actor) {
        this.drawCurrentParam(x + 140, y, paramId);
    }
    if (this._tempActor) {
        this.drawRightArrow(x + 188, y);
        this.drawNewParam(x + 222, y, paramId);
    }
};

//69
Alias.WiEqSt_drawParamName = Window_EquipStatus.prototype.drawParamName;
Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
    if (paramId < 8) {
        Alias.WiEqSt_drawParamName.call(this, x, y, paramId);
    } else {
        this.changeTextColor(this.systemColor());
        this.drawText(MPPlugin.terms[paramId], x, y, 120);
    }
};

//74
Alias.WiEqSt_drawCurrentParam = Window_EquipStatus.prototype.drawCurrentParam;
Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    if (paramId < 8) {
        Alias.WiEqSt_drawCurrentParam.call(this, x, y, paramId);
    } else {
        this.resetTextColor();
        var param = Math.round(this.getActorParam(this._actor, paramId) * 100);
        this.drawText(param, x, y, 48, 'right');
    }
};

//84
Alias.WiEqSt_drawNewParam = Window_EquipStatus.prototype.drawNewParam;
Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    if (paramId < 8) {
        Alias.WiEqSt_drawNewParam.call(this, x, y, paramId);
    } else {
        var newValue = this.getActorParam(this._tempActor, paramId);
        var diffvalue = newValue - this.getActorParam(this._actor, paramId);
        this.changeTextColor(this.paramchangeTextColor(diffvalue));
        this.drawText(Math.round(newValue * 100), x, y, 48, 'right');
    }
};

Window_EquipStatus.prototype.includeParam = function(paramId) {
    if (paramId < 8) {
        //if (this._curItem && this._curItem.params[paramId] !== 0) return true;
        if (this._item && this._item.params[paramId] !== 0) return true;
        return this.includeTrait(Game_BattlerBase.TRAIT_PARAM, paramId);
    } else if (paramId < 18) {
        return this.includeTrait(Game_BattlerBase.TRAIT_XPARAM, paramId - 8);
    } else {
        return this.includeTrait(Game_BattlerBase.TRAIT_SPARAM, paramId - 18);
    }
};

Window_EquipStatus.prototype.includeTrait = function(code, id) {
    var include = function(trait) {
        return trait.code === code && trait.dataId === id;
    };
    //if (this._curItem && this._curItem.traits.some(include)) return true;
    if (this._item && this._item.traits.some(include)) return true;
    return false;
};

Window_EquipStatus.prototype.getActorParam = function(actor, paramId) {
    if (paramId < 8) {
        return actor.param(paramId);
    } else if (paramId < 18) {
        return actor.xparam(paramId - 8);
    } else {
        return actor.sparam(paramId - 18);
    }
};

Window_EquipStatus.prototype.getParamMax = function(paramId) {
    if (paramId < 8) {
        return MPPlugin.paramGaugeMax[paramId];
    } else if (paramId < 18) {
        return MPPlugin.xparamGaugeMax;
    } else {
        return MPPlugin.sparamGaugeMax;
    }
};

Window_EquipStatus.prototype.drawElement = function(x, y, id) {
    var name = MPPlugin.terms.elementRate.format($dataSystem.elements[id]);
    var curValue = this._actor.elementRate(id);
    var newValue = this._tempActor.elementRate(id);
    var reverse = MPPlugin.elementRateReverse;
    this.drawRate(x, y, name, curValue, newValue, reverse);
};

Window_EquipStatus.prototype.drawDebuff = function(x, y, id) {
    var name = MPPlugin.terms.debuffRate.format(TextManager.param(id));
    var curValue = this._actor.debuffRate(id);
    var newValue = this._tempActor.debuffRate(id);
    var reverse = MPPlugin.debuffRateReverse;
    this.drawRate(x, y, name, curValue, newValue, reverse);
};

Window_EquipStatus.prototype.drawState = function(x, y, id) {
    var name = MPPlugin.terms.stateRate.format($dataStates[id].name);
    var curValue = this._actor.stateRate(id);
    var newValue = this._tempActor.stateRate(id);
    var reverse = MPPlugin.stateRateReverse;
    this.drawRate(x, y, name, curValue, newValue, reverse);
};

Window_EquipStatus.prototype.drawRate = function(x, y, name, curValue, newValue, reverse) {
    this.changeTextColor(this.systemColor());
    this.drawText(name, x + this.textPadding(), y, 120);
    var curValue2 = reverse ? 1 - curValue : curValue;
    var newValue2 = reverse ? 1 - newValue : newValue;
    var max = MPPlugin.rateGaugeMax;
    this.drawParamGauge(x + 140, y, 130, curValue2, newValue2, max, !reverse);
    this.resetTextColor();
    this.drawText(Math.round(curValue2 * 100), x + 140, y, 48, 'right');
    this.drawRightArrow(x + 188, y);
    this.changeTextColor(this.paramchangeTextColor(curValue - newValue));
    this.drawText(Math.round(newValue2 * 100), x + 222, y, 48, 'right');
};

Window_EquipStatus.prototype.drawResist = function(x, y, id) {
    var name = MPPlugin.terms.stateResist.format($dataStates[id].name);
    var curFlag = this._actor.isStateResist(id);
    var newFlag = this._tempActor.isStateResist(id);
    this.drawTrait(x + 96, y, name, curFlag, newFlag);
};

Window_EquipStatus.prototype.drawFeature = function(x, y, feature) {
    var curFlag = this._actor.allEquipFeatures().contains(feature);
    var newFlag = this._tempActor.allEquipFeatures().contains(feature);
    this.drawTrait(x + 96, y, feature, curFlag, newFlag);
};

Window_EquipStatus.prototype.drawTrait = function(x, y, name, curFlag, newFlag) {
    var diffvalue = !curFlag ? 1 : !newFlag ? -1 : 0;
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    name = !curFlag ? '+' + name : !newFlag ? '-' + name : name;
    this.drawText(name, x, y, 174);
};




})();

//=============================================================================
// UpdateDrawer
//=============================================================================

(function() {

if (!Window_Base.Mpp_UpdateDrawer || Window_Base.Mpp_UpdateDrawer < 1.0) {
Window_Base.Mpp_UpdateDrawer = 1.0;

var Alias = {};

//-----------------------------------------------------------------------------
// Window_Base

//13
Alias.WiBa_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
    Alias.WiBa_initialize.call(this, x, y, width, height);
    this._updateDrawers = [];
};

//105
Alias.WiBa_update = Window_Base.prototype.update;
Window_Base.prototype.update = function() {
    Alias.WiBa_update.call(this);
    this.updateDrawer();
};

Window_Base.prototype.updateDrawer = function() {
    if (this.isOpen() && this.visible && this._updateDrawers.length > 0) {
        this._updateDrawers = this._updateDrawers.filter(function(process) {
            return process();
        });
    }
};

Window_Base.prototype.addUpdateDrawer = function(process) {
    this._updateDrawers.push(process);
};

Window_Base.prototype.clearUpdateDrawer = function() {
    this._updateDrawers = [];
};

} //if (!Window_Base.MPP_UpdateDrawer || Window_Base.MPP_UpdateDrawer < 1.0)


})();
