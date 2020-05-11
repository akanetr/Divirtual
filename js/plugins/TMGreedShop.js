//=============================================================================
// TMPlugin - 欲張りショップ
// バージョン: 2.1.1
// 最終更新日: 2017/02/16
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc お金以外にアイテムも要求されるショップ機能を追加します。
 * 
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param materialWindowWidth
 * @desc 素材ウィンドウの幅。
 * 初期値: 408
 * @default 408
 *
 * @param materialMax
 * @desc 設定できる素材の最大数。
 * 初期値: 5
 * @default 5
 *
 * @param greedCommand
 * @desc 欲張りショップの購入コマンド名。
 * 初期値: 購入する
 * @default 購入する
 * 
 * @param useKeyMaterial
 * @desc mat1タグで指定した素材をキー素材扱いにする。
 * 初期値: 0 ( 0 = 無効 / 1 = 有効 )
 * @default 0
 * 
 * @param omitSellCommand
 * @desc 購入のみの場合に売却コマンドを非表示にする。
 * 初期値: 0 ( 0 = 無効 / 1 = 有効 )
 * @default 0
 * 
 * @param hideMaterialWindow
 * @desc 素材ウィンドウを隠す。
 * 初期値: 0 ( 0 = 無効 / 1 = 有効 )
 * @default 0
 * 
 * @param hideMaterialFromNumberWindow
 * @desc 個数選択ウィンドウから素材情報を隠す。
 * 初期値: 0 ( 0 = 無効 / 1 = 有効 )
 * @default 0
 * 
 * @param hidePrice
 * @desc 商品ウィンドウの価格表示を隠す。
 * 初期値: 0 ( 0 = 無効 / 1 = 有効 )
 * @default 0
 * 
 * @param greedBuySe
 * @desc 欲張りショップで購入時に鳴らす効果音のファイル名
 * 初期値: Shop1
 * @default Shop1
 * @require 1
 * @dir audio/se/
 * @type file
 * 
 * @param greedBuySeParam
 * @desc 欲張りショップで購入時に鳴らす効果音のパラメータ
 * 初期値: {"volume":90, "pitch":100, "pan":0}
 * @default {"volume":90, "pitch":100, "pan":0}
 * 
 * @help
 * TMPlugin - 欲張りショップ ver2.1.1
 * 
 * 使い方:
 * 
 *   アイテム、武器、防具にメモ欄タグ（後述）を使って素材を設定します。
 * 
 *   イベントコマンド『プラグインコマンド』で greedShop を実行し、
 *   直後にイベントコマンド『ショップの処理』で、素材を設定したアイテムを
 *   商品として販売してください。
 * 
 *   このプラグインは RPGツクールMV Version 1.3.4 で動作確認をしています。
 *
 *  
 * プラグインコマンド:
 * 
 *   greedShop
 *     このコマンドが実行された直後にショップの処理を
 *     実行することで欲張りショップになります。
 * 
 *   greedCommand 買っちゃう
 *     欲張りショップの購入コマンド名を『買っちゃう』に変更します。
 *     この変更はセーブデータには保存されません。
 *
 * 
 * メモ欄タグ（アイテム、武器、防具）:
 * 
 *   <mat1:I1*3>
 *     お金以外にアイテム１番が３個必要になります。
 *     mat2, mat3... と素材を追加していくことができます。
 *     I の部分が W で武器、A で防具です。
 * 
 *   <matG:50>
 *     価格を50に設定します、この設定は欲張りショップが
 *     有効になっている場合にのみ購入価格として反映されます。
 *
 * 
 * メモ欄タグ（武器、防具）:
 * 
 *   <noConsume>
 *     このタグを指定した武器、防具は素材として設定しても
 *     消費されなくなります。
 *
 *     消耗設定が『しない』になっているアイテムを素材にした場合、
 *     消耗しないが必要なものとして機能します。
 * 
 * 
 * プラグインパラメータ補足:
 * 
 *   useKeyMaterial
 *     mat1 タグで指定した素材を所持していない場合、そのアイテムは
 *     ショップの商品リストから除外されます。
 *     レシピと素材からアイテムを制作するようなシチュエーションを
 *     想定しています。
 */

