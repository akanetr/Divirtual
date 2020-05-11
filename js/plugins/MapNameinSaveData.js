// --------------------------------------------------------------------------
// 
// MapNameinSaveData.js
//
// Copyright (c) kotonoha*
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
// 2016/06/13 ver1.0 プラグイン公開
// 
// --------------------------------------------------------------------------
/*:
 * @plugindesc セーブデータ上に現在マップ名を載せるプラグイン
 * @author kotonoha*
 * @help セーブデータ上に現在マップの表示名を載せるプラグインです。
 * 
 */

(function() {

	DataManager.makeSavefileInfo = function() {
	    var info = {};
	    info.globalId   = this._globalId;
		info.title      = $dataSystem.gameTitle;
		info.mapname    = $gameMap.displayName();
	    info.characters = $gameParty.charactersForSavefile();
	    info.faces      = $gameParty.facesForSavefile();
	    info.playtime   = $gameSystem.playtimeText();
	    info.timestamp  = Date.now();
	    return info;
	};

	Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
	    var bottom = rect.y + rect.height;
	    if (rect.width >= 420) {
	        this.drawGameMapName(info, rect.x + 192, rect.y, rect.width - 192);
	        if (valid) {
	            this.drawPartyCharacters(info, rect.x + 220, bottom - 4);
	        }
	    }
	    var lineHeight = this.lineHeight();
	    var y2 = bottom - lineHeight;
	    if (y2 >= lineHeight) {
	        this.drawPlaytime(info, rect.x + 190, rect.y, rect.width - 192);
	    }
	};

	Window_SavefileList.prototype.drawGameMapName = function(info, x, y, width) {
	    if (info.mapname) {
	        this.drawText(info.mapname, x, y, width);
	    }
	};

})();