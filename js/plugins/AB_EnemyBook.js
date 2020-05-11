// =============================================================================
// AB_EnemyBook.js
// Version: 1.04
// -----------------------------------------------------------------------------
// [Homepage]: ヱビのノート
//             http://www.zf.em-net.ne.jp/~ebi-games/
// =============================================================================


/*:
 * @plugindesc 戦闘中も確認できるモンスター図鑑です。属性、ステートの耐性の確認もできます。
 * @author ヱビ
 * 
 * @param ShowCommandInBattle
 * @desc バトル中に図鑑を見るコマンドを表示するかどうかを決めます。
 * プラグインコマンドで変更することもできます。0:非表示、1:表示
 * @default 1
 * 
 * @param ResisterTiming
 * @desc 図鑑に登録されるタイミングです。
 * 0:登録されない、1:戦闘開始時、2:戦闘終了時
 * @default 2
 * 
 * @param ShowCurrentStatus
 * @desc ONにすると、図鑑で敵の現在の情報（現在HPなど）が見られます。
 * プラグインコマンドで変更することもできます。0:OFF、1:ON
 * @default 0
 * 
 * @param ---用語、アイコン---
 * @default 
 * 
 * @param EnemyBookCommandName
 * @desc バトル中の敵の情報を見るコマンドの名前です。
 * @default 敵の情報
 * 
 * @param Achievement
 * @desc 達成率の名前です。
 * @default 達成率
 * 
 * @param UnknownEnemy
 * @desc 未確認の敵キャラの索引名です。
 * @default ？？？？？？
 * 
 * @param UnknownData
 * @desc まだ図鑑に登録されていない敵キャラの各データの内容です。
 * @default ？？？
 * 
 * @param WeakElementName
 * @desc 効きやすい属性の名前です。
 * @default 弱点属性
 * 
 * @param ResistElementName
 * @desc 効きにくい属性の名前です。
 * @default 耐性属性
 * 
 * @param WeakStateName
 * @desc 効きやすいステートの名前です。
 * @default 弱点ステート
 * 
 * @param ResistStateName
 * @desc 効きにくいステートの名前です。無効ステートも含みます。
 * @default 耐性ステート
 * 
 * @param NoEffectStateName
 * @desc 効かないステートの名前です。
 * @default 無効ステート
 * 
 * @param UnknownDropItemIcon
 * @desc 未知の敵キャラの落とすアイテムのアイコンの番号です。
 * デフォルト：16
 * @default 16
 * 
 * @param AddEnemySkillMessage
 * @desc スキルで敵キャラを図鑑に登録することに成功したときの
 * メッセージです。%1が敵キャラの名前に置き換えられます。
 * @default %1を図鑑に登録した！
 * 
 * @param FailToAddEnemySkillMessage
 * @desc スキルで敵キャラを図鑑に登録することに失敗したときの
 * メッセージです。%1が敵キャラの名前に置き換えられます。
 * @default %1は図鑑には載せられない！
 * 
 * @param FailToCheckEnemySkillMessage
 * @desc スキルで敵キャラの情報を見ることに失敗したときの
 * メッセージです。%1が敵キャラの名前に置き換えられます。
 * @default %1の情報はわからなかった！
 * 
 * @param ---表示項目---
 * @default 
 * 
 * @param DispNo
 * @desc 図鑑に番号を表示するか決めます。0:非表示、1:表示
 * @default 1
 *
 * @param DispHP
 * @desc 図鑑にHPを表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispMP
 * @desc 図鑑にMPを表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispATK
 * @desc 図鑑に攻撃力を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispDEF
 * @desc 図鑑に防御力を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispMAT
 * @desc 図鑑に魔法力を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispMDF
 * @desc 図鑑に魔法防御を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispAGI
 * @desc 図鑑に敏捷性を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispLUK
 * @desc 図鑑に運を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispDropItems
 * @desc 図鑑にドロップアイテムを表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispWeakElement
 * @desc 図鑑に効きやすい属性を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispResistElement
 * @desc 図鑑に効きにくい属性を表示するか決めます。0:非表示、1:表示
 * @default 1
 * 
 * @param DispWeakState
 * @desc 図鑑に効きやすいステートを表示するか決めます。
 * 0:非表示、1:表示
 * @default 1
 * 
 * @param DispResistState
 * @desc 図鑑に効きにくいステートを表示するか決めます。（無効含む）
 * 0:非表示、1:表示
 * @default 1
 * 
 * @param DispNoEffectState
 * @desc 図鑑に効かないステートを表示するか決めます。
 * 0:非表示、1:表示
 * @default 0
 * 
 * @param DispDescribe
 * @desc 図鑑に敵キャラの説明を表示するか決めます。
 * 0:非表示、1:表示
 * @default 1
 * 
 * @param ---属性アイコン---
 * @default 
 * 
 * @param UseElementIconInPluginParameter
 * @desc 属性の中のアイコンではなく、下のパラメータを使いますか？
 * 0:OFF、1:ON
 * @default 0
 * 
 * @param ElementIcons
 * @desc 属性のアイコンです。1番から順番に半角スペースで区切って並
 * べてください。
 * @default 76 64 65 66 67 68 69 70 71
 * 
 * @help
 * ============================================================================
 * どんなプラグイン？
 * ============================================================================
 * 
 * 戦闘中も確認できるモンスター図鑑が作れます。
 * Yoji Ojima 氏のプラグイン「EnemyBook.js」を改変しました。
 * 
 * ============================================================================
 * 表示されるもの
 * ============================================================================
 * 
 * 以下のものはプラグインパラメータで表示するかどうか設定できます。
 * ・HP、MP、攻撃力、防御力、魔法力、魔法防御、敏捷性、運
 * ・ドロップアイテム
 * ・効きやすい属性、効きにくい属性
 * ・効きやすいステート、効きにくい（無効含む）ステート、効かないステート
 * 
 * 属性を表示するときは、2通りの方法があります。
 * 
 * 1.属性の名前の中にアイコンを入れる
 *   例：\i[64]炎
 * 
 * 2.プラグインパラメータを使う
 *   version1.04で追加しました。
 *   UseElementIconInPluginParameterをONにし、
 *   ElementIconsに属性アイコンの番号を半角スペースで区切って並べてください。
 * 
 * まだ図鑑に登録されていない敵との戦闘中に図鑑を開くと、データが「？？？」と
 * 表示されます。「？？？」の部分はプラグインパラメータの UnknownDataで設定
 * できます。 
 * 
 * プラグインパラメータ ShowCurrentStatus を ON にすると、
 * 戦闘中に図鑑を開いたとき、現在の敵キャラのパラメータが表示されます。
 * 現在HPだけでなく、攻撃力や属性有効度も変化していると現在の値が表示されます。
 * これは後述のプラグインコマンドで変更できます。
 * 
 * 他にも、後述の目安となるレベルを敵キャラのメモ欄で設定した場合、表示されます。
 * 
 * Version 1.02からは全ての項目を表示すると画面をはみ出してしまうので、
 * プラグインパラメータでどの項目を表示するか設定してください。
 * 
 * ============================================================================
 * 図鑑に登録されるタイミング
 * ============================================================================
 * 
 * プラグインパラメータ ResisterTiming で、図鑑に登録されるタイミングを設定でき
 * ます。
 * 
 * 0: 登録されない
 * 1: 戦闘開始時
 * 2: 戦闘終了時
 * 
 * ============================================================================
 * EnemyBook.jsと同じコマンド
 * ============================================================================
 * 
 * プラグインコマンド：
 *   EnemyBook open 
 *     図鑑画面を開きます。
 *   EnemyBook add 3
 *     敵キャラ３番を図鑑に追加します。
 *   EnemyBook remove 4
 *     敵キャラ４番を図鑑から削除します。
 *   EnemyBook complete
 *     図鑑を完成させます。
 *   EnemyBook clear
 *     図鑑をクリアします。
 * 
 * 敵キャラのメモ:
 *   <desc1:なんとか>
 *     説明１行目です。
 *   <desc2:かんとか>
 *     説明２行目です。
 *   <book:no>
 *     これを設定した敵キャラは図鑑に載りません。
 * 
 * ============================================================================
 * その他のプラグインコマンド
 * ============================================================================
 * 
 * EnemyBook showInBattle
 *   戦闘中に図鑑を開くことができるようにします。
 * EnemyBook hideInBattle
 *   戦闘中に図鑑を開くことができないようにします。
 * EnemyBook showCurrentStatus
 *   戦闘中に図鑑を開くと、現在の敵のパラメータを見られるようにします。
 * EnemyBook showGeneralStatus
 *   戦闘中に図鑑を開くと、その敵の一般的な情報を見られるようにします。
 * 
 * ============================================================================
 * 図鑑に関するスキル
 * ============================================================================
 * 
 * スキルのメモ：
 *   <addToEnemyBook>
 *     対象を図鑑に登録します。
 *     対象が図鑑に載る敵キャラだった場合は成功メッセージが、
 *     そうでなかった場合失敗メッセージが表示されます。
 * 
 *   <checkEnemyStatus>
 *     対象の情報を見ます。
 *     対象が図鑑に載る敵キャラだった場合図鑑が表示され、
 *     そうでなかった場合失敗メッセージが表示されます。
 *     このスキルでは、対象の現在のパラメータ（現在HPなど）が表示されます。
 * 
 * この２つのスキルのメッセージはプラグインパラメータで設定できます。
 * 
 * ============================================================================
 * その他のタグ
 * ============================================================================
 * 
 * 敵キャラのメモ：
 *   <bookLevel:3>
 *     図鑑に強さの目安となるレベルを記載します。
 *     何も書かなければ、何も表示されません。
 * 
 *   <bookCanCheck>
 *     Version 1.04で追加しました。
 *     <book:no>を書いた敵でもこのタグを付ければ<checkEnemyStatus>のスキルで
 *     チェックできます。
 * 
 * ステートのメモ：
 *   <book:no>
 *     図鑑に表示しないようにできます。
 * 
 * 
 * ============================================================================
 * 更新履歴
 * ============================================================================
 * 
 * Version 1.04
 *   属性の中にアイコンを書けない時のため、プラグインパラメータで属性のアイコン
 *   を設定できるようにしました。
 *   <book:no>が設定されている敵キャラでも、<bookCanCheck>が設定されていれば
 *   スキルでならチェックできるようにしました。
 * 
 * Version 1.03
 *   モンスターの番号を表示できるようにしました。
 *   達成率を表示するようにしました。
 *   無効化ステートの項目をONにしているとき、耐性ステートには無効化ステートは
 *   表示されないようにしました。
 *  
 * Version 1.02
 *   無効ステートの項目を追加しました。
 *   耐性の項目が奇数のとき、図鑑説明がかぶってしまう不具合を修正しました。
 * 
 * Version 1.01
 *   表示項目によって余白を削り、ウィンドウの高さを小さくするようにしました。
 *   高さを計算するために、説明を表示するかどうかを設定するプラグインパラメータ
 *   DispDescribe を追加しました。
 *   また、対象の情報を見るスキルを使ったとき、敵を選択するウィンドウを
 *   非表示にするようにしました。
 * 
 * Version 1.00
 *   初版
 * 
 * ============================================================================
 * 利用規約
 * ============================================================================
 * 
 * ・クレジット表記は不要
 * ・営利目的で使用可
 *     ただし、素材そのものの販売は禁止です。
 * ・改変可
 * ・素材だけの再配布も可
 * ・アダルトゲーム、残酷なゲームでの使用も可
 * ・ツクール素材の改変素材です
 *     ツクール公式の利用規約をご覧ください。
 *     https://tkool.jp/support/guideline
 */