var Imported = Imported || {};
Imported.TMGreedShop = true;

var TMPlugin = TMPlugin || {};
TMPlugin.GreedShop = {};
TMPlugin.GreedShop.Parameters = PluginManager.parameters('TMGreedShop');
TMPlugin.GreedShop.MaterialWindowWidth = +(TMPlugin.GreedShop.Parameters['materialWindowWidth'] || 408);
TMPlugin.GreedShop.MaterialMax = +(TMPlugin.GreedShop.Parameters['materialMax'] || 5);
TMPlugin.GreedShop.GreedCommand = TMPlugin.GreedShop.Parameters['greedCommand'] || '購入する';
TMPlugin.GreedShop.UseKeyMaterial = TMPlugin.GreedShop.Parameters['useKeyMaterial'] === '1';
TMPlugin.GreedShop.OmitSellCommand = TMPlugin.GreedShop.Parameters['omitSellCommand'] === '1';
TMPlugin.GreedShop.HideMaterialWindow = TMPlugin.GreedShop.Parameters['hideMaterialWindow'] === '1';
TMPlugin.GreedShop.HideMaterialFromNumberWindow = TMPlugin.GreedShop.Parameters['hideMaterialFromNumberWindow'] === '1';
TMPlugin.GreedShop.HidePrice = TMPlugin.GreedShop.Parameters['hidePrice'] === '1';
TMPlugin.GreedShop.GreedBuySe = JSON.parse(TMPlugin.GreedShop.Parameters['greedBuySeParam'] || '{}');
TMPlugin.GreedShop.GreedBuySe.name = TMPlugin.GreedShop.Parameters['greedBuySe'] || '';

