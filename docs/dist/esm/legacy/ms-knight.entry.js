var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { e as registerInstance, f as createEvent, d as h } from './maplestory-skills-23e6a171.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-6cf4cee8.js';
var IronDefense = {
    name: "Iron Defense",
    attr: "iron-defense",
    prop: "ironDefense",
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    weaponRequired: "Off-hand Shield",
    cooldown: 5,
    sp: true,
    description: "\n    Adopt a knightly defensive stance, restoring <span>4</span> spirit every <span>0.3</span> sec\n    and decreasing damage taken by <span>10%</span>, but also reducing physical and magic attack by <span>25%</span>.\n    Press the skill key again to toggle the stance.\n  ",
};
var ShieldCharge = {
    name: "Shield Charge",
    attr: "shield-charge",
    prop: "shieldCharge",
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    attackType: "Physical",
    weaponRequired: "Off-hand Shield",
    description: "\n    Charge forward <span>4.5</span> m, dealing <span>70%</span> damage to <span>5</span> enemies\n    and knocking them back <span>3</span> m. While charging, you cannot be knocked back.\n    This skill can cancel other skills.\n    Consumes <span>40</span> stamina.\n  ",
};
var CrossCut = {
    name: "Cross Cut",
    attr: "cross-cut",
    prop: "crossCut",
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [79, 79, 85, 91, 97, 103, 109, 115, 121, 127, 133],
    },
    description: "\n    A swing of your sword deals <span>[damage]%</span> damage <span>2</span> times\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n  ",
};
var TornadoSlash = {
    name: "Tornado Slash",
    attr: "tornado-slash",
    prop: "tornadoSlash",
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    spirit: 12,
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [81, 81, 86, 91, 96, 101, 106, 111, 116, 121, 126],
    },
    description: "\n    Perform a spin slash, dealing <span>[damage]%</span> damage <span>3</span> times\n    to <span>8</span> enemies within <span>3</span> m and pulling them in <span>1</span> m.\n    Consumes <span>12</span> spirit.\n  ",
};
var DivineStrike = {
    name: "Divine Strike",
    attr: "divine-strike",
    prop: "divineStrike",
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    cooldown: 8,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: TornadoSlash,
            level: 2,
        }, {
            skill: CrossCut,
            level: 2,
        }],
    values: {
        damage: [501, 501, 536, 571, 606, 641, 676, 711, 746, 781, 816],
    },
    description: "\n    Gathers light and smashes it down, creating a shockwave that deals <span>[damage]%</span>\n    holy damage to <span>8</span> enemies and knocks them back <span>2</span> m.\n    Enemy attacks will not push you back while this skill is active.\n  ",
};
var StingingFlurry = {
    name: "Stinging Flurry",
    attr: "stinging-flurry",
    prop: "stingingFlurry",
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    spirit: 13,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: CrossCut,
            level: 5,
        }, {
            skill: DivineStrike,
            level: 5,
        }],
    values: {
        damage: [83, 83, 89, 95, 101, 107, 113, 119, 125, 131, 137],
    },
    description: "\n    Captain Allon's special skill stabs quickly,\n    dealing <span>[damage]%</span> damage <span>3</span> times\n    to <span>3</span> enemies up to <span>3</span> m in front of you.\n    The skill lasts while the skill key is held down.\n    Consumes <span>13</span> spirit.\n  ",
};
var DrillThrust = {
    name: "Drill Thrust",
    attr: "drill-thrust",
    prop: "drillThrust",
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    cooldown: 8,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: DivineStrike,
            level: 6,
        }],
    values: {
        damage: [412, 412, 441, 470, 499, 528, 557, 586, 615, 644, 673],
    },
    description: "\n  Strike forth with your weapon, moving you <span>4.5</span> m and creating a whirlwind.\n  You pierce enemies in your path,\n  dealing <span>[damage]%</span> damage on up to <span>8</span> enemies.\n  ",
};
var LongswordMastery = {
    name: "Longsword Mastery",
    attr: "longsword-mastery",
    prop: "longswordMastery",
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: CrossCut,
            level: 6,
        }, {
            skill: DrillThrust,
            level: 2,
        }],
    values: {
        attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
    },
    description: "\n    Captain Allon's secret training improves your swordsmanship, increasing your weapon attack\n    by <span>[attack]%</span> when you have a longsword equipped.\n  ",
};
var TyphoonSlash = {
    name: "Typhoon Slash",
    attr: "typhoon-slash",
    prop: "typhoonSlash",
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    spirit: 50,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    skillRequirements: [{
            skill: TornadoSlash,
            level: 3,
        }],
    values: {
        damage: [147, 147, 158, 169, 180, 191, 202, 213, 224, 235, 246],
    },
    description: "\n    Spin with your weapon out, dealing <span>[damage]%</span> damage <span>5</span> times\n    to <span>8</span> enemies within <span>3</span> m. Each hit pulls them in <span>1</span> m.\n    During the attack, press a direction key to move <span>4.5</span> m.\n    Consumes <span>50</span> spirit.\n  ",
};
var IronShield = {
    name: "Iron Shield",
    attr: "iron-shield",
    prop: "ironShield",
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    weaponRequired: "Off-hand Shield",
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        reduction: [25, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
    },
    description: "\n    Adopt a defensive stance with your shield, reducing incoming damage by <span>[reduction]%</span>.\n    The skill lasts while the skill key is held down, although powerful attacks may break the skill early.\n    This skill can cancel other skills.\n    In PvP zones, the damage reduction is halved.\n  ",
};
var ShieldToss = {
    name: "Shield Toss",
    attr: "shield-toss",
    prop: "shieldToss",
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Off-hand Shield",
    spirit: 12,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: IronShield,
            level: 4,
        }, {
            skill: TyphoonSlash,
            level: 4,
        }],
    values: {
        damage: [60, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
        reduction: [1.0, 1.0, 1.2, 2.2, 2.2, 3.2, 4.0, 4.2, 5.2, 5.8, 6.4],
    },
    description: "\n    Toss your shield <span>7.5</span> m forward like a boomerang,\n    dealing <span>[damage]%</span> damage <span>2</span> times\n    to <span>8</span> enemies and reducing their defense\n    by <span>[reduction]%</span> for <span>12</span> sec.\n    Consumes <span>16</span> spirit.\n  ",
};
var ShieldMastery = {
    name: "Shield Mastery",
    attr: "shield-mastery",
    prop: "shieldMastery",
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: IronShield,
            level: 4,
        }],
    values: {
        evasion: [9, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
        perfectGuard: [5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        increaseChance: [40, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    Your fervent desire to protect others increases your shield mastery,\n    increasing critical evasion by <span>[evasion]</span> and perfect guard chance\n    by <span>[perfectGuard]%</span> when you have a shield equipped when using Iron Shield.\n    Blocking an attack grants a <span>[increaseChance]%</span> chance to increase your damage\n    by <span>[damage]%</span> for <span>10</span> sec.\n  ",
};
var ShieldBooster = {
    name: "Shield Booster",
    attr: "shield-booster",
    prop: "shieldBooster",
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Off-hand Shield",
    cooldown: 16,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: ShieldMastery,
            level: 2,
        }],
    values: {
        damage: [190, 190, 204, 218, 232, 246, 260, 274, 288, 302, 316],
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    Lift <span>5</span> enemies up to <span>2</span> m in front of you with your shield,\n    dealing <span>[damage]%</span> damage.\n    Increases physical and magic resistance by <span>450</span>.\n    For <span>10</span> sec, has a chance to trigger counter when hit.\n    Also increases your counterattack damage\n    by an additional <span>[increase]%</span>.\n  ",
};
var ShieldWall = {
    name: "Shield Wall",
    attr: "shield-wall",
    prop: "shieldWall",
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Shield",
    cooldown: 45,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    values: {
        resistance: [90, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
    },
    description: "\n    Create a <span>3</span> m holy field around you for <span>10</span> sec,\n    increasing the physical resistance and magic resistance of <span>10</span> allies,\n    including yourself, by <span>[resistance]</span>.\n  ",
};
var Warhorn = {
    name: "Warhorn",
    attr: "warhorn",
    prop: "warhorn",
    row: 4,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 40,
    cooldown: 30,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: ShieldWall,
            level: 3,
        }],
    values: {
        allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    Shout to raise morale, increasing the physical attack and magic attack of <span>[allies]%</span>\n    within <span>3</span> m, plus yourself, by <span>[increase]%</span> for <span>10</span> sec.\n    Consumes <span>40</span> spirit.\n  ",
};
var Bulwark = {
    name: "Bulwark",
    attr: "bulwark",
    prop: "bulwark",
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Shield",
    cooldown: [130, 130, 120, 110, 100, 90, 80, 70, 60, 55, 50],
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: ShieldWall,
            level: 4,
        }, {
            skill: Warhorn,
            level: 3,
        }],
    values: {
        allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    description: "\n    Create a protective barrier for <span>3</span> sec to make <span>[allies]</span> allies,\n    including yourself, invulnerable to enemy attacks.\n    Some attacks cannot be blocked.\n  ",
};
var DefenderOfTheFaith = {
    name: "Defender of the Faith",
    attr: "defender-of-the-faith",
    prop: "defenderOfTheFaith",
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Shield",
    cooldown: [130, 130, 120, 110, 100, 90, 80, 70, 60, 55, 50],
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: ShieldWall,
            level: 4,
        }, {
            skill: Warhorn,
            level: 3,
        }],
    values: {
        allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    description: "\n    Dash to the nearest ally within <span>8</span> m to create a protective barrier that lasts\n    <span>3</span> sec and makes <span>[allies]</span> allies, including yourself, invulnerable to enemy attacks.\n    Some attacks cannot be blocked.\n  ",
};
var KnightSkills = /*#__PURE__*/ Object.freeze({
    IronDefense: IronDefense,
    ShieldCharge: ShieldCharge,
    CrossCut: CrossCut,
    TornadoSlash: TornadoSlash,
    DivineStrike: DivineStrike,
    StingingFlurry: StingingFlurry,
    DrillThrust: DrillThrust,
    LongswordMastery: LongswordMastery,
    TyphoonSlash: TyphoonSlash,
    IronShield: IronShield,
    ShieldToss: ShieldToss,
    ShieldMastery: ShieldMastery,
    ShieldBooster: ShieldBooster,
    ShieldWall: ShieldWall,
    Warhorn: Warhorn,
    Bulwark: Bulwark,
    DefenderOfTheFaith: DefenderOfTheFaith
});
var KnightComponent = /** @class */ (function () {
    function KnightComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.extras = false;
        this.bulwark = Bulwark.minLevel;
        this.crossCut = CrossCut.minLevel;
        this.defenderOfTheFaith = DefenderOfTheFaith.minLevel;
        this.divineStrike = DivineStrike.minLevel;
        this.drillThrust = DrillThrust.minLevel;
        this.ironDefense = IronDefense.minLevel;
        this.ironShield = IronShield.minLevel;
        this.longswordMastery = LongswordMastery.minLevel;
        this.shieldBooster = ShieldBooster.minLevel;
        this.shieldCharge = ShieldCharge.minLevel;
        this.shieldMastery = ShieldMastery.minLevel;
        this.shieldToss = ShieldToss.minLevel;
        this.shieldWall = ShieldWall.minLevel;
        this.stingingFlurry = StingingFlurry.minLevel;
        this.tornadoSlash = TornadoSlash.minLevel;
        this.typhoonSlash = TyphoonSlash.minLevel;
        this.warhorn = Warhorn.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    KnightComponent.prototype.componentWillLoad = function () {
        processSkills(this, KnightSkills);
    };
    KnightComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, KnightSkills)];
            });
        });
    };
    KnightComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, KnightSkills, skill);
        this.emitChangeEvent();
    };
    KnightComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, KnightSkills));
    };
    KnightComponent.prototype.render = function () {
        return (h("ms-chart", { msClass: "knight" }, renderLevelControls(this, KnightSkills, this.editable, this.extras)));
    };
    Object.defineProperty(KnightComponent, "watchers", {
        get: function () {
            return {
                "extras": ["emitChangeEvent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnightComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return KnightComponent;
}());
export { KnightComponent as ms_knight };
