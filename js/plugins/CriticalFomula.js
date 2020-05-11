//
//  クリティカル計算式 ver1.00
//
// author yana
//

var Imported = Imported || {};
Imported['CriticalFomula'] = 1.00;

/*:
 * @plugindesc ver1.00/クリティカル時の計算式を変更します。
 * @author Yana
 * 
 * @param Critical Fomula
 * @desc クリティカル時の計算式です。
 * ダメージ計算式で使える変数に加え、dに適用前のダメージが入ります。
 * @default d * 3
 * 
 */

(function(){
	var parameters = PluginManager.parameters('CriticalFomula');
	var criticalFomula = String(parameters['Critical Fomula'] || 'd * 3');
	
	var __GAction_makeDamageValue = Game_Action.prototype.makeDamageValue;
	Game_Action.prototype.makeDamageValue = function(target, critical) {
		this._currentTarget = target;
		return __GAction_makeDamageValue.call(this,target,critical);
	};
	
	Game_Action.prototype.applyCritical = function(damage) {
		var a = this.subject();
		var b = this._currentTarget;
		var v = $gameVariables._data;
		var d = damage;
    	return eval(criticalFomula);
	};
}());