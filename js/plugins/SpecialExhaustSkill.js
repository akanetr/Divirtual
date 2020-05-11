//=============================================================================
// SpecialExhaustSkill.js (Ver 1.2)
//=============================================================================
// Ver1.0 2017/Jun/26 first release
// Ver1.1 2017/Jun/26 add the option to exclude these skills.
// Ver1.2 2017/Aug/01 add skillSpType 'exhaustHpMp'.

/*:
 * @plugindesc Enables Skill that exhausts HP or MP.
 * @author Sasuke KANNAZUKI
 *
 * @param After HP Exhausted Log
 * @desc %1 is replaced to subject name. If empty string, no display.
 * @default %1 is exhausted all physical energy...
 *
 * @param After MP Exhausted Log
 * @desc %1 is replaced to subject name. If empty string, no display.
 * @default %1 is exhausted all mental power...
 *
 * @param Include to default AI
 * @desc Whether to include these skills to default AI candidate.
 * (0=exclude, 1=include MP skill, 2=include HP skill, 3=include)
 * @default 0
 *
 * @help
 * This plugin does not provide plugin commands.
 *
 * [Summary]
 * write down item or skill's note following notation:
 * <skillSpType:exhaustHp>
 *  after executing the skill, subject will be die.
 * <skillSpType:exhaustMp>
 *  after executing the skill, subject's mp will be 0.
 * <skillSpType:exhaustHpMp>
 *  both above 2 effect
 *
 * [Useful usage sample]
 * These skills are so risky, so much effect is expected by the user.
 * - set "Certain Hit', and 100% success.
 * - the range is "all enemies".
 * - Recommended damage formula:
 *  - for HP exhaust skill: a.hp * 4.5
 *  : if you want to sweep all enemies: b.hp, and variance is 0%.
 *  - for MP exhaust skill: (a.mp + 1) * 2.5
 *
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc すべてのHPまたはMPを使って強力な攻撃を行うスキルが作成可能
 * @author 神無月サスケ
 *
 * @param After HP Exhausted Log
 * @desc 全HP技使用後の表示です。%1は使用者名に置き換わります。
 * 空文字を指定すると表示しません。
 * @default %1は力尽きて倒れた。
 *
 * @param After MP Exhausted Log
 * @desc 全MP技使用後の表示です。%1は使用者名に置き換わります。
 * 空文字を指定すると表示しません。
 * @default %1は魔力を使い果たした。
 *
 * @param Include to default AI
 * @desc これらの技を、デフォルトの自動戦闘AIの候補に含めるか。
 * (0=含めない, 1=MP技のみ, 2=HP技のみ, 3=両方含める)
 * @default 0
 *
 * @help
 * このプラグインには、プラグインコマンドはありません。
 *
 * ■概要
 * スキルまたはアイテムのメモに以下のように書いてください。
 * <skillSpType:exhaustHp>
 *  この記述がある場合、使用者が使用後に戦闘不能になります。
 * <skillSpType:exhaustMp>
 *  この記述がある場合、使用者のMPが使用後に0になります。
 * <skillSpType:exhaustHpMp>
 *  上記ふたつの効果が同時に現れます。
 *
 * ■有益な設定方法
 * このようなリスクの高い技には、強力な効果が求められます。
 * いくつか、設定のヒントを設けます。
 *
 * ・タイプは「必中」にしましょう。
 * ・範囲は「敵全体」、使用可能時は「バトル画面」にしましょう。
 * ・成功率は100％が望ましいです。
 * ・ダメージは「HPダメージ」で、MP全消費技の場合、『(a.mp + 1) * 2.5』、
 *   HP全消費技の場合、『a.hp * 4.5』あたりが、経験則上、丁度いいようです。
 *   全ての敵を即座に倒したい場合、式を『b.hp』、分散度を0%にしましょう。
 *
 * ・HP消費技のメッセージの例：
 *  (使用者の名前)は自らの身体を爆発させた！
 *  強烈な熱波や衝撃波が巻き起こる！
 *
 * ・MP消費技のメッセージの例：
 *  (使用者の名前)は%1を放った！
 *  暴走する魔力が敵を襲う！
 *
 * アニメーションも工夫して、派手なものを選択すると、より雰囲気が増します。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(function() {

  //
  // process parameters
  //
  var parameters = PluginManager.parameters('SpecialExhaustSkill');
  var hpExhaustedLog = parameters['After HP Exhausted Log'] || '';
  var mpExhaustedLog = parameters['After MP Exhausted Log'] || '';
  var doIncludeSkills = Number(parameters['Include to default AI'] || 0);
  var doesIncludeMpExhaust = !!(doIncludeSkills & 0x01);
  var doesIncludeHpExhaust = !!(doIncludeSkills & 0x02);

  //
  // check if it's exhaust skill
  //
  var isHpExhaustSkill = function (skill) {
    return skill.meta.skillSpType === 'exhaustHp' ||
     skill.meta.skillSpType === 'exhaustHpMp';
  };

  var isMpExhaustSkill = function (skill) {
    return skill.meta.skillSpType === 'exhaustMp' ||
     skill.meta.skillSpType === 'exhaustHpMp';
  };

  //
  // main routine
  //
  var _BattleManager_endAction = BattleManager.endAction;
  BattleManager.endAction = function() {
    if (this._action.processExhaustMP() && mpExhaustedLog) {
      this._logWindow.push('addText', mpExhaustedLog.format(
       this._subject.name()));
    }
    if (this._action.processExhaustHP() && hpExhaustedLog) {
      this._logWindow.push('addText', hpExhaustedLog.format(
       this._subject.name()));
    }
    _BattleManager_endAction.call(this);
  };

  Game_Action.prototype.processExhaustHP = function () {
    if (isHpExhaustSkill(this.item())) {
      this.subject().clearActions();
      this.subject().addNewState(this.subject().deathStateId());      
      return true;
    }
    return false;
  };

  Game_Action.prototype.processExhaustMP = function () {
    if (isMpExhaustSkill(this.item())) {
      this.subject()._mp = 0;
      return true;
    }
    return false;
  };

  //
  // exclude(or include) these skills to default AI candidate
  //
  var _Game_Actor_makeActionList = Game_Actor.prototype.makeActionList;
  Game_Actor.prototype.makeActionList = function() {
    var list = _Game_Actor_makeActionList.call(this);
    return list.filter(function (skill) {
      if (!doesIncludeHpExhaust && isHpExhaustSkill(skill.item())) {
        return false;
      } else if (!doesIncludeMpExhaust && isMpExhaustSkill(skill.item())) {
        return false;
      }
      return true;
    });
  };

})();