(function() {
	var parameters = PluginManager.parameters('AB_EnemyBook');
	var EnemyBookCommandName = (parameters['EnemyBookCommandName'] || "敵の情報");
	var ShowCommandInBattle = (parameters['ShowCommandInBattle'] == 1) ? true : false;
	var ResisterTiming = Number(parameters['ResisterTiming']);
	var Achievement = String(parameters['Achievement'] || "");
	var UnknownEnemy = String(parameters['UnknownEnemy'] || "");
	var UnknownData = String(parameters['UnknownData'] || "");
	var AddEnemySkillMessage = String(parameters['AddEnemySkillMessage'] || "");
	var FailToAddEnemySkillMessage = String(parameters['FailToAddEnemySkillMessage'] || "");
	var FailToCheckEnemySkillMessage = String(parameters['FailToCheckEnemySkillMessage'] || "");
	var DispNo = (parameters['DispNo'] == 1) ? true : false;
	var dispParameters = [];
	dispParameters[0] = (parameters['DispHP'] == 1) ? true : false;
	dispParameters[1] = (parameters['DispMP'] == 1) ? true : false;
	dispParameters[2] = (parameters['DispATK'] == 1) ? true : false;
	dispParameters[3] = (parameters['DispDEF'] == 1) ? true : false;
	dispParameters[4] = (parameters['DispMAT'] == 1) ? true : false;
	dispParameters[5] = (parameters['DispMDF'] == 1) ? true : false;
	dispParameters[6] = (parameters['DispAGI'] == 1) ? true : false;
	dispParameters[7] = (parameters['DispLUK'] == 1) ? true : false;
	var DispDropItems = (parameters['DispDropItems'] == 1) ? true : false;
	var dispRates = [];
	dispRates[1] = (parameters['DispResistElement'] == 1) ? true : false;
	var ResistElementName = String(parameters['ResistElementName'] || "耐性属性");
	dispRates[0] = (parameters['DispWeakElement'] == 1) ? true : false;
	var WeakElementName = String(parameters['WeakElementName'] || "弱点属性");
	dispRates[3] = (parameters['DispResistState'] == 1) ? true : false;
	var ResistStateName = String(parameters['ResistStateName'] || "耐性ステート");
	dispRates[2] = (parameters['DispWeakState'] == 1) ? true : false;
	var WeakStateName = String(parameters['WeakStateName'] || "弱点ステート");
	dispRates[4] = (parameters['DispNoEffectState'] == 1) ? true : false;
	var NoEffectStateName = String(parameters['NoEffectStateName'] || "無効ステート");
	var UnknownDropItemIcon = Number(parameters['UnknownDropItemIcon']);
	if (UnknownDropItemIcon === Number.NaN) UnknownDropItemIcon = 0;
	var ShowCurrentStatus = (parameters['ShowCurrentStatus'] == 1) ? true : false;
	var DispDescribe = (parameters['DispDescribe'] == 1) ? true : false;
	var UseElementIconInPluginParameter = (parameters['UseElementIconInPluginParameter'] == 1) ? true : false;
	var ElementIcons = (parameters['ElementIcons']).split(" ");
	var a = [0];
	ElementIcons = a.concat(ElementIcons);


//=============================================================================
// Game_System
//=============================================================================

	var Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		Game_Interpreter_pluginCommand.call(this, command, args);
		if (command === 'EnemyBook') {
			switch(args[0]) {
			case 'open':
				SceneManager.push(Scene_EnemyBook);
				break;
			case 'add':
				$gameSystem.addToEnemyBook(Number(args[1]));
				break;
			case 'remove':
				$gameSystem.removeFromEnemyBook(Number(args[1]));
				break;
			case 'complete':
				$gameSystem.completeEnemyBook();
				break;
			case 'clear':
				$gameSystem.clearEnemyBook();
				break;
			case 'showInBattle':
				$gameSystem.setShowBattleEnemyBook(true);
				break;
			case 'hideInBattle':
				$gameSystem.setShowBattleEnemyBook(false);
				break;
			case 'showCurrentStatus':
				$gameSystem.setShowCurrentEnemysStatus(true);
				break;
			case 'showGeneralStatus':
				$gameSystem.setShowCurrentEnemysStatus(false);
				break;
			}
		}
	};
	
	var Game_System_prototype_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
		Game_System_prototype_initialize.call(this);
		this.initEnemyBookSettings();
	};

	Game_System.prototype.initEnemyBookSettings = function() {
		this._showBattleEnemyBook = ShowCommandInBattle;
		this._currentEnemysStatus = ShowCurrentStatus;
	};

	Game_System.prototype.setShowBattleEnemyBook = function(value) {
		this._showBattleEnemyBook = value;
	};
	Game_System.prototype.isShowBattleEnemyBook = function() {
		if (this._showBattleEnemyBook === undefined) this.initEnemyBookSettings();
		return this._showBattleEnemyBook;
	};

	Game_System.prototype.setShowCurrentEnemysStatus = function(value) {
		this._showCurrentEnemyStatus = value;
	};
	Game_System.prototype.isShowCurrentEnemysStatus = function() {
		if (this._showCurrentEnemyStatus === undefined) this.initEnemyBookSettings();
		return this._showCurrentEnemyStatus;
	};

	Game_System.prototype.addToEnemyBook = function(enemyId) {
		if (!this._enemyBookFlags) {
			this.clearEnemyBook();
		}
		this._enemyBookFlags[enemyId] = true;
	};

	
	Game_System.prototype.removeFromEnemyBook = function(enemyId) {
		if (this._enemyBookFlags) {
			this._enemyBookFlags[enemyId] = false;
		}
	};

	Game_System.prototype.completeEnemyBook = function() {
		this.clearEnemyBook();
		for (var i = 1; i < $dataEnemies.length; i++) {
			this._enemyBookFlags[i] = true;
		}
	};
	
	Game_System.prototype.clearEnemyBook = function() {
		this._enemyBookFlags = [];
	};
	
	Game_System.prototype.isInEnemyBook = function(enemy) {
		if (this._enemyBookFlags && enemy) {
				return !!this._enemyBookFlags[enemy.id];
		} else {
			return false;
		}
	};