(function() {

  //-----------------------------------------------------------------------------
  // DataManager
  //

  DataManager.getGreedShopMaterials = function(item) {
    result = [];
    if (item) {
      var re = /(i|w|a)(\d+)\*(\d+)/i;
      for (var i = 1; i <= TMPlugin.GreedShop.MaterialMax; i++) {
        var key = 'mat' + i;
        if (item.meta[key]) {
          var match = re.exec(item.meta[key]);
          if (match) {
            var material = {};
            material.type = match[1];
            material.id   = +match[2];
            material.need = +match[3];
            result.push(material);
          }
        }
      }
    }
    return result;
  };
  
  DataManager.materialToItem = function(material) {
    var type = material.type.toUpperCase();
    if (type === 'I') {
      return $dataItems[material.id];
    } else if (type === 'W') {
      return $dataWeapons[material.id];
    } else if (type === 'A') {
      return $dataArmors[material.id];
    }
    return null;
  };
  
  DataManager.isConsumableMaterial = function(item) {
    if (item.consumable) return true;
    if (!this.isItem(item) && !item.meta.noConsume) return true;
    return false;
  };

  //-----------------------------------------------------------------------------
  // Game_Temp
  //

  Game_Temp.prototype.setGreedShop = function(flag) {
    this._greedShop = flag;
  };

  Game_Temp.prototype.isGreedShop = function() {
    return this._greedShop ? true : false;
  };
  
  Game_Temp.prototype.setGreedCommand = function(text) {
    this._greedCommand = text;
  };
  
  Game_Temp.prototype.greedCommand = function() {
    return this._greedCommand || TMPlugin.GreedShop.GreedCommand;
  };
  
  //-----------------------------------------------------------------------------
  // Game_Interpreter
  //

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'greedShop') {
      $gameTemp.setGreedShop(true);
    } else if (command === 'greedCommand') {
      $gameTemp.setGreedCommand(args[0]);
    }
  };

  //-----------------------------------------------------------------------------
  // Window_ShopCommand
  //

  var _Window_ShopCommand_maxCols = Window_ShopCommand.prototype.maxCols;
  Window_ShopCommand.prototype.maxCols = function() {
    return TMPlugin.GreedShop.OmitSellCommand && this._purchaseOnly ? 2 :
           _Window_ShopCommand_maxCols.call(this);
  };

  var _Window_ShopCommand_makeCommandList = Window_ShopCommand.prototype.makeCommandList;
  Window_ShopCommand.prototype.makeCommandList = function() {
    if ($gameTemp.isGreedShop()) {
      this.addCommand($gameTemp.greedCommand(), 'buy');
      if (!TMPlugin.GreedShop.OmitSellCommand || !this._purchaseOnly) {
        this.addCommand(TextManager.sell, 'sell', !this._purchaseOnly);
      }
      this.addCommand(TextManager.cancel, 'cancel');
    } else {
      _Window_ShopCommand_makeCommandList.call(this);
    }
  };
  
  //-----------------------------------------------------------------------------
  // Window_ShopBuy
  //

  var _Window_ShopBuy_price = Window_ShopBuy.prototype.price;
  Window_ShopBuy.prototype.price = function(item) {
    if ($gameTemp.isGreedShop() && item.meta.matG) {
      return +item.meta.matG;
    } else {
      return _Window_ShopBuy_price.call(this, item);
    }
  };

  var _Window_ShopBuy_isEnabled = Window_ShopBuy.prototype.isEnabled;
  Window_ShopBuy.prototype.isEnabled = function(item) {
    var result = _Window_ShopBuy_isEnabled.call(this, item);
    if (result && $gameTemp.isGreedShop()) {
      var re = /(i|w|a)(\d+)\*(\d+)/i;
      for (var i = 1; i <= TMPlugin.GreedShop.MaterialMax; i++) {
        var key = 'mat' + i;
        if (item.meta[key]) {
          var match = re.exec(item.meta[key]);
          if (match) {
            var type = match[1].toUpperCase();
            if (type === 'I') {
              var matItem = $dataItems[+match[2]];
            } else if (type === 'W') {
              var matItem = $dataWeapons[+match[2]];
            } else if (type === 'A') {
              var matItem = $dataArmors[+match[2]];
            }
            if (matItem && $gameParty.numItems(matItem) < +match[3]) {
              return false;
            }
          }
        }
      }
    }
    return result;
  };

  var _Window_ShopBuy_update = Window_ShopBuy.prototype.update;
  Window_ShopBuy.prototype.update = function() {
    _Window_ShopBuy_update.call(this);
    if (this.active && this._materialWindow) {
      this._materialWindow.setShopItem(this.item());
      var x = this.x + this.width / 2;
      var y = this.y + this.padding;
      var lineHeight = this.lineHeight();
      y += (this.index() - this.topRow() + 1) * lineHeight;
      this._materialWindow.setPosition(x, y, lineHeight);
    }
  };
  
  var _Window_ShopBuy_makeItemList = Window_ShopBuy.prototype.makeItemList;
  Window_ShopBuy.prototype.makeItemList = function() {
    _Window_ShopBuy_makeItemList.call(this);
    if (TMPlugin.GreedShop.UseKeyMaterial) {
      for (var i = this._data.length - 1; i >= 0; i--) {
        var item = this._data[i];
        var material = DataManager.getGreedShopMaterials(item)[0];
        if (material && !$gameParty.hasItem(DataManager.materialToItem(material), false)) {
          this._data.splice(i, 1);
          this._price.splice(i, 1);
        }
      }
    }
  };

  var _Window_ShopBuy_drawItem = Window_ShopBuy.prototype.drawItem;
  Window_ShopBuy.prototype.drawItem = function(index) {
    if ($gameTemp.isGreedShop() && TMPlugin.GreedShop.HidePrice) {
      var item = this._data[index];
      var rect = this.itemRect(index);
      rect.width -= this.textPadding();
      this.changePaintOpacity(this.isEnabled(item));
      this.drawItemName(item, rect.x, rect.y, rect.width);
      this.changePaintOpacity(true);
    } else {
      _Window_ShopBuy_drawItem.call(this, index);
    }
  };

  Window_ShopBuy.prototype.setMaterialWindow = function(materialWindow) {
    this._materialWindow = materialWindow;
  };
  
  //-----------------------------------------------------------------------------
  // Window_ShopNumber
  //

  var _Window_ShopNumber_refresh = Window_ShopNumber.prototype.refresh;
  Window_ShopNumber.prototype.refresh = function() {
    _Window_ShopNumber_refresh.call(this);
    if ($gameTemp.isGreedShop() && !TMPlugin.GreedShop.HideMaterialFromNumberWindow) {
      this.drawTotalMaterial();
    }
  };
  
  var _Window_ShopNumber_itemY = Window_ShopNumber.prototype.itemY;
  Window_ShopNumber.prototype.itemY = function() {
    return $gameTemp.isGreedShop() && !TMPlugin.GreedShop.HideMaterialFromNumberWindow ?
           0 : _Window_ShopNumber_itemY.call(this);
  };

  var _Window_ShopNumber_priceY = Window_ShopNumber.prototype.priceY;
  Window_ShopNumber.prototype.priceY = function() {
    return $gameTemp.isGreedShop() && !TMPlugin.GreedShop.HideMaterialFromNumberWindow ?
           this.lineHeight() * 1.5 : _Window_ShopNumber_priceY.call(this);
  };

  var _Window_ShopNumber_buttonY = Window_ShopNumber.prototype.buttonY;
  Window_ShopNumber.prototype.buttonY = function() {
    if ($gameTemp.isGreedShop() && !TMPlugin.GreedShop.HideMaterialFromNumberWindow) {
      return Math.min(this.priceY() + this.lineHeight() * (TMPlugin.GreedShop.MaterialMax + 3),
                      this.contents.height - this.lineHeight());
    }
    return _Window_ShopNumber_buttonY.call(this);
  };

  Window_ShopNumber.prototype.drawTotalMaterial = function() {
    var materials = DataManager.getGreedShopMaterials(this._item);
    for (var i = 0; i < materials.length; i++) {
      var material = materials[i];
      var item = DataManager.materialToItem(material);
      var y = this.lineHeight() * (i + 2.5);
      this.drawItemName(item, 0, y);
      var need = material.need * this._number;
      var n = $gameParty.numItems(item);
      var text = DataManager.isConsumableMaterial(item) ? '' + need + '/' : '--/';
      text += ('   ' + n).substr(-3);
      this.drawText(text, 0, y, this.contents.width - this.textPadding(), 'right');
    }
  };

  //-----------------------------------------------------------------------------
  // Window_Material
  //

  function Window_Material() {
    this.initialize.apply(this, arguments);
  }

  Window_Material.prototype = Object.create(Window_Base.prototype);
  Window_Material.prototype.constructor = Window_Material;

  Window_Material.prototype.initialize = function() {
    this._materials = [];
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this.hide();
  };

  Window_Material.prototype.windowWidth = function() {
    return TMPlugin.GreedShop.MaterialWindowWidth;
  };

  Window_Material.prototype.windowHeight = function() {
    var n = this._materials.length;
    return this.fittingHeight(n);
  };

  var _Window_Material_show = Window_Material.prototype.show;
  Window_Material.prototype.show = function() {
    _Window_Material_show.call(this);
    if (this._materials.length === 0) this.visible = false;
  };
  
  Window_Material.prototype.materials = function() {
    return this._materials;
  };
  
  Window_Material.prototype.setShopItem = function(item) {
    if (this._shopItem !== item) {
      this._shopItem = item;
      this._materials = DataManager.getGreedShopMaterials(item);
      if (this._materials.length > 0) this.refresh();
      if (!TMPlugin.GreedShop.HideMaterialWindow) this.show();
    }
  };
  
  Window_Material.prototype.setPosition = function(x, y, lineHeight) {
    if (this.visible) {
      this.x = x - this.width / 2;
      this.y = y;
      if (this.y + this.height > Graphics.boxHeight) {
        this.y = y - this.height - lineHeight;
      }
    }
  };
  
  Window_Material.prototype.refresh = function() {
    this.move(this.x, this.y, this.width, this.windowHeight());
    this.createContents();
    for (var i = 0; i < this._materials.length; i++) {
      var material = this._materials[i];
      var item = DataManager.materialToItem(material);
      var need = material.need;
      var n = $gameParty.numItems(item);
      this.changePaintOpacity(n >= need);
      this.drawItemName(item, 0, this.lineHeight() * i);
      var text = DataManager.isConsumableMaterial(item) ? '' + need + '/' : '--/';
      text += ('   ' + n).substr(-3);
      this.drawText(text, 0, this.lineHeight() * i, this.contents.width, 'right');
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_Shop
  //

  var _Scene_Shop_terminate = Scene_Shop.prototype.terminate;
  Scene_Shop.prototype.terminate = function() {
    _Scene_Shop_terminate.call(this);
    $gameTemp.setGreedShop(false);
  };

  var _Scene_Shop_create = Scene_Shop.prototype.create;
  Scene_Shop.prototype.create = function() {
    _Scene_Shop_create.call(this);
    if ($gameTemp.isGreedShop()) this.createMaterialWindow();
  };

  Scene_Shop.prototype.createMaterialWindow = function() {
    this._materialWindow = new Window_Material();
    this._buyWindow.setMaterialWindow(this._materialWindow);
    this.addWindow(this._materialWindow);
  };

  var _Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
  Scene_Shop.prototype.onBuyOk = function() {
    _Scene_Shop_onBuyOk.call(this);
    if (this._materialWindow) this._materialWindow.hide();
  };
  
  var _Scene_Shop_onBuyCancel = Scene_Shop.prototype.onBuyCancel;
  Scene_Shop.prototype.onBuyCancel = function() {
    _Scene_Shop_onBuyCancel.call(this);
    if (this._materialWindow) this._materialWindow.setShopItem(null);
  };

  var _Scene_Shop_onNumberOk = Scene_Shop.prototype.onNumberOk;
  Scene_Shop.prototype.onNumberOk = function() {
    if ($gameTemp.isGreedShop() && this._commandWindow.currentSymbol() === 'buy') {
      AudioManager.playSe(TMPlugin.GreedShop.GreedBuySe);
      this.doBuy(this._numberWindow.number());
      this.endNumberInput();
      this._goldWindow.refresh();
      this._statusWindow.refresh();
    } else {
      _Scene_Shop_onNumberOk.call(this);
    }
  };

  var _Scene_Shop_doBuy = Scene_Shop.prototype.doBuy;
  Scene_Shop.prototype.doBuy = function(number) {
    _Scene_Shop_doBuy.call(this, number);
    if (this._materialWindow) {
      var materials = this._materialWindow.materials();
      for (var i = 0; i < materials.length; i++) {
        var material = materials[i];
        var item = DataManager.materialToItem(material);
        if (DataManager.isConsumableMaterial(item)) {
          $gameParty.loseItem(item, material.need * number);
        }
      }
      this._materialWindow.refresh();
    }
  };

  var _Scene_Shop_maxBuy = Scene_Shop.prototype.maxBuy;
  Scene_Shop.prototype.maxBuy = function() {
    var result = _Scene_Shop_maxBuy.call(this);
    if (this._materialWindow) {
      var materials = this._materialWindow.materials();
      for (var i = 0; i < materials.length; i++) {
        var material = materials[i];
        var item = DataManager.materialToItem(material);
        if (DataManager.isConsumableMaterial(item)) {
          var n = $gameParty.numItems(item);
          result = Math.min(result, Math.floor(n / material.need));
        }
      }
    }
    return result;
  };

  var _Scene_Shop_endNumberInput = Scene_Shop.prototype.endNumberInput;
  Scene_Shop.prototype.endNumberInput = function() {
    _Scene_Shop_endNumberInput.call(this);
    if (this._materialWindow && !TMPlugin.GreedShop.HideMaterialWindow) {
      this._materialWindow.show();
    }
  };

})();
