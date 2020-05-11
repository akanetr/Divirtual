//
//  命中&回避計算式 ver1.00
//
// author yana
//

var Imported = Imported || {};
Imported['HitandEvaFormula'] = 1.00;
/*:
 * @plugindesc ver1.00/命中や回避に計算式が使用できるようにします。
 * @author Yana
 * 
 * @param HitFormula
 * @desc 命中計算の基本式です。
 * @default hit - eva
 * 
 * @param EvaFormula
 * @desc 回避計算の基本式です。
 * @default 0
 * 
 * @help------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 * アイテムやスキルのメモに、
 * <命中計算式:xxx>
 * または、
 * <HitFormula:xxx>
 * と記述すると、命中の計算式がxxxに設定されます。
 * xxxでは、通常のダメージ計算式で使用できるa,b,vに加え、
 * hit(行動者の命中値),eva(対象の回避値-魔法なら魔法回避値)が使用可能です。
 * 
 * アイテムやスキルのメモに
 * <回避計算式:xxx>
 * または、
 * <EvaFormula:xxx>
 * と記述すると、回避の計算式がxxxに設定されます。
 * xxxでは、通常のダメージ計算式で使用できるa,b,vに加え、
 * hit(行動者の命中値),eva(対象の回避値(魔法なら魔法回避値))が使用可能です。
 * 
 * 個別で式が設定されていないアイテムやスキルは、パラメータで使用された式が設定されます。
 * 
 * ------------------------------------------------------
 * 利用規約
 * ------------------------------------------------------ 
 * 使用に制限はありません。商用、アダルト、いずれにも使用できます。
 * 二次配布も制限はしませんが、サポートは行いません。
 * 著作表示は任意です。行わなくても利用できます。
 * 要するに、特に規約はありません。
 * バグ報告や使用方法等のお問合せはネ実ツクールスレ、または、Twitterにお願いします。
 * https://twitter.com/yanatsuki_
 * 素材利用は自己責任でお願いします。
 * ------------------------------------------------------
 * 更新履歴:
 * ver1.00:
 * 公開
 */

(function(){
	////////////////////////////////////////////////////////////////////////////////////
	
	var parameters = PluginManager.parameters('HitandEvaFormula');
	var hitFormula = String(parameters['HitFormula']);
	var evaFormula = String(parameters['EvaFormula']);
	
	////////////////////////////////////////////////////////////////////////////////////

	DataManager.hitFormula = function(item) {
		if (item._hitFormula === undefined){
			item._hitFormula = item.meta['命中計算式'];
			if (!item._hitFormula){ item._hitFormula = item.meta['HitFormula'] }	
			if (!item._hitFormula){ item._hitFormula = hitFormula }
		}
		return item._hitFormula;
	};

	DataManager.evaFormula = function(item) {
		if (item._evaFormula === undefined){
			item._evaFormula = item.meta['回避計算式'];
			if (!item._evaFormula){ item._evaFormula = item.meta['EvaFormula'] }
			if (!item._evaFormula){ item._evaFormula = evaFormula }
		}
		return item._evaFormula;
	};
	
	////////////////////////////////////////////////////////////////////////////////////
	
	var __GAction_itemHit = Game_Action.prototype.itemHit;
	Game_Action.prototype.itemHit = function(target) {
		var hit = __GAction_itemHit.call(this,target);
		var eva = __GAction_itemEva.call(this,target);
    	var a = this.subject();
    	var b = target;
    	var v = $gameVariables._data;
    	var result = eval(DataManager.hitFormula(this.item()));
    	result = Math.min(1.0,Math.max(result,0));
    	return result;
	};

	var __GAction_itemEva = Game_Action.prototype.itemEva;
	Game_Action.prototype.itemEva = function(target) {
		var eva = __GAction_itemEva.call(this,target);
    	var hit = __GAction_itemHit.call(this,target);
    	var a = this.subject();
    	var b = target;
    	var v = $gameVariables._data;
    	var result = eval(DataManager.evaFormula(this.item()));
    	result = Math.min(1.0,Math.max(result,0));
    	return result;
	};

	////////////////////////////////////////////////////////////////////////////////////

}());