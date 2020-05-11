//=============================================================================
// XPStyleBattle for MV
//=============================================================================
/*:
 * @plugindesc XPStyleBattle for MV Build171029
 * @author Momomaru Remix / Peachround
 *
 * @help Please refer to: http://peachround.com/mv/xpb4mv/
 *
 *
 *
 * @param (string)hud.themeFileName
 * @type string
 * @desc HUD theme file path that placed in data folder.  [Default: empty string]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (string)battlerGraphic.rootPath
 * @type string
 * @desc Battler graphics image path. [Default: img/battlergraphics/]
 *
 * @param (boolean)battlerGraphic.enableAnimation
 * @type boolean
 * @desc Enable animation for actor. [Front view only] [Default: true]
 *
 * @param (boolean)battlerGraphic.enablePopup
 * @type boolean
 * @desc Enable popup for actor.  [Front view only] [Default: true]
 *
 * @param (integer)battlerGraphic.damageDuration
 * @type number
 * @min 1
 * @max 4096
 * @desc Duration to display Damage BattlerGraphic. [Default: 24]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (integer)animation.playRate
 * @type number
 * @min 1
 * @max 8
 * @desc Animation play speed. 1: 4/1 2: 2/1 3: 4/3 4: 1/1 [Default: 4]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (string)targetCursor.fileName
 * @type file
 * @dir img/system
 * @desc The file name of the cursor image. [Default: bdskin_cursor00]
 *
 * @param (integer)targetCursor.width
 * @type number
 * @min 0
 * @max 4096
 * @desc Width per pattern. 0: Auto [Default: 0]
 *
 * @param (integer)targetCursor.animationSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc The smaller the value, the faster. [Default: 4]
 *
 * @param (integer)targetCursor.moveSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc The smaller the value, the faster. [Default: 4]
 *
 * @param (integer)targetCursor.minY
 * @type number
 * @min 0
 * @max 4096
 * @desc The minimum value of y coordinate. [Default: 72]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (integer)targetInformation.gaugeWidth
 * @type number
 * @min 1
 * @max 4096
 * @desc Each gauge width. [Default: 112]
 *
 * @param (string)targetInformation.scopeNotation.forParty
 * @type string
 * @desc Scope notation of for party. [Default: 味方全体]
 *
 * @param (string)targetInformation.scopeNotation.forTroop
 * @type string
 * @desc Scope notation of for troop. [Default: 敵全体]
 *
 * @param (string)targetInformation.scopeNotation.forTroopRandom
 * @type string
 * @desc Scope notation of for random enemies. %1 is random number. [Default: 敵%1体 ランダム]
 *
 * @param (boolean)targetInformation.actor.states
 * @type boolean
 * @desc Display actor's state icon. [Default: true]
 *
 * @param (boolean)targetInformation.actor.hp
 * @type boolean
 * @desc Display actor's hp. [Default: true]
 *
 * @param (boolean)targetInformation.actor.mp
 * @type boolean
 * @desc Display actor's mp. [Default: true]
 *
 * @param (boolean)targetInformation.actor.tp
 * @type boolean
 * @desc Display actor's tp. [Default: true]
 *
 * @param (boolean)targetInformation.enemy.states
 * @type boolean
 * @desc Display enemy's state icon. [Default: true]
 *
 * @param (boolean)targetInformation.enemy.hp
 * @type boolean
 * @desc Display enemy's hp. [Default: false]
 *
 * @param (boolean)targetInformation.enemy.mp
 * @type boolean
 * @desc Display enemy's mp. [Default: false]
 *
 * @param (boolean)targetInformation.enemy.tp
 * @type boolean
 * @desc Display enemy's tp. [Default: false]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (boolean)battleMessage.enemyEmergeMessage
 * @type boolean
 * @desc Display enemy emergence message at the battle start. [Default: false]
 *
 * @param (boolean)battleMessage.simpleBattleLog.useSimpleBattleLog
 * @type boolean
 * @desc Enable simple battle log. [Default: true]
 *
 * @param (boolean)battleMessage.simpleBattleLog.displayAttack
 * @type boolean
 * @desc Display normal attack in the log. [Default: true]
 *
 * @param (boolean)battleMessage.simpleBattleLog.displayGuard
 * @type boolean
 * @desc Display guard in the log. [Default: true]
 *
 * @param (boolean)battleMessage.simpleBattleLog.drawIcon
 * @type boolean
 * @desc Draw an icon with the action name. [Default: true]
 *
 * @param (integer)battleMessage.simpleBattleLog.align
 * @type number
 * @min 0
 * @max 2
 * @desc Text horizontal alignment. 0: Left 1: Center 2: Right [Default: 1]
 *
 * @param (string)battleMessage.simpleBattleLog.descriptionDelimiter
 * @type string
 * @desc Delimiter between action name and action description. [Default: ' : ']
 *
 * @param (integer)battleMessage.simpleBattleLog.descriptionFontSize
 * @type number
 * @min 0
 * @max 128
 * @desc Font size of action description. 0: The same font size as the action name [Default: 0]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (boolean)windowLayout.itemSkill.fitting
 * @type boolean
 * @desc Fit height according to the number of items. [Default: true]
 *
 * @param (boolean)windowLayout.itemSkill.maxHeight
 * @type boolean
 * @desc Maximum height of item/skill window. [Default: 320]
 *
 * @param (integer)windowLayout.actorCommand.absolutePosition.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The absolute x coordinate. undefiled: apply relative position from actor [Default: undefined]
 *
 * @param (integer)windowLayout.actorCommand.absolutePosition.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The absolute y coordinate. undefiled: apply relative position from actor [Default: undefined]
 *
 * @param (integer)windowLayout.actorCommand.adjustPosition.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment x coordinate. [Default: 0]
 *
 * @param (integer)windowLayout.actorCommand.adjustPosition.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The adjustment y coordinate. [Default: -32]
 *
 * @param (integer)windowLayout.actorCommand.width
 * @type number
 * @min 1
 * @max 4096
 * @desc The width. [Default: 192]
 *
 * @param (boolean)windowLayout.actorCommand.heightFitting
 * @type boolean
 * @desc Fit height according to the number of items. [Default: true]
 *
 * @param (integer)windowLayout.actorCommand.visibleRows
 * @type number
 * @min 1
 * @max 64
 * @desc Number of rows to display. [Only heightFitting = false] [Default: 4]
 *
 * @param (boolean)windowLayout.actorCommand.isHorizontal
 * @type boolean
 * @desc Enable horizontal command. [Default: false]
 *
 * @param (integer)windowLayout.actorCommand.maxCols
 * @type number
 * @min 1
 * @max 64
 * @desc The max number of column. [Only isHorizontal = false] [Default: 1]
 *
 * @param (string)windowLayout.actorCommand.itemAlign
 * @type string
 * @desc Alignment of items. parameter  = left or center or right [Default: left]
 *
 * @param (integer)windowLayout.partyCommand.position.x
 * @type number
 * @min -4096
 * @max 4096
 * @desc The x coordinate. [Default: undefined]
 *
 * @param (integer)windowLayout.partyCommand.position.y
 * @type number
 * @min -4096
 * @max 4096
 * @desc The y coordinate. [Default: undefined]
 *
 * @param (integer)windowLayout.partyCommand.width
 * @type number
 * @min 1
 * @max 4096
 * @desc The width. undefined: game screen width [Default: undefined]
 *
 * @param (boolean)windowLayout.partyCommand.heightFitting
 * @type boolean
 * @desc Fit height according to the number of items. [Default: false]
 *
 * @param (integer)windowLayout.partyCommand.visibleRows
 * @type number
 * @min 1
 * @max 64
 * @desc Number of rows to display. [Only heightFitting = false] [Default: 1]
 *
 * @param (boolean)windowLayout.partyCommand.isHorizontal
 * @type boolean
 * @desc Enable horizontal command. [Default: true]
 *
 * @param (integer)windowLayout.partyCommand.maxCols
 * @type number
 * @min 1
 * @max 64
 * @desc The max number of column. [Only isHorizontal = false] [Default: 2]
 *
 * @param (string)windowLayout.partyCommand.itemAlign
 * @type string
 * @desc Alignment of items. parameter  = left or center or right [Default: center]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (integer)battleSpeed.basicSpeed
 * @type number
 * @min 1
 * @max 128
 * @desc The smaller the value, the faster. [Default: 12]
*
 * @param (boolean)battleSpeed.animationFastForward
 * @type boolean
 * @desc Enable fast forward of animation. [Default: true]
 *
 * @param (boolean)battleSpeed.animationDelayFastForward
 * @type boolean
 * @desc Enable fast forward of animation delay. [Default: true]
 *
 * @param (integer)battleSpeed.actorStepDuration
 * @type number
 * @min 1
 * @max 128
 * @desc The time that the actor takes a small move. [Side view only] [Default: 6]
 *
 * @param (integer)battleSpeed.animationSkipDuration
 * @type number
 * @min 0
 * @max 4096
 * @desc If animation's remaining duration falls below this value, skip the animation. [Default: 8]
 *
 * @param (boolean)battleSpeed.skipBlinkEffect
 * @desc Enable skip of blink effect. [Default: true]
 *
 * ----------------------------------------------------------------------------
 *
 * @param (boolean)minorFixes.enableSelectionEffect
 * @type boolean
 * @desc Enable selection effect for battler. [Default: true]
 *
 */

"use strict";