//=============================================================================
// 戦闘開始時に登録
//=============================================================================
	if (ResisterTiming === 1) {
		var _Game_Troop_setup = Game_Troop.prototype.setup;
		Game_Troop.prototype.setup = function(troopId) {
			_Game_Troop_setup.call(this, troopId);
			this.members().forEach(function(enemy) {
				if (enemy.isAppeared()) {
					$gameSystem.addToEnemyBook(enemy.enemyId());
				}
			}, this);
		};
		
		var _Game_Enemy_appear = Game_Enemy.prototype.appear;
		Game_Enemy.prototype.appear = function() {
			_Game_Enemy_appear.call(this);
			$gameSystem.addToEnemyBook(this._enemyId);
		};
		
		var _Game_Enemy_transform = Game_Enemy.prototype.transform;
			Game_Enemy.prototype.transform = function(enemyId) {
			_Game_Enemy_transform.call(this, enemyId);
			$gameSystem.addToEnemyBook(enemyId);
		};
//=============================================================================
// 戦闘終了時に登録
//=============================================================================
	} else if (ResisterTiming === 2) {
		
		var _Game_Troop_setup = Game_Troop.prototype.setup;
		Game_Troop.prototype.setup = function(troopId) {
			_Game_Troop_setup.call(this, troopId);
			this._appearedMembers = [];
			this.members().forEach(function(enemy) {
				if (enemy.isAppeared()) {
					this._appearedMembers.push(enemy.enemyId());
				}
			}, this);
		};
		
		var _Game_Enemy_appear = Game_Enemy.prototype.appear;
		Game_Enemy.prototype.appear = function() {
			_Game_Enemy_appear.call(this);
			this.friendsUnit()._appearedMembers.push(this._enemyId);
		};
		
		var _Game_Enemy_transform = Game_Enemy.prototype.transform;
			Game_Enemy.prototype.transform = function(enemyId) {
			_Game_Enemy_transform.call(this, enemyId);
			this.friendsUnit()._appearedMembers.push(this._enemyId);
		};

		var Game_Troop_prototype_onBattleEnd = 
			(Game_Troop.prototype.onBattleEnd || Game_Unit.prototype.onBattleEnd);
		Game_Troop.prototype.onBattleEnd = function() {
			Game_Troop_prototype_onBattleEnd.call(this);
			for (var i=0,l=this._appearedMembers.length; i<l; i++) {
				$gameSystem.addToEnemyBook(this._appearedMembers[i]);
			}
		};
	}

