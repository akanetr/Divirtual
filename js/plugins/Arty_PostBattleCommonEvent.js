//=============================================================================
// Arty's Post Battle Common Events
// by Arty
// Date: 29.10.2016
//=============================================================================
 

/*:
 * @plugindesc [v.1.0] This plugin allows you to run a common event after the battle ended.
 * @author Arty
 *
 * @param Common Event Victory     
 * @desc The ID of the Common Event that should be run when the battle is won.       
 * @default 0  
 * 
 * @param Common Event Defeat    
 * @desc The ID of the Common Event that should be run when the battle is lost.       
 * @default 0 
 *
 * @param Common Event Abort    
 * @desc The ID of the Common Event that should be run when the battle is aborted.       
 * @default 0 
 *
 * @param Common Event Always   
 * @desc The ID of the Common Event that should be run after every battle.       
 * @default 0 
 * 
 * @help
 * ============================================================================
 * How To Use
 * ============================================================================
 *
 * Pretty much plug and play. Just set the parameters to the IDs of the Common
 * Events that you want to run (without leading zeroes) and you're good to go.
 * Make sure that you save the file under the filename "Arty_PostBattleCommonEvent.js"
 * or else it won't work.
 *
 * ============================================================================
 * Terms Of Use
 * ============================================================================
 *
 * You can use this plugin for free and commercial projects as long as you
 * credit me.
 *
 */
 
 //============================================================================

 var Imported = Imported || {};
 Imported.Arty_PostBattleCommonEvent = true;
 
 var Arty = Arty || {};
 
 Arty.Parameters = PluginManager.parameters('Arty_PostBattleCommonEvent');
 Arty.Param = Arty.Param || {};
 Arty.Param.CommonEventVictory = String(Arty.Parameters["Common Event Victory"]);
 Arty.Param.CommonEventDefeat = String(Arty.Parameters["Common Event Defeat"]);
 Arty.Param.CommonEventAbort = String(Arty.Parameters["Common Event Abort"]);
 Arty.Param.CommonEventAlways = String(Arty.Parameters["Common Event Always"]);

 Arty.Battle_Manager_Victory = BattleManager.processVictory;
 BattleManager.processVictory = function() {
    Arty.Battle_Manager_Victory.call(this);
	$gameTemp.reserveCommonEvent(Arty.Param.CommonEventVictory);
 };
 
 Arty.Battle_Manager_Defeat = BattleManager.processDefeat;
 BattleManager.processDefeat = function() {
    Arty.Battle_Manager_Defeat.call(this);
	$gameTemp.reserveCommonEvent(Arty.Param.CommonEventDefeat);
 };
 
 Arty.Battle_Manager_Abort = BattleManager.processAbort;
 BattleManager.processAbort = function() {
    Arty.Battle_Manager_Abort.call(this);
	$gameTemp.reserveCommonEvent(Arty.Param.CommonEventAbort);
 };
 
 Arty.Battle_Manager_Always = BattleManager.endBattle;
 BattleManager.endBattle = function(result) {
	 Arty.Battle_Manager_Always.call(this, result);
	 $gameTemp.reserveCommonEvent(Arty.Param.CommonEventAlways);
};