(function () {
    if (!Array.prototype.find) {
        Array.prototype.find = function (callback, thisArg) {
            if (this === null) {
                throw new TypeError("Array.prototype.find called on null or undefined");
            }
            if (typeof callback !== "function") {
                throw new TypeError("Callback must be a function");
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var value;
            for (var i = 0; i < length; i++) {
                value = list[i];
                if (callback.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }
})();

(function () {
    var TO_RADIANS = Math.PI / 180;
    var TO_DEGREES = 180 / Math.PI;
    if (!Math.radians) {
        Math.radians = function (degrees) { return degrees * TO_RADIANS; };
    }
    if (!Math.degrees) {
        Math.degrees = function (radians) { return radians * TO_DEGREES; };
    }
})();

(function () {
    if (!Object.assign) {
        Object.assign = function (target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            if (target === undefined || target === null) {
                throw new TypeError("Cannot convert undefined or null to object");
            }
            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        };
    }
})();


var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Consts;
        (function (Consts) {
            var Enums;
            (function (Enums) {
                var Mode;
                (function (Mode) {
                    Mode[Mode["Game"] = 0] = "Game";
                    Mode[Mode["Preview"] = 1] = "Preview";
                    Mode[Mode["Studio"] = 2] = "Studio";
                })(Mode = Enums.Mode || (Enums.Mode = {}));
                var VerticalAlignment;
                (function (VerticalAlignment) {
                    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
                    VerticalAlignment[VerticalAlignment["Middle"] = 1] = "Middle";
                    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
                })(VerticalAlignment = Enums.VerticalAlignment || (Enums.VerticalAlignment = {}));
                var HorizontalAlignment;
                (function (HorizontalAlignment) {
                    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
                    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
                    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
                })(HorizontalAlignment = Enums.HorizontalAlignment || (Enums.HorizontalAlignment = {}));
                var Directions;
                (function (Directions) {
                    Directions[Directions["NoDirection"] = 0] = "NoDirection";
                    Directions[Directions["LeftDown"] = 1] = "LeftDown";
                    Directions[Directions["Down"] = 2] = "Down";
                    Directions[Directions["RightDown"] = 3] = "RightDown";
                    Directions[Directions["Left"] = 4] = "Left";
                    Directions[Directions["Center"] = 5] = "Center";
                    Directions[Directions["Right"] = 6] = "Right";
                    Directions[Directions["LeftUp"] = 7] = "LeftUp";
                    Directions[Directions["Up"] = 8] = "Up";
                    Directions[Directions["RightUp"] = 9] = "RightUp";
                })(Directions = Enums.Directions || (Enums.Directions = {}));
                var DamagePopupTypes;
                (function (DamagePopupTypes) {
                    DamagePopupTypes[DamagePopupTypes["Normal"] = 0] = "Normal";
                    DamagePopupTypes[DamagePopupTypes["Miss"] = 1] = "Miss";
                    DamagePopupTypes[DamagePopupTypes["Evasion"] = 2] = "Evasion";
                    DamagePopupTypes[DamagePopupTypes["Counter"] = 3] = "Counter";
                    DamagePopupTypes[DamagePopupTypes["Reflection"] = 4] = "Reflection";
                    DamagePopupTypes[DamagePopupTypes["Substitute"] = 5] = "Substitute";
                    DamagePopupTypes[DamagePopupTypes["HpDamage"] = 16] = "HpDamage";
                    DamagePopupTypes[DamagePopupTypes["HpCriticalDamage"] = 17] = "HpCriticalDamage";
                    DamagePopupTypes[DamagePopupTypes["HpRecover"] = 18] = "HpRecover";
                    DamagePopupTypes[DamagePopupTypes["MpDamage"] = 32] = "MpDamage";
                    DamagePopupTypes[DamagePopupTypes["MpCriticalDamage"] = 33] = "MpCriticalDamage";
                    DamagePopupTypes[DamagePopupTypes["MpRecover"] = 34] = "MpRecover";
                    DamagePopupTypes[DamagePopupTypes["TpDamage"] = 48] = "TpDamage";
                    DamagePopupTypes[DamagePopupTypes["TpCriticalDamage"] = 49] = "TpCriticalDamage";
                    DamagePopupTypes[DamagePopupTypes["TpRecover"] = 50] = "TpRecover";
                    DamagePopupTypes[DamagePopupTypes["AddState"] = 64] = "AddState";
                    DamagePopupTypes[DamagePopupTypes["AddPositiveState"] = 65] = "AddPositiveState";
                    DamagePopupTypes[DamagePopupTypes["AddNegativeState"] = 66] = "AddNegativeState";
                    DamagePopupTypes[DamagePopupTypes["RemoveState"] = 80] = "RemoveState";
                    DamagePopupTypes[DamagePopupTypes["RemovePositiveState"] = 81] = "RemovePositiveState";
                    DamagePopupTypes[DamagePopupTypes["RemoveNegativeState"] = 82] = "RemoveNegativeState";
                    DamagePopupTypes[DamagePopupTypes["AddBuff"] = 96] = "AddBuff";
                    DamagePopupTypes[DamagePopupTypes["AddDebuff"] = 97] = "AddDebuff";
                    DamagePopupTypes[DamagePopupTypes["RemoveBuff"] = 112] = "RemoveBuff";
                    DamagePopupTypes[DamagePopupTypes["RemoveDebuff"] = 113] = "RemoveDebuff";
                    DamagePopupTypes[DamagePopupTypes["Effective"] = 256] = "Effective";
                    DamagePopupTypes[DamagePopupTypes["NotEffective"] = 257] = "NotEffective";
                })(DamagePopupTypes = Enums.DamagePopupTypes || (Enums.DamagePopupTypes = {}));
                var ConditionalBattlerGraphicKind;
                (function (ConditionalBattlerGraphicKind) {
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["state"] = 128] = "state";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["crisis"] = 256] = "crisis";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["command"] = 512] = "command";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["ready"] = 513] = "ready";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["guard"] = 514] = "guard";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["chanting"] = 515] = "chanting";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["skill"] = 1024] = "skill";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["item"] = 1025] = "item";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["damage"] = 2048] = "damage";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["victory"] = 2049] = "victory";
                    ConditionalBattlerGraphicKind[ConditionalBattlerGraphicKind["dead"] = 4096] = "dead";
                })(ConditionalBattlerGraphicKind = Enums.ConditionalBattlerGraphicKind || (Enums.ConditionalBattlerGraphicKind = {}));
                var Languages;
                (function (Languages) {
                    Languages[Languages["English"] = 0] = "English";
                    Languages[Languages["Japanese"] = 1] = "Japanese";
                })(Languages = Enums.Languages || (Enums.Languages = {}));
            })(Enums = Consts.Enums || (Consts.Enums = {}));
        })(Consts = Core.Consts || (Core.Consts = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var $BDHUD;
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Settings;
        (function (Settings) {
            var _defaultHudData = {
                "properties": {
                    "type": "Root",
                    "name": "StandardMVbeta",
                    "x": 0,
                    "y": 0,
                    "visible": true
                },
                "children": [
                    {
                        "properties": {
                            "type": "PartyStatusContainer",
                            "name": "Party",
                            "x": 0,
                            "y": 452,
                            "visible": true,
                            "width": 200
                        },
                        "children": [
                            {
                                "properties": {
                                    "type": "Image",
                                    "name": "Shadow",
                                    "x": -4,
                                    "y": 6,
                                    "visible": true,
                                    "fileName": "'bd_beta/shadow'"
                                },
                                "children": []
                            },
                            {
                                "properties": {
                                    "type": "Battler",
                                    "name": "Battler",
                                    "x": 72,
                                    "y": 162,
                                    "visible": true,
                                    "maskImage": "''",
                                    "maskImageX": 0,
                                    "maskImageY": 0
                                },
                                "children": []
                            },
                            {
                                "properties": {
                                    "type": "Container",
                                    "name": "HPMPTPContainer",
                                    "x": 92,
                                    "y": 20,
                                    "visible": true
                                },
                                "children": [
                                    {
                                        "properties": {
                                            "type": "Image",
                                            "name": "MPBase",
                                            "x": 0,
                                            "y": 118,
                                            "visible": true,
                                            "fileName": "'bd_beta/base_mp'"
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "Image",
                                            "name": "HPBase",
                                            "x": 0,
                                            "y": 80,
                                            "visible": true,
                                            "fileName": "'bd_beta/base_hp'"
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "HorizontalGauge",
                                            "name": "HPGaugeRed",
                                            "x": 6,
                                            "y": 95,
                                            "visible": true,
                                            "fileName": "'bd_beta/gauge_hp'",
                                            "value": "this.b.hp",
                                            "maxValue": "this.b.hudMhp()",
                                            "pattern": 1,
                                            "maxPattern": 2,
                                            "animationSpeed": 128
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "HorizontalGauge",
                                            "name": "HPGauge",
                                            "x": 6,
                                            "y": 95,
                                            "visible": true,
                                            "fileName": "'bd_beta/gauge_hp'",
                                            "value": "this.b.hp",
                                            "maxValue": "this.b.hudMhp()",
                                            "pattern": 0,
                                            "maxPattern": 2,
                                            "animationSpeed": 16
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "Number",
                                            "name": "HPNumber",
                                            "x": 20,
                                            "y": 64,
                                            "visible": true,
                                            "fileName": "'bd_beta/number_a'",
                                            "value": "this.b.hp",
                                            "maxValue": 100,
                                            "pattern": "this.b.hudHpNumberPattern()",
                                            "maxPattern": 3,
                                            "digits": 4,
                                            "spacing": -4,
                                            "zeroSuppress": true,
                                            "horizontalAlignment": 2,
                                            "animationSpeed": 16
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "HorizontalGauge",
                                            "name": "MPGaugeRed",
                                            "x": 6,
                                            "y": 133,
                                            "visible": true,
                                            "fileName": "'bd_beta/gauge_mp'",
                                            "value": "this.b.mp",
                                            "maxValue": "this.b.hudMmp()",
                                            "pattern": 1,
                                            "maxPattern": 2,
                                            "animationSpeed": 128
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "HorizontalGauge",
                                            "name": "MPGauge",
                                            "x": 6,
                                            "y": 133,
                                            "visible": true,
                                            "fileName": "'bd_beta/gauge_mp'",
                                            "value": "this.b.mp",
                                            "maxValue": "this.b.hudMmp()",
                                            "pattern": 0,
                                            "maxPattern": 2,
                                            "animationSpeed": 16
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "Number",
                                            "name": "MPNumber",
                                            "x": 20,
                                            "y": 102,
                                            "visible": true,
                                            "fileName": "'bd_beta/number_a'",
                                            "value": "this.b.mp",
                                            "maxValue": "this.b.hudMmp()",
                                            "pattern": 0,
                                            "maxPattern": 3,
                                            "digits": 4,
                                            "spacing": -4,
                                            "zeroSuppress": true,
                                            "horizontalAlignment": 2,
                                            "animationSpeed": 16
                                        },
                                        "children": []
                                    },
                                    {
                                        "properties": {
                                            "type": "Container",
                                            "name": "TPContainer",
                                            "x": 0,
                                            "y": 0,
                                            "visible": "BD.Core.Settings.isDisplayTp()"
                                        },
                                        "children": [
                                            {
                                                "properties": {
                                                    "type": "Image",
                                                    "name": "TPBase",
                                                    "x": 22,
                                                    "y": 0,
                                                    "visible": true,
                                                    "fileName": "'bd_beta/base_tp2'"
                                                },
                                                "children": []
                                            },
                                            {
                                                "properties": {
                                                    "type": "CircleGauge",
                                                    "name": "TPGauge",
                                                    "x": 22,
                                                    "y": 0,
                                                    "visible": true,
                                                    "fileName": "'bd_beta/gauge_tp2'",
                                                    "value": "this.b.tp",
                                                    "maxValue": "this.b.maxTp()",
                                                    "startAngle": -88,
                                                    "endAngle": 272,
                                                    "radius": 24,
                                                    "lineWidth": 16,
                                                    "animationSpeed": 16
                                                },
                                                "children": []
                                            },
                                            {
                                                "properties": {
                                                    "type": "Number",
                                                    "name": "TPNumber",
                                                    "x": 31,
                                                    "y": 24,
                                                    "visible": true,
                                                    "fileName": "'bd_beta/number_b'",
                                                    "value": "this.b.tp",
                                                    "maxValue": "this.b.maxTp()",
                                                    "pattern": 0,
                                                    "maxPattern": 3,
                                                    "digits": 3,
                                                    "spacing": -4,
                                                    "zeroSuppress": true,
                                                    "horizontalAlignment": "1",
                                                    "animationSpeed": 16
                                                },
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "properties": {
                                    "type": "StateIcon",
                                    "name": "StateIcon",
                                    "x": 0,
                                    "y": 12,
                                    "visible": true,
                                    "maxStates": 2,
                                    "isVertical": false,
                                    "animationSpeed": 40
                                },
                                "children": []
                            }
                        ]
                    }
                ]
            };
            var _defaultColors = [
                { bodyColor: "rgba(250,250,250,1.0)", outlineColor: "rgba(0,0,0,1.0)" },
                { bodyColor: "rgba(160,250,108,1.0)", outlineColor: "rgba(0,72,32,1.0)" },
                { bodyColor: "rgba(192,96,232,1.0)", outlineColor: "rgba(0,0,0,1.0)" },
                { bodyColor: "rgba(172,232,250,1.0)", outlineColor: "rgba(40,64,168,1.0)" },
                { bodyColor: "rgba(224,224,72,1.0)", outlineColor: "rgba(0,80,80,1.0)" },
                { bodyColor: "rgba(224,224,72,1.0)", outlineColor: "rgba(0,80,80,1.0)" },
                { bodyColor: "rgba(250,250,250,1.0)", outlineColor: "rgba(48,92,224,1.0)" },
                { bodyColor: "rgba(220,214,208,1.0)", outlineColor: "rgba(64,64,64,1.0)" },
                { bodyColor: "rgba(248,242,96,1.0)", outlineColor: "rgba(200,28,32,1.0)" },
                { bodyColor: "rgba(224,224,224,1.0)", outlineColor: "rgba(64,64,64,0.5)" },
                { bodyColor: "rgba(250,250,250,1.0)", outlineColor: "rgba(144,108,16,1.0)" },
                { bodyColor: "rgba(250,250,250,1.0)", outlineColor: "rgba(48,116,132,1.0)" },
                { bodyColor: "rgba(250,250,250,1.0)", outlineColor: "rgba(136,64,120,1.0)" },
            ];
            var _defaultHud = {
                themeFileName: "",
            };
            var _defaultColorAlloc = {
                17: 8,
                18: 1,
                32: 2,
                33: 2,
                34: 3,
                48: 4,
                49: 4,
                50: 5,
                66: 7,
                97: 7,
                256: 6,
                257: 7,
                80: 9,
                81: 9,
                82: 9,
                112: 9,
                113: 9,
                3: 10,
                4: 11,
                5: 12
            };
            var _defaultPopupSettings = {
                fileName: "",
                numberSize: 32,
                numberHeight: 28,
                numberSpacing: 0.75,
                textSize: 24,
                textFont: "Arial Black, Avenir-Black, sans-serif-black, GameFont",
                textHeight: 28,
                colors: _defaultColors,
                pattern: _defaultColors.length,
                colorAlloc: _defaultColorAlloc,
                texts: {
                    counter: "COUNTER",
                    reflection: "REFLECTION",
                    substitute: "SUBSTITUTE",
                    miss: "MISS",
                    evasion: "MISS",
                    critical: "CRITICAL",
                    weakness: "WEAKNESS",
                    resist: "RESIST",
                    plus: "+",
                    minus: "-"
                },
                types: {
                    addState: "Rise",
                    removeState: "Rise",
                    addBuff: "Rise",
                    addDebuff: "Rise",
                    removeBuff: "Rise",
                    tpCharge: "Overlay",
                    regenerate: "SimpleBounce",
                    miss: "SimpleBounce",
                    hpDamage: "SimpleBounce",
                    mpDamage: "SimpleBounce",
                    tpDamage: "SimpleBounce",
                    counter: "Overlay",
                    reflection: "Overlay",
                    substitute: "Overlay",
                }
            };
            var _defaultBattlerGraphic = {
                rootPath: "img/battlergraphics/",
                enableAnimation: true,
                enablePopup: true,
                damageDuration: 24
            };
            var _defaultAnimation = {
                playRate: 4
            };
            var _defaultTargetCursor = {
                fileName: "bdskin_cursor00",
                width: 0,
                animationSpeed: 4,
                moveSpeed: 4,
                minY: 72,
                enableMultipleCursor: true
            };
            var _defaultTargetInformation = {
                gaugeWidth: 112,
                scopeNotation: {
                    forParty: "味方全体",
                    forTroop: "敵全体",
                    forTroopRandom: "敵%1体 ランダム"
                },
                actor: {
                    states: true,
                    hp: true,
                    mp: true,
                    tp: true
                },
                enemy: {
                    states: true,
                    hp: false,
                    mp: false,
                    tp: false
                },
            };
            var _defaultBattleMessage = {
                enemyEmergeMessage: false,
                simpleBattleLog: {
                    useSimpleBattleLog: true,
                    type: "Window",
                    displayAttack: false,
                    displayGuard: true,
                    drawIcon: true,
                    align: BD.Core.Consts.Enums.HorizontalAlignment.Center,
                    descriptionDelimiter: " : ",
                    descriptionFontSize: 0
                }
            };
            var _defaultWindowLayout = {
                itemSkill: {
                    fitting: true,
                    maxHeight: 320,
                },
                actorCommand: {
                    absolutePosition: {
                        x: undefined,
                        y: undefined
                    },
                    adjustPosition: {
                        x: 0,
                        y: -32,
                    },
                    width: 192,
                    heightFitting: true,
                    visibleRows: 4,
                    isHorizontal: false,
                    maxCols: 1,
                    itemAlign: "left",
                },
                partyCommand: {
                    position: {
                        x: 0,
                        y: 0
                    },
                    width: undefined,
                    heightFitting: false,
                    visibleRows: 1,
                    isHorizontal: true,
                    maxCols: 2,
                    itemAlign: "center",
                }
            };
            var _defaultBattleSpeed = {
                basicSpeed: 12,
                animationFastForward: true,
                animationDelayFastForward: true,
                actorStepDuration: 6,
                animationSkipDuration: 8,
                skipBlinkEffect: true,
            };
            var _defaultMinorFixes = {
                enableSelectionEffect: true
            };
            var _defaultSettings = {
                hud: _defaultHud,
                hudData: _defaultHudData,
                battlerGraphic: _defaultBattlerGraphic,
                popup: _defaultPopupSettings,
                animation: _defaultAnimation,
                targetCursor: _defaultTargetCursor,
                targetInformation: _defaultTargetInformation,
                battleMessage: _defaultBattleMessage,
                windowLayout: _defaultWindowLayout,
                battleSpeed: _defaultBattleSpeed,
                minorFixes: _defaultMinorFixes
            };
            var _settings;
            var _hud;
            var _hudData;
            var _battlerGraphic;
            var _popup;
            var _animation;
            var _targetCursor;
            var _targetInformation;
            var _battleMessage;
            var _windowLayout;
            var _battleSpeed;
            var _minorFixes;
            function loadSettingsJson() {
                _settings = _defaultSettings;
                _hud = _settings.hud;
                _hudData = _settings.hudData;
                _battlerGraphic = _settings.battlerGraphic;
                _popup = _settings.popup;
                _animation = _settings.animation;
                _targetCursor = _settings.targetCursor;
                _targetInformation = _settings.targetInformation;
                _battleMessage = _settings.battleMessage;
                _windowLayout = _settings.windowLayout;
                _battleSpeed = _settings.battleSpeed;
                _minorFixes = _settings.minorFixes;
                _overwriteWithPluginParameters();
                if (_hud.themeFileName !== "") {
                    DataManager.loadDataFile("$BDHUD", _hud.themeFileName + ".json");
                }
                ;
            }
            Settings.loadSettingsJson = loadSettingsJson;
            function _overwriteWithPluginParameters() {
                var params = PluginManager.parameters("XPStyleBattleMV");
                var paramsKeys = Object.keys(params);
                _enumerateSettingKeys("", _settings)
                    .forEach(function (x) { return _overwrite(params, paramsKeys, x); });
            }
            function _enumerateSettingKeys(base, object) {
                if (Object.prototype.toString.call(object) !== "[object Object]") {
                    return [base];
                }
                var settingKeys = [];
                var keys = Object.keys(object);
                keys.filter(function (x) { return x !== "hudData"; }).forEach(function (x) {
                    var k = _enumerateSettingKeys(x, object[x]);
                    k.map(function (y) { return base + (base.length > 0 ? "." : "") + y; }).forEach(function (y) { return settingKeys.push(y); });
                });
                return settingKeys;
            }
            function _overwrite(params, paramsKeys, key) {
                var regexp = /^\((.+)\)(.*)$/;
                var paramKey = paramsKeys.find(function (x) {
                    var match = regexp.exec(x);
                    return match[2] === key;
                });
                if (!paramKey) {
                    return;
                }
                var match = regexp.exec(paramKey);
                var value = _parseValue(match[1], params[paramKey]);
                if (value === undefined) {
                    return;
                }
                var setting = _settings;
                var path = key.split(".");
                path.slice(0, path.length - 1).forEach(function (x) { return setting = setting[x]; });
                setting[key.split(".").pop()] = value;
            }
            function _parseValue(type, value) {
                if (value === "undefined" || value === "") {
                    return undefined;
                }
                switch (type.toLowerCase()) {
                    case "integer":
                        var int = parseInt(value, 10);
                        if (isNaN(int)) {
                            return undefined;
                        }
                        return int;
                    case "float":
                        var float = parseFloat(value);
                        if (isNaN(float)) {
                            return undefined;
                        }
                        return float;
                    case "string":
                        return value;
                    case "boolean":
                        if (value.toLowerCase() === "true") {
                            return true;
                        }
                        else if (value.toLowerCase() === "false") {
                            return false;
                        }
                        return undefined;
                    default:
                        return undefined;
                }
            }
            function hud() {
                if ($BDHUD) {
                    return $BDHUD;
                }
                return _hudData;
            }
            Settings.hud = hud;
            function battlerGraphic() {
                return _battlerGraphic;
            }
            Settings.battlerGraphic = battlerGraphic;
            function animation() {
                return _animation;
            }
            Settings.animation = animation;
            function targetCursor() {
                return _targetCursor;
            }
            Settings.targetCursor = targetCursor;
            function targetInformation() {
                return _targetInformation;
            }
            Settings.targetInformation = targetInformation;
            function windowLayout() {
                return _windowLayout;
            }
            Settings.windowLayout = windowLayout;
            function battleMessage() {
                return _battleMessage;
            }
            Settings.battleMessage = battleMessage;
            ;
            function battleSpeed() {
                return _battleSpeed;
            }
            Settings.battleSpeed = battleSpeed;
            ;
            function popup() {
                return _popup;
            }
            Settings.popup = popup;
            ;
            function minorFixes() {
                return _minorFixes;
            }
            Settings.minorFixes = minorFixes;
            function enableSideVidwBattler() {
                return $gameSystem.isSideView();
            }
            Settings.enableSideVidwBattler = enableSideVidwBattler;
            function isDisplayTp() {
                return $dataSystem.optDisplayTp;
            }
            Settings.isDisplayTp = isDisplayTp;
            function isSimpleBattleLog() {
                return battleMessage().simpleBattleLog.useSimpleBattleLog;
            }
            Settings.isSimpleBattleLog = isSimpleBattleLog;
        })(Settings = Core.Settings || (Core.Settings = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
BD.Core.Settings.loadSettingsJson();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Manager;
        (function (Manager) {
            var modes = BD.Core.Consts.Enums.Mode;
            var _mode = BD.Core.Consts.Enums.Mode.Game;
            function getMode() {
                return _mode;
            }
            Manager.getMode = getMode;
            function setMode(value) {
                _mode = value;
            }
            Manager.setMode = setMode;
            function isGameMode() {
                return getMode() === modes.Game;
            }
            Manager.isGameMode = isGameMode;
            function isPreviewMode() {
                return getMode() === modes.Preview;
            }
            Manager.isPreviewMode = isPreviewMode;
            function isStudioMode() {
                return getMode() === modes.Studio;
            }
            Manager.isStudioMode = isStudioMode;
            function setup() {
                switch (getMode()) {
                    case modes.Game:
                        break;
                    case modes.Preview:
                        setupPreview();
                        break;
                    case modes.Studio:
                        break;
                }
            }
            Manager.setup = setup;
            function setupPreview() {
                Graphics._defaultStretchMode = function () { return true; };
            }
            Manager.setupPreview = setupPreview;
            function isStopHUD() {
                return BattleManager.isBattleEndFadeOut();
            }
            Manager.isStopHUD = isStopHUD;
        })(Manager = Core.Manager || (Core.Manager = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
try {
    if ($bdStudio !== undefined) {
        BD.Core.Manager.setMode(BD.Core.Consts.Enums.Mode.Studio);
    }
}
catch (e) {
    if (Utils.isOptionValid("bdpreview")) {
        BD.Core.Manager.setMode(BD.Core.Consts.Enums.Mode.Preview);
    }
    else {
        BD.Core.Manager.setMode(BD.Core.Consts.Enums.Mode.Game);
    }
}
BD.Core.Manager.setup();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            var BattlerGraphicManager;
            (function (BattlerGraphicManager) {
                var Settings = Core.Settings.battlerGraphic;
                var Kind = BD.Core.Consts.Enums.ConditionalBattlerGraphicKind;
                var _checkConditionFuncs;
                function battlerGraphic(battler) {
                    if (battler instanceof Game_Actor) {
                        return _actorBattlerGraphic(battler);
                    }
                    else if (battler instanceof Game_Enemy) {
                        return _enemyBattlerGraphic(battler);
                    }
                    return {
                        bitmap: ImageManager.loadEmptyBitmap(),
                        faceIndex: -1,
                        height: 48,
                    };
                }
                BattlerGraphicManager.battlerGraphic = battlerGraphic;
                function areEqualBattlerGraphic(a, b) {
                    if (!a && !b) {
                        return true;
                    }
                    if (!a || !b) {
                        return false;
                    }
                    if (a.fileName !== b.fileName) {
                        return false;
                    }
                    if (a.faceIndex !== b.faceIndex) {
                        return false;
                    }
                    return true;
                }
                BattlerGraphicManager.areEqualBattlerGraphic = areEqualBattlerGraphic;
                function createConditionalBattlerGraphic(fileNameWithFaceIndex, kind, idOrTag, priority) {
                    var bg = createBattlerGraphic(fileNameWithFaceIndex);
                    var conditionKind = defaultPriority(kind);
                    if (conditionKind === null) {
                        return;
                    }
                    var prio = priority || conditionKind;
                    return {
                        condition: {
                            kind: conditionKind,
                            idOrTag: idOrTag,
                            priority: prio
                        },
                        battlerGraphic: bg
                    };
                }
                BattlerGraphicManager.createConditionalBattlerGraphic = createConditionalBattlerGraphic;
                function createBattlerGraphic(fileNameWithFaceIndex) {
                    if (!fileNameWithFaceIndex) {
                        return {
                            fileName: null,
                            faceIndex: -1
                        };
                    }
                    var re = /([^\[\]]*)(?:\[(\d+)\]$)?/g;
                    var match = re.exec(fileNameWithFaceIndex);
                    var name = match[1] || fileNameWithFaceIndex;
                    var m2 = match[2] || "";
                    var i = parseInt(m2);
                    var faceIndex = isNaN(i) ? -1 : i;
                    return {
                        fileName: name,
                        faceIndex: faceIndex
                    };
                }
                BattlerGraphicManager.createBattlerGraphic = createBattlerGraphic;
                function defaultPriority(kind) {
                    var conditionKind = Kind[kind.toLowerCase()];
                    if (conditionKind === undefined) {
                        return null;
                    }
                    return conditionKind;
                }
                BattlerGraphicManager.defaultPriority = defaultPriority;
                function determineCandidate(actor) {
                    var candidates = [];
                    actor.conditionalBattlerGraphics().forEach(function (x) {
                        var func = _getCheckConditionFuncs()[x.condition.kind];
                        if (func && func(actor, x)) {
                            candidates.push(x);
                        }
                    });
                    if (candidates.length === 0) {
                        return null;
                    }
                    else {
                        return candidates.reduce(function (a, b) { return (a.condition.priority > b.condition.priority) ? a : b; });
                    }
                }
                BattlerGraphicManager.determineCandidate = determineCandidate;
                function damageDuration() {
                    return Settings().damageDuration;
                }
                BattlerGraphicManager.damageDuration = damageDuration;
                function _actorBattlerGraphic(actor) {
                    var battlerGraphic = actor.battlerGraphics();
                    if (battlerGraphic.fileName !== null) {
                        var fileName = _generateFileName(actor, battlerGraphic.fileName);
                        if (battlerGraphic.faceIndex > -1) {
                            return {
                                bitmap: ImageManager.loadFace(fileName, 0),
                                faceIndex: battlerGraphic.faceIndex,
                                height: 144
                            };
                        }
                        else {
                            var bitmap = ImageManager.loadBitmap(Settings().rootPath, fileName, 0, false);
                            return {
                                bitmap: bitmap,
                                faceIndex: -1,
                                height: bitmap.height
                            };
                        }
                    }
                    else {
                        return {
                            bitmap: ImageManager.loadFace(actor.faceName(), 0),
                            faceIndex: actor.faceIndex(),
                            height: 144
                        };
                    }
                }
                function _generateFileName(actor, fileName) {
                    if (!fileName.contains("*")) {
                        return fileName;
                    }
                    var base = actor.baseBattlerGraphics();
                    if (base && base.fileName !== null) {
                        return fileName.replace("*", base.fileName);
                    }
                    else {
                        return fileName.replace("*", actor.faceName());
                    }
                }
                function _enemyBattlerGraphic(battler) {
                    var bitmap;
                    if ($gameSystem.isSideView()) {
                        bitmap = ImageManager.loadSvEnemy(battler.battlerName(), battler.battlerHue());
                    }
                    else {
                        bitmap = ImageManager.loadEnemy(battler.battlerName(), battler.battlerHue());
                    }
                    return {
                        bitmap: bitmap,
                        faceIndex: null,
                        height: bitmap.height
                    };
                }
                function _getCheckConditionFuncs() {
                    if (!_checkConditionFuncs) {
                        _checkConditionFuncs = {};
                        _checkConditionFuncs[Kind.state] = _checkStateCondition;
                        _checkConditionFuncs[Kind.crisis] = _checkCrisisCondition;
                        _checkConditionFuncs[Kind.command] = _checkCommandCondition;
                        _checkConditionFuncs[Kind.ready] = _checkReadyCondition;
                        _checkConditionFuncs[Kind.guard] = _checkGuardCondition;
                        _checkConditionFuncs[Kind.chanting] = _checkChantingCondition;
                        _checkConditionFuncs[Kind.skill] = _checkSkillCondition;
                        _checkConditionFuncs[Kind.item] = _checkItemCondition;
                        _checkConditionFuncs[Kind.damage] = _checkDamageCondition;
                        _checkConditionFuncs[Kind.victory] = _checkVictoryCondition;
                        _checkConditionFuncs[Kind.dead] = _checkDeadCondition;
                    }
                    return _checkConditionFuncs;
                }
                function _checkStateCondition(a, c) {
                    var idOrTag = c.condition.idOrTag;
                    if (typeof idOrTag === "string") {
                        var f = a.states().find(function (y) { return y.meta[idOrTag]; });
                        if (f) {
                            return true;
                        }
                    }
                    else if (a._states.contains(idOrTag) || (a._states.length > 0 && idOrTag === 0)) {
                        return true;
                    }
                    return false;
                }
                function _checkCrisisCondition(a, c) {
                    return a.isDying();
                }
                function _checkCommandCondition(a, c) {
                    return a.isInputting();
                }
                function _checkReadyCondition(a, c) {
                    var action = a.inputtingAction();
                    if (action && typeof c.condition.idOrTag === "string") {
                        return a.isWaiting() && action.item().meta[c.condition.idOrTag];
                    }
                    return a.isWaiting();
                }
                function _checkGuardCondition(a, c) {
                    return a.isGuardWaiting() || (a.isGuard() || a._motionType === "guard");
                }
                function _checkChantingCondition(a, c) {
                    return a.isChanting();
                }
                function _checkActionConditionCore(a, c, kindCheck) {
                    var action = BattleManager._action;
                    if (a._motionType !== "victory" && BattleManager._subject === a && action && kindCheck(action)) {
                        var idOrTag = c.condition.idOrTag;
                        if (typeof idOrTag === "string") {
                            if (action.item().meta[idOrTag]) {
                                return true;
                            }
                        }
                        else if ((action.item().id === idOrTag || idOrTag <= 0)) {
                            return true;
                        }
                    }
                    return false;
                }
                function _checkSkillCondition(a, c) {
                    return _checkActionConditionCore(a, c, function (x) { return x.isSkill(); });
                }
                function _checkItemCondition(a, c) {
                    return _checkActionConditionCore(a, c, function (x) { return x.isItem(); });
                }
                function _checkDamageCondition(a, c) {
                    return (a._motionType === "damage");
                }
                function _checkVictoryCondition(a, c) {
                    return (a._motionType === "victory");
                }
                function _checkDeadCondition(a, c) {
                    return (a._motionType !== "damage" && a.isDead());
                }
            })(BattlerGraphicManager = Utils.BattlerGraphicManager || (Utils.BattlerGraphicManager = {}));
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            var Interpolator;
            (function (Interpolator) {
                function smooth(target, current, speed, minSpeed) {
                    if (target === current) {
                        return target;
                    }
                    var d = (target - current) / (speed * 1.0);
                    if (0 < d && d < minSpeed) {
                        d = minSpeed;
                        var newValue = current + d;
                        if (target < newValue) {
                            return target;
                        }
                        else {
                            return newValue;
                        }
                    }
                    if (0 > d && d > -minSpeed) {
                        d = -minSpeed;
                        var newValue = current + d;
                        if (target > newValue) {
                            return target;
                        }
                        else {
                            return newValue;
                        }
                    }
                    return current + d;
                }
                Interpolator.smooth = smooth;
            })(Interpolator = Utils.Interpolator || (Utils.Interpolator = {}));
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));


(function () {
    ImageManager.loadThemeImage = function (filename, smooth) {
        if (smooth === void 0) { smooth = false; }
        if (!filename) {
            return this.loadEmptyBitmap();
        }
        var f = filename.split("/");
        var name = f.pop();
        var path = "";
        if (f.length > 0) {
            path = f.reduce(function (a, b) { return encodeURIComponent(a) + "/" + encodeURIComponent(b); }) + "/";
        }
        return this.loadBitmap("img/system/" + path, name, 0, smooth);
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var RPGExtension;
        (function (RPGExtension) {
            function getActionDescription(action) {
                return _getString(action, "Tip", "");
            }
            RPGExtension.getActionDescription = getActionDescription;
            function getAttackAnimationId(battler) {
                return _getInt(battler, "AttackAnimation", 1);
            }
            RPGExtension.getAttackAnimationId = getAttackAnimationId;
            function getBattlerGraphic(battler) {
                return _getString(battler, "Graphic", null);
            }
            RPGExtension.getBattlerGraphic = getBattlerGraphic;
            function getConditionalBattlerGraphicsRaw(battler) {
                var strings = _getMultiMetadata(battler, "GraphicWhen");
                return strings.map(function (x) {
                    var args = x.split(",").map(function (y) { return y.trim(); });
                    var idOrTagArg = args[2] || "0";
                    var int = parseInt(idOrTagArg);
                    return {
                        fileName: args[0] || "",
                        kind: args[1] || "",
                        idOrTag: (isNaN(int)) ? idOrTagArg : int,
                        priority: parseInt(args[3]) || undefined
                    };
                });
            }
            RPGExtension.getConditionalBattlerGraphicsRaw = getConditionalBattlerGraphicsRaw;
            function getPreAnimationId(item) {
                return _getInt(item, "PreAnimation", 0);
            }
            RPGExtension.getPreAnimationId = getPreAnimationId;
            function getStateAnimationId(state) {
                return _getInt(state, "Animation", 0);
            }
            RPGExtension.getStateAnimationId = getStateAnimationId;
            function getDisplayNameForPopup(state) {
                return _getString(state, "DisplayNameForPopup", state.name);
            }
            RPGExtension.getDisplayNameForPopup = getDisplayNameForPopup;
            function getPositive(state) {
                return state.meta["Positive"] === true;
            }
            RPGExtension.getPositive = getPositive;
            function getNegative(state) {
                return state.meta["Negative"] === true;
            }
            RPGExtension.getNegative = getNegative;
            function getHideAddPopup(state) {
                return state.meta["HideAddPopup"] === true || getHidePopup(state);
            }
            RPGExtension.getHideAddPopup = getHideAddPopup;
            function getHideRemovePopup(state) {
                return state.meta["HideRemovePopup"] === true || getHidePopup(state);
            }
            RPGExtension.getHideRemovePopup = getHideRemovePopup;
            function getHidePopup(state) {
                return state.meta["HidePopup"] === true;
            }
            RPGExtension.getHidePopup = getHidePopup;
            function getAnimationRate(animation) {
                _setAnimationMetadata(animation);
                var defaultRate = Core.Settings.animation().playRate;
                return _getInt(animation, "Rate", defaultRate);
            }
            RPGExtension.getAnimationRate = getAnimationRate;
            function _getInt(data, key, defaultValue) {
                if (data.meta[key] === undefined) {
                    data.meta[key] = defaultValue.toString();
                }
                var result = parseInt(data.meta[key]);
                if (isNaN(result)) {
                    data.meta[key] = defaultValue.toString();
                    result = parseInt(data.meta[key]);
                }
                return result;
            }
            function _getString(data, key, defaultValue) {
                if (data.meta[key] === undefined || data.meta[key] === true) {
                    data.meta[key] = defaultValue;
                }
                if (typeof data.meta[key] === "string") {
                    return data.meta[key].trim();
                }
                return data.meta[key];
            }
            function _getMultiMetadata(data, keyPattern) {
                var strings = [];
                var re = new RegExp("<(" + keyPattern + ")(:?)([^>]*)>", "g");
                while (true) {
                    var match = re.exec(data.note);
                    if (match && match[2] === ":") {
                        strings.push(match[3]);
                    }
                    else {
                        break;
                    }
                }
                return strings;
            }
            function _setAnimationMetadata(data) {
                if (data.meta !== undefined) {
                    return;
                }
                data.note = "";
                data.meta = {};
                var re = /<(\d+)>/;
                var match = re.exec(data.name);
                if (!match) {
                    return;
                }
                data.meta["Rate"] = match[1];
            }
        })(RPGExtension = Core.RPGExtension || (Core.RPGExtension = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    Sprite.prototype.flatten = function () {
        var sprites = [];
        sprites.push(this);
        this.children.forEach(function (element, index, array) {
            sprites = sprites.concat(element.flatten ? element.flatten() : []);
        });
        return sprites;
    };
    Sprite.prototype.clone = function () {
        var clone = new Sprite();
        clone.bitmap = this.bitmap;
        clone.opacity = this.opacity;
        clone.visible = this.visible;
        clone.x = this.x;
        clone.y = this.y;
        clone.scale.x = this.scale.x;
        clone.scale.y = this.scale.y;
        clone.rotation = this.rotation;
        clone.blendMode = this.blendMode;
        clone.filters = this.filters;
        clone.anchor.x = this.anchor.x;
        clone.anchor.y = this.anchor.y;
        clone.pivot.x = this.pivot.x;
        clone.pivot.y = this.pivot.y;
        clone.texture.frame = this.texture.frame;
        this.children.forEach(function (x) { return clone.addChild(x.clone()); });
        return clone;
    };
    Sprite.prototype.absolutePosition = function () {
        var x = this.x;
        var y = this.y;
        var parent = this.parent;
        while (parent) {
            x += parent.x;
            y += parent.y;
            parent = parent.parent;
        }
        return new Point(x, y);
    };
    Sprite.prototype.findFamily = function (func, breakFunc) {
        if (breakFunc === void 0) { breakFunc = null; }
        var top = this;
        while (top.parent && top.parent instanceof Sprite) {
            top = top.parent;
            if (breakFunc && breakFunc(top)) {
                break;
            }
        }
        return top.flatten().find(function (x) { return func(x); });
    };
})();

(function () {
    DataManager._removeTestPrefix = function (src) {
        return src.lastIndexOf("Test_") === 0 ? src.replace("Test_", "") : src;
    };
    var _bdc_DataManager_loadDataFile = DataManager.loadDataFile;
    DataManager.loadDataFile = function (name, src) {
        var newSrc = src;
        if (!BD.Core.Manager.isGameMode()) {
            newSrc = DataManager._removeTestPrefix(src);
        }
        _bdc_DataManager_loadDataFile.call(this, name, newSrc);
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Utils;
        (function (Utils) {
            var PluginCommand;
            (function (PluginCommand) {
                function execute(command, args) {
                    var lowCommand = command.toLowerCase();
                    var key = Object.keys(BD.Core.Utils.PluginCommand)
                        .find(function (x) { return x === lowCommand; });
                    if (!key) {
                        return;
                    }
                    var func = BD.Core.Utils.PluginCommand[key];
                    if (func) {
                        func.call(null, args);
                    }
                }
                PluginCommand.execute = execute;
                function hud(args) {
                    if (args.length < 1) {
                        return;
                    }
                    if (args[0].toLowerCase() === "hide") {
                        $gameTemp.hideBDHUD();
                    }
                    else if (args[0].toLowerCase() === "show") {
                        $gameTemp.showBDHUD();
                    }
                }
                PluginCommand.hud = hud;
            })(PluginCommand = Utils.PluginCommand || (Utils.PluginCommand = {}));
        })(Utils = Core.Utils || (Core.Utils = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
(function () {
    var _bdc_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _bdc_Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === "BD" && args.length > 0) {
            var a = args.clone();
            BD.Core.Utils.PluginCommand.execute(a.shift(), a);
        }
    };
})();

var BD;
(function (BD) {
    var CMD;
    (function (CMD) {
        var BattlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
        function setBG(type, idOrIndex, fileNameWithFaceIndex) {
            if (fileNameWithFaceIndex === void 0) { fileNameWithFaceIndex = null; }
            setBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex);
        }
        CMD.setBG = setBG;
        function setBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex) {
            if (fileNameWithFaceIndex === void 0) { fileNameWithFaceIndex = null; }
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                return;
            }
            var bg = BattlerGraphicManager.createBattlerGraphic(fileNameWithFaceIndex);
            actor.setBattlerGraphics(bg.fileName, bg.faceIndex);
        }
        CMD.setBattlerGraphic = setBattlerGraphic;
        function setCBG(type, idOrIndex, fileNameWithFaceIndex, kind, idOrTag, priority) {
            setConditionBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex, kind, idOrTag, priority);
        }
        CMD.setCBG = setCBG;
        function setConditionBattlerGraphic(type, idOrIndex, fileNameWithFaceIndex, kind, idOrTag, priority) {
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                return;
            }
            var bg = BattlerGraphicManager.createBattlerGraphic(fileNameWithFaceIndex);
            var conditionKind = BattlerGraphicManager.defaultPriority(kind);
            if (conditionKind === null) {
                return;
            }
            var prio = priority || conditionKind;
            actor.setConditionalBattlerGraphics(bg.fileName, bg.faceIndex, kind, idOrTag, prio);
        }
        CMD.setConditionBattlerGraphic = setConditionBattlerGraphic;
        function removeCBG(type, idOrIndex, kind, idOrTag) {
            removeConditionBattlerGraphic(type, idOrIndex, kind, idOrTag);
        }
        CMD.removeCBG = removeCBG;
        function removeConditionBattlerGraphic(type, idOrIndex, kind, idOrTag) {
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                return;
            }
            actor.removeConditionalBattlerGraphics(kind, idOrTag);
        }
        CMD.removeConditionBattlerGraphic = removeConditionBattlerGraphic;
        function resetBG(type, idOrIndex) {
            if (idOrIndex === void 0) { idOrIndex = null; }
            resetBattlerGraphic(type, idOrIndex);
        }
        CMD.resetBG = resetBG;
        function resetBattlerGraphic(type, idOrIndex) {
            if (idOrIndex === void 0) { idOrIndex = null; }
            var actor = _getActor(type, idOrIndex);
            if (!actor) {
                var actors = $gameActors._data;
                actors.forEach(function (x) { return x.resetBattlerGraphic(); });
                return;
            }
            actor.resetBattlerGraphic();
        }
        CMD.resetBattlerGraphic = resetBattlerGraphic;
        function _getActor(type, idOrIndex) {
            if (idOrIndex === null) {
                return null;
            }
            var t = type.toLowerCase();
            switch (t) {
                case "id":
                    return $gameActors.actor(idOrIndex);
                case "index":
                    return $gameParty.members()[idOrIndex];
            }
            return null;
        }
    })(CMD = BD.CMD || (BD.CMD = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Property;
        (function (Property) {
            var PropertyChanged = (function () {
                function PropertyChanged() {
                    this._eventTable = {};
                    this._eventQueue = [];
                }
                PropertyChanged.prototype.addPropertyChanged = function (type, listener, thisArg) {
                    this._checkType(type);
                    var listeners = this._eventTable[type];
                    var index = listeners.indexOf(listener);
                    if (index === -1) {
                        listeners.push({
                            callback: listener,
                            this: thisArg
                        });
                    }
                };
                PropertyChanged.prototype.raise = function (type) {
                    var listeners = this._eventTable[type];
                    Array.prototype.push.apply(this._eventQueue, listeners);
                };
                PropertyChanged.prototype.update = function () {
                    var _this = this;
                    var executedCallbacks = new Array();
                    var queue = this._eventQueue.concat();
                    this._eventQueue = new Array();
                    queue.forEach(function (listener) {
                        if (_this.containsCallback(executedCallbacks, listener.callback)) {
                            return;
                        }
                        listener.callback.call(listener.this);
                        executedCallbacks.push(listener.callback);
                    });
                };
                PropertyChanged.prototype.containsCallback = function (callbacks, callback) {
                    var len = callbacks.length;
                    for (var i = 0; i <= len; i++) {
                        if (callbacks[i] === callback) {
                            return true;
                        }
                    }
                    return false;
                };
                PropertyChanged.prototype._checkType = function (type) {
                    if (this._eventTable[type] === undefined) {
                        this._eventTable[type] = [];
                    }
                };
                return PropertyChanged;
            }());
            Property.PropertyChanged = PropertyChanged;
        })(Property = Core.Property || (Core.Property = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Property;
        (function (Property) {
            var PropertyDefinition = (function () {
                function PropertyDefinition(value) {
                    this.key = value["key"];
                    this.type = value["type"];
                    this.defaultValue = value["defaultValue"];
                    this.name = { "eng": value["eng"] };
                }
                return PropertyDefinition;
            }());
            Property.PropertyDefinition = PropertyDefinition;
        })(Property = Core.Property || (Core.Property = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Property;
        (function (Property) {
            var PropertyUtility;
            (function (PropertyUtility) {
                var definitions;
                (function (definitions) {
                    var pd = BD.Core.Property.PropertyDefinition;
                    definitions.type = new pd({ key: "type", type: "objType", defaultValue: "Type", });
                    definitions.name = new pd({ key: "name", type: "String", defaultValue: "Name" });
                    definitions.x = new pd({ key: "x", type: "Number", defaultValue: 0 });
                    definitions.y = new pd({ key: "y", type: "Number", defaultValue: 0 });
                    definitions.visible = new pd({ key: "visible", type: "Boolean", defaultValue: true });
                    definitions.width = new pd({ key: "width", type: "Number", defaultValue: 128 });
                    definitions.height = new pd({ key: "height", type: "Number", defaultValue: 128 });
                    definitions.frameX = new pd({ key: "frameX", type: "Number", defaultValue: 0 });
                    definitions.frameY = new pd({ key: "frameY", type: "Number", defaultValue: 0 });
                    definitions.frameWidth = new pd({ key: "frameWidth", type: "Number", defaultValue: 128 });
                    definitions.frameHeight = new pd({ key: "frameHeight", type: "Number", defaultValue: 128 });
                    definitions.renderWidth = new pd({ key: "renderWidth", type: "Number", defaultValue: 128 });
                    definitions.renderHeight = new pd({ key: "renderHeight", type: "Number", defaultValue: 128 });
                    definitions.fileName = new pd({ key: "fileName", type: "String", defaultValue: "\'\'" });
                    definitions.pattern = new pd({ key: "pattern", type: "Number", defaultValue: 0 });
                    definitions.maxPattern = new pd({ key: "maxPattern", type: "Number", defaultValue: 1 });
                    definitions.value = new pd({ key: "value", type: "Number", defaultValue: 0 });
                    definitions.minValue = new pd({ key: "minValue", type: "Number", defaultValue: -999999 });
                    definitions.maxValue = new pd({ key: "maxValue", type: "Number", defaultValue: 999999 });
                    definitions.digits = new pd({ key: "digits", type: "Number", defaultValue: 4 });
                    definitions.zeroSuppress = new pd({ key: "zeroSuppress", type: "Boolean", defaultValue: true });
                    definitions.spacing = new pd({ key: "spacing", type: "Number", defaultValue: 0 });
                    definitions.animation = new pd({ key: "animation", type: "Number", defaultValue: 0 });
                    definitions.animationSpeed = new pd({ key: "animationSpeed", type: "Number", defaultValue: 8 });
                    definitions.horizontalAlignment = new pd({ key: "horizontalAlignment", type: "Number", defaultValue: 0 });
                    definitions.verticalAlignment = new pd({ key: "verticalAlignment", type: "Number", defaultValue: 0 });
                    definitions.startAngle = new pd({ key: "startAngle", type: "Number", defaultValue: 0 });
                    definitions.endAngle = new pd({ key: "endAngle", type: "Number", defaultValue: 360 });
                    definitions.radius = new pd({ key: "radius", type: "Number", defaultValue: 32 });
                    definitions.lineWidth = new pd({ key: "lineWidth", type: "Number", defaultValue: 24 });
                    definitions.xZoom = new pd({ key: "xZoom", type: "Number", defaultValue: 1.0 });
                    definitions.yZoom = new pd({ key: "yZoom", type: "Number", defaultValue: 1.0 });
                    definitions.ox = new pd({ key: "ox", type: "Number", defaultValue: 0 });
                    definitions.oy = new pd({ key: "oy", type: "Number", defaultValue: 0 });
                    definitions.skewAngleX = new pd({ key: "skewAngleX", type: "Number", defaultValue: 0 });
                    definitions.skewAngleY = new pd({ key: "skewAngleY", type: "Number", defaultValue: 0 });
                    definitions.rotation = new pd({ key: "rotation", type: "Number", defaultValue: 0 });
                    definitions.opacity = new pd({ key: "opacity", type: "Number", defaultValue: 255 });
                    definitions.blendMode = new pd({ key: "blendMode", type: "Number", defaultValue: 0 });
                    definitions.fillColor = new pd({ key: "fillColor", type: "String", defaultValue: "\'Green\'" });
                    definitions.gradientColor = new pd({ key: "gradientColor", type: "String", defaultValue: "\'Yellow\'" });
                    definitions.isGradient = new pd({ key: "isGradient", type: "Boolean", defaultValue: true });
                    definitions.isVertical = new pd({ key: "isVertical", type: "Boolean", defaultValue: false });
                    definitions.maxStates = new pd({ key: "maxStates", type: "Number", defaultValue: 1 });
                    definitions.maskImage = new pd({ key: "maskImage", type: "String", defaultValue: "\'\'" });
                    definitions.maskImageX = new pd({ key: "maskImageX", type: "Number", defaultValue: 0 });
                    definitions.maskImageY = new pd({ key: "maskImageY", type: "Number", defaultValue: 0 });
                    definitions.relatedObjects = new pd({ key: "relatedObjects", type: "String", defaultValue: "\'\'" });
                })(definitions = PropertyUtility.definitions || (PropertyUtility.definitions = {}));
                function make(propData) {
                    if (BD.Core.Manager.isStudioMode()) {
                        var p = new BD.Studio.Property.Property(propData.key, propData.type, propData.defaultValue);
                        ko.track(p);
                        return p;
                    }
                    else {
                        return null;
                    }
                }
                PropertyUtility.make = make;
                ;
                function makeFunction(key, value, context) {
                    if (BD.Core.Manager.isStudioMode()) {
                        return this.safetyMakeFunction(key, value, context);
                    }
                    else {
                        return new Function(value);
                    }
                }
                PropertyUtility.makeFunction = makeFunction;
                ;
                function safetyMakeFunction(key, value, context) {
                    var type = this.definitions[key].type;
                    try {
                        var func = new Function(value);
                        var test = func.call(context);
                        if (!eval("_.is" + type + "(test)")) {
                            throw "Type Error";
                        }
                        return func;
                    }
                    catch (e) {
                        return function () { return PropertyUtility.definitions[key].defaultValue; };
                    }
                }
                PropertyUtility.safetyMakeFunction = safetyMakeFunction;
                ;
            })(PropertyUtility = Property.PropertyUtility || (Property.PropertyUtility = {}));
        })(Property = Core.Property || (Core.Property = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    Window_BattleLog.prototype.showEnemyAttackAnimation = function (subject, targets) {
        var id = BD.Core.RPGExtension.getAttackAnimationId(subject.enemy());
        this.showNormalAnimation(targets, id, false);
    };
})();

(function () {
    var _bdc_Sprite_Animation_setupRate = Sprite_Animation.prototype.setupRate;
    Sprite_Animation.prototype.setupRate = function () {
        if (this._animation) {
            this._rate = BD.Core.RPGExtension.getAnimationRate(this._animation);
        }
        else {
            _bdc_Sprite_Animation_setupRate.call(this);
        }
    };
})();

(function () {
    var _bdc_Window_BattleLog_displayAction = Window_BattleLog.prototype.displayAction;
    Window_BattleLog.prototype.displayAction = function (subject, item) {
        var _this = this;
        var showAnimationMethods;
        var preAnimationId = BD.Core.RPGExtension.getPreAnimationId(item);
        if (preAnimationId > 0) {
            showAnimationMethods = this._methods.filter(function (x) { return x.name === "showAnimation"; });
            this.push("showAnimation", subject, [subject].clone(), preAnimationId);
            _bdc_Window_BattleLog_displayAction.call(this, subject, item);
            this.push("waitForAnimation");
            this._methods = this._methods.filter(function (x) { return !showAnimationMethods.contains(x) && x.name !== "wait"; });
            showAnimationMethods.forEach(function (x) { return _this._methods.push(x); });
            this.push("wait");
            return;
        }
        _bdc_Window_BattleLog_displayAction.call(this, subject, item);
    };
    Window_BattleLog.prototype.waitForAnimation = function () {
        this.setWaitMode("animation");
    };
    var _bdc_Window_BattleLog_updateWaitMode = Window_BattleLog.prototype.updateWaitMode;
    Window_BattleLog.prototype.updateWaitMode = function () {
        if (this._waitMode === "animation") {
            var waiting = this._spriteset.isAnimationPlaying();
            if (waiting) {
                return true;
            }
            ;
        }
        return _bdc_Window_BattleLog_updateWaitMode.call(this);
    };
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Animation;
        (function (Animation) {
            var StateAnimation;
            (function (StateAnimation) {
                var LoopAnimation = (function (_super) {
                    __extends(LoopAnimation, _super);
                    function LoopAnimation() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    LoopAnimation.prototype.initMembers = function () {
                        _super.prototype.initMembers.call(this);
                        this._looping = true;
                        this._loopCount = -1;
                    };
                    LoopAnimation.prototype.update = function () {
                        _super.prototype.update.call(this);
                        if (this._duration <= 0) {
                            this.setupDuration();
                            if (this._loopCount-- === 0) {
                                this.terminate();
                            }
                        }
                        if (!this._looping) {
                            this._vanishing();
                        }
                    };
                    LoopAnimation.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    LoopAnimation.prototype.terminate = function () {
                        this._looping = false;
                    };
                    LoopAnimation.prototype.animation = function () {
                        return this._animation;
                    };
                    LoopAnimation.prototype._vanishing = function () {
                        this.opacity -= 32;
                    };
                    return LoopAnimation;
                }(Sprite_Animation));
                StateAnimation.LoopAnimation = LoopAnimation;
            })(StateAnimation = Animation.StateAnimation || (Animation.StateAnimation = {}));
        })(Animation = Core.Animation || (Core.Animation = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_Game_Battler_refresh = Game_Battler.prototype.refresh;
    Game_Battler.prototype.refresh = function () {
        _bdc_Game_Battler_refresh.call(this);
        this.isStateAnimationUpdateRequested = true;
    };
    Game_Battler.prototype.currentStateAnimationId = function () {
        var stateAnimationIds = this.states()
            .sort(function (a, b) { return b.priority - a.priority; })
            .map(function (x) { return BD.Core.RPGExtension.getStateAnimationId(x); })
            .filter(function (x) { return x > 0; });
        if (stateAnimationIds.length === 0) {
            return 0;
        }
        else {
            return stateAnimationIds[0];
        }
    };
})();

(function () {
    Sprite_Base.prototype.startLoopAnimation = function (animation, mirror, delay) {
        var playing = this._animationSprites
            .filter(function (x) { return x instanceof BD.Core.Animation.StateAnimation.LoopAnimation; })
            .some(function (x) { return x.animation() === animation; });
        if (playing) {
            return;
        }
        var sprite = new BD.Core.Animation.StateAnimation.LoopAnimation();
        sprite.setup(this._effectTarget, animation, mirror, delay);
        this.parent.addChild(sprite);
        this._animationSprites.push(sprite);
    };
    Sprite_Base.prototype.terminateLoopAnimation = function () {
        this._animationSprites
            .filter(function (x) { return x instanceof BD.Core.Animation.StateAnimation.LoopAnimation; })
            .forEach(function (x) { return x.terminate(); });
    };
    Sprite_Base.prototype.isAnimationPlaying = function () {
        var animations = this._animationSprites.filter(function (x) { return !(x instanceof BD.Core.Animation.StateAnimation.LoopAnimation); });
        return animations.length > 0;
    };
    Sprite_Base.prototype.isLoopAnimationPlaying = function () {
        var animations = this._animationSprites.filter(function (x) { return (x instanceof BD.Core.Animation.StateAnimation.LoopAnimation); });
        return animations.length > 0;
    };
})();

(function () {
    var _bdc_Sprite_Battler_initMembers = Sprite_Battler.prototype.initMembers;
    Sprite_Battler.prototype.initMembers = function () {
        _bdc_Sprite_Battler_initMembers.call(this);
        this._lastStateAnimationId = -1;
    };
    var _bdc_Sprite_Battler__updateAnimation = Sprite_Battler.prototype.updateAnimation;
    Sprite_Battler.prototype.updateAnimation = function () {
        _bdc_Sprite_Battler__updateAnimation.call(this);
        this.setupLoopAnimation();
    };
    Sprite_Battler.prototype.setupLoopAnimation = function () {
        if (this._battler.isStateAnimationUpdateRequested) {
            var id = this._battler.currentStateAnimationId();
            var animation = $dataAnimations[id];
            if (id !== this._lastStateAnimationId) {
                this.terminateLoopAnimation();
            }
            if (id !== 0) {
                this.startLoopAnimation(animation, false, 0);
            }
            this._lastStateAnimationId = id;
            this._battler.isStateAnimationUpdateRequested = false;
        }
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var BattleSpeed;
        (function (BattleSpeed) {
            var Utility;
            (function (Utility) {
                var Settings = BD.Core.Settings.battleSpeed;
                function isFastForward() {
                    return Window_BattleLog.prototype.isFastForward.call(this);
                }
                Utility.isFastForward = isFastForward;
                function isAnimationFastForward() {
                    return isFastForward() && Settings().animationFastForward;
                }
                Utility.isAnimationFastForward = isAnimationFastForward;
                function isAnimationDelayFastForward() {
                    return isFastForward() && Settings().animationDelayFastForward;
                }
                Utility.isAnimationDelayFastForward = isAnimationDelayFastForward;
            })(Utility = BattleSpeed.Utility || (BattleSpeed.Utility = {}));
        })(BattleSpeed = Core.BattleSpeed || (Core.BattleSpeed = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var Settings = BD.Core.Settings.battleSpeed;
    var _bdc_Sprite_Actor_stepForward = Sprite_Actor.prototype.stepForward;
    Sprite_Actor.prototype.stepForward = function () {
        var duration = Settings().actorStepDuration;
        if (duration > -1) {
            this.startMove(-48, 0, duration);
        }
        else {
            _bdc_Sprite_Actor_stepForward.call(this);
        }
    };
    var _bdc_Sprite_Actor_stepBack = Sprite_Actor.prototype.stepBack;
    Sprite_Actor.prototype.stepBack = function () {
        var duration = Settings().actorStepDuration;
        if (duration > -1) {
            this.startMove(0, 0, duration);
        }
        else {
            _bdc_Sprite_Actor_stepBack.call(this);
        }
    };
})();

(function () {
    var _bdc_Sprite_Animation_updateMain = Sprite_Animation.prototype.updateMain;
    Sprite_Animation.prototype.updateMain = function () {
        if (!(this instanceof BD.Core.Animation.StateAnimation.LoopAnimation)
            && this.isPlaying() && this.isReady()) {
            if (BD.Core.BattleSpeed.Utility.isAnimationDelayFastForward() && this._delay > 0) {
                this._delay--;
            }
            else if (BD.Core.BattleSpeed.Utility.isAnimationFastForward()) {
                if (this._rate > 1 && (this._duration % this._rate) === this._rate - 1) {
                    this._duration--;
                }
            }
        }
        _bdc_Sprite_Animation_updateMain.call(this);
    };
})();

(function () {
    var Settings = BD.Core.Settings.battleSpeed;
    var _bdc_Sprite_Base_isAnimationPlaying = Sprite_Base.prototype.isAnimationPlaying;
    Sprite_Base.prototype.isAnimationPlaying = function () {
        var isPlaying = _bdc_Sprite_Base_isAnimationPlaying.call(this);
        if (!isPlaying) {
            return false;
        }
        var skipDuration = Settings().animationSkipDuration;
        var endDuration = BD.Core.BattleSpeed.Utility.isFastForward() ? skipDuration * 2 : skipDuration;
        return (this._animationSprites)
            .filter(function (x) { return !(x instanceof BD.Core.Animation.StateAnimation.LoopAnimation); })
            .some(function (x) { return x.currentFrameIndex() < 2 || x._duration > endDuration; });
    };
})();

(function () {
    var Settings = BD.Core.Settings.battleSpeed;
    var _bdc_Sprite_Enemy_isEffecting = Sprite_Enemy.prototype.isEffecting;
    Sprite_Enemy.prototype.isEffecting = function () {
        if (Settings().skipBlinkEffect && this._effectType === "blink") {
            return false;
        }
        return _bdc_Sprite_Enemy_isEffecting.call(this);
    };
})();

(function () {
    var Settings = BD.Core.Settings.battleSpeed;
    Window_BattleLog.prototype.messageSpeed = function () {
        return Settings().basicSpeed;
    };
    var _bdc_Window_BattleLog_update = Window_BattleLog.prototype.update;
    Window_BattleLog.prototype.update = function () {
        _bdc_Window_BattleLog_update.call(this);
        if (this._waitCount === 0 && !this.updateWaitMode() && this._methods.length > 0) {
            this.update();
        }
    };
    var _bdc_Window_BattleLog_setWaitMode = Window_BattleLog.prototype.setWaitMode;
    Window_BattleLog.prototype.setWaitMode = function (waitMode) {
        if (this._waitCount === 0) {
            this._waitCount += 1;
        }
        _bdc_Window_BattleLog_setWaitMode.call(this, waitMode);
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var DamagePopupFactory;
            (function (DamagePopupFactory) {
                var Directions = BD.Core.Consts.Enums.Directions;
                var PopupTypes = BD.Core.Consts.Enums.DamagePopupTypes;
                function initialize() {
                    _getPopupImageAttributes();
                    Object.keys(DamagePopup.Types)
                        .map(function (x) { return DamagePopup.Types[x].initializePopup; })
                        .filter(function (x) { return x && x instanceof Function; })
                        .forEach(function (x) { return x(); });
                }
                DamagePopupFactory.initialize = initialize;
                function create(target) {
                    var popups = [];
                    var result = target.result();
                    if (result.performCounter) {
                        popups.push(_createCounterPopup(target));
                        return popups.filter(function (x) { return x !== null; });
                    }
                    if (result.performReflection) {
                        popups.push(_createReflectionPopup(target));
                        return popups.filter(function (x) { return x !== null; });
                    }
                    if (result.performSubstitute) {
                        popups.push(_createSubstitutePopup(target));
                        return popups.filter(function (x) { return x !== null; });
                    }
                    if (!result.regenerateTp && result.gainSilentTp) {
                        if (Core.Settings.isDisplayTp()) {
                            var chargeTp = _createTpChargePopup(target);
                            popups.push(chargeTp);
                        }
                        return popups.filter(function (x) { return x !== null; });
                    }
                    var miss = _createMissPopup(target);
                    popups.push(miss);
                    var hp = _createHpDamagePopup(target);
                    popups.push(hp);
                    var mp = _createMpDamagePopup(target);
                    popups.push(mp);
                    if (Core.Settings.isDisplayTp()) {
                        var tp = _createTpDamagePopup(target);
                        popups.push(tp);
                    }
                    var states = _createStatePopups(target);
                    Array.prototype.push.apply(popups, states);
                    var buffs = _createBuffPopups(target);
                    Array.prototype.push.apply(popups, buffs);
                    var regene = _createRegeneratePopups(target);
                    Array.prototype.push.apply(popups, regene);
                    return popups.filter(function (x) { return x !== null; });
                }
                DamagePopupFactory.create = create;
                function adjustPopupPosition(popup, x, y) {
                    var lx = Math.min(0, x - popup.pieceWidth / 2);
                    popup.pivot.x += lx;
                    var rx = Math.min(0, (Graphics.boxWidth - x) - popup.pieceWidth / 2);
                    popup.pivot.x -= rx;
                }
                DamagePopupFactory.adjustPopupPosition = adjustPopupPosition;
                function _createStatePopups(target) {
                    var popups = [];
                    var result = target.result();
                    if (!result.isStatusAffected()) {
                        return popups;
                    }
                    var name = _battlerIdName(target);
                    var deathStateId = target.deathStateId();
                    var addStates = result.addedNewStateObjects();
                    addStates
                        .filter(function (x) { return x.id !== deathStateId && x.iconIndex !== 0 && !Core.RPGExtension.getHideAddPopup(x); })
                        .forEach(function (state) {
                        var popup = _createPopup(_types().addState, _createAddState(state), name);
                        popups.push(popup);
                    });
                    var removeStates = result.removedStateObjects();
                    removeStates
                        .filter(function (x) { return x.id !== deathStateId && x.iconIndex !== 0 && !Core.RPGExtension.getHideRemovePopup(x); })
                        .forEach(function (state) {
                        var popup = _createPopup(_types().removeState, _createRemoveState(state), name);
                        popups.push(popup);
                    });
                    return popups;
                }
                function _createBuffPopups(target) {
                    var popups = [];
                    var result = target.result();
                    if (!result.isStatusAffected()) {
                        return popups;
                    }
                    var name = _battlerIdName(target);
                    result.addedBuffs.forEach(function (id) {
                        var popup = _createPopup(_types().addBuff, _createAddBuff(target, id, false), name);
                        popups.push(popup);
                    });
                    result.addedDebuffs.forEach(function (id) {
                        var popup = _createPopup(_types().addDebuff, _createAddBuff(target, id, true), name);
                        popups.push(popup);
                    });
                    result.removedBuffs.forEach(function (id) {
                        var popup = _createPopup(_types().removeBuff, _createRemoveBuff(target, id, false), name);
                        popups.push(popup);
                    });
                    return popups;
                }
                function _createAddState(state) {
                    var color = convertTypeToColorIndex(_addStateType(state));
                    var icon = new DamagePopup.Pieces.Icon(state.iconIndex, 255);
                    var name = Core.RPGExtension.getDisplayNameForPopup(state);
                    var text = new DamagePopup.Pieces.Text(name, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createRemoveState(state) {
                    var color = convertTypeToColorIndex(_removeStateType(state));
                    var icon = new DamagePopup.Pieces.Icon(state.iconIndex, 128);
                    var name = Core.RPGExtension.getDisplayNameForPopup(state);
                    var text = new DamagePopup.Pieces.Text(name, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createAddBuff(target, paramId, debuff) {
                    if (debuff === void 0) { debuff = false; }
                    var color = convertTypeToColorIndex(debuff ? PopupTypes.AddDebuff : PopupTypes.AddBuff);
                    var iconId = target.buffIconIndex(debuff ? -1 : 1, paramId);
                    var icon = new DamagePopup.Pieces.Icon(iconId, 255);
                    var text = new DamagePopup.Pieces.Text(TextManager.param(paramId), color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createRemoveBuff(target, paramId, debuff) {
                    if (debuff === void 0) { debuff = false; }
                    var color = convertTypeToColorIndex(debuff ? PopupTypes.RemoveDebuff : PopupTypes.RemoveBuff);
                    var iconId = target.buffIconIndex(debuff ? -1 : 1, paramId);
                    var icon = new DamagePopup.Pieces.Icon(iconId, 128);
                    var text = new DamagePopup.Pieces.Text(TextManager.param(paramId), color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(text)
                        .addPiece(icon, Directions.Left);
                }
                function _createTpChargePopup(target) {
                    var result = target.result();
                    if (target.isActor() && result.gainSilentTp && result.silentTpDamage !== 0) {
                        return _createPopup(_types().tpCharge, _createTpDamage(target), _battlerIdName(target));
                    }
                    return null;
                }
                function _createRegeneratePopups(target) {
                    var popups = [];
                    var result = target.result();
                    var name = _battlerIdName(target);
                    var popupType = _types().regenerate;
                    if (result.regenerateHp && result.hpDamage !== 0) {
                        var hp = _createPopup(popupType, _createHpDamage(target), name);
                        popups.push(hp);
                    }
                    if (result.regenerateMp && result.mpDamage !== 0) {
                        var mp = _createPopup(popupType, _createMpDamage(target), name);
                        popups.push(mp);
                    }
                    if (result.regenerateTp && result.silentTpDamage !== 0) {
                        var tp = _createPopup(popupType, _createTpDamage(target), name);
                        popups.push(tp);
                    }
                    return popups;
                }
                function _createMissPopup(target) {
                    var result = target.result();
                    var popupType = _types().miss;
                    if (result.missed) {
                        return _createPopup(popupType, _createMiss(target), _battlerIdName(target));
                    }
                    else if (result.evaded) {
                        return _createPopup(popupType, _createEvasion(target), _battlerIdName(target));
                    }
                    return null;
                }
                function _createMiss(target) {
                    var color = convertTypeToColorIndex(PopupTypes.Miss);
                    var miss = new DamagePopup.Pieces.Text(_texts().miss, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(miss);
                }
                function _createEvasion(target) {
                    var color = convertTypeToColorIndex(PopupTypes.Evasion);
                    var evasion = new DamagePopup.Pieces.Text(_texts().evasion, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(evasion);
                }
                function _createHpDamagePopup(target) {
                    var result = target.result();
                    if (!result.hpAffected || result.missed || result.evaded || result.regenerateHp) {
                        return null;
                    }
                    return _createPopup(_types().hpDamage, _createHpDamage(target), _battlerIdName(target));
                }
                function _createMpDamagePopup(target) {
                    var result = target.result();
                    if (result.mpDamage === 0 || result.missed || result.evaded || result.regenerateMp) {
                        return null;
                    }
                    return _createPopup(_types().mpDamage, _createMpDamage(target), _battlerIdName(target));
                }
                function _createTpDamagePopup(target) {
                    var result = target.result();
                    if (target.isEnemy() || result.tpDamage === 0 || result.missed || result.evaded || result.regenerateTp) {
                        return null;
                    }
                    return _createPopup(_types().tpDamage, _createTpDamage(target), _battlerIdName(target));
                }
                function _createHpDamage(target) {
                    var result = target.result();
                    var color;
                    if (result.hpDamage >= 0) {
                        if (result.isEffectiveDamage()) {
                            color = convertTypeToColorIndex(PopupTypes.Effective);
                        }
                        else if (result.isNotEffectiveDamage()) {
                            color = convertTypeToColorIndex(PopupTypes.NotEffective);
                        }
                        else {
                            color = convertTypeToColorIndex(result.critical ? PopupTypes.HpCriticalDamage : PopupTypes.HpDamage);
                        }
                    }
                    else {
                        color = convertTypeToColorIndex(PopupTypes.HpRecover);
                    }
                    var num = new DamagePopup.Pieces.Digits(result.hpDamage, color, _getPopupImageAttributes());
                    var parts = new DamagePopup.Pieces.Base()
                        .addPiece(num);
                    if (result.hpDamage >= 0) {
                        parts.addPiece(_createEffective(target, color), Directions.Up);
                        parts.addPiece(_createCritical(target, color), Directions.Up);
                    }
                    return parts;
                }
                function _createMpDamage(target) {
                    var result = target.result();
                    var color;
                    var mpText;
                    if (result.mpDamage > 0) {
                        color = convertTypeToColorIndex(result.critical ? PopupTypes.MpCriticalDamage : PopupTypes.MpDamage);
                        mpText = TextManager.mpA + _texts().minus;
                    }
                    else {
                        color = convertTypeToColorIndex(PopupTypes.MpRecover);
                        mpText = TextManager.mpA + _texts().plus;
                    }
                    var text = new DamagePopup.Pieces.Text(mpText, color, _getPopupImageAttributes());
                    var num = new DamagePopup.Pieces.Digits(target.result().mpDamage, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(num)
                        .addPiece(text, Directions.Left);
                }
                function _createTpDamage(target) {
                    var result = target.result();
                    var damage = result.gainSilentTp ? result.silentTpDamage : result.tpDamage;
                    var color;
                    var tpText;
                    if (damage > 0) {
                        color = convertTypeToColorIndex(result.critical ? PopupTypes.TpCriticalDamage : PopupTypes.TpDamage);
                        tpText = TextManager.tpA + _texts().minus;
                    }
                    else {
                        color = convertTypeToColorIndex(PopupTypes.TpRecover);
                        tpText = TextManager.tpA + _texts().plus;
                    }
                    var text = new DamagePopup.Pieces.Text(tpText, color, _getPopupImageAttributes());
                    var num = new DamagePopup.Pieces.Digits(damage, color, _getPopupImageAttributes());
                    return new DamagePopup.Pieces.Base()
                        .addPiece(num)
                        .addPiece(text, Directions.Left);
                }
                function _createEffective(target, color) {
                    var result = target.result();
                    if (result.isEffectiveDamage()) {
                        return new DamagePopup.Pieces.Text(_texts().weakness, color, _getPopupImageAttributes());
                    }
                    else if (result.isNotEffectiveDamage()) {
                        return new DamagePopup.Pieces.Text(_texts().resist, color, _getPopupImageAttributes());
                    }
                    else {
                        return null;
                    }
                }
                function _createCritical(target, color) {
                    var result = target.result();
                    if (result.critical) {
                        return new DamagePopup.Pieces.Text(_texts().critical, color, _getPopupImageAttributes());
                    }
                    else {
                        return null;
                    }
                }
                function _createCounterPopup(target) {
                    if (target.result().performCounter) {
                        return _createPopup(_types().counter, _createCounter(), _battlerIdName(target));
                    }
                    return null;
                }
                function _createCounter() {
                    var color = convertTypeToColorIndex(PopupTypes.Counter);
                    return new DamagePopup.Pieces.Text(_texts().counter, color, _getPopupImageAttributes());
                }
                function _createReflectionPopup(target) {
                    if (target.result().performReflection) {
                        return _createPopup(_types().reflection, _createReflection(), _battlerIdName(target));
                    }
                    return null;
                }
                function _createReflection() {
                    var color = convertTypeToColorIndex(PopupTypes.Reflection);
                    return new DamagePopup.Pieces.Text(_texts().reflection, color, _getPopupImageAttributes());
                }
                function _createSubstitutePopup(target) {
                    if (target.result().performSubstitute) {
                        return _createPopup(_types().substitute, _createSubstitute(), _battlerIdName(target));
                    }
                    return null;
                }
                function _createSubstitute() {
                    var color = convertTypeToColorIndex(PopupTypes.Substitute);
                    return new DamagePopup.Pieces.Text(_texts().substitute, color, _getPopupImageAttributes());
                }
                function _battlerIdName(target) {
                    return target.index().toString() + target.name().toString() + target.battlerName().toString();
                }
                function _addStateType(state) {
                    if (Core.RPGExtension.getPositive(state)) {
                        return PopupTypes.AddPositiveState;
                    }
                    else if (Core.RPGExtension.getNegative(state)) {
                        return PopupTypes.AddNegativeState;
                    }
                    else {
                        return PopupTypes.AddState;
                    }
                }
                function _removeStateType(state) {
                    if (Core.RPGExtension.getPositive(state)) {
                        return PopupTypes.RemovePositiveState;
                    }
                    else if (Core.RPGExtension.getNegative(state)) {
                        return PopupTypes.RemoveNegativeState;
                    }
                    else {
                        return PopupTypes.RemoveState;
                    }
                }
                var attributes = null;
                function _getPopupImageAttributes() {
                    if (attributes == null) {
                        attributes = _createPopupImageAttributes();
                    }
                    return attributes;
                }
                var numPaddingX = 8;
                function _createPopupImageAttributes() {
                    var b = new Bitmap();
                    b.fontSize = Core.Settings.popup().numberSize;
                    var font = Core.Settings.popup().textFont;
                    b.fontFace = font;
                    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                    var numberWidths = numbers.map(function (x) {
                        return Math.round(b.measureTextWidth(x) + numPaddingX);
                    });
                    var bw = numberWidths.reduce(function (prev, current) {
                        return prev + current;
                    }, 0);
                    var height = Core.Settings.popup().numberHeight;
                    var colors = Core.Settings.popup().colors;
                    b.resize(bw, height * colors.length);
                    b.smooth = true;
                    colors.forEach(function (value, index) {
                        b.textColor = value.bodyColor;
                        b.outlineColor = value.outlineColor;
                        var drawX = 0;
                        numbers.forEach(function (n, i) {
                            b.drawText(n, drawX, index * height, numberWidths[i], height, "center");
                            drawX += numberWidths[i];
                        });
                    });
                    return {
                        numbers: b,
                        widths: numberWidths,
                        numberHeight: height,
                        numberSpacing: Core.Settings.popup().numberSpacing,
                        textSize: Core.Settings.popup().textSize,
                        textFont: font,
                        textHeight: Core.Settings.popup().textSize,
                        colors: colors
                    };
                }
                function _createPopup(type, piece, name) {
                    var popupType = BD.Core.DamagePopup.Types[type];
                    if (popupType === undefined) {
                        return new DamagePopup.Types.SimpleBounce(piece, name);
                    }
                    return new popupType(piece, name);
                }
                function _types() {
                    return Core.Settings.popup().types;
                }
                function _texts() {
                    return Core.Settings.popup().texts;
                }
                function convertTypeToColorIndex(type) {
                    var t = type;
                    var index = Core.Settings.popup().colorAlloc[t];
                    return index ? index : 0;
                }
                DamagePopupFactory.convertTypeToColorIndex = convertTypeToColorIndex;
            })(DamagePopupFactory = DamagePopup.DamagePopupFactory || (DamagePopup.DamagePopupFactory = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_Game_Action_calcElementRate = Game_Action.prototype.calcElementRate;
    Game_Action.prototype.calcElementRate = function (target) {
        var rate = _bdc_Game_Action_calcElementRate.call(this, target);
        target.result().damageRate = rate;
        return rate;
    };
})();

(function () {
    var _bdc_Game_ActionResult_clear = Game_ActionResult.prototype.clear;
    Game_ActionResult.prototype.clear = function () {
        if (this.performCounter) {
            this.performCounter = false;
            return;
        }
        if (this.performReflection) {
            this.performReflection = false;
            return;
        }
        if (this.performSubstitute) {
            this.performSubstitute = false;
            return;
        }
        if (!this.regenerateTp && this.gainSilentTp) {
            this.gainSilentTp = false;
            this.silentTpDamage = 0;
            return;
        }
        _bdc_Game_ActionResult_clear.call(this);
        this.damageRate = 1.0;
        this.regenerateHp = false;
        this.regenerateMp = false;
        this.regenerateTp = false;
        this.gainSilentTp = false;
        this.silentTpDamage = 0;
        this.addedNewStates = [];
        this.performCounter = false;
        this.performReflection = false;
        this.performSubstitute = false;
    };
    var _bdc_Game_ActionResult_isStatusAffected = Game_ActionResult.prototype.isStatusAffected;
    Game_ActionResult.prototype.isStatusAffected = function () {
        if (this.addedNewStates.length > 0) {
            return true;
        }
        return _bdc_Game_ActionResult_isStatusAffected.call(this);
    };
    Game_ActionResult.prototype.addedNewStateObjects = function () {
        return this.addedNewStates.map(function (id) {
            return $dataStates[id];
        });
    };
    Game_ActionResult.prototype.isEffectiveDamage = function () {
        return (this.damageRate > 1.0);
    };
    Game_ActionResult.prototype.isNotEffectiveDamage = function () {
        return (this.damageRate < 1.0);
    };
})();


(function () {
    var _bdc_Game_Battler_gainSilentTp = Game_Battler.prototype.gainSilentTp;
    Game_Battler.prototype.gainSilentTp = function (value) {
        this.result().gainSilentTp = true;
        this.result().silentTpDamage = -value;
        _bdc_Game_Battler_gainSilentTp.call(this, value);
        if (!this.result().regenerateTp) {
            this.startDamagePopup();
        }
    };
    var _bdc_Game_Battler_regenerateHp = Game_Battler.prototype.regenerateHp;
    Game_Battler.prototype.regenerateHp = function () {
        this.result().regenerateHp = true;
        _bdc_Game_Battler_regenerateHp.call(this);
    };
    var _bdc_Game_Battler_regenerateMp = Game_Battler.prototype.regenerateMp;
    Game_Battler.prototype.regenerateMp = function () {
        this.result().regenerateMp = true;
        _bdc_Game_Battler_regenerateMp.call(this);
    };
    var _bdc_Game_Battler_regenerateTp = Game_Battler.prototype.regenerateTp;
    Game_Battler.prototype.regenerateTp = function () {
        this.result().regenerateTp = true;
        _bdc_Game_Battler_regenerateTp.call(this);
    };
    Game_Battler.prototype.addNewState = function (stateId) {
        this.result().addedNewStates.push(stateId);
        Game_BattlerBase.prototype.addNewState.call(this, stateId);
    };
    var _bdc_Game_Battler_performCounter = Game_Battler.prototype.performCounter;
    Game_Battler.prototype.performCounter = function () {
        this.result().performCounter = true;
        this.startDamagePopup();
        _bdc_Game_Battler_performCounter.call(this);
    };
    var _bdc_Game_Battler_performReflection = Game_Battler.prototype.performReflection;
    Game_Battler.prototype.performReflection = function () {
        this.result().performReflection = true;
        this.startDamagePopup();
        _bdc_Game_Battler_performReflection.call(this);
    };
    var _bdc_Game_Battler_performSubstitute = Game_Battler.prototype.performSubstitute;
    Game_Battler.prototype.performSubstitute = function (target) {
        this.result().performSubstitute = true;
        this.startDamagePopup();
        _bdc_Game_Battler_performSubstitute.call(this, target);
    };
})();

(function () {
})();

(function () {
    var Settings = BD.Core.Settings;
    var _bdc_Sprite_Battler_initMembers = Sprite_Battler.prototype.initMembers;
    Sprite_Battler.prototype.initMembers = function () {
        _bdc_Sprite_Battler_initMembers.call(this);
        this._popupLayer = null;
    };
    Sprite_Battler.prototype.getPopupLayer = function () {
        if (!this._popupLayer) {
            this._popupLayer = this.findFamily(function (sprite) { return sprite instanceof BD.Core.DamagePopup.PopupLayer; });
        }
        return this._popupLayer;
    };
    Sprite_Battler.prototype.setupDamagePopup = function () {
        if (this._battler.isDamagePopupRequested()) {
            var popupLayer = this.getPopupLayer();
            var disablePopup = this._battler.isActor()
                && !Settings.battlerGraphic().enablePopup
                && !Settings.enableSideVidwBattler();
            if (popupLayer && this._battler.isSpriteVisible() && !disablePopup) {
                var sprite = new Sprite_Damage();
                var ap = this.absolutePosition();
                sprite.x = ap.x + this.damageOffsetX();
                sprite.y = ap.y + this.damageOffsetY();
                sprite.setup(this._battler);
                this._damages.push(sprite);
                popupLayer.addChild(sprite);
            }
            this._battler.clearDamagePopup();
            this._battler.clearResult();
        }
    };
    Sprite_Battler.prototype.updateDamagePopup = function () {
        this.setupDamagePopup();
        if (this._damages.length > 0) {
            for (var i = 0; i < this._damages.length; i++) {
                this._damages[i].update();
            }
            var popupLayer = this.getPopupLayer();
            if (popupLayer && !this._damages[0].isPlaying()) {
                popupLayer.removeChild(this._damages[0]);
                this._damages.shift();
            }
        }
    };
})();

(function () {
    var Popup = BD.Core.DamagePopup;
    Sprite_Damage.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._duration = 90;
        this.damages = [];
    };
    Sprite_Damage.prototype.setup = function (target) {
        var _this = this;
        var popups = Popup.DamagePopupFactory.create(target);
        popups.forEach(function (popup) {
            _this.damages.push(popup);
            _this.addChild(popup);
            Popup.DamagePopupFactory.adjustPopupPosition(popup, _this.x, _this.y);
        });
    };
    Sprite_Damage.prototype.update = function () {
        var damages = this.damages;
        return damages.forEach(function (popup) {
            popup.update();
        });
    };
    Sprite_Damage.prototype.isPlaying = function () {
        var damages = this.damages;
        return damages.some(function (popup) {
            return popup.isPlaying();
        });
    };
})();

(function () {
    Sprite_Enemy.prototype.damageOffsetX = function () {
        return 0;
    };
    Sprite_Enemy.prototype.damageOffsetY = function () {
        return -Math.round(this.height * 0.25);
    };
})();

(function () {
    var _bdc_Window_BattleLog_displayBuffs = Window_BattleLog.prototype.displayBuffs;
    Window_BattleLog.prototype.displayBuffs = function (target, buffs, fmt) {
        _bdc_Window_BattleLog_displayBuffs.call(this, target, buffs, fmt);
        this.push("popupDamage", target);
    };
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Digits = (function (_super) {
                    __extends(Digits, _super);
                    function Digits(num, color, attributes) {
                        var _this = _super.call(this, null) || this;
                        _this.setup(num, color, attributes);
                        return _this;
                    }
                    Digits.prototype.setup = function (num, color, attributes) {
                        var _this = this;
                        this.pieceWidth = 0;
                        var nums = Math.abs(num).toString().split("");
                        nums.map(function (x) { return parseInt(x); }).forEach(function (n) {
                            var s = new Sprite(attributes.numbers);
                            s.setFrame(_this._getFrameX(n, attributes.widths), attributes.numberHeight * color, attributes.widths[n], attributes.numberHeight);
                            s.x = _this.pieceWidth;
                            _this.pieceWidth += Math.round(attributes.widths[n] * attributes.numberSpacing);
                            _this.addChild(s);
                        });
                        this.pieceHeight = attributes.numberHeight;
                        this.children.forEach(function (x) {
                            x.x -= _this.pieceWidth / 2;
                            x.y -= _this.pieceHeight / 2;
                        });
                    };
                    Digits.prototype._getFrameX = function (num, widths) {
                        var x = 0;
                        for (var i = 0; i < num; i++) {
                            x += widths[i];
                        }
                        return x;
                    };
                    Digits.prototype.update = function () {
                    };
                    return Digits;
                }(Sprite));
                Pieces.Digits = Digits;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Directions = BD.Core.Consts.Enums.Directions;
                var Base = (function (_super) {
                    __extends(Base, _super);
                    function Base() {
                        var _this = _super.call(this, null) || this;
                        _this.anchor.x = 0.5;
                        _this.anchor.y = 0.5;
                        return _this;
                    }
                    Base.prototype.addPiece = function (piece, position) {
                        if (position === void 0) { position = Directions.Center; }
                        if (piece === null) {
                            return this;
                        }
                        if (this.children.length === 0) {
                            this._initialAdd(piece);
                            return this;
                        }
                        var pw = piece.pieceWidth;
                        var ph = piece.pieceHeight;
                        switch (position) {
                            case Directions.LeftDown:
                                throw ("Not Implemented");
                            case Directions.Down:
                                this._putToDown(piece, pw, ph);
                                break;
                            case Directions.RightDown:
                                throw ("Not Implemented");
                            case Directions.Left:
                                this._putToLeft(piece, pw, ph);
                                break;
                            case Directions.Center:
                                break;
                            case Directions.Right:
                                this._putToRight(piece, pw, ph);
                                break;
                            case Directions.LeftUp:
                                throw ("Not Implemented");
                            case Directions.Up:
                                this._putToUp(piece, pw, ph);
                                break;
                            case Directions.RightUp:
                                throw ("Not Implemented");
                            default:
                                break;
                        }
                        return this;
                    };
                    Base.prototype.shift = function (shiftX, shiftY) {
                        this.children.forEach(function (sprite) {
                            sprite.x += Math.round(shiftX);
                            sprite.y += Math.round(shiftY);
                        });
                        return this;
                    };
                    Base.prototype._initialAdd = function (piece) {
                        this.pieceWidth = piece.pieceWidth;
                        this.pieceHeight = piece.pieceHeight;
                        this.addChild(piece);
                    };
                    Base.prototype._putToLeft = function (piece, pw, ph) {
                        piece.x = Math.round(-this.pieceWidth / 2 - pw / 2);
                        this.pieceWidth += pw;
                        if (ph > this.pieceHeight) {
                            this.pieceHeight = ph;
                        }
                        this.addChild(piece);
                        this.shift(pw / 2, 0);
                    };
                    Base.prototype._putToRight = function (piece, pw, ph) {
                        piece.x = Math.round(this.pieceWidth / 2 + pw / 2);
                        this.pieceWidth += pw;
                        if (ph > this.pieceHeight) {
                            this.pieceHeight = ph;
                        }
                        this.addChild(piece);
                        this.shift(-pw / 2, 0);
                    };
                    Base.prototype._putToUp = function (piece, pw, ph) {
                        piece.y = Math.round(-this.pieceHeight / 2 - ph / 2);
                        this.pieceHeight += ph;
                        if (pw > this.pieceWidth) {
                            this.pieceWidth = pw;
                        }
                        this.addChild(piece);
                        this.shift(0, ph / 2);
                    };
                    Base.prototype._putToDown = function (piece, pw, ph) {
                        piece.y = Math.round(this.pieceHeight / 2 + ph / 2);
                        this.pieceHeight += ph;
                        if (pw > this.pieceWidth) {
                            this.pieceWidth = pw;
                        }
                        this.addChild(piece);
                        this.shift(0, -ph / 2);
                    };
                    return Base;
                }(Sprite));
                Pieces.Base = Base;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Icon = (function (_super) {
                    __extends(Icon, _super);
                    function Icon(iconIndex, opacity) {
                        var _this = _super.call(this) || this;
                        _this.setup(iconIndex, opacity);
                        return _this;
                    }
                    Icon.prototype.setup = function (iconIndex, opacity) {
                        this.bitmap = ImageManager.loadSystem("IconSet");
                        this._setIcon(iconIndex);
                        this.anchor.x = 0.5;
                        this.anchor.y = 0.5;
                        this.opacity = opacity;
                        this.pieceWidth = 32;
                        this.pieceHeight = 32;
                    };
                    Icon.prototype.update = function () {
                    };
                    Icon.prototype._setIcon = function (iconIndex) {
                        var pw = 32;
                        var ph = 32;
                        var sx = iconIndex % 16 * pw;
                        var sy = Math.floor(iconIndex / 16) * ph;
                        this.setFrame(sx, sy, pw, ph);
                        this.anchor.x = 0.5;
                        this.anchor.y = 0.5;
                    };
                    return Icon;
                }(Sprite));
                Pieces.Icon = Icon;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Pieces;
            (function (Pieces) {
                var Text = (function (_super) {
                    __extends(Text, _super);
                    function Text(text, color, attributes) {
                        var _this = _super.call(this) || this;
                        _this.setup(text, color, attributes);
                        return _this;
                    }
                    Text.prototype.setup = function (text, color, attributes) {
                        var b = new Bitmap(4, 4);
                        b.outlineColor = attributes.colors[color].outlineColor;
                        b.textColor = attributes.colors[color].bodyColor;
                        b.fontSize = attributes.textSize;
                        b.fontFace = attributes.textFont;
                        var textWidth = b.measureTextWidth(text) + 4;
                        b.resize(textWidth, attributes.textHeight);
                        b.drawText(text, 0, 0, b.width, b.height, "center");
                        this.bitmap = b;
                        this.anchor.x = 0.5;
                        this.anchor.y = 0.5;
                        this.pieceWidth = b.width;
                        this.pieceHeight = b.height;
                    };
                    Text.prototype.update = function () {
                    };
                    return Text;
                }(Sprite));
                Pieces.Text = Text;
            })(Pieces = DamagePopup.Pieces || (DamagePopup.Pieces = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var PopupLayer = (function (_super) {
                __extends(PopupLayer, _super);
                function PopupLayer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PopupLayer;
            }(Sprite));
            DamagePopup.PopupLayer = PopupLayer;
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var AbstractDamagePopup = (function (_super) {
                    __extends(AbstractDamagePopup, _super);
                    function AbstractDamagePopup(piece) {
                        var _this = _super.call(this, null) || this;
                        _this.anchor.x = 0.5;
                        _this.anchor.y = 0.5;
                        _this.addChild(piece);
                        return _this;
                    }
                    Object.defineProperty(AbstractDamagePopup.prototype, "pieceWidth", {
                        get: function () {
                            if (this.children[0] instanceof DamagePopup.Pieces.Base) {
                                return this.children[0].pieceWidth;
                            }
                            return 0;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(AbstractDamagePopup.prototype, "pieceHeight", {
                        get: function () {
                            if (this.children[0] instanceof DamagePopup.Pieces.Base) {
                                return this.children[0].pieceHeight;
                            }
                            return 0;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    AbstractDamagePopup.prototype.update = function () {
                        _super.prototype.update.call(this);
                    };
                    AbstractDamagePopup.prototype.isPlaying = function () {
                        return false;
                    };
                    return AbstractDamagePopup;
                }(Sprite));
                Types.AbstractDamagePopup = AbstractDamagePopup;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var Motionless = (function (_super) {
                    __extends(Motionless, _super);
                    function Motionless(parts) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup();
                        return _this;
                    }
                    Motionless.prototype.setup = function () {
                        this.opacity = 32;
                        this._opacity = 32;
                        this._duration = 60;
                    };
                    Motionless.prototype.update = function () {
                        _super.prototype.update.call(this);
                        if (this._opacity < 256 && this._duration > 0) {
                            this._opacity = Math.min(255, this._opacity + 32);
                        }
                        this._duration--;
                        if (this._duration <= 0) {
                            this._opacity -= 32;
                        }
                        this.opacity = this._opacity;
                    };
                    Motionless.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    return Motionless;
                }(Types.AbstractDamagePopup));
                Types.Motionless = Motionless;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var Overlay = (function (_super) {
                    __extends(Overlay, _super);
                    function Overlay(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    Overlay.initializePopup = function () {
                        Overlay.adjustYData = {};
                    };
                    Overlay.prototype.setup = function (name) {
                        var _this = this;
                        this._duration = 90;
                        this._name = name;
                        this._overlay = new Sprite();
                        this._overlay.opacity = 128;
                        this.children.forEach(function (x) { return _this._overlay.addChild(x.clone()); });
                        this._overlay.flatten().forEach(function (x) { return x.blendMode = Graphics.BLEND_ADD; });
                        this.addChild(this._overlay);
                        if (Overlay.adjustYData[this._name] === undefined) {
                            Overlay.adjustYData[this._name] = 0;
                        }
                        this.y = -Overlay.adjustYData[this._name];
                        Overlay.adjustYData[this._name] += this.pieceHeight;
                    };
                    Overlay.prototype.update = function () {
                        this._duration--;
                        this.y = -16;
                        this.opacity = 255 + (this._duration - 8) * 32;
                        this._overlay.scale.x += 0.1;
                        this._overlay.scale.y += 0.1;
                        this._overlay.opacity -= 6;
                        if (this._duration === 0) {
                            Overlay.adjustYData[this._name] -= this.pieceHeight;
                        }
                    };
                    Overlay.prototype.isPlaying = function () {
                        return this._duration > 0;
                    };
                    return Overlay;
                }(Types.AbstractDamagePopup));
                Types.Overlay = Overlay;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var RandomBounce = (function (_super) {
                    __extends(RandomBounce, _super);
                    function RandomBounce(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    RandomBounce.prototype.setup = function (name) {
                        this._duration = 90;
                        this._name = name;
                        this._realX = 0;
                        this._realY = -8;
                        this._gravity = 0.3;
                        this._horizon = 32;
                        this._xVelocityDispersion = [-1.25, 1.25];
                        this._yVelocityDispersion = [-4, -6];
                        var xvd = this._xVelocityDispersion;
                        this._xVelocity = xvd[0] + Math.random() * (xvd[1] - xvd[0]);
                        var yvd = this._yVelocityDispersion;
                        this._yVelocity = yvd[0] + Math.random() * (yvd[1] - yvd[0]);
                        this._restitution = 0.64;
                        this._maxBoundCount = Infinity;
                    };
                    RandomBounce.prototype.update = function () {
                        this._duration--;
                        this.x = Math.round(this._realX);
                        this.y = Math.round(this._realY);
                        if (this._maxBoundCount >= 0) {
                            this._realX += this._xVelocity;
                            this._realY += this._yVelocity;
                            this._yVelocity += this._gravity;
                            if (this._realY > this._horizon) {
                                this._realY = this._horizon;
                                this._yVelocity = -this._yVelocity * this._restitution;
                                this._maxBoundCount--;
                                if (this._yVelocity > -1) {
                                    this._maxBoundCount = -1;
                                }
                            }
                        }
                        if (this._duration < 0) {
                            this.opacity -= 16;
                        }
                    };
                    RandomBounce.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    return RandomBounce;
                }(Types.AbstractDamagePopup));
                Types.RandomBounce = RandomBounce;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var Rise = (function (_super) {
                    __extends(Rise, _super);
                    function Rise(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    Rise.initializePopup = function () {
                        Rise.RisingPopups = {};
                    };
                    ;
                    Rise.prototype.setup = function (name) {
                        this._duration = 120;
                        this._name = name;
                        this._realX = 0;
                        this._realY = 0;
                        this._riseSpeed = 0.66;
                        this.visible = false;
                    };
                    Rise.prototype.update = function () {
                        if (!this.visible) {
                            if (this._isReady()) {
                                Rise.RisingPopups[this._name] = this;
                                this.visible = true;
                            }
                            return;
                        }
                        this._duration--;
                        this.x = Math.round(this._realX);
                        this.y = Math.round(this._realY);
                        this._realY -= this._riseSpeed;
                        if (this._duration < 0) {
                            if (Rise.RisingPopups[this._name] === this) {
                                Rise.RisingPopups[this._name] = null;
                            }
                            this.opacity -= 6;
                        }
                    };
                    Rise.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    Rise.prototype._isReady = function () {
                        var currentPopup = Rise.RisingPopups[this._name];
                        if (currentPopup == null || currentPopup === this) {
                            return true;
                        }
                        if (-this.pieceHeight / 2 > currentPopup.y + currentPopup.pieceHeight / 2) {
                            return true;
                        }
                        return false;
                    };
                    return Rise;
                }(Types.AbstractDamagePopup));
                Types.Rise = Rise;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var DamagePopup;
        (function (DamagePopup) {
            var Types;
            (function (Types) {
                var SimpleBounce = (function (_super) {
                    __extends(SimpleBounce, _super);
                    function SimpleBounce(parts, name) {
                        var _this = _super.call(this, parts) || this;
                        _this.setup(name);
                        return _this;
                    }
                    SimpleBounce.initializePopup = function () {
                        SimpleBounce.adjustYData = {};
                    };
                    SimpleBounce.prototype.setup = function (name) {
                        this._duration = 90;
                        this._name = name;
                        this._realX = 0;
                        this._realY = 16;
                        this._yVelocity = -4.8;
                        this._gravity = 0.3;
                        this._horizon = 8;
                        if (SimpleBounce.adjustYData[this._name] === undefined) {
                            SimpleBounce.adjustYData[this._name] = 0;
                        }
                        this.pivot.y = -SimpleBounce.adjustYData[this._name];
                        SimpleBounce.adjustYData[this._name] += this.pieceHeight;
                    };
                    SimpleBounce.prototype.update = function () {
                        this._duration--;
                        this.x = Math.round(this._realX);
                        this.y = Math.round(this._realY);
                        this._realY += this._yVelocity;
                        if (this._realY > this._horizon) {
                            this._realY = this._horizon;
                        }
                        this._yVelocity += this._gravity;
                        if (this._duration === 48) {
                            SimpleBounce.adjustYData[this._name] -= this.pieceHeight;
                        }
                        if (this._duration < 0) {
                            this.opacity -= 16;
                        }
                    };
                    SimpleBounce.prototype.isPlaying = function () {
                        return this.opacity > 0;
                    };
                    return SimpleBounce;
                }(Types.AbstractDamagePopup));
                Types.SimpleBounce = SimpleBounce;
            })(Types = DamagePopup.Types || (DamagePopup.Types = {}));
        })(DamagePopup = Core.DamagePopup || (Core.DamagePopup = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                BattleObjects.defs = BD.Core.Property.PropertyUtility.definitions;
                BattleObjects.PropertyChanged = BD.Core.Property.PropertyChanged;
                var Base = (function (_super) {
                    __extends(Base, _super);
                    function Base(obj) {
                        var _this = _super.call(this, null) || this;
                        _this._initObjectRaw = obj;
                        _this._internalVisibility = true;
                        return _this;
                    }
                    Object.defineProperty(Base.prototype, "propertyChanged", {
                        get: function () {
                            return this._propertyChanged;
                        },
                        set: function (value) {
                            this._propertyChanged = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Base.prototype.setup = function (parent) {
                        parent.addChild(this);
                        var obj = this._initObjectRaw;
                        this._updateCount = this.spriteId;
                        this.initializeDragging();
                        this.propertyChanged = new BattleObjects.PropertyChanged();
                        this._setProperties(obj.properties);
                        this._setPropertyFunctions = {};
                        this._ready = true;
                        this._initObjectRaw = null;
                        this._createBattleObject(obj, this);
                        this.update();
                        this._updatePropertyInternal();
                        this._initializeInternal(obj);
                    };
                    Base.prototype._initializeInternal = function (obj) {
                    };
                    Base.prototype.initializeDragging = function () {
                        this._touchStratPoint = new Point(0, 0);
                        this._hold = false;
                        this._touching = false;
                        this._dragging = false;
                        this._pressCount = 0;
                    };
                    Base.prototype.update = function () {
                        if (!this._ready) {
                            return;
                        }
                        this._updateInternal();
                        this._updateProperties();
                        this._updateCommonProperties();
                        _super.prototype.update.call(this);
                    };
                    Base.prototype._updateCommonProperties = function () {
                        this._setProperty(BattleObjects.defs.x);
                        this._setProperty(BattleObjects.defs.y);
                        if (this._internalVisibility) {
                            this._setProperty(BattleObjects.defs.visible);
                        }
                    };
                    Base.prototype._updateProperties = function () {
                        if (!Core.Manager.isStopHUD() && this._updateCount++ % 4 === 0) {
                            this._updateCommonProperties();
                            this._updatePropertyInternal();
                            this.propertyChanged.update();
                        }
                    };
                    Base.prototype._updateInternal = function () {
                    };
                    Base.prototype._updatePropertyInternal = function () {
                    };
                    Base.prototype.containable = function () {
                        return false;
                    };
                    Base.prototype._createBattleObject = function (obj, parent) {
                        var _this = this;
                        obj.children.forEach(function (x) {
                            var child = _this._createSpriteBattleObject(x);
                            child.setup(parent);
                        });
                    };
                    Base.prototype._createSpriteBattleObject = function (obj) {
                        try {
                            var o = eval("new BD.Core.HUD.BattleObjects." + obj.properties["type"] + "(obj)");
                            return o;
                        }
                        catch (e) {
                            throw ("failed _createSpriteBattleObject \"" + obj.properties["type"] + "\"");
                        }
                    };
                    Base.prototype.dragging = function () {
                        if (!this.draggable()) {
                            return;
                        }
                        if (TouchInput.isTriggered() && this.isTouched() && this.isActive()) {
                            this._touchStratPoint.x = TouchInput.x;
                            this._touchStratPoint.y = TouchInput.y;
                            this._touching = true;
                        }
                        else if (TouchInput.isReleased() && this._touching) {
                            this.dragMove();
                            this.resetPressCount();
                        }
                        if (this._touching) {
                            this.dragMove();
                        }
                        return this._touching;
                    };
                    Base.prototype.dragMove = function () {
                        var newX = this.x + (TouchInput.x - this._touchStratPoint.x);
                        var newY = this.y + (TouchInput.y - this._touchStratPoint.y);
                        if (TouchInput.isReleased()) {
                            this.endDrag(newX, newY);
                        }
                        this.x = newX;
                        this.y = newY;
                    };
                    Base.prototype.endDrag = function (newX, newY) {
                        this._setPropertyFunctions[BattleObjects.defs.x.key] = null;
                        this._setPropertyFunctions[BattleObjects.defs.y.key] = null;
                        this._properties["x"] = newX;
                        this._properties["y"] = newY;
                        this.x = newX;
                        this.y = newY;
                        var name = this._properties["name"];
                        BD.Studio.Utilities.ObjectController.setProperties(name, this._properties);
                    };
                    Base.prototype.draggable = function () {
                        return false;
                    };
                    Base.prototype.updatePressCount = function () {
                        this._pressCount++;
                    };
                    Base.prototype.resetPressCount = function () {
                        this._pressCount = 0;
                        this._touching = false;
                    };
                    Base.prototype.isActive = function () {
                        var node = this;
                        while (node) {
                            if (!node.visible) {
                                return false;
                            }
                            node = node.parent;
                        }
                        return true;
                    };
                    Base.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        return x >= 0 && y >= 0 && x < this.width && y < this.height;
                    };
                    Base.prototype.canvasToLocalX = function (x) {
                        var node = this;
                        while (node) {
                            x -= node.x;
                            node = node.parent;
                        }
                        return x;
                    };
                    Base.prototype.canvasToLocalY = function (y) {
                        var node = this;
                        while (node) {
                            y -= node.y;
                            node = node.parent;
                        }
                        return y;
                    };
                    Base.prototype._setProperties = function (properties) {
                        this._properties = properties;
                    };
                    Base.prototype._getProperties = function () {
                        if (this._properties === null) {
                            return {};
                        }
                        return this._properties;
                    };
                    Base.prototype._getProperty = function (key) {
                        if (this._getProperties()[key] == null) {
                            return null;
                        }
                        return this._getProperties()[key];
                    };
                    Base.prototype._valueEvaluation = function (key) {
                        var func = this._setPropertyFunctions[key];
                        if (func) {
                            return func.call(this.getContext());
                        }
                        else {
                            var value = "return " + this._getProperty(key);
                            this._setPropertyFunctions[key] = BD.Core.Property.PropertyUtility.makeFunction(key, value, this.getContext());
                            return this._valueEvaluation(key);
                        }
                    };
                    Base.prototype._setProperty = function (def) {
                        var key = def.key;
                        var value = this._valueEvaluation(key);
                        if (this[key] !== value) {
                            this.propertyChanged.raise(key);
                            this[key] = value;
                        }
                    };
                    Base.prototype.getContext = function () {
                        return this.parent.getContext();
                    };
                    Base.prototype.getObjectName = function () {
                        return this._properties["name"];
                    };
                    Base.prototype.setVisibility = function (visibility) {
                        if (visibility) {
                            this._internalVisibility = true;
                            this._setProperty(BattleObjects.defs.visible);
                        }
                        else {
                            this._internalVisibility = false;
                            this.visible = false;
                        }
                    };
                    return Base;
                }(Sprite));
                BattleObjects.Base = Base;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Battler = (function (_super) {
                    __extends(Battler, _super);
                    function Battler() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Battler.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        return x >= 0 && y >= 0 && x < 144 && y < 144;
                    };
                    Battler.prototype.draggable = function () {
                        return true;
                    };
                    Battler.prototype._initializeInternal = function (properties) {
                        this._createBattler();
                    };
                    Battler.prototype._updateInternal = function () {
                    };
                    Battler.prototype._updatePropertyInternal = function () {
                    };
                    Battler.prototype._createBattler = function () {
                        this.removeChildren();
                        var context = this.getContext();
                        if (!(context["b"] instanceof Game_Battler)) {
                            return;
                        }
                        var battler = context["b"];
                        battler.initHudParamCache();
                        var s = new BattleObjects.Components.XPStyleBattler(battler);
                        s.setBattler(battler);
                        this.addChild(s);
                        s.mask = this._createMask();
                    };
                    Battler.prototype._createMask = function () {
                        var mask = undefined;
                        this._setProperty(BattleObjects.defs.maskImage);
                        this._setProperty(BattleObjects.defs.maskImageX);
                        this._setProperty(BattleObjects.defs.maskImageY);
                        if (this.maskImage !== "") {
                            mask = new Sprite(ImageManager.loadThemeImage(this.maskImage));
                            mask.x = this.maskImageX;
                            mask.y = this.maskImageY;
                            this.parent.addChild(mask);
                        }
                        return mask;
                    };
                    return Battler;
                }(BattleObjects.Base));
                BattleObjects.Battler = Battler;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var CircleGauge = (function (_super) {
                    __extends(CircleGauge, _super);
                    function CircleGauge() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    CircleGauge.prototype.draggable = function () {
                        return true;
                    };
                    CircleGauge.prototype._initializeInternal = function (properties) {
                        this._sourceBitmap = null;
                        this._canvasPattern = null;
                        this._displayRate = null;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._createGauge, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.value.key, this._updateRate, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.maxValue.key, this._updateRate, this);
                        this._createGauge();
                    };
                    CircleGauge.prototype._updateInternal = function () {
                        this._updateGauge();
                    };
                    CircleGauge.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.fileName);
                        this._setProperty(BattleObjects.defs.value);
                        this._setProperty(BattleObjects.defs.maxValue);
                        this._setProperty(BattleObjects.defs.startAngle);
                        this._setProperty(BattleObjects.defs.endAngle);
                        this._setProperty(BattleObjects.defs.radius);
                        this._setProperty(BattleObjects.defs.lineWidth);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                    };
                    CircleGauge.prototype._createGauge = function () {
                        this._updateRate();
                        this._sourceBitmap = ImageManager.loadThemeImage(this.fileName);
                        this.bitmap = new Bitmap(this._sourceBitmap.width, this._sourceBitmap.height);
                        this._createCanvasPattern();
                        this._ctx = this.bitmap.context;
                        if (!this._sourceBitmap.isReady()) {
                            this.propertyChanged.raise("fileName");
                        }
                    };
                    CircleGauge.prototype._createCanvasPattern = function () {
                        var ctx = this.bitmap.context;
                        this._canvasPattern = ctx.createPattern(this._sourceBitmap.baseTexture.source, "no-repeat");
                    };
                    CircleGauge.prototype._updateGauge = function () {
                        this._displayRate = Core.Utils.Interpolator.smooth(this._currentRate, this._displayRate, this.animationSpeed, 0.001);
                        this._drawGauge();
                    };
                    CircleGauge.prototype._updateRate = function () {
                        this._currentRate = this.value / this.maxValue;
                        if (this._displayRate === null) {
                            this._displayRate = this._currentRate;
                        }
                    };
                    CircleGauge.prototype._drawGauge = function () {
                        if (!this._ctx || this._lastDrawRate === this._displayRate) {
                            return;
                        }
                        this.bitmap.clear();
                        this._ctx.beginPath();
                        var x = this.width / 2;
                        var y = this.height / 2;
                        var startAngle = Math.radians(this.startAngle);
                        var endAngle = Math.radians(this.startAngle - (this.startAngle - this.endAngle) * this._displayRate);
                        this._ctx.arc(x, y, this.radius, startAngle, endAngle, false);
                        this._ctx.lineWidth = this.lineWidth;
                        this._ctx.strokeStyle = this._canvasPattern;
                        this._ctx.stroke();
                        this._lastDrawRate = this._displayRate;
                    };
                    return CircleGauge;
                }(BattleObjects.Base));
                BattleObjects.CircleGauge = CircleGauge;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Container = (function (_super) {
                    __extends(Container, _super);
                    function Container() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Container.prototype._initializeInternal = function (properties) {
                    };
                    Container.prototype._updateInternal = function () {
                    };
                    Container.prototype._updatePropertyInternal = function () {
                    };
                    Container.prototype.containable = function () {
                        return true;
                    };
                    return Container;
                }(BattleObjects.Base));
                BattleObjects.Container = Container;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var HorizontalGauge = (function (_super) {
                    __extends(HorizontalGauge, _super);
                    function HorizontalGauge() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    HorizontalGauge.prototype.draggable = function () {
                        return true;
                    };
                    HorizontalGauge.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        var bitmap = ImageManager.loadThemeImage(this.fileName);
                        var nh = bitmap.height / this.maxPattern;
                        return x >= 0 && y >= 0 && x < bitmap.width && y < nh;
                    };
                    HorizontalGauge.prototype._initializeInternal = function (properties) {
                        this._displayRate = null;
                        this._gaugeWidth = 4;
                        this._gaugeHeight = 4;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._setGauge, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.value.key, this._updateRate, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.maxValue.key, this._updateRate, this);
                        this._setGauge();
                    };
                    HorizontalGauge.prototype._updateInternal = function () {
                        this._updateGauge();
                    };
                    HorizontalGauge.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.value);
                        this._setProperty(BattleObjects.defs.maxValue);
                        this._setProperty(BattleObjects.defs.pattern);
                        this._setProperty(BattleObjects.defs.maxPattern);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                        this._setProperty(BattleObjects.defs.fileName);
                    };
                    HorizontalGauge.prototype._setGauge = function () {
                        this.bitmap = ImageManager.loadThemeImage(this.fileName);
                        this._updateRate();
                        if (!this.bitmap.isReady()) {
                            this.propertyChanged.raise("fileName");
                        }
                        this._gaugeWidth = this.bitmap.width;
                        this._gaugeHeight = this.bitmap.height / this.maxPattern;
                    };
                    HorizontalGauge.prototype._updateRate = function () {
                        this._currentRate = this.value / this.maxValue;
                        if (this._displayRate === null) {
                            this._displayRate = this._currentRate;
                        }
                    };
                    HorizontalGauge.prototype._updateGauge = function () {
                        this._displayRate = Core.Utils.Interpolator.smooth(this._currentRate, this._displayRate, this.animationSpeed, 0.001);
                        this.setFrame(0, this._gaugeHeight * this.pattern, this._gaugeWidth * this._displayRate, this._gaugeHeight);
                    };
                    return HorizontalGauge;
                }(BattleObjects.Base));
                BattleObjects.HorizontalGauge = HorizontalGauge;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Image = (function (_super) {
                    __extends(Image, _super);
                    function Image() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Image.prototype.draggable = function () {
                        return true;
                    };
                    Image.prototype._initializeInternal = function (properties) {
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._setImage, this);
                        this._setImage();
                    };
                    Image.prototype._updateInternal = function () {
                    };
                    Image.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.fileName);
                    };
                    Image.prototype._setImage = function () {
                        this.bitmap = ImageManager.loadThemeImage(this.fileName);
                        if (!this.bitmap.isReady()) {
                            this.propertyChanged.raise("fileName");
                        }
                    };
                    return Image;
                }(BattleObjects.Base));
                BattleObjects.Image = Image;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Number = (function (_super) {
                    __extends(Number, _super);
                    function Number() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Number.prototype.draggable = function () {
                        return true;
                    };
                    Number.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        return x >= 0 && y >= 0 && x < 128 && y < 128;
                    };
                    Number.prototype._initializeInternal = function (properties) {
                        this._displayValue = null;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fileName.key, this._createDigits, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.digits.key, this._createDigits, this);
                        this._createDigits();
                    };
                    Number.prototype._updateInternal = function () {
                        this._updateDisplayValue();
                    };
                    Number.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.value);
                        this._setProperty(BattleObjects.defs.maxValue);
                        this._setProperty(BattleObjects.defs.pattern);
                        this._setProperty(BattleObjects.defs.maxPattern);
                        this._setProperty(BattleObjects.defs.digits);
                        this._setProperty(BattleObjects.defs.zeroSuppress);
                        this._setProperty(BattleObjects.defs.spacing);
                        this._setProperty(BattleObjects.defs.horizontalAlignment);
                        this._setProperty(BattleObjects.defs.verticalAlignment);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                        this._setProperty(BattleObjects.defs.fileName);
                    };
                    Number.prototype._updateDisplayValue = function () {
                        if (this._displayValue === null) {
                            this._displayValue = this.value;
                            this._updateDigits();
                        }
                        else if (this._displayValue !== this.value) {
                            this._displayValue = Core.Utils.Interpolator.smooth(this.value, this._displayValue, this.animationSpeed, 0.1);
                            this._updateDigits();
                        }
                    };
                    Number.prototype._createDigits = function () {
                        this.removeChildren();
                        var bitmap = ImageManager.loadThemeImage(this.fileName);
                        this._numberWidth = bitmap.width / 10;
                        this._numberHeight = bitmap.height / this.maxPattern;
                        for (var i = 0; i < this.digits; i++) {
                            var s = new Sprite(bitmap);
                            s.setFrame(0, 0, this._numberWidth, this._numberHeight);
                            this.addChild(s);
                        }
                        this._updateDigits();
                        if (!bitmap.isReady()) {
                            this.children.forEach(function (x) { return x.visible = false; });
                            this.propertyChanged.raise("fileName");
                        }
                    };
                    Number.prototype._updateDigits = function () {
                        if (this._displayValue === null) {
                            this._displayValue = this.value;
                        }
                        var v = Math.abs(Math.round(this._displayValue));
                        var nums = v.toString().split("").map(function (x) { return parseInt(x); }).reverse();
                        var y = this._numberHeight * this.pattern;
                        for (var i = 0; i < this.digits; i++) {
                            var s = this.children[i];
                            s.x = this._getNumberPosition(i + 1, this.zeroSuppress ? Math.min(this.digits, nums.length) : this.digits, this._numberWidth);
                            if (i < nums.length) {
                                s.visible = true;
                                s.setFrame(this._numberWidth * nums[i], y, this._numberWidth, this._numberHeight);
                            }
                            else if (this.zeroSuppress) {
                                s.visible = false;
                            }
                            else {
                                s.visible = true;
                                s.setFrame(0, 0, this._numberWidth, this._numberHeight);
                            }
                        }
                    };
                    Number.prototype._getNumberPosition = function (digit, length, numberWidth) {
                        var baseX;
                        switch (this.horizontalAlignment) {
                            case Core.Consts.Enums.HorizontalAlignment.Left:
                                baseX = numberWidth * length + this.spacing * (length - 1);
                                break;
                            case Core.Consts.Enums.HorizontalAlignment.Center:
                                var aw = numberWidth * length + this.spacing * (length - 1);
                                var bw = numberWidth * this.digits + this.spacing * (this.digits - 1);
                                baseX = bw - ((bw - aw) / 2);
                                break;
                            case Core.Consts.Enums.HorizontalAlignment.Right:
                                baseX = numberWidth * this.digits + this.spacing * (this.digits - 1);
                                break;
                            default:
                                baseX = 0;
                                break;
                        }
                        return baseX - (numberWidth * digit + this.spacing * (digit - 1));
                    };
                    return Number;
                }(BattleObjects.Base));
                BattleObjects.Number = Number;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var PartyStatusContainer = (function (_super) {
                    __extends(PartyStatusContainer, _super);
                    function PartyStatusContainer() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    PartyStatusContainer.prototype._initializeInternal = function (properties) {
                        this._rawProperties = properties;
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.width.key, this._setPosition, this);
                        this._setPosition();
                    };
                    PartyStatusContainer.prototype._updateInternal = function () {
                        this._watchMemberChange();
                    };
                    PartyStatusContainer.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.width);
                    };
                    PartyStatusContainer.prototype.containable = function () {
                        return true;
                    };
                    PartyStatusContainer.prototype._createBattleObject = function (object, parent) {
                        var _this = this;
                        this._lastBattleMembers = $gameParty.battleMembers();
                        this.children = [];
                        $gameParty.battleMembers().forEach(function (x) {
                            var c = new BattleObjects.Components.BattlerContextContainer(x, _this);
                            _super.prototype._createBattleObject.call(_this, object, c);
                            x.refresh();
                        });
                    };
                    PartyStatusContainer.prototype._setPosition = function () {
                        var _this = this;
                        var membersWidth = this.width * $gameParty.battleMembers().length;
                        var baseX = (Graphics.boxWidth - membersWidth) / 2;
                        this.children.forEach(function (s, i) {
                            s.x = baseX + i * _this.width;
                        });
                    };
                    PartyStatusContainer.prototype._watchMemberChange = function () {
                        if (!$gameParty.battleMembers().equals(this._lastBattleMembers)) {
                            this._createBattleObject(this._rawProperties, null);
                            this._updateSpritesetBattleActorSprites();
                            this._setPosition();
                        }
                    };
                    PartyStatusContainer.prototype._updateSpritesetBattleActorSprites = function () {
                        var parent = this.parent;
                        while (!(parent instanceof Spriteset_Battle)) {
                            parent = parent.parent;
                        }
                        parent.updateActorSprites();
                    };
                    return PartyStatusContainer;
                }(BattleObjects.Base));
                BattleObjects.PartyStatusContainer = PartyStatusContainer;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Rectangle = (function (_super) {
                    __extends(Rectangle, _super);
                    function Rectangle() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Rectangle.prototype._initializeInternal = function (properties) {
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.width.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.height.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.fillColor.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.gradientColor.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.isGradient.key, this._drawRectangle, this);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.isVertical.key, this._drawRectangle, this);
                        this._drawRectangle();
                    };
                    Rectangle.prototype._updateInternal = function () {
                    };
                    Rectangle.prototype._updatePropertyInternal = function () {
                        this._setProperty(BattleObjects.defs.width);
                        this._setProperty(BattleObjects.defs.height);
                        this._setProperty(BattleObjects.defs.fillColor);
                        this._setProperty(BattleObjects.defs.gradientColor);
                        this._setProperty(BattleObjects.defs.isGradient);
                        this._setProperty(BattleObjects.defs.isVertical);
                    };
                    Rectangle.prototype.draggable = function () {
                        return true;
                    };
                    Rectangle.prototype._drawRectangle = function () {
                        this.bitmap = new Bitmap(this.width, this.height);
                        var color1 = this.fillColor;
                        var color2 = this.gradientColor;
                        if (!this.isGradient) {
                            color2 = color1;
                        }
                        this.bitmap.gradientFillRect(0, 0, this.width, this.height, color1, color2, this.isVertical);
                    };
                    ;
                    return Rectangle;
                }(BattleObjects.Base));
                BattleObjects.Rectangle = Rectangle;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Root = (function (_super) {
                    __extends(Root, _super);
                    function Root() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.contextCache = {};
                        return _this;
                    }
                    Root.prototype.getContext = function () {
                        return this.contextCache;
                    };
                    return Root;
                }(BattleObjects.Base));
                BattleObjects.Root = Root;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var StateIcon = (function (_super) {
                    __extends(StateIcon, _super);
                    function StateIcon() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    StateIcon.prototype.isTouched = function () {
                        var x = this.canvasToLocalX(TouchInput.x);
                        var y = this.canvasToLocalY(TouchInput.y);
                        return x >= 0 && y >= 0 && x < 32 * this.maxStates && y < 32;
                    };
                    StateIcon.prototype.draggable = function () {
                        return true;
                    };
                    StateIcon.prototype._initializeInternal = function (properties) {
                        this._lastStates = [];
                        this._lastBuffs = [];
                        this._lastIcons = [];
                        this._page = 0;
                        this._duration = 0;
                        this._setProperty(BattleObjects.defs.relatedObjects);
                        this.propertyChanged.addPropertyChanged(BattleObjects.defs.maxStates.key, this._createIcons, this);
                        this._createIcons();
                    };
                    StateIcon.prototype._updateInternal = function () {
                        this._updateAnimation();
                    };
                    StateIcon.prototype._updatePropertyInternal = function () {
                        this._updateIcons();
                        this._setProperty(BattleObjects.defs.maxStates);
                        this._setProperty(BattleObjects.defs.animationSpeed);
                    };
                    StateIcon.prototype._createIcons = function () {
                        this.removeChildren();
                        for (var i = 0; i < this.maxStates; i++) {
                            var s = new BattleObjects.Components.SimpleIcon();
                            this.addChild(s);
                        }
                    };
                    StateIcon.prototype._updateIcons = function () {
                        if (Core.Manager.isStopHUD()) {
                            return;
                        }
                        var battler = this._getBattler();
                        if (!battler._states.equals(this._lastStates) ||
                            !battler._buffs.equals(this._lastBuffs)) {
                            this._lastStates = battler._states.slice(0);
                            this._lastBuffs = battler._buffs.slice(0);
                            this._lastIcons = this._getBattlerAllIcons();
                            this._page = 0;
                            this._updateDisplayIcons();
                            this._duration = this.animationSpeed;
                            this._syncRelatedObjects();
                        }
                    };
                    StateIcon.prototype._getBattler = function () {
                        if (!this._battler) {
                            var context = this.getContext()["b"];
                            if (context instanceof Game_Battler) {
                                this._battler = context;
                            }
                        }
                        return this._battler;
                    };
                    StateIcon.prototype._getBattlerAllIcons = function () {
                        if (BD.Core.Manager.isStudioMode()) {
                            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                        }
                        else {
                            var context = this.getContext();
                            if (!(context["b"] instanceof Game_Battler)) {
                                return [1];
                            }
                            var battler = context["b"];
                            return battler.allIcons();
                        }
                    };
                    StateIcon.prototype._updateAnimation = function () {
                        this._duration--;
                        if (this._duration === 0) {
                            this._page = (this._page + 1) % Math.ceil(this._lastIcons.length / this.maxStates);
                            this._updateDisplayIcons();
                            this._duration = this.animationSpeed;
                        }
                    };
                    StateIcon.prototype._updateDisplayIcons = function () {
                        var icons = this._getDisplayIcons();
                        this.children.forEach(function (x, i) {
                            x.setIcon(icons[i]);
                            x.x = i * 32;
                        });
                    };
                    StateIcon.prototype._getDisplayIcons = function () {
                        var icons = [];
                        for (var i = 0; i < this.maxStates; i++) {
                            icons.push(this._getDisplayIcon(this._page * this.maxStates + i));
                        }
                        return icons;
                    };
                    StateIcon.prototype._getDisplayIcon = function (index) {
                        if (index < this._lastIcons.length) {
                            return this._lastIcons[index];
                        }
                        return 0;
                    };
                    StateIcon.prototype._syncRelatedObjects = function () {
                        var _this = this;
                        if (!this.relatedObjects || this.relatedObjects === "") {
                            return;
                        }
                        this.relatedObjects.split(",").map(function (x) { return x.trim(); }).forEach(function (x) {
                            var s = _this.findFamily(function (y) { return y instanceof BattleObjects.Base && y.getObjectName() === x; }, function (t) { return t.parent instanceof BattleObjects.PartyStatusContainer; });
                            if (s) {
                                s.setVisibility(_this._lastIcons.length > 0);
                            }
                        });
                    };
                    return StateIcon;
                }(BattleObjects.Base));
                BattleObjects.StateIcon = StateIcon;
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Components;
                (function (Components) {
                    var BattlerContextContainer = (function (_super) {
                        __extends(BattlerContextContainer, _super);
                        function BattlerContextContainer(context, parent) {
                            var _this = _super.call(this, null) || this;
                            _this._battlerContext = context;
                            _this._contextCache = { b: _this._battlerContext };
                            parent.addChild(_this);
                            return _this;
                        }
                        Object.defineProperty(BattlerContextContainer.prototype, "b", {
                            get: function () {
                                return this._battlerContext;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(BattlerContextContainer.prototype, "container", {
                            get: function () {
                                return this.parent;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        BattlerContextContainer.prototype.getContext = function () {
                            return this._contextCache;
                        };
                        return BattlerContextContainer;
                    }(Sprite));
                    Components.BattlerContextContainer = BattlerContextContainer;
                })(Components = BattleObjects.Components || (BattleObjects.Components = {}));
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Components;
                (function (Components) {
                    var SimpleIcon = (function (_super) {
                        __extends(SimpleIcon, _super);
                        function SimpleIcon() {
                            var _this = _super.call(this) || this;
                            _this.setup();
                            return _this;
                        }
                        SimpleIcon.prototype.setup = function () {
                            this.bitmap = ImageManager.loadSystem("IconSet");
                            this.setIcon(0);
                        };
                        SimpleIcon.prototype.update = function () {
                        };
                        SimpleIcon.prototype.setIcon = function (iconIndex) {
                            var pw = 32;
                            var ph = 32;
                            var sx = iconIndex % 16 * pw;
                            var sy = Math.floor(iconIndex / 16) * ph;
                            this.setFrame(sx, sy, pw, ph);
                        };
                        return SimpleIcon;
                    }(Sprite));
                    Components.SimpleIcon = SimpleIcon;
                })(Components = BattleObjects.Components || (BattleObjects.Components = {}));
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD) {
            var BattleObjects;
            (function (BattleObjects) {
                var Components;
                (function (Components) {
                    var battlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
                    var Settings = Core.Settings;
                    var XPStyleBattler = (function (_super) {
                        __extends(XPStyleBattler, _super);
                        function XPStyleBattler(actor) {
                            var _this = _super.call(this, actor) || this;
                            _this.initVisibility();
                            return _this;
                        }
                        Object.defineProperty(XPStyleBattler.prototype, "_actor", {
                            get: function () {
                                return this._enemy;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        XPStyleBattler.prototype.initMembers = function () {
                            _super.prototype.initMembers.call(this);
                            this._battlerGraphic = null;
                            this._faceName = "";
                            this._faceIndex = 0;
                            this._faceFrameX = 0;
                            this._faceFrameY = 0;
                            this._dummyTarget = new Sprite_Base();
                        };
                        XPStyleBattler.prototype.setupEffect = function () {
                            if (Core.Manager.isStopHUD()) {
                                return;
                            }
                            _super.prototype.setupEffect.call(this);
                        };
                        XPStyleBattler.prototype.updateBitmap = function () {
                            var actor = this._battler;
                            if (actor.guardBattlerGraphicDuration() === 0) {
                                actor._guardBattlerGraphicDuration = -1;
                                if (Settings.enableSideVidwBattler()) {
                                    actor.refreshBattlerGraphic();
                                }
                                else {
                                    actor.clearMotion();
                                    actor.requestMotionRefresh();
                                }
                            }
                            var battlerGraphic = actor.battlerGraphics();
                            if (battlerGraphic.fileName !== null) {
                                this._faceName = null;
                                if (!battlerGraphicManager.areEqualBattlerGraphic(this._battlerGraphic, battlerGraphic)) {
                                    var b = battlerGraphicManager.battlerGraphic(actor).bitmap;
                                    if (b.isReady()) {
                                        this.bitmap = b;
                                        this._battlerGraphic = battlerGraphic;
                                        this._setFaceFramePosition(this._battlerGraphic.faceIndex);
                                    }
                                    else if (!this.bitmap) {
                                        this.bitmap = ImageManager.loadEmptyBitmap();
                                    }
                                }
                            }
                            else {
                                this._battlerGraphic = null;
                                var name_1 = actor.faceName();
                                var index = actor.faceIndex();
                                if (this._faceName !== name_1 || this._faceIndex !== index) {
                                    var b = battlerGraphicManager.battlerGraphic(this._actor).bitmap;
                                    if (b.isReady()) {
                                        this._faceName = name_1;
                                        this._faceIndex = index;
                                        this.bitmap = b;
                                    }
                                    else if (!this.bitmap) {
                                        this.bitmap = ImageManager.loadEmptyBitmap();
                                    }
                                    this._setFaceFramePosition(index);
                                }
                            }
                        };
                        XPStyleBattler.prototype.updateFormation = function () {
                            if (Settings.enableSideVidwBattler()) {
                                return;
                            }
                            _super.prototype.updateFormation.call(this);
                        };
                        XPStyleBattler.prototype._setFaceFramePosition = function (faceIndex) {
                            this._faceFrameX = faceIndex % 4 * 144;
                            this._faceFrameY = Math.floor(faceIndex / 4) * 144;
                        };
                        XPStyleBattler.prototype.setHome = function (x, y) {
                            this._homeX = 0;
                            this._homeY = 0;
                            this.updatePosition();
                        };
                        ;
                        XPStyleBattler.prototype.updatePosition = function () {
                            _super.prototype.updatePosition.call(this);
                            this._setScreenPosition();
                        };
                        XPStyleBattler.prototype.updateFrame = function () {
                            Sprite_Battler.prototype.updateFrame.call(this);
                            if (!this._battlerGraphic || (this._battlerGraphic && this._battlerGraphic.faceIndex > -1)) {
                                var frameHeight = 144;
                                if (this._effectType === "bossCollapse") {
                                    frameHeight = this._effectDuration;
                                }
                                this.setFrame(this._faceFrameX, this._faceFrameY, 144, frameHeight);
                            }
                            else {
                                var frameHeight = this.bitmap.height;
                                if (this._effectType === "bossCollapse") {
                                    frameHeight = this._effectDuration;
                                }
                                this.setFrame(0, 0, this.bitmap.width, frameHeight);
                            }
                        };
                        XPStyleBattler.prototype.startBossCollapse = function () {
                            _super.prototype.startBossCollapse.call(this);
                            this._effectDuration = this.height;
                        };
                        XPStyleBattler.prototype.createStateIconSprite = function () {
                            var dummy = { setup: function (_) { return; } };
                            this._stateIconSprite = dummy;
                        };
                        XPStyleBattler.prototype.updateStateSprite = function () {
                        };
                        XPStyleBattler.prototype.damageOffsetX = function () {
                            return 0;
                        };
                        XPStyleBattler.prototype.damageOffsetY = function () {
                            return -Math.round(this.height * 0.9);
                        };
                        XPStyleBattler.prototype._setScreenPosition = function () {
                            var pos = this.absolutePosition();
                            this._battler.setScreenPosition(pos.x, pos.y);
                        };
                        XPStyleBattler.prototype.setupAnimation = function () {
                            var _this = this;
                            _super.prototype.setupAnimation.call(this);
                            if (!Settings.enableSideVidwBattler() && !Settings.battlerGraphic().enableAnimation) {
                                this._animationSprites.forEach(function (sprite) {
                                    if (sprite.visible) {
                                        sprite.visible = false;
                                        sprite.overrideTarget(_this._dummyTarget);
                                    }
                                });
                            }
                        };
                        return XPStyleBattler;
                    }(Sprite_Enemy));
                    Components.XPStyleBattler = XPStyleBattler;
                })(Components = BattleObjects.Components || (BattleObjects.Components = {}));
            })(BattleObjects = HUD.BattleObjects || (HUD.BattleObjects = {}));
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var HUD;
        (function (HUD_1) {
            var Base = HUD_1.BattleObjects.Base;
            var Root = HUD_1.BattleObjects.Root;
            var isStudioMode = BD.Core.Manager.isStudioMode;
            var HUD = (function (_super) {
                __extends(HUD, _super);
                function HUD() {
                    var _this = _super.call(this, null) || this;
                    Core.DamagePopup.DamagePopupFactory.initialize();
                    _this.setFrame(0, 0, Graphics.width, Graphics.height);
                    _this.createEditView();
                    _this.createBattleObjects();
                    _this.addChild(new Core.Targeting.TargetCursorLayer(Core.Settings.targetCursor()));
                    _this.addChild(new Core.DamagePopup.PopupLayer());
                    _this.update();
                    return _this;
                }
                HUD.prototype.createEditView = function () {
                    if (!BD.Core.Manager.isStudioMode()) {
                        return;
                    }
                    this._bg = new BD.Studio.Screen.BackGround();
                    this.addChild(this._bg);
                };
                HUD.prototype.createBattleObjects = function () {
                    var json;
                    if (Core.Manager.isGameMode()) {
                        json = Core.Settings.hud();
                    }
                    else {
                        json = sessionStorage["bdStudioPreview"];
                    }
                    if (typeof (json) === "string") {
                        json = JSON.parse(json);
                    }
                    else if (typeof (json) === "undefined") {
                        return;
                    }
                    var root = new Root(json);
                    root.setup(this);
                    this._battleObject = root;
                    this.addChild(this._battleObject);
                };
                HUD.prototype.update = function () {
                    _super.prototype.update.call(this);
                    this._battleObject.visible = $gameTemp.isVisibleBDHUD();
                    if (isStudioMode()) {
                        this.updateTouchBattleObjects();
                    }
                };
                HUD.prototype.updateTouchBattleObjects = function () {
                    if (this._battleObject == null) {
                        return;
                    }
                    var firstFoundObject = _.find(this._battleObject.flatten().reverse().filter(function (x) { return x instanceof Base; }), function (sprite) {
                        return sprite.dragging();
                    });
                    if (firstFoundObject != null) {
                        firstFoundObject.updatePressCount();
                    }
                    _.chain(this._battleObject.children)
                        .filter(function (sprite) { return sprite !== firstFoundObject; })
                        .forEach(function (sprite) { sprite.resetPressCount(); });
                };
                return HUD;
            }(Sprite));
            HUD_1.HUD = HUD;
        })(HUD = Core.HUD || (Core.HUD = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_BattleManager_initMembers = BattleManager.initMembers;
    BattleManager.initMembers = function () {
        _bdc_BattleManager_initMembers.call(this);
        this._battleEndFadeOut = false;
    };
    var _bdc_BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function () {
        this._battleEndFadeOut = false;
        _bdc_BattleManager_startBattle.call(this);
    };
    var _bdc_BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
    BattleManager.updateBattleEnd = function () {
        _bdc_BattleManager_updateBattleEnd.call(this);
        this._battleEndFadeOut = true;
    };
    BattleManager.isBattleEndFadeOut = function () {
        return this._battleEndFadeOut;
    };
})();

(function () {
    var Settings = BD.Core.Settings;
    var BattlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
    var Kind = BD.Core.Consts.Enums.ConditionalBattlerGraphicKind;
    Game_Actor.prototype.battlerGraphics = function () {
        if (this._battlerGraphic === undefined) {
            this._battlerGraphic = this.baseBattlerGraphics();
        }
        return this._battlerGraphic;
    };
    Game_Actor.prototype.baseBattlerGraphics = function () {
        if (this._baseBattlerGraphic === undefined) {
            var bgRaw = BD.Core.RPGExtension.getBattlerGraphic(this.actor());
            this._baseBattlerGraphic = BattlerGraphicManager.createBattlerGraphic(bgRaw);
        }
        return this._baseBattlerGraphic;
    };
    Game_Actor.prototype.conditionalBattlerGraphics = function () {
        if (this._conditionalBattlerGraphics === undefined) {
            var conditions = BD.Core.RPGExtension.getConditionalBattlerGraphicsRaw(this.actor());
            this._conditionalBattlerGraphics = conditions.map(function (x) {
                return BattlerGraphicManager.createConditionalBattlerGraphic(x.fileName, x.kind, x.idOrTag, x.priority);
            }).filter(function (x) { return x !== null; });
        }
        return this._conditionalBattlerGraphics;
    };
    Game_Actor.prototype.setBattlerGraphics = function (faceName, faceIndex) {
        if (faceIndex === void 0) { faceIndex = -1; }
        this._baseBattlerGraphic = {
            fileName: faceName,
            faceIndex: faceIndex
        };
        this.refreshBattlerGraphic();
    };
    Game_Actor.prototype.refreshBattlerGraphic = function () {
        var c = BattlerGraphicManager.determineCandidate(this);
        if (this._guardBattlerGraphicDuration >= 0) {
            if (c && c.condition.kind === Kind.damage) {
                this._guardBattlerGraphicDuration = BattlerGraphicManager.damageDuration();
            }
            return;
        }
        if (c == null) {
            this._battlerGraphic = this._baseBattlerGraphic;
        }
        else {
            this._battlerGraphic = c.battlerGraphic;
            if (c.condition.kind === Kind.damage) {
                this._guardBattlerGraphicDuration = BattlerGraphicManager.damageDuration();
            }
        }
    };
    Game_Actor.prototype._existDeadBattlerGraphic = function () {
        var d = this.conditionalBattlerGraphics().find(function (x) { return x.condition.kind === Kind.dead; });
        return d !== undefined;
    };
    Game_Actor.prototype.guardBattlerGraphicDuration = function () {
        if (!this._guardBattlerGraphicDuration) {
            return -1;
        }
        if (this._guardBattlerGraphicDuration > 1) {
            this._guardBattlerGraphicDuration--;
        }
        else if (this._guardBattlerGraphicDuration === 1 && (this._motionType !== "damage" || !Settings.enableSideVidwBattler())) {
            this._guardBattlerGraphicDuration = 0;
        }
        return this._guardBattlerGraphicDuration;
    };
    Game_Actor.prototype.setConditionalBattlerGraphics = function (fileName, faceIndex, kind, idOrTag, priority) {
        this.conditionalBattlerGraphics();
        var f = this._conditionalBattlerGraphics.find(function (x) {
            if (x.condition.kind === Kind[kind.toLowerCase()] && x.condition.idOrTag === idOrTag) {
                return true;
            }
        });
        if (f) {
            f.battlerGraphic.fileName = fileName;
            f.battlerGraphic.faceIndex = faceIndex;
            f.condition.priority = priority;
            this.refreshBattlerGraphic();
            return;
        }
        var cbg = {
            condition: {
                kind: Kind[kind.toLowerCase()],
                idOrTag: idOrTag,
                priority: priority
            },
            battlerGraphic: {
                fileName: fileName,
                faceIndex: faceIndex.clamp(-1, 128)
            }
        };
        this._conditionalBattlerGraphics.push(cbg);
        this.refreshBattlerGraphic();
    };
    Game_Actor.prototype.removeConditionalBattlerGraphics = function (kind, idOrTag) {
        this.conditionalBattlerGraphics();
        var f = this._conditionalBattlerGraphics.find(function (x) {
            if (x.condition.kind === Kind[kind.toLowerCase()] && x.condition.idOrTag === idOrTag) {
                return true;
            }
        });
        if (f) {
            this._conditionalBattlerGraphics =
                this._conditionalBattlerGraphics.filter(function (x) { return x !== f; });
            this.refreshBattlerGraphic();
            return;
        }
    };
    Game_Actor.prototype.resetBattlerGraphic = function () {
        this._baseBattlerGraphic = undefined;
        this._conditionalBattlerGraphics = undefined;
        this._guardBattlerGraphicDuration = undefined;
        this.refreshBattlerGraphic();
    };
    var _bdc_Game_Actor_clearMotion = Game_Actor.prototype.clearMotion;
    Game_Actor.prototype.clearMotion = function () {
        _bdc_Game_Actor_clearMotion.apply(this, arguments);
        if (!this._guardBattlerGraphicDuration) {
            this._guardBattlerGraphicDuration = -1;
        }
    };
    var _bdc_Game_Actor_requestMotion = Game_Actor.prototype.requestMotion;
    Game_Actor.prototype.requestMotion = function (motionType) {
        _bdc_Game_Actor_requestMotion.apply(this, arguments);
        this.refreshBattlerGraphic();
    };
    var _bdc_Game_Actor_requestMotionRefresh = Game_Actor.prototype.requestMotionRefresh;
    Game_Actor.prototype.requestMotionRefresh = function () {
        _bdc_Game_Actor_requestMotionRefresh.apply(this, arguments);
        this.refreshBattlerGraphic();
    };
    var _bdc_Game_Actor_performActionStart = Game_Actor.prototype.performActionStart;
    Game_Actor.prototype.performActionStart = function (action) {
        _bdc_Game_Actor_performActionStart.apply(this, arguments);
        if (!Settings.enableSideVidwBattler()) {
            this.requestEffect("whiten");
        }
    };
    Game_Actor.prototype.setScreenPosition = function (x, y) {
        this._screenX = x;
        this._screenY = y;
    };
    Game_Actor.prototype.screenX = function () {
        return (this._screenX === undefined) ? 0 : this._screenX;
    };
    Game_Actor.prototype.screenY = function () {
        return (this._screenY === undefined) ? 0 : this._screenY;
    };
    Game_Actor.prototype.performCollapse = function () {
        Game_Battler.prototype.performCollapse.apply(this, arguments);
        switch (this.collapseType()) {
            case 0:
                if (!this._existDeadBattlerGraphic()) {
                    this.requestEffect("collapse");
                }
                SoundManager.playActorCollapse();
                break;
            case 1:
                this.requestEffect("bossCollapse");
                SoundManager.playBossCollapse1();
                break;
            case 2:
                if (!this._existDeadBattlerGraphic()) {
                    this.requestEffect("instantCollapse");
                }
                break;
        }
    };
    Game_Actor.prototype.isSpriteVisible = function () {
        return true;
    };
    Game_Actor.prototype.initHudParamCache = function () {
        this._paramCache = new Array(2);
    };
    var _bdc_Game_Actor_onBattleEnd = Game_Actor.prototype.onBattleEnd;
    Game_Actor.prototype.onBattleEnd = function () {
        _bdc_Game_Actor_onBattleEnd.apply(this, arguments);
        this._paramCache = undefined;
    };
    var _bdc_Game_Actor_refresh = Game_Actor.prototype.refresh;
    Game_Actor.prototype.refresh = function () {
        if ($gameParty.inBattle()) {
            this.initHudParamCache();
        }
        _bdc_Game_Actor_refresh.apply(this, arguments);
    };
    Game_Actor.prototype._hudParam = function (paramId) {
        var cache = this._paramCache[paramId];
        if (cache === undefined) {
            this._paramCache[paramId] = Game_Actor.prototype.param.apply(this, arguments);
            return this._paramCache[paramId];
        }
        return cache;
    };
    Game_Actor.prototype.hudMhp = function () {
        return this._hudParam(0);
    };
    Game_Actor.prototype.hudMmp = function () {
        return this._hudParam(1);
    };
    Game_Actor.prototype.hudHpNumberPattern = function () {
        if (this._hp === 0) {
            return 2;
        }
        else if (this._hp < this.hudMhp() / 4) {
            return 1;
        }
        else {
            return 0;
        }
    };
})();

(function () {
    Game_Battler.prototype.screenX = function () {
        return 0;
    };
    Game_Battler.prototype.screenY = function () {
        return 0;
    };
})();

(function () {
    var _bdc_Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function () {
        _bdc_Game_Temp_initialize.call(this);
        this._isVisibleBDHUD = true;
    };
    Game_Temp.prototype.isVisibleBDHUD = function () {
        return this._isVisibleBDHUD;
    };
    Game_Temp.prototype.hideBDHUD = function () {
        this._isVisibleBDHUD = false;
    };
    Game_Temp.prototype.showBDHUD = function () {
        this._isVisibleBDHUD = true;
    };
})();

(function () {
    var _bdc_Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
    Sprite_Actor.prototype.setActorHome = function (index) {
        _bdc_Sprite_Actor_setActorHome.call(this, index);
        this._battler.setScreenPosition(this._homeX, this._homeY);
    };
})();

(function () {
    Sprite_Animation.prototype.overrideTarget = function (newTarget) {
        this._target = newTarget;
    };
})();


(function () {
    var _bdc_Spriteset_Battle_createUpperLayer = Spriteset_Battle.prototype.createUpperLayer;
    Spriteset_Battle.prototype.createUpperLayer = function () {
        _bdc_Spriteset_Battle_createUpperLayer.call(this);
        this.createHUDSprite();
    };
    var _bdc_Spriteset_Battle_update = Spriteset_Battle.prototype.update;
    Spriteset_Battle.prototype.update = function () {
        _bdc_Spriteset_Battle_update.call(this);
        this.updateHUDSprite();
    };
    Spriteset_Battle.prototype.createHUDSprite = function () {
        if (this._hudSprite !== undefined) {
            this.removeChild(this._hudSprite);
        }
        this._hudSprite = new BD.Core.HUD.HUD();
        this.addChild(this._hudSprite);
        this.updateActorSprites();
    };
    Spriteset_Battle.prototype.updateActorSprites = function () {
        if (BD.Core.Settings.enableSideVidwBattler()) {
            return;
        }
        var s = this._hudSprite
            .flatten()
            .filter(function (x) { return x instanceof BD.Core.HUD.BattleObjects.Components.XPStyleBattler; });
        this._actorSprites = s;
    };
    Spriteset_Battle.prototype.updateHUDSprite = function () {
        if (BD.Core.Manager.isStudioMode() && BD.Studio.Utilities.RmvUtility.onrender) {
            BD.Studio.Utilities.RmvUtility.onrender = false;
            this.createHUDSprite();
        }
    };
    var _bdc_Spriteset_Battle_createActors = Spriteset_Battle.prototype.createActors;
    Spriteset_Battle.prototype.createActors = function () {
        if (BD.Core.Settings.enableSideVidwBattler()) {
            _bdc_Spriteset_Battle_createActors.call(this);
        }
        else {
            this._actorSprites = [];
        }
    };
})();

(function () {
    BattleManager.displayStartMessages = function () {
        if (BD.Core.Settings.battleMessage().enemyEmergeMessage) {
            $gameTroop.enemyNames().forEach(function (name) {
                $gameMessage.add(TextManager.emerge.format(name));
            });
        }
        if (this._preemptive) {
            $gameMessage.add(TextManager.preemptive.format($gameParty.name()));
        }
        else if (this._surprise) {
            $gameMessage.add(TextManager.surprise.format($gameParty.name()));
        }
    };
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Message;
        (function (Message) {
            var SimpleBattleLog;
            (function (SimpleBattleLog) {
                var HorizontalAlignment = Core.Consts.Enums.HorizontalAlignment;
                var ActionInformationWindow = (function (_super) {
                    __extends(ActionInformationWindow, _super);
                    function ActionInformationWindow() {
                        var _this = _super.call(this, 1) || this;
                        _this._item = null;
                        return _this;
                    }
                    ActionInformationWindow.prototype.clear = function () {
                        _super.prototype.clear.call(this);
                        this.setItem(null);
                    };
                    ;
                    ActionInformationWindow.prototype.refresh = function () {
                        this.contents.clear();
                        this.resetTextColor();
                        this.resetFontSettings();
                        var drawIcon = Core.Settings.battleMessage().simpleBattleLog.drawIcon;
                        var needIcon = drawIcon && this._item.iconIndex > 0;
                        var itemWidth = this._measureItemWidth(needIcon);
                        var desc = this._getDescription();
                        var descWidth = this._measureDescriptionWidth(desc);
                        var align = Core.Settings.battleMessage().simpleBattleLog.align;
                        this._drawActionInformation(itemWidth, descWidth, needIcon, desc, align);
                    };
                    ;
                    ActionInformationWindow.prototype._setDescriptionFont = function () {
                        var fontSize = Core.Settings.battleMessage().simpleBattleLog.descriptionFontSize;
                        if (fontSize > 0) {
                            this.contents.fontSize = fontSize;
                        }
                    };
                    ActionInformationWindow.prototype._getDescription = function () {
                        var desc = Core.RPGExtension.getActionDescription(this._item);
                        if (desc.length > 0) {
                            var delimiter = Core.Settings.battleMessage().simpleBattleLog.descriptionDelimiter;
                            return delimiter + desc;
                        }
                        return "";
                    };
                    ActionInformationWindow.prototype._measureItemWidth = function (needIcon) {
                        this.resetFontSettings();
                        var itemWidth = this.contents.measureTextWidth(this._item.name);
                        if (needIcon && this._item.iconIndex > 0) {
                            itemWidth += 32 + 4;
                        }
                        return itemWidth;
                    };
                    ActionInformationWindow.prototype._measureDescriptionWidth = function (description) {
                        this._setDescriptionFont();
                        var descWidth = 0;
                        if (description.length > 0) {
                            descWidth = this.contents.measureTextWidth(description);
                        }
                        return descWidth;
                    };
                    ActionInformationWindow.prototype._drawActionInformation = function (itemWidth, descWidth, needIcon, description, align) {
                        this.resetFontSettings();
                        var itemX = this._calcDrawX(itemWidth + descWidth, align);
                        if (needIcon && this._item.iconIndex > 0) {
                            this.drawItemName(this._item, itemX, 0, itemWidth);
                        }
                        else {
                            this.drawText(this._item.name, itemX, 0, itemWidth + 8, "left");
                        }
                        this._setDescriptionFont();
                        var descX = itemX + itemWidth;
                        this.drawText(description, descX, 0, descWidth, "left");
                    };
                    ActionInformationWindow.prototype._calcDrawX = function (totalWidth, align) {
                        switch (align) {
                            case HorizontalAlignment.Center:
                                var x = this.contentsWidth() / 2 - totalWidth / 2;
                                if (this._item.iconIndex > 0) {
                                    x -= 16;
                                }
                                return x;
                            case HorizontalAlignment.Right:
                                return this.contentsWidth() - totalWidth - 4;
                            default:
                                return 0;
                        }
                    };
                    ActionInformationWindow.prototype.setText = function (text) {
                    };
                    ActionInformationWindow.prototype.setItem = function (item) {
                        if (this._item === item) {
                            return;
                        }
                        this._item = item;
                        this.refresh();
                    };
                    return ActionInformationWindow;
                }(Window_Help));
                SimpleBattleLog.ActionInformationWindow = ActionInformationWindow;
            })(SimpleBattleLog = Message.SimpleBattleLog || (Message.SimpleBattleLog = {}));
        })(Message = Core.Message || (Core.Message = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var _bdc_Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function () {
        _bdc_Scene_Battle_createAllWindows.call(this);
        this.createActionInformationWindow();
    };
    Scene_Battle.prototype.createActionInformationWindow = function () {
        this._actionInformationWindow = new BD.Core.Message.SimpleBattleLog.ActionInformationWindow();
        this._actionInformationWindow.visible = false;
        this.addWindow(this._actionInformationWindow);
        this._logWindow.actionInformationWindow = this._actionInformationWindow;
    };
})();

(function () {
    var Settings = BD.Core.Settings;
    var _bdc_Window_BattleLog_startAction = Window_BattleLog.prototype.startAction;
    Window_BattleLog.prototype.startAction = function (subject, action, targets) {
        this._showActionInformation(subject, action);
        _bdc_Window_BattleLog_startAction.call(this, subject, action, targets);
    };
    var _bdc_Window_BattleLog_endAction = Window_BattleLog.prototype.endAction;
    Window_BattleLog.prototype.endAction = function (subject) {
        this._hideActionInformation();
        _bdc_Window_BattleLog_endAction.call(this, subject);
    };
    Window_BattleLog.prototype._showActionInformation = function (subject, action) {
        if (!this._isSimpleBattleLog()) {
            return;
        }
        if (action.isSkill()) {
            var id = action.item().id;
            var displayAttack = Settings.battleMessage().simpleBattleLog.displayAttack;
            if (!displayAttack && id === subject.attackSkillId()) {
                return;
            }
            var displayGuard = Settings.battleMessage().simpleBattleLog.displayGuard;
            if (!displayGuard && id === subject.guardSkillId()) {
                return;
            }
        }
        this.actionInformationWindow.setItem(action.item());
        this.actionInformationWindow.show();
    };
    Window_BattleLog.prototype._hideActionInformation = function () {
        if (!this._isSimpleBattleLog()) {
            return;
        }
        this.actionInformationWindow.hide();
    };
    Window_BattleLog.prototype._isSimpleBattleLog = function () {
        var useSimpleBattleLog = Settings.battleMessage().simpleBattleLog.useSimpleBattleLog;
        return (useSimpleBattleLog &&
            this.actionInformationWindow !== undefined);
    };
    var _bdc_Window_BattleLog_refresh = Window_BattleLog.prototype.refresh;
    Window_BattleLog.prototype.refresh = function () {
        if (this._isSimpleBattleLog()) {
            return;
        }
        _bdc_Window_BattleLog_refresh.call(this);
    };
    var _bdc_Window_BattleLog_drawLineText = Window_BattleLog.prototype.drawLineText;
    Window_BattleLog.prototype.drawLineText = function (index) {
        if (this._isSimpleBattleLog()) {
            return;
        }
        _bdc_Window_BattleLog_drawLineText.call(this, index);
    };
    var _bdc_Window_BattleLog_messageSpeed = Window_BattleLog.prototype.messageSpeed;
    Window_BattleLog.prototype.messageSpeed = function () {
        if (this._isSimpleBattleLog()) {
            return 1;
        }
        return _bdc_Window_BattleLog_messageSpeed.call(this);
    };
    var _bdc_Window_BattleLog_displayActionResults = Window_BattleLog.prototype.displayActionResults;
    Window_BattleLog.prototype.displayActionResults = function (subject, target) {
        _bdc_Window_BattleLog_displayActionResults.call(this, subject, target);
        if (this._isSimpleBattleLog() && target.result().used) {
            this.push("anyWait", _bdc_Window_BattleLog_messageSpeed.call(this));
        }
    };
    var _bdc_Window_BattleLog_startTurn = Window_BattleLog.prototype.startTurn;
    Window_BattleLog.prototype.startTurn = function () {
        _bdc_Window_BattleLog_startTurn.call(this);
        if (this._isSimpleBattleLog()) {
            this.push("anyWait", _bdc_Window_BattleLog_messageSpeed.call(this));
        }
    };
    Window_BattleLog.prototype.anyWait = function (wait) {
        if (wait === void 0) { wait = 12; }
        this._waitCount = wait;
    };
})();

(function () {
    var Settings = BD.Core.Settings.minorFixes;
    var _bdc_Sprite_Battler_updateSelectionEffect = Sprite_Battler.prototype.updateSelectionEffect;
    Sprite_Battler.prototype.updateSelectionEffect = function () {
        if (Settings().enableSelectionEffect) {
            _bdc_Sprite_Battler_updateSelectionEffect.apply(this, arguments);
        }
    };
})();

(function () {
    var _bdc_BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function () {
        this._initTargetedBattler();
        _bdc_BattleManager_startBattle.call(this);
    };
    var _bdc_BattleManager_endBattle = BattleManager.endBattle;
    BattleManager.endBattle = function (result) {
        _bdc_BattleManager_endBattle.call(this, result);
        this._initTargetedBattler();
    };
    BattleManager._initTargetedBattler = function () {
        this.lastTargetedActor = null;
        this.lastTargetedEnemy = null;
    };
    var _bdc_BattleManager_startInput = BattleManager.startInput;
    BattleManager.startInput = function () {
        _bdc_BattleManager_startInput.call(this);
        this._startInputCallback.forEach(function (x) { return x[0].call(x[1]); });
    };
    BattleManager.clearStartInputCallback = function () {
        this._startInputCallback = [];
    };
    BattleManager.registerStartInputCallback = function (callback, context) {
        this._startInputCallback.push([callback, context]);
    };
})();

(function () {
    var _bdc_Game_Action_makeTargets = Game_Action.prototype.makeTargets;
    Game_Action.prototype.makeTargets = function () {
        var target = _bdc_Game_Action_makeTargets.call(this);
        if (this.subject().isActor() &&
            this.isForOpponent() &&
            this.isForAll()) {
            return target.sort(function (a, b) { return a.screenX() - b.screenX(); });
        }
        else {
            return target;
        }
    };
    Game_Action.prototype.needsSelection = function () {
        return true;
    };
})();

(function () {
    var battlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
    Game_Actor.prototype.cursorX = function () {
        return this.screenX();
    };
    Game_Actor.prototype.cursorY = function () {
        var h = battlerGraphicManager.battlerGraphic(this).height;
        return this.screenY() - h;
    };
    Game_Actor.prototype.hitTestRectangle = function () {
        var x = this.screenX() - 144 / 2;
        var y = this.screenY() - 144;
        var width = 192;
        var height = 144;
        return new Rectangle(x, y, width, height);
    };
})();

(function () {
    Game_Battler.prototype.cursorX = function () {
        return 0;
    };
    Game_Battler.prototype.cursorY = function () {
        return 0;
    };
    Game_Battler.prototype.hitTestRectangle = function () {
        return new Rectangle(0, 0, 0, 0);
    };
})();

(function () {
    var battlerGraphicManager = BD.Core.Utils.BattlerGraphicManager;
    Game_Enemy.prototype.cursorX = function () {
        return this.screenX();
    };
    Game_Enemy.prototype.cursorY = function () {
        var h = battlerGraphicManager.battlerGraphic(this).height;
        return this.screenY() - h;
    };
    Game_Enemy.prototype.hitTestRectangle = function () {
        var bitmap = battlerGraphicManager.battlerGraphic(this).bitmap;
        var x = this.screenX() - bitmap.width / 2;
        var y = this.screenY() - bitmap.height;
        var width = bitmap.width;
        var height = bitmap.height;
        return new Rectangle(x, y, width, height);
    };
})();

Game_Unit.prototype.selectAll = function () {
    this.members().forEach(function (member) { return member.select(); });
};

(function () {
    var _bdc_Scene_Battle_initialize = Scene_Battle.prototype.initialize;
    Scene_Battle.prototype.initialize = function () {
        _bdc_Scene_Battle_initialize.call(this);
        BattleManager.clearStartInputCallback();
    };
    var _bdc_Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function () {
        _bdc_Scene_Battle_createAllWindows.call(this);
        this.createTargetInformationWindow();
    };
    Scene_Battle.prototype.createTargetInformationWindow = function () {
        this._targetInformationWindow = new BD.Core.Targeting.TargetInformationWindow();
        this._targetInformationWindow.visible = false;
        this.addWindow(this._targetInformationWindow);
        this._actorWindow.setHelpWindow(this._targetInformationWindow);
        this._enemyWindow.setHelpWindow(this._targetInformationWindow);
    };
    Scene_Battle.prototype.commandAttack = function () {
        BattleManager.inputtingAction().setAttack();
        this.onSelectAction();
    };
    Scene_Battle.prototype.commandGuard = function () {
        BattleManager.inputtingAction().setGuard();
        this.onSelectAction();
    };
    var _bdc_Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
    Scene_Battle.prototype.onActorCancel = function () {
        _bdc_Scene_Battle_onActorCancel.call(this);
        if (this._actorCommandWindow.currentSymbol() === "guard") {
            this._actorCommandWindow.activate();
        }
    };
    var _bdc_Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
    Scene_Battle.prototype.onEnemyCancel = function () {
        _bdc_Scene_Battle_onEnemyCancel.call(this);
        if (this._actorCommandWindow.currentSymbol() === "guard") {
            this._actorCommandWindow.activate();
        }
    };
})();

(function () {
    var Sprite_Enemy_updateStateSprite = Sprite_Enemy.prototype.updateStateSprite;
    Sprite_Enemy.prototype.updateStateSprite = function () {
        Sprite_Enemy_updateStateSprite.call(this);
        this._stateIconSprite.visible = !this._enemy.isSelected();
    };
})();

(function () {
    Window_BattleActor.prototype.forceTarget = function () {
        this.setCursorAll(false);
        this.setCursorFixed(false);
        var action = BattleManager.inputtingAction();
        if (!action) {
            return;
        }
        if (action.isForAll()) {
            this.setCursorAll(true);
            this.setCursorFixed(true);
            $gameParty.selectAll();
            this.updateHelp();
        }
        else if (action.isForUser()) {
            this.select(BattleManager._actorIndex);
            this.setCursorFixed(true);
            this.updateHelp();
        }
    };
    Window_BattleActor.prototype.restoreTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var lastTarget = BattleManager.lastTargetedActor;
        var index = $gameParty.members().indexOf(lastTarget);
        this.select(Math.max(0, index));
    };
    Window_BattleActor.prototype.rememberTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var action = BattleManager.inputtingAction();
        if (!action || action.isForAll() || action.isForUser()) {
            return;
        }
        BattleManager.lastTargetedActor = this.actor();
    };
    var _bdc_Window_BattleActor_show = Window_BattleActor.prototype.show;
    Window_BattleActor.prototype.show = function () {
        _bdc_Window_BattleActor_show.call(this);
        this.showHelpWindow();
        this.forceTarget();
    };
    var _bdc_Window_BattleActor_hide = Window_BattleActor.prototype.hide;
    Window_BattleActor.prototype.hide = function () {
        _bdc_Window_BattleActor_hide.call(this);
        this.hideHelpWindow();
        this.rememberTarget();
    };
    Window_BattleActor.prototype.activate = function () {
        Window_Selectable.prototype.activate.call(this);
        this.restoreTarget();
    };
    Window_BattleActor.prototype.updateHelp = function () {
        this._helpWindow.setBattler($gameParty.battleMembers()[this.index()]);
    };
    var _bdc_Window_BattleActor_select = Window_BattleActor.prototype.select;
    Window_BattleActor.prototype.select = function (index) {
        if (this.cursorFixed()) {
            return;
        }
        _bdc_Window_BattleActor_select.call(this, index);
    };
})();

(function () {
    var _bdc_Window_BattleEnemy_initialize = Window_BattleEnemy.prototype.initialize;
    Window_BattleEnemy.prototype.initialize = function (x, y) {
        this._touchSelector = new BD.Core.Targeting.TargetTouchSelector(this);
        _bdc_Window_BattleEnemy_initialize.call(this, x, y);
    };
    var _bdc_Window_BattleEnemy_update = Window_BattleEnemy.prototype.update;
    Window_BattleEnemy.prototype.update = function () {
        _bdc_Window_BattleEnemy_update.call(this);
        this._touchSelector.update();
    };
    Window_BattleEnemy.prototype.isHorizontal = function () {
        return true;
    };
    Window_BattleEnemy.prototype.maxCols = function () {
        return this._enemies.length;
    };
    Window_BattleEnemy.prototype.maxItems = function () {
        return this._enemies.length;
    };
    Window_BattleEnemy.prototype.refresh = function () {
        this._enemies = $gameTroop.aliveMembers().sort(function (a, b) { return a.screenX() - b.screenX(); });
        this._touchSelector.setup(this._enemies);
        Window_Selectable.prototype.refresh.call(this);
    };
    Window_BattleEnemy.prototype.forceTarget = function () {
        this.setCursorAll(false);
        this.setCursorFixed(false);
        var action = BattleManager.inputtingAction();
        if (!action) {
            return;
        }
        if (action.isForAll() || action.isForRandom()) {
            this.setCursorAll(true);
            this.setCursorFixed(true);
            $gameTroop.selectAll();
            this.updateHelp();
        }
    };
    Window_BattleEnemy.prototype.restoreTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var lastTarget = BattleManager.lastTargetedEnemy;
        var index = this._enemies.indexOf(lastTarget);
        this.select(Math.max(0, index));
    };
    Window_BattleEnemy.prototype.rememberTarget = function () {
        if (!ConfigManager.commandRemember) {
            return;
        }
        var action = BattleManager.inputtingAction();
        if (!action || action.isForAll() || action.isForRandom()) {
            return;
        }
        BattleManager.lastTargetedEnemy = this.enemy();
    };
    var _bdc_Window_BattleEnemy_show = Window_BattleEnemy.prototype.show;
    Window_BattleEnemy.prototype.show = function () {
        _bdc_Window_BattleEnemy_show.call(this);
        this.showHelpWindow();
        this.forceTarget();
    };
    var _bdc_Window_BattleEnemy_hide = Window_BattleEnemy.prototype.hide;
    Window_BattleEnemy.prototype.hide = function () {
        _bdc_Window_BattleEnemy_hide.call(this);
        this.hideHelpWindow();
        this.rememberTarget();
    };
    Window_BattleEnemy.prototype.activate = function () {
        Window_Selectable.prototype.activate.call(this);
        this.restoreTarget();
    };
    Window_BattleEnemy.prototype.updateHelp = function () {
        this._helpWindow.setBattler(this._enemies[this.index()]);
    };
    var _bdc_Window_BattleEnemy_select = Window_BattleEnemy.prototype.select;
    Window_BattleEnemy.prototype.select = function (index) {
        if (this.cursorFixed()) {
            return;
        }
        _bdc_Window_BattleEnemy_select.call(this, index);
    };
})();

(function () {
    var _bdc_Window_BattleStatus_initialize = Window_BattleStatus.prototype.initialize;
    Window_BattleStatus.prototype.initialize = function () {
        _updateMembers.call(this);
        BattleManager.registerStartInputCallback(_updateMembers, this);
        this._tapSelector = new BD.Core.Targeting.TargetTouchSelector(this);
        _bdc_Window_BattleStatus_initialize.call(this);
    };
    var _bdc_Window_BattleStatus_update = Window_BattleStatus.prototype.update;
    Window_BattleStatus.prototype.update = function () {
        _bdc_Window_BattleStatus_update.call(this);
        this._tapSelector.update();
    };
    var _bdcx_Window_BattleStatus_refresh = Window_BattleStatus.prototype.refresh;
    Window_BattleStatus.prototype.refresh = function () {
        _bdcx_Window_BattleStatus_refresh.call(this);
        this._tapSelector.setup($gameParty.battleMembers());
    };
    Window_BattleStatus.prototype.isHorizontal = function () {
        return true;
    };
    Window_BattleStatus.prototype.maxCols = function () {
        return this._battleMembers.length;
    };
    Window_BattleStatus.prototype.maxRows = function () {
        return 1;
    };
    function _updateMembers() {
        this._battleMembers = $gameParty.battleMembers();
    }
    ;
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var TargetCursor = (function (_super) {
                __extends(TargetCursor, _super);
                function TargetCursor(settings) {
                    var _this = _super.call(this) || this;
                    _this.anchor.x = 0.5;
                    _this.anchor.y = 0.5;
                    _this._initMembers();
                    _this.hide();
                    _this.setup(settings);
                    _this._updateFrame();
                    return _this;
                }
                TargetCursor.prototype.setup = function (settings) {
                    this._fileName = settings.fileName;
                    this._width = settings.width;
                    this._animationSpeed = settings.animationSpeed;
                    this._moveSpeed = settings.moveSpeed;
                    this._minY = settings.minY;
                    this.bitmap = ImageManager.loadSystem(this._fileName, 0);
                    this._duration = this._animationSpeed;
                };
                TargetCursor.prototype._initMembers = function () {
                    this._blink = false;
                    this._pattern = 0;
                    this._duration = this._animationSpeed;
                    this._rx = 0;
                    this._ry = 0;
                    this._tx = 0;
                    this._ty = 0;
                    this._progressRate = null;
                };
                TargetCursor.prototype.update = function () {
                    _super.prototype.update.call(this);
                    this._updatePosition();
                    this._updateAnimation();
                };
                TargetCursor.prototype._updateAnimation = function () {
                    this._duration--;
                    if (this._duration === 0) {
                        this._duration = this._animationSpeed;
                        this._pattern++;
                        if (this._width * this._pattern >= this.bitmap.width) {
                            this._pattern = 0;
                        }
                        this._updateFrame();
                    }
                    this.blendMode = Graphics.BLEND_NORMAL;
                    if (this._blink && Math.floor(Math.ceil(Graphics.frameCount / 2)) % 2 === 0) {
                        this.blendMode = Graphics.BLEND_SCREEN;
                    }
                };
                TargetCursor.prototype._updateFrame = function () {
                    var bitmap = ImageManager.loadSystem(this._fileName, 0);
                    if (this._width === 0) {
                        this._width = bitmap.height;
                    }
                    this.setFrame(this._width * this._pattern, 0, this._width, bitmap.height);
                };
                TargetCursor.prototype._updatePosition = function () {
                    if (this._progressRate === null) {
                        this._progressRate = 1;
                    }
                    else {
                        this._progressRate = Core.Utils.Interpolator.smooth(1, this._progressRate, this._moveSpeed, 0.005);
                    }
                    this.x = Math.round(this._rx - (this._rx - this._tx) * this._progressRate);
                    this.y = Math.round(this._ry - (this._ry - this._ty) * this._progressRate);
                };
                TargetCursor.prototype._setPosition = function (x, y) {
                    this._rx = this.x;
                    this._ry = this.y;
                    this._tx = x;
                    this._ty = Math.max(this._minY + this.height / 2, y);
                    this._progressRate = 0;
                };
                TargetCursor.prototype.setTarget = function (battler, startX, startY) {
                    this._setPosition(battler.cursorX(), battler.cursorY());
                    this._blink = battler.isSelected();
                    this.show();
                    if (startX && startY) {
                        this._progressRate = 0;
                        this._rx = startX;
                        this._ry = startY;
                    }
                };
                TargetCursor.prototype.show = function () {
                    if (!this.visible) {
                        this._progressRate = 1;
                    }
                    this.visible = true;
                };
                TargetCursor.prototype.hide = function () {
                    this._progressRate = 1;
                    this.visible = false;
                };
                return TargetCursor;
            }(Sprite));
            Targeting.TargetCursor = TargetCursor;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var TargetCursorLayer = (function (_super) {
                __extends(TargetCursorLayer, _super);
                function TargetCursorLayer(settings) {
                    var _this = _super.call(this) || this;
                    _this._settings = settings;
                    _this._updateMembers();
                    BattleManager.registerStartInputCallback(_this._updateMembers, _this);
                    _this._mainCursor = new Targeting.TargetCursor(_this._settings);
                    _this.addChild(_this._mainCursor);
                    _this._subCursors = [];
                    _this._lastSelectedBattler = [];
                    _this._commandActor = false;
                    return _this;
                }
                TargetCursorLayer.prototype.update = function () {
                    _super.prototype.update.call(this);
                    this._updateTarget();
                };
                TargetCursorLayer.prototype._updateTarget = function () {
                    if (Graphics.frameCount % 2 === 0) {
                        return;
                    }
                    var battlers = this._allBattlers.filter(function (x) { return x.isSelected() && (x.isActor() || x.isAlive()); });
                    if (battlers.length === 0) {
                        this._updateCommandActor();
                    }
                    if (battlers.length === 1) {
                        this._updateSingleTarget(battlers[0], false);
                    }
                    else if (battlers.length > 1) {
                        this._updateMultipleTarget(battlers);
                    }
                };
                TargetCursorLayer.prototype._updateCommandActor = function () {
                    var c = this._getCommandActor();
                    if (c) {
                        this._updateSingleTarget(c, true);
                    }
                    else if (this._lastSelectedBattler.length > 0) {
                        this._lastSelectedBattler.length = 0;
                        this._hideMainCursor();
                        this._hideSubCursors();
                    }
                };
                TargetCursorLayer.prototype._updateSingleTarget = function (selectedBattler, command) {
                    var s = [selectedBattler];
                    if (this._lastSelectedBattler.equals(s) && this._commandActor === command) {
                        return;
                    }
                    this._lastSelectedBattler = s;
                    this._commandActor = command;
                    this._hideSubCursors();
                    this._mainCursor.setTarget(selectedBattler);
                };
                TargetCursorLayer.prototype._updateMultipleTarget = function (selectedBattlers) {
                    var _this = this;
                    if (this._lastSelectedBattler.equals(selectedBattlers)) {
                        return;
                    }
                    this._lastSelectedBattler = selectedBattlers;
                    this._commandActor = false;
                    this._hideSubCursors();
                    var sb = selectedBattlers.slice();
                    this._mainCursor.hide();
                    sb.forEach(function (x) { return _this._addSubCursor(x); });
                };
                TargetCursorLayer.prototype._addSubCursor = function (battler) {
                    var cursor = new Targeting.TargetCursor(this._settings);
                    cursor.setTarget(battler, this._mainCursor.x, this._mainCursor.y);
                    this._subCursors.push(cursor);
                    this.addChild(cursor);
                };
                TargetCursorLayer.prototype._hideMainCursor = function () {
                    this._mainCursor.hide();
                };
                TargetCursorLayer.prototype._hideSubCursors = function () {
                    var _this = this;
                    if (this._subCursors.length === 0) {
                        return;
                    }
                    this._subCursors.forEach(function (x) { return _this.removeChild(x); });
                    this._subCursors.length = 0;
                };
                TargetCursorLayer.prototype._updateMembers = function () {
                    this._partyBattleMembers = $gameParty.battleMembers();
                    this._troopMembers = $gameTroop.members();
                    this._allBattlers = this._partyBattleMembers.concat(this._troopMembers);
                };
                TargetCursorLayer.prototype._getCommandActor = function () {
                    if (BattleManager._actorIndex > -1) {
                        return this._partyBattleMembers[BattleManager._actorIndex];
                    }
                    return undefined;
                };
                return TargetCursorLayer;
            }(Sprite));
            Targeting.TargetCursorLayer = TargetCursorLayer;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var InfoSettings = Core.Settings.targetInformation;
            var TargetInformationWindow = (function (_super) {
                __extends(TargetInformationWindow, _super);
                function TargetInformationWindow() {
                    var _this = _super.call(this, 1) || this;
                    _this._battler = null;
                    return _this;
                }
                TargetInformationWindow.prototype.setBattler = function (battler) {
                    this._battler = battler;
                    this.refresh();
                };
                TargetInformationWindow.prototype.clear = function () {
                    _super.prototype.clear.call(this);
                    this.setBattler(null);
                };
                ;
                TargetInformationWindow.prototype.refresh = function () {
                    this.contents.clear();
                    this.resetTextColor();
                    this.resetFontSettings();
                    var action = BattleManager.inputtingAction();
                    if (action.isForAll() && action.isForOpponent()) {
                        this._drawForTroop();
                    }
                    else if (action.isForRandom() && action.isForOpponent()) {
                        this._drawForTroopRandom(action.numTargets());
                    }
                    else if (action.isForAll() && action.isForFriend()) {
                        this._drawForParty();
                    }
                    else if (this._battler) {
                        this._drawTargetInformation(this._battler);
                    }
                };
                ;
                TargetInformationWindow.prototype._drawForParty = function () {
                    this.drawText(InfoSettings().scopeNotation.forParty, 0, 0, this.contentsWidth(), "center");
                };
                TargetInformationWindow.prototype._drawForTroop = function () {
                    this.drawText(InfoSettings().scopeNotation.forTroop, 0, 0, this.contentsWidth(), "center");
                };
                TargetInformationWindow.prototype._drawForTroopRandom = function (randomNumber) {
                    var text = InfoSettings().scopeNotation.forTroopRandom.format(randomNumber);
                    this.drawText(text, 0, 0, this.contentsWidth(), "center");
                };
                TargetInformationWindow.prototype._drawTargetInformation = function (battler) {
                    var settings = battler.isActor() ? InfoSettings().actor : InfoSettings().enemy;
                    var gauges = 0;
                    if (settings.hp) {
                        gauges++;
                    }
                    if (settings.mp) {
                        gauges++;
                    }
                    if (settings.tp && Core.Settings.isDisplayTp()) {
                        gauges++;
                    }
                    var gaugeWidth = InfoSettings().gaugeWidth;
                    var margin = 8;
                    var gaugesBaseX = this.contentsWidth() - gaugeWidth * gauges + margin;
                    var col = 0;
                    if (settings.hp) {
                        this.drawActorHp(battler, gaugesBaseX + gaugeWidth * col, 0, gaugeWidth - margin);
                        col++;
                    }
                    if (settings.mp) {
                        this.drawActorMp(battler, gaugesBaseX + gaugeWidth * col, 0, gaugeWidth - margin);
                        col++;
                    }
                    if (settings.tp && Core.Settings.isDisplayTp()) {
                        this.drawActorTp(battler, gaugesBaseX + gaugeWidth * col, 0, gaugeWidth - margin);
                        col++;
                    }
                    var nameWidth = this.contents.measureTextWidth(battler.name());
                    var nameX = this.contents.width / 2 - nameWidth / 2 - (this.contents.width - gaugesBaseX) / 2;
                    if (battler.isActor() || settings.hp) {
                        this.drawActorName(battler, nameX, 0);
                    }
                    else {
                        this.drawText(battler.name(), nameX, 0, nameWidth);
                    }
                    if (settings.states) {
                        var statusX = nameX + nameWidth + margin;
                        var statusWidth = gaugesBaseX - statusX;
                        this.drawActorIcons(battler, statusX, 0, statusWidth);
                    }
                };
                TargetInformationWindow.prototype.setText = function (text) {
                };
                TargetInformationWindow.prototype.setItem = function (item) {
                };
                return TargetInformationWindow;
            }(Window_Help));
            Targeting.TargetInformationWindow = TargetInformationWindow;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var Targeting;
        (function (Targeting) {
            var TargetTouchSelector = (function () {
                function TargetTouchSelector(selector) {
                    this._selector = selector;
                    this.setup([]);
                }
                TargetTouchSelector.prototype.setup = function (member) {
                    this._member = member;
                    this._stayCount = 0;
                };
                TargetTouchSelector.prototype.update = function () {
                    this._stayCount++;
                    if (!this._selector.active || this._stayCount < TargetTouchSelector.Stay) {
                        return;
                    }
                    if (this._decision()) {
                        return;
                    }
                    if (this._select()) {
                        this._stayCount = TargetTouchSelector.StayAfterSelect;
                        return;
                    }
                };
                TargetTouchSelector.prototype._select = function () {
                    var _this = this;
                    if (!this._selector.cursorFixed() && TouchInput.isPressed()) {
                        var target = this._member.find(function (x) { return _this._hitTest(x); });
                        if (target === undefined) {
                            return false;
                        }
                        var index = this._member.indexOf(target);
                        if (this._selector.index() === index) {
                            return false;
                        }
                        SoundManager.playCursor();
                        this._selector.select(index);
                        return true;
                    }
                    return false;
                };
                TargetTouchSelector.prototype._decision = function () {
                    var _this = this;
                    if (TouchInput.isTriggered()) {
                        var target = this._member.find(function (x) { return _this._hitTest(x); });
                        if (target === undefined) {
                            return false;
                        }
                        if (this._selector.cursorAll()) {
                            this._selector.processOk();
                            return true;
                        }
                        var index = this._member.indexOf(target);
                        if (this._selector.index() !== index) {
                            return false;
                        }
                        if (!this._selector.cursorFixed()) {
                            this._selector.select(index);
                        }
                        this._selector.processOk();
                        return true;
                    }
                    return false;
                };
                TargetTouchSelector.prototype._hitTest = function (battler) {
                    var rect = battler.hitTestRectangle();
                    var x = TouchInput.x - rect.x;
                    var y = TouchInput.y - rect.y;
                    return x >= 0 && y >= 0 && x < rect.width && y < rect.height;
                };
                TargetTouchSelector.Stay = 20;
                TargetTouchSelector.StayAfterSelect = 18;
                return TargetTouchSelector;
            }());
            Targeting.TargetTouchSelector = TargetTouchSelector;
        })(Targeting = Core.Targeting || (Core.Targeting = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));

(function () {
    var Settings = BD.Core.Settings.windowLayout;
    Window_ActorCommand.prototype.windowWidth = function () {
        return Settings().actorCommand.width;
    };
    Window_ActorCommand.prototype.numVisibleRows = function () {
        if (!this._list) {
            return 4;
        }
        var settings = Settings().actorCommand;
        var row = settings.heightFitting ? this.maxRows() : settings.visibleRows;
        return row;
    };
    Window_ActorCommand.prototype.maxCols = function () {
        var settings = Settings().actorCommand;
        var col = settings.isHorizontal ? this.maxItems() : settings.maxCols;
        return col.clamp(1, 32);
    };
    Window_ActorCommand.prototype.refresh = function () {
        if (this._actor) {
            this.height = this.windowHeight();
            var settings = Settings().actorCommand;
            var adjPos = settings.adjustPosition;
            var absPos = settings.absolutePosition;
            if (absPos.x) {
                this.x = absPos.x + adjPos.x;
            }
            else {
                var x = (this._actor.cursorX() - this.width / 2 + adjPos.x)
                    .clamp(8, Graphics.boxWidth - this.width - 8);
                this.x = x;
            }
            if (absPos.y) {
                this.y = absPos.y + adjPos.y;
            }
            else {
                this.y = this._actor.cursorY() - this.height + adjPos.y;
            }
        }
        Window_Command.prototype.refresh.call(this);
    };
    Window_ActorCommand.prototype.itemTextAlign = function () {
        return Settings().actorCommand.itemAlign;
    };
    Window_ActorCommand.prototype.activate = function () {
        Window_Base.prototype.activate.call(this);
        this.reselect();
        this.show();
        this.open();
    };
    Window_ActorCommand.prototype.deactivate = function () {
        Window_Base.prototype.deactivate.call(this);
        this.reselect();
        this.hide();
        this.close();
    };
})();

(function () {
    var _bdc_Window_BattleEnemy_initialize = Window_BattleEnemy.prototype.initialize;
    Window_BattleEnemy.prototype.initialize = function (x, y) {
        this.downArrowVisible = false;
        this.upArrowVisible = false;
        _bdc_Window_BattleEnemy_initialize.call(this, x, y);
    };
    Window_BattleEnemy.prototype.windowWidth = function () {
        return 0;
    };
    Window_BattleEnemy.prototype.windowHeight = function () {
        return 0;
    };
    Window_BattleEnemy.prototype.drawItem = function (index) {
    };
})();

(function () {
    var _bdc_Window_BattleItem_activate = Window_BattleItem.prototype.activate;
    Window_BattleItem.prototype.activate = function () {
        _bdc_Window_BattleItem_activate.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this);
    };
    var _bdc_Window_BattleItem_hide = Window_BattleItem.prototype.hide;
    Window_BattleItem.prototype.hide = function () {
        _bdc_Window_BattleItem_hide.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this, true);
    };
})();

(function () {
    var _bdc_Window_BattleSkill_activate = Window_BattleSkill.prototype.activate;
    Window_BattleSkill.prototype.activate = function () {
        _bdc_Window_BattleSkill_activate.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this);
    };
    var _bdc_Window_BattleSkill_hide = Window_BattleSkill.prototype.hide;
    Window_BattleSkill.prototype.hide = function () {
        _bdc_Window_BattleSkill_hide.call(this);
        BD.Core.WindowLayout.Utility.fittingWindowItemSkill(this, true);
    };
})();

(function () {
    var _bdc_Window_BattleStatus_initialize = Window_BattleStatus.prototype.initialize;
    Window_BattleStatus.prototype.initialize = function () {
        _bdc_Window_BattleStatus_initialize.call(this);
        this.x = Graphics.boxWidth + 48;
    };
    Window_BattleStatus.prototype.windowWidth = function () {
        return 0;
    };
    Window_BattleStatus.prototype.windowHeight = function () {
        return 192;
    };
    Window_BattleStatus.prototype.drawItem = function (index) {
    };
})();

(function () {
    var _bdc_Game_Message_clear = Game_Message.prototype.clear;
    Game_Message.prototype.clear = function () {
        _bdc_Game_Message_clear.call(this);
        if ($gameParty && $gameParty.inBattle()) {
            this._positionType = 0;
        }
    };
})();

(function () {
    var _bdc_Scene_Battle_createMessageWindow = Scene_Battle.prototype.createMessageWindow;
    Scene_Battle.prototype.createMessageWindow = function () {
        _bdc_Scene_Battle_createMessageWindow.call(this);
        $gameMessage.setPositionType(0);
    };
})();

(function () {
    var Settings = BD.Core.Settings.windowLayout;
    Window_PartyCommand.prototype.windowWidth = function () {
        var w = Settings().partyCommand.width;
        if (w === undefined) {
            return Graphics.boxWidth;
        }
        return w;
    };
    Window_PartyCommand.prototype.numVisibleRows = function () {
        if (!this._list) {
            return 1;
        }
        var settings = Settings().partyCommand;
        var row = settings.heightFitting ? this.maxRows() : settings.visibleRows;
        return row;
    };
    Window_PartyCommand.prototype.maxCols = function () {
        var settings = Settings().partyCommand;
        var col = settings.isHorizontal ? this.maxItems() : settings.maxCols;
        return col.clamp(1, 32);
    };
    Window_PartyCommand.prototype.itemTextAlign = function () {
        return Settings().partyCommand.itemAlign;
    };
    var _bdc_Window_PartyCommand_setup = Window_PartyCommand.prototype.setup;
    Window_PartyCommand.prototype.setup = function () {
        _bdc_Window_PartyCommand_setup.call(this);
        if (ConfigManager.commandRemember && this._lastIndex) {
            this.select(this._lastIndex);
        }
        var pos = Settings().partyCommand.position;
        this.x = pos.x;
        this.y = pos.y;
    };
    Window_PartyCommand.prototype.close = function () {
        Window_Selectable.prototype.close.call(this);
        if (ConfigManager.commandRemember && this.index() > -1) {
            this._lastIndex = this.index();
        }
    };
})();

(function () {
    Scene_Battle.prototype.updateWindowPositions = function () {
    };
})();

var BD;
(function (BD) {
    var Core;
    (function (Core) {
        var WindowLayout;
        (function (WindowLayout) {
            var Utility;
            (function (Utility) {
                var Settings = BD.Core.Settings;
                function fittingWindowItemSkill(window, hide) {
                    if (hide === void 0) { hide = false; }
                    var setting = Settings.windowLayout().itemSkill;
                    var fitting = setting.fitting;
                    var height = setting.maxHeight;
                    if (hide || !fitting) {
                        window.height = height;
                    }
                    else {
                        var h = height.clamp(0, window.fittingHeight(window.maxRows()));
                        window.height = h;
                    }
                }
                Utility.fittingWindowItemSkill = fittingWindowItemSkill;
            })(Utility = WindowLayout.Utility || (WindowLayout.Utility = {}));
        })(WindowLayout = Core.WindowLayout || (Core.WindowLayout = {}));
    })(Core = BD.Core || (BD.Core = {}));
})(BD || (BD = {}));