//=============================================================================
// Window_PartyCommand
//=============================================================================

	var Window_PartyCommand_prototype_makeCommandList = 
		Window_PartyCommand.prototype.makeCommandList;
	Window_PartyCommand.prototype.makeCommandList = function() {
		Window_PartyCommand_prototype_makeCommandList.call(this);
		this.addEnemyBookCommand();
	}

	Window_PartyCommand.prototype.addEnemyBookCommand = function() {
		if (!$gameSystem.isShowBattleEnemyBook()) return;
		var index = this.findSymbol('escape');
		var obj = {name:EnemyBookCommandName, symbol:'enemybook', enabled:true};
		//this.addCommandAt(index, EnemyBookCommandName, 'enemybook', true);
		this._list.splice(index, 0, obj);
	};


//=============================================================================
// Scene_Battle
//=============================================================================
	var Scene_Battle_prototype_createAllWindows = 
		Scene_Battle.prototype.createAllWindows;
	Scene_Battle.prototype.createAllWindows = function() {
		Scene_Battle_prototype_createAllWindows.call(this);
		this.createEnemyBookWindows();
	};

	Scene_Battle.prototype.createEnemyBookWindows = function() {
		this._enemyBookIndexWindow = new Window_EnemyBookIndex(0, 0);
		this._enemyBookIndexWindow.setHandler('cancel', this.endBattleEnemyBook.bind(this));
		this._enemyBookIndexWindow.deselect();

		var wx = this._enemyBookIndexWindow.width;
		var ww = Graphics.boxWidth - wx;
		var wh = Scene_EnemyBook.prototype.calcStatusWindowHeight();
		this._enemyBookStatusWindow = new Window_EnemyBookStatus(wx, 0, ww, wh);

		this._enemyBookIndexWindow.hide();
		this._enemyBookStatusWindow.hide();


		this.addWindow(this._enemyBookIndexWindow);
		this.addWindow(this._enemyBookStatusWindow);

		this._enemyBookIndexWindow.setStatusWindow(this._enemyBookStatusWindow);
	};
	
	var Scene_Battle_prototype_isAnyInputWindowActive = 
		Scene_Battle.prototype.isAnyInputWindowActive;
	Scene_Battle.prototype.isAnyInputWindowActive = function() {
		if (Scene_Battle_prototype_isAnyInputWindowActive.call(this)) return true;
		return this._enemyBookIndexWindow.active;
	};

	var Scene_Battle_prototype_createPartyCommandWindow = 
		Scene_Battle.prototype.createPartyCommandWindow;
	Scene_Battle.prototype.createPartyCommandWindow = function() {
		Scene_Battle_prototype_createPartyCommandWindow.call(this);
		var win = this._partyCommandWindow;
		win.setHandler('enemybook', this.battleEnemyBook.bind(this));
	};

	Scene_Battle.prototype.battleEnemyBook = function() {
		this._enemyBookStatusWindow.setup();
		this._enemyBookIndexWindow.setup();
	};

	Scene_Battle.prototype.endBattleEnemyBook = function() {
		this._enemyBookIndexWindow.deselect();
		this._enemyBookIndexWindow.close();
		this._enemyBookStatusWindow.close();
		//this.startPartyCommandSelection();
	};

