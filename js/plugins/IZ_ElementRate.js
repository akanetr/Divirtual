//=============================================================================
// IZ_ElementRate.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017 IZ
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 0.1.0β 2017/10/12
//=============================================================================

/*:
 * @plugindesc データベースの属性有効度関係の挙動を変更します。
 * また、特定の属性の攻撃を吸収するステートや装備などが作れるようになります。
 * @author いず
 *
 *
 * @param absorptionNumber
 * @desc 属性有効度をabsorptionNumberの値に設定すると、
 * その属性の攻撃を吸収する。
 * @default 1000
 * @type number
 * @min 0
 * @max 1000
 *
 * @param noEffectNumber
 * @desc 属性有効度をnoEffectNumberの値に設定すると、
 * その属性の攻撃を完全にガード（0ダメージに）する。
 * @default 0
 * @type number
 * @min 0
 * @max 1000
 *
 * @param neutralizationNumber
 * @desc 属性有効度をneutralizationNumberの値に設定すると、
 * 属性吸収・無効化・その他の属性有効度の設定を無効化する。
 * @default 1
 * @type number
 * @min 0
 * @max 1000
 *
 * @param recGuard
 * @desc 属性が付属された回復呪文を受けたとき、もしくは相手の攻撃を吸収するときに
 * 防御の効果を適用するか
 * @default false
 * @type boolean
 *
 * @help データベースの属性有効度関係の挙動を変更します。
 * また、特定の属性の攻撃を吸収する設定を作ったり、それらを含めた
 * 属性有効度の設定をすべて無効化する（属性有効度を100%に上書きする）
 * 設定を作ることができます。
 *
 * ■使い方
 * １．プラグインパラメータ、
 * 　　absorptionNumber（属性吸収設定用変数）、noEffectNumber（属性無効化用変数）、
 * 　　neutralizationNumber（属性有効度設定無効化用）を設定します。
 * 　　これら3つの変数は、それぞれ異なる値に設定してください。
 *
 * ２．いつもどおり、データベースで属性有効度の設定をします。
 * 　　このとき、属性有効度の挙動は以下のようになります。
 * 
 * Ⅰ．属性有効度設定を複数重ねがけすると、効果は
 * 　　「全設定を掛け算した値」ではなく、「全設定を足し算した値」になります。
 * 　　このとき、変化量は次のようになります。
 *
 * 　　 100%               → 属性有効度に影響なし
 * 　　(100+a)%            → +a%
 * 　　(100-a)%            → -a% （ダメージ最小値 = 0）
 *
 * 　　例；炎属性有効度90(=100-10)%の盾＋炎属性有効度80(100-20)%の服
 * 　　　　→炎属性有効度70(=100-10-20)%
 *
 * Ⅱ．ある属性について、次の設定が一つでもあった場合、属性有効度は特定の値になります。
 *
 * 　　属性無効化　　　　　；(noEffectNumber)%   → 0%
 * 　　属性吸収　　　　　　；(absorptionNumber)% → 有効度100%のときのダメージを吸収
 *     属性有効度設定無効化；(neutralizeNumber)% → 100%
 *
 * 　　※優先順位は、属性有効度設定無効化＞属性吸収＞属性無効化＞その他　です。
 * 　　　例１；炎属性有効度(neutralizeNumber)%の腕輪＋炎属性200%の服＋炎属性吸収の盾
 * 　　　　　　→炎属性有効度100%
 * 　　　例２；炎属性有効度(absorptionNumber)%の盾＋炎属性有効度(noEffectNumber)%の服
 * 　　　　　　→炎属性吸収。
 * 　　　例３；炎属性有効度(noEffectNumber)%の盾＋炎属性有効度300%（被炎ダメージ+200）の服
 * 　　　　　　→炎属性無効化
 * 　　　
 *
 *
 *
 */

(function () {

    'use strict'
    var pluginName = 'IZ_ElementRate';

    //■プラグインパラメータ
    var parameters = PluginManager.parameters('IZ_ElementRate');
    var absorptionNumber = Number(parameters['absorptionNumber']) || 1000;
    var noEffectNumver = Number(parameters['noEffectNumber']) || 0;
    var neutralizationNumber = Number(parameters['neutralizationNumber']) || 1;
    var recGuard = Boolean(parameters['recGuard'] === 'true');


    /////////////////////////////////////////////////////////
    //■Game_Action
    /////////////////////////////////////////////////////////

   
    //====================================
    //ダメージに属性効果・会心・防御を適用
    //■MakeDamageBalue
    //====================================
    var Game_Action_makeDamageValue = Game_Action.prototype.makeDamageValue;
    Game_Action.prototype.makeDamageValue = function (target, critical) {
        var item = this.item();
        var baseValue = this.evalDamageFormula(target);

        //ローカル変数
        var value;      //ダメージ計算値
        var canAbsorb;  //吸収できるか(bool)

        //属性有効度の挙動を変更
        if (this.calcElementRate(target) < 0 ) {    //有効度がabsorptionNumberのとき吸収
            value = -baseValue;
            baseValue = -baseValue;
            canAbsorb = true;
        } else if (this.calcElementRate(target) == 0) {  //有効度が0のとき無効
            value = 0;
            baseValue = 0;
            canAbsorb = false;
        } else {                                    //その他の場合は通常計算
            value = baseValue * this.calcElementRate(target);
            canAbsorb = false;
        }

        //各種倍率の適用
        if (this.isPhysical() && (canAbsorb == false)) {
            value *= target.pdr;
        }
        if (this.isMagical() && (canAbsorb == false)) {
            value *= target.mdr;
        }
        if (baseValue < 0) {
            value *= target.rec;
        }
        if (critical) {
            value = this.applyCritical(value);
        }
        value = this.applyVariance(value, item.damage.variance);

        //回復・吸収時の挙動の変更
        if (value >= 0) {
            value = this.applyGuard(value, target);
        } else if (recGuard) {
            value = this.recGuard(value, target);
        }

        //整数値に丸める
        value = Math.round(value);

        return value;
    };


    

    
    //=======================
    //防御で回復を軽減
    //■RecoveryGuard ←new!
    //=======================
    Game_Action.prototype.recGuard = function(damage, target){
        if(target.isGuard){
            return Math.min(damage * target.grd, 0);
        }else{
            return damage;
        }
    }


    /////////////////////////////////////////////////////////
    //■Game_BattlerBase
    /////////////////////////////////////////////////////////

    Game_BattlerBase.prototype.elementRate = function (elementId) {
        return this.elementTraitsPi(Game_BattlerBase.TRAIT_ELEMENT_RATE, elementId);
    };

    Game_BattlerBase.prototype.elementTraitsPi = function (code, id) {
        var traits = this.traitsWithId(code, id);
        var effectiveValue = 1;
        var neutralize = false;
        return this.traitsWithId(code, id).reduce(function (r, trait) {
            var value = trait.value;
            if (value * 100 == neutralizationNumber || neutralize) {
                neutralize = true;
                effectiveValue = 1;
            } else if (value * 100 == absorptionNumber || effectiveValue == -1) {
                effectiveValue = -1;
            } else if (value * 100 == noEffectNumver || effectiveValue == 0) {
                effectiveValue = 0;
            } else {
                effectiveValue = Math.max(r + trait.value - 1.0, 0);
            }
            return effectiveValue;

        }, 1);
    };


})();