//=============================================================================
// Scene_EnemyBook
//=============================================================================

	Scene_EnemyBook = function() {
		this.initialize.apply(this, arguments);
	}
	Scene_EnemyBook.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_EnemyBook.prototype.constructor = Scene_EnemyBook;
	
	Scene_EnemyBook.prototype.initialize = function() {
		Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_EnemyBook.prototype.create = function() {
		Scene_MenuBase.prototype.create.call(this);
		this._percentWindow = new Window_EnemyBookPercent(0, 0);
		var wy = this._percentWindow.height;
		this._indexWindow = new Window_EnemyBookIndex(0, wy);
		this._indexWindow.setHandler('cancel', this.popScene.bind(this));
		var wx = this._indexWindow.width;
		var ww = Graphics.boxWidth - wx;
		//var wh = Graphics.boxHeight;
		var wh = this.calcStatusWindowHeight();
		this._statusWindow = new Window_EnemyBookStatus(wx, 0, ww, wh);
		this.addWindow(this._percentWindow);
		this.addWindow(this._indexWindow);
		this.addWindow(this._statusWindow);
		this._indexWindow.setup();
		this._indexWindow.setStatusWindow(this._statusWindow);
		this._indexWindow.setPercentWindow(this._percentWindow);
	};

	Scene_EnemyBook.prototype.calcStatusWindowHeight = function() {
		var lineHeight = Window_Base.prototype.lineHeight();
		var textPadding = Window_Base.prototype.textPadding();
		var standardPadding = Window_Base.prototype.standardPadding();
		var paramHeight = Scene_EnemyBook.prototype.calcParameterHeight();
		//var height = lineHeight * 9 + textPadding * 2 + standardPadding * 2;
		var height = paramHeight + standardPadding * 2;
		var linePlus = 0;
		for (var i = 0; i < 5; i++) {
			if (dispRates[i]) {
				linePlus += 0.5;
			}
		}
		linePlus = Math.ceil(linePlus) * 2;

		if (DispDescribe) {
			linePlus += 2;
		}
		height += linePlus * lineHeight + textPadding * Math.ceil(linePlus / 2);
		return height;
	};

	Scene_EnemyBook.prototype.calcParameterHeight = function() {
		var lineHeight = Window_Base.prototype.lineHeight();
		var textPadding = Window_Base.prototype.textPadding();
		var standardPadding = Window_Base.prototype.standardPadding();
		var height = 0;
		var linePlus = 1;
		if (DispDropItems) return lineHeight * 9 + textPadding * 2;
		for (var i = 0; i < 8; i++) {
			if (dispParameters[i]) {
				linePlus += 1;
			}
		}
		linePlus = Math.max(linePlus, 6);
		height = lineHeight * linePlus + textPadding * 2;

		return height;
	};


//=============================================================================
// Window_EnemyBookPercent
//=============================================================================

	Window_EnemyBookPercent = function() {
		this.initialize.apply(this, arguments);
	};

	Window_EnemyBookPercent.prototype = Object.create(Window_Base.prototype);
	Window_EnemyBookPercent.prototype.constructor = Window_EnemyBookPercent;

	Window_EnemyBookPercent.prototype.initialize = function(x, y, width, height) {
		var width = Math.floor(Graphics.boxWidth / 3);
		var height = this.fittingHeight(1);
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this.max = 0;
		this.achievement = 0;
	};

	Window_EnemyBookPercent.prototype.setup = function() {
		this.show();
		this.open();
	};

	Window_EnemyBookPercent.prototype.setAchievement = function(max, achievement) {
		this.max = max;
		this.achievement = achievement;
		this.refresh();
	}

	Window_EnemyBookPercent.prototype.refresh = function() {
		if (this.max === 0) return;
		var w1 = this.contentsWidth()/2;
		this.drawText(Achievement, 0, 0, w1);
		this.drawText(Math.floor(this.achievement / this.max * 100) + "%", w1, 0, w1, 'right');
	}

//=============================================================================
// Window_EnemyBookIndex
//=============================================================================
	Window_EnemyBookIndex = function() {
		this.initialize.apply(this, arguments);
	}
	Window_EnemyBookIndex.prototype = Object.create(Window_Selectable.prototype);
	Window_EnemyBookIndex.prototype.constructor = Window_EnemyBookIndex;

	Window_EnemyBookIndex.lastIndex  = 0;

	Window_EnemyBookIndex.prototype.initialize = function(x, y) {
		var width = Math.floor(Graphics.boxWidth / 3);
		var height = Graphics.boxHeight - y;
		Window_Selectable.prototype.initialize.call(this, x, y, width, height);
		//this.refresh();
	}

	Window_EnemyBookIndex.prototype.setup = function() {
		this.refresh();
		if ($gameParty.inBattle()) {
			this.select(0);
		} else {
			this.select(Window_EnemyBookIndex.lastIndex);
		}
		this.show();
		this.activate();
		this.open();
	};

	Window_EnemyBookIndex.prototype.backSetup = function() {
		this.refresh();
		if ($gameParty.inBattle()) {
			this.select(0);
		} else {
			this.select(Window_EnemyBookIndex.lastIndex);
		}
		this.openness = 255;
		this.hide();
		this.activate();
	};

	Window_EnemyBookIndex.prototype.maxCols = function() {
		return 1;
	};

	Window_EnemyBookIndex.prototype.maxItems = function() {
		return this._list ? this._list.length : 0;
	};

	Window_EnemyBookIndex.prototype.setPercentWindow = function(percentWindow) {
		this._percentWindow = percentWindow;
		this.updatePercent();
	};

	Window_EnemyBookIndex.prototype.setStatusWindow = function(statusWindow) {
		this._statusWindow = statusWindow;
		this.updateStatus();
	};

	Window_EnemyBookIndex.prototype.update = function() {
		Window_Selectable.prototype.update.call(this);
		this.updateStatus();
	};

	Window_EnemyBookIndex.prototype.updatePercent = function() {
		if (this._percentWindow && this._list) {
			var a = 0;
			for (var i = 1; i < $dataEnemies.length; i++) {
				var enemy = $dataEnemies[i];
				if (enemy.name && enemy.meta.book !== 'no') {
					if ($gameSystem.isInEnemyBook(enemy)) a++;
				}
			}
			this._percentWindow.setAchievement(this._list.length, a);
		}
	}

	Window_EnemyBookIndex.prototype.updateStatus = function() {
		if (this._statusWindow && this._list) {
			var enemy = this._list[this.index()];
			this._statusWindow.setEnemy(enemy);
		}
	};

	Window_EnemyBookIndex.prototype.refresh = function() {
		this._list = [];
		if (this.enemy) {
			this._list.push(this.enemy);
		} else if ($gameParty.inBattle() && $gameSystem.isShowCurrentEnemysStatus()) {
			var enemies = $gameTroop.aliveMembers();
			for (var i=0,l=enemies.length; i<l; i++) {
				if (enemies[i].enemy().meta.book !== 'no') {
					this._list.push(enemies[i]);
				}
			}
		} else if ($gameParty.inBattle()) {
			var enemyIds = [];
			var enemies = $gameTroop.aliveMembers();
			for (var i=0,l=enemies.length; i<l; i++) {
				var id = enemies[i].enemyId();
				var flag = enemyIds.some(function(id2) {
					return id === id2;
				});
				if (enemies[i].enemy().meta.book !== 'no' && !flag) {
					enemyIds.push(id);
					var gameEnemy = new Game_Enemy(id,0,0);
					this._list.push(gameEnemy);
				}
			}
		} else {
			for (var i = 1; i < $dataEnemies.length; i++) {
				var enemy = $dataEnemies[i];
				if (enemy.name && enemy.meta.book !== 'no') {
					var gameEnemy = new Game_Enemy(i,0,0);
					this._list.push(gameEnemy);
				}
			}
		}
		this.createContents();
		this.drawAllItems();
	};

	Window_EnemyBookIndex.prototype.drawItem = function(index) {
		var enemy = this._list[index];
		var rect = this.itemRectForText(index);
		var name;
		if ($gameTroop.inBattle() || $gameSystem.isInEnemyBook(enemy.enemy())) {
			name = enemy.name();
		} else {
			name = UnknownEnemy;
		}
		if (!$gameParty.inBattle() && DispNo) {
			this.drawText(index+1, rect.x, rect.y, 40);
			this.drawText(name, rect.x + 40, rect.y, rect.width - 40);
		} else {
			this.drawText(name, rect.x, rect.y, rect.width);
		}
	};

	Window_EnemyBookIndex.prototype.processCancel = function() {
		Window_Selectable.prototype.processCancel.call(this);
		if (!$gameParty.inBattle()) {
			Window_EnemyBookIndex.lastIndex = this.index();
		}
		this.enemy = null;
		this._statusWindow.isCheck = false;
	};

//=============================================================================
// Window_EnemyBookStatus
//=============================================================================

	Window_EnemyBookStatus = function() {
		this.initialize.apply(this, arguments);
	};

	Window_EnemyBookStatus.prototype = Object.create(Window_Base.prototype);
	Window_EnemyBookStatus.prototype.constructor = Window_EnemyBookStatus;

	Window_EnemyBookStatus.prototype.initialize = function(x, y, width, height) {
		Window_Base.prototype.initialize.call(this, x, y, width, height);
		this._defaultX = x;
		this._enemy = null;
		this._enemySprite = new Sprite();
		this._enemySprite.anchor.x = 0.5;
		this._enemySprite.anchor.y = 0.5;
		this._enemySprite.x = width / 4;
		this._enemySprite.y = width / 4 + this.lineHeight();
		this.addChildToBack(this._enemySprite);
		this.isCheck = false;
		this.refresh();
	};

	Window_EnemyBookStatus.prototype.setup = function() {
		this.x = this._defaultX;
		this.show();
		this.open();
	};

	Window_EnemyBookStatus.prototype.setupWhenCheck = function() {
		this.x = Math.floor((Graphics.boxWidth - this.width) / 2);
		this.show();
		this.open();
	};

	Window_EnemyBookStatus.prototype.setEnemy = function(enemy) {
		if (this._enemy !== enemy) {
			this._enemy = enemy;
			this.refresh();
		}
	};

	Window_EnemyBookStatus.prototype.update = function() {
		Window_Base.prototype.update.call(this);
		if (this._enemySprite.bitmap) {
			var bitmapWidth = this._enemySprite.bitmap.width;
			var contentsWidth = this.contents.width;
			var scale = 1;
			if (bitmapWidth > contentsWidth / 2) {
				scale = contentsWidth / bitmapWidth / 2;
			}
			this._enemySprite.scale.x = scale;
			this._enemySprite.scale.y = scale;
		}
	};

	Window_EnemyBookStatus.prototype.refresh = function() {
		var enemy = this._enemy;
		var column1x = 0;
		var column2x = this.contentsWidth() / 2 + this.standardPadding() / 2;
		var columnWidth = this.contentsWidth() / 2 - this.standardPadding();
		var x = 0;
		var y = 0;
		var lineHeight = this.lineHeight();

		this.contents.clear();

		if (!enemy || (!$gameTroop.inBattle() && !$gameSystem.isInEnemyBook(enemy.enemy()))) {
			this._enemySprite.bitmap = null;
			return;
		}

		
		var isUnknownEnemy = (!$gameSystem.isInEnemyBook(enemy.enemy()) && !this.isCheck);
		var dataEnemy = enemy.enemy();

		var name = enemy.battlerName();
		var hue = enemy.battlerHue();
		var bitmap;
		if ($gameSystem.isSideView()) {
			bitmap = ImageManager.loadSvEnemy(name, hue);
		} else {
			bitmap = ImageManager.loadEnemy(name, hue);
		}
		this._enemySprite.bitmap = bitmap;

		this.resetTextColor();
		this.drawText(enemy.name(), x, y, columnWidth);

		if (dataEnemy.meta.bookLevel) {
			x = column2x;
			this.resetTextColor();
			this.drawText(TextManager.levelA + " " + dataEnemy.meta.bookLevel, x, y);
		}

		x = column2x;
		y = lineHeight + this.textPadding();

		for (var i = 0; i < 8; i++) {
			if (dispParameters[i]) {
				if (i == 0 && $gameTroop.inBattle() && ($gameSystem.isShowCurrentEnemysStatus() || this.isCheck)) {
					this.changeTextColor(this.systemColor());
					this.drawText(TextManager.hpA, x, y, 60);
					if (!isUnknownEnemy) {
						this.drawActorHp(enemy, x, y, 220);
					}	else {
						this.resetTextColor();
						this.drawText(UnknownData, x + 140, y, 80);
					}
				} else if (i == 1 && $gameTroop.inBattle() && ($gameSystem.isShowCurrentEnemysStatus() || this.isCheck)) {
					this.changeTextColor(this.systemColor());
					this.drawText(TextManager.mpA, x, y, 60);
					if (!isUnknownEnemy) {
						this.drawActorMp(enemy, x, y, 220);
					}	else {
						this.resetTextColor();
						this.drawText(UnknownData, x + 140, y, 80);
					}
				} else {
					this.changeTextColor(this.systemColor());
					this.drawText(TextManager.param(i), x, y, 160);
					this.resetTextColor();
					if (!isUnknownEnemy) {
						this.drawText(enemy.param(i), x + 160, y, 60, 'right');
					} else {
						this.drawText(UnknownData, x + 140, y, 80);
					}
				}
				y += lineHeight;
			}
		}
		x = column1x;
		y = lineHeight * 6 + this.textPadding();

		if (DispDropItems) {
			for (var i = 0, l = dataEnemy.dropItems.length; i < l; i++) {
				var di = dataEnemy.dropItems[i];
				if (di.kind > 0) {
					if (!isUnknownEnemy) {
						var item = enemy.itemObject(di.kind, di.dataId);
						this.drawItemName(item, x, y, columnWidth);
					} else {
						this.drawIcon(16, x, y);
						this.drawText(UnknownData, x + 32, y);
					}
					y += lineHeight;
				}
			}
		}

		x = 0;
		y = Scene_EnemyBook.prototype.calcParameterHeight();
		var j = 0;

		for (var i = 0; i < 5; i++) {
			if (dispRates[i]) {
				switch(i) {
				case 0:
					this.drawWeakElement(x, y, columnWidth);
					break;
				case 1:
					this.drawResistElement(x, y, columnWidth);
					break;
				case 2:
					this.drawWeakStates(x, y, columnWidth);
					break;
				case 3:
					this.drawResistStates(x, y, columnWidth);
					break;
				case 4:
					this.drawNoEffectStates(x, y, columnWidth);
					break;
				}
				j++;
				if (j % 2 == 1) {
					x = column2x;
				} else {
					x = column1x;
					y += lineHeight * 2 + this.textPadding();
				}
			}
		}
		if (x == column2x) 
			y += lineHeight * 2 + this.textPadding();
		x = 0;
		
		if (!isUnknownEnemy && DispDescribe) {
			this.drawTextEx(dataEnemy.meta.desc1, x, y + lineHeight * 0);
			this.drawTextEx(dataEnemy.meta.desc2, x, y + lineHeight * 1);
		}
	};
	Window_EnemyBookStatus.prototype.findElementIcon = function(elementId) {
		if (UseElementIconInPluginParameter) {
			return ElementIcons[elementId];
		} else {
			var elementName = $dataSystem.elements[elementId];
			if (elementName.match(/\i\[(\d+)\]/i)) {
				return RegExp.$1;
			}
		}
		return 0;
	};

	Window_EnemyBookStatus.prototype.drawResistElement = function(x, y, w) {
		var enemy = this._enemy;
		var elements = $dataSystem.elements;
		var icons = [];
		var iconWidth = 32;
		var dx = 32;
		for (var i=1,l=elements.length; i < l; i++) {
			var rate = enemy.elementRate(i);
			if (rate < 1) {
				var icon = this.findElementIcon(i);
				if (icon) icons.push(icon);
			}
		}
		
		this.changeTextColor(this.systemColor());
		this.drawText(ResistElementName, x, y, w);

		if (iconWidth * icons.length > w) {
			dx = Math.floor(w / icons.length);
		}
		y+= this.lineHeight();
		if ($gameSystem.isInEnemyBook(enemy.enemy()) || this.isCheck) {
			for (var i=0,l=icons.length; i<l; i++) {
				this.drawIcon(icons[i], x, y);
				x += dx;
			}
		} else {
			this.resetTextColor();
			this.drawText(UnknownData, x, y);
		}
	};

	Window_EnemyBookStatus.prototype.drawWeakElement = function(x, y, w) {
		var enemy = this._enemy;
		var elements = $dataSystem.elements;
		var icons = [];
		var iconWidth = 32;
		var dx = 32;
		for (var i=1,l=elements.length; i < l; i++) {
			var rate = enemy.elementRate(i);
			if (rate > 1) {
				var icon = this.findElementIcon(i);
				if (icon) icons.push(icon);
			}
		}
		
		this.changeTextColor(this.systemColor());
		this.drawText(WeakElementName, x, y, w);

		if (iconWidth * icons.length > w) {
			dx = Math.floor(w / icons.length);
		}
		y+= this.lineHeight();
		
		if ($gameSystem.isInEnemyBook(enemy.enemy()) || this.isCheck) {
			for (var i=0,l=icons.length; i<l; i++) {
				this.drawIcon(icons[i], x, y);
				x += dx;
			}
		} else {
			this.resetTextColor();
			this.drawText(UnknownData, x, y);
		}
	};

	Window_EnemyBookStatus.prototype.drawResistStates = function(x, y, w) {
		var enemy = this._enemy;
		var icons = [];
		var iconWidth = 32;
		var dx = 32;
		for (var i=1,l=$dataStates.length; i<l; i++) {
			var rate = enemy.stateRate(i);
			if ((rate < 1 || enemy.isStateResist(i))&& $dataStates[i].meta.book !== "no") {
				if (dispRates[4] && (rate <= 0 || enemy.isStateResist(i))) continue;
				var icon = $dataStates[i].iconIndex;
				if (icon) icons.push(icon);
			}
		}

		
		this.changeTextColor(this.systemColor());
		this.drawText(ResistStateName, x, y, w);

		if (iconWidth * icons.length > w) {
			dx = Math.floor(w / icons.length);
		}
		y+= this.lineHeight();
		
		if ($gameSystem.isInEnemyBook(enemy.enemy()) || this.isCheck) {
			for (var i=0,l=icons.length; i<l; i++) {
				this.drawIcon(icons[i], x, y);
				x += dx;
			}
		} else {
			this.resetTextColor();
			this.drawText(UnknownData, x, y);
		}
	};
	Window_EnemyBookStatus.prototype.drawWeakStates = function(x, y, w) {
		var enemy = this._enemy;
		var icons = [];
		var iconWidth = 32;
		var dx = 32;
		for (var i=1,l=$dataStates.length; i<l; i++) {
			var rate = enemy.stateRate(i);
			if (rate > 1 && $dataStates[i].meta.book !== "no") {
				var icon = $dataStates[i].iconIndex;
				if (icon) icons.push(icon);
			}
		}

		
		this.changeTextColor(this.systemColor());
		this.drawText(WeakStateName, x, y, w);

		if (iconWidth * icons.length > w) {
			dx = Math.floor(w / icons.length);
		}
		y+= this.lineHeight();
		
		if ($gameSystem.isInEnemyBook(enemy.enemy()) || this.isCheck) {
			for (var i=0,l=icons.length; i<l; i++) {
				this.drawIcon(icons[i], x, y);
				x += dx;
			}
		} else {
			this.resetTextColor();
			this.drawText(UnknownData, x, y);
		}
	};

	Window_EnemyBookStatus.prototype.drawNoEffectStates = function(x, y, w) {
		var enemy = this._enemy;
		var icons = [];
		var iconWidth = 32;
		var dx = 32;
		for (var i=1,l=$dataStates.length; i<l; i++) {
			var rate = enemy.stateRate(i);
			if ((rate <= 0 || enemy.isStateResist(i))&& $dataStates[i].meta.book !== "no") {
				var icon = $dataStates[i].iconIndex;
				if (icon) icons.push(icon);
			}
		}

		
		this.changeTextColor(this.systemColor());
		this.drawText(NoEffectStateName, x, y, w);

		if (iconWidth * icons.length > w) {
			dx = Math.floor(w / icons.length);
		}
		y+= this.lineHeight();
		
		if ($gameSystem.isInEnemyBook(enemy.enemy()) || this.isCheck) {
			for (var i=0,l=icons.length; i<l; i++) {
				this.drawIcon(icons[i], x, y);
				x += dx;
			}
		} else {
			this.resetTextColor();
			this.drawText(UnknownData, x, y);
		}
	};
//=============================================================================
// Game_Action
//=============================================================================

	var Game_Action_prototype_apply = Game_Action.prototype.apply;
	Game_Action.prototype.apply = function(target) {
		Game_Action_prototype_apply.call(this, target);
		this.applyEnemyBookEffect(target);
	};

	Game_Action.prototype.applyEnemyBookEffect = function(target) {
		if (target.isEnemy()) {
			if (this._item.object().meta.addToEnemyBook) {
				this.addToEnemyBook(target);
			}
			if (this._item.object().meta.checkEnemyStatus) {
				this.checkEnemyStatus(target);
			}
		}
	};

	Game_Action.prototype.addToEnemyBook = function(target) {
		this.makeSuccess(target);
		if (target.enemy().meta.book !== "no") {
			$gameSystem.addToEnemyBook(target.enemyId());
			var message = AddEnemySkillMessage.replace("%1", target.name());
			if (message) {
				BattleManager._logWindow.push('addText', message);
			}
		} else {
			var message = FailToAddEnemySkillMessage.replace("%1", target.name());
			if (message) {
				BattleManager._logWindow.push('addText', message);
			}
		}
	};

	Game_Action.prototype.checkEnemyStatus = function(target) {
		this.makeSuccess(target);
		if (!(target.enemy().meta.book == "no" && !target.enemy().meta.bookCanCheck)) {
			var indexWindow = SceneManager._scene._enemyBookIndexWindow;
			var statusWindow = SceneManager._scene._enemyBookStatusWindow;
			indexWindow.enemy = target;
			statusWindow.isCheck = true;
			indexWindow.backSetup();
			statusWindow.setupWhenCheck();
		} else {
			var message = FailToCheckEnemySkillMessage.replace("%1", target.name());
			if (message) {
				BattleManager._logWindow.push('addText', message);
			}
		}
	};

})();