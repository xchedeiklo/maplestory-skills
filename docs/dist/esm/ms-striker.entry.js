import { e as registerInstance, f as createEvent, d as h, g as getElement } from './maplestory-skills-fe8c7252.js';
import { a as Rank } from './chunk-7c277b0f.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-bb329b0b.js';

const KnuckleMissile = {
    name: "Knuckle Missile",
    attr: "knuckle-missile",
    prop: "knuckleMissile",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    element: "Fire",
    cooldown: 4,
    sp: true,
    description: `
    Dash forward with impressive swiftness and throw a powerful punch at the nearest enemy
    within <span>6</span> m, dealing <span>250%</span> fire damage.
    If there is no enemy within <span>6</span> m, move forward <span>3</span> m instead.
    Stance Change mode is activated with the skill, causing other skills to activate in changed form.
  `,
};
const GuardDash = {
    name: "Guard Dash",
    attr: "guard-dash",
    prop: "guardDash",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: `
    Assume a guard stance with both arms while moving forward <span>1.75</span> m <span>2</span> times.
    Physical and magic resistances increase by <span>300</span> during Guard Dash.
    You are immune to knockback while this skill is active.
    Consumes <span>40</span> stamina.
  `,
};
const MaharPunch = {
    name: "Mahar Punch",
    attr: "mahar-punch",
    prop: "maharPunch",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [37, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64],
    },
    description: `
    Throw two consecutive sonic jabs that deal <span>{damage}%</span> damage,
    hitting up to <span>5</span> enemies <span>2</span> m in front of you.
  `,
};
const FistsOfFury = {
    name: "Fists of Fury",
    attr: "fists-of-fury",
    prop: "fistsOfFury",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        leftDamage: [45, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72],
    },
    description: `
    Throw consecutive left-right punches that deal <span>{leftDamage}%</span> damage
    <span>2</span> times and <span>55%</span> damage on the last hit,
    hitting up to <span>5</span> enemies <span>2</span> m in front of you.
    Activates in changed form when in Stance Change mode.
  `,
};
const MagnumBlow = {
    name: "Magnum Blow",
    attr: "magnum-blow",
    prop: "magnumBlow",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: MaharPunch,
            level: 2,
        }, {
            skill: FistsOfFury,
            level: 2,
        }],
    values: {
        stage1: [230, 230, 246, 262, 278, 294, 310, 326, 342, 358, 374],
        stage2: [513, 513, 549, 585, 621, 657, 693, 729, 765, 801, 837],
        stage3: [792, 792, 849, 906, 963, 1020, 1077, 1134, 1191, 1248, 1305],
    },
    description: `
    After concentrating all your power into your right fist,
    move forward <span>1.5</span> m while delivering a powerful punch,
    dealing <span>{stage1}%</span> fire damage to <span>5</span> enemies <span>3</span> m in front of you.
    If you hold down the action key for <span>0.5</span> sec,
    the skill enhances to stage 2 and moves you forward <span>3</span> m,
    dealing <span>{stage2}%</span> fire damage to <span>5</span> enemies within <span>3</span> m.
    If you hold down the action key for <span>0.5</span> sec after stage 2,
    the skill enhances to stage 3 and moves you forward <span>4.5</span> m,
    dealing <span>{stage3}%</span> fire damage to <span>5</span> enemies within <span>3</span> m.
    If you maintain stage 3 for <span>3</span> sec or more, attacks become automatic.
  `,
};
const Beatdown = {
    name: "Beatdown",
    attr: "beatdown",
    prop: "beatdown",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [20, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
    skillRequirements: [{
            skill: FistsOfFury,
            level: 4,
        }, {
            skill: MagnumBlow,
            level: 3,
        }],
    values: {
        damage: [49, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85],
    },
    description: `
    Rapidly throw two-handed punches that deal <span>{damage}%</span> damage <span>5</span> times,
    hitting up to <span>5</span> enemies <span>2.5</span> m in front of you.
    This skill can be used up to <span>3</span> times in a row by pressing the key repeatedly,
    and activation speed increases by <span>10%</span> per press.
    Activates in changed form when in Stance Change mode.
  `,
};
const PowerPuncher = {
    name: "Power Puncher",
    attr: "power-puncher",
    prop: "powerPuncher",
    rank: 1,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: MagnumBlow,
            level: 5,
        }, {
            skill: Beatdown,
            level: 4,
        }],
    values: {
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: `
    Increases the damage of Fists of Fury, Beatdown, Gigantic Burst,
    and Magnum Blow by <span>{increase}%</span> by enhancing punch-type skills.
    The damage increase is also applied to the changed form of these skills.
  `,
};
const GiganticBurst = {
    name: "Gigantic Burst",
    attr: "gigantic-burst",
    prop: "giganticBurst",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: FistsOfFury,
            level: 6,
        }, {
            skill: PowerPuncher,
            level: 2,
        }],
    values: {
        damage: [355, 355, 380, 405, 430, 455, 480, 505, 530, 555, 580],
    },
    description: `
    After jumping into the air, slam the ground with a powerful punch that causes surrounding shockwaves.
    The radius of the shockwaves expands from <span>3</span> m, to <span>3.75</span> m,
    to <span>5.25</span> m, dealing <span>{damage}%</span> fire damage to <span>8</span> enemies within the area.
  `,
};
const RisingKick = {
    name: "Rising Kick",
    attr: "rising-kick",
    prop: "risingKick",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 2,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    skillRequirements: [],
    values: {
        damage: [61, 61, 66, 71, 76, 81, 86, 91, 96, 101, 106],
    },
    description: `
    Consecutively kick low, middle, and high to deal <span>{damage}%</span> damage
    <span>3</span> times to <span>5</span> enemies up to <span>2.5</span> m in front of you.
    Activates in changed form when in Stance Change mode.
  `,
};
const HurricaneCutter = {
    name: "Hurricane Cutter",
    attr: "hurricane-cutter",
    prop: "hurricaneCutter",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    skillRequirements: [{
            skill: MaharPunch,
            level: 2,
        }, {
            skill: RisingKick,
            level: 2,
        }],
    values: {
        damage: [93, 93, 100, 107, 114, 121, 128, 135, 142, 149, 156],
        additionalDamage: [110, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182],
    },
    description: `
    Lift your body into the air with one foot out and spin violently to deal <span>{damage}%</span> damage
    <span>5</span> times to <span>8</span> enemies within <span>2.25</span> m.
    Press on the directional keys to move while attacking.
    Strength is gathered and released before the spinning stops,
    delivering a powerful kick that deals <span>{additionalDamage}%</span> damage
    to <span>8</span> enemies within <span>2.5</span> m.
    Struck enemies are lifted <span>2.5</span> m in the air.
  `,
};
const Guillotine = {
    name: "Guillotine",
    attr: "guillotine",
    prop: "guillotine",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: RisingKick,
            level: 4,
        }, {
            skill: HurricaneCutter,
            level: 3,
        }],
    values: {
        damage: [88, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142],
        additionalDamage: [117, 117, 125, 133, 141, 149, 157, 165, 173, 181, 189],
    },
    description: `
    Consecutively kick left then right to deal <span>{damage}%</span> damage
    <span>2</span> times to <span>5</span> enemies up to <span>2.5</span> m in front of you.
    Afterwards, kick downward with a powerful blow to deal <span>{additionalDamage}%</span> damage
    to <span>5</span> enemies within a <span>2</span> m radius.
    Activates in changed form when in Stance Change mode.
  `,
};
const KickTechnician = {
    name: "Kick Technician",
    attr: "kick-technician",
    prop: "kickTechnician",
    rank: 1,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: HurricaneCutter,
            level: 5,
        }, {
            skill: Guillotine,
            level: 4,
        }],
    values: {
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: `
    Increase the damage of Rising Kick, Guillotine, Hurricane Cutter, and Dragon Kick
    by <span>{increase}%</span> by enhancing kick-type skills.
    The damage increase is also applied to the changed form of these skills.
  `,
};
const DragonKick = {
    name: "Dragon Kick",
    attr: "dragon-kick",
    prop: "dragonKick",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: RisingKick,
            level: 6,
        }, {
            skill: KickTechnician,
            level: 2,
        }],
    values: {
        damage: [306, 306, 328, 350, 372, 394, 416, 438, 460, 482, 504],
    },
    description: `
    Leap forward like a charging dragon with a flying kick.
    Move forward <span>4.5</span> m while dealing <span>{damage}%</span> fire damage
    to <span>5</span> enemies along the path.
    You will pass through targets without colliding.
  `,
};
const PaceControl = {
    name: "Pace Control",
    attr: "pace-control",
    prop: "paceControl",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    skillRequirements: [],
    values: {
        increase1: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        increase2: [1.8, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0, 6.6, 7.2],
    },
    description: `
    Build and release your inner strength based on the amount of focus.
    When spirit reaches <span>100%</span>, the damage for all
    attacks increases by <span>{increase1}%</span> and movement speed increases by <span>10%</span>.
    When spirit is under <span>100%</span> but above <span>80%</span> the abilities above
    increase by <span>{increase2}%</span> and <span>6%</span> respectively.
    When spirit is below <span>80%</span> but above <span>50%</span>,
    the abilities above increase by <span>0.6%</span> and <span>2%</span> respecitvely.
    When spirit is below <span>50%</span>, Pace Control is disabled.
  `,
};
const Overcome = {
    name: "Overcome",
    attr: "overcome",
    prop: "overcome",
    rank: 1,
    row: 4,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 100,
    cooldown: 50,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: PaceControl,
            level: 3,
        }],
    values: {
        damageIncrease: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    description: `
    Energy erupts from within, unleashing abilities that overcome the limits of the physical body.
    Increases attack speed and movement speed by <span>30%</span> and
    both physical and magic damage by <span>{damageIncrease}%</span> for <span>20</span> sec.
    Consumes <span>100</span> spirit.
  `,
};
const FightingSpirit = {
    name: "Fighting Spirit",
    attr: "fighting-spirit",
    prop: "fightingSpirit",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 100,
    cooldown: 50,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: PaceControl,
            level: 3,
        }],
    values: {
        resistance: [90, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
        stack: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: `
    Awaken your combat instinct, creating a fighting spirit within the body.
    Increases both physical and magic resistance by <span>{resistance}</span> and
    reduces movement speed by <span>60%</span> for <span>25</span> sec.
    While in the fighting spirit, you are immune to knockdown,
    and every time you're attacked all damage inflicted on the enemy increases
    by <span>4%</span> due to building Vengeance.
    Vengeance stacks up to <span>{stack}</span> times.
    Consumes <span>100</span> spirit.
  `,
};
const PatternBreak = {
    name: "Pattern Break",
    attr: "pattern-break",
    prop: "patternBreak",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 100,
    cooldown: 50,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: PaceControl,
            level: 3,
        }],
    values: {
        accuracy: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        duration: [38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    description: `
    Concentrate and read the enemy's movements.
    Increases accuracy by <span>{accuracy}</span> for <span>{duration}</span> sec.
    Decreases the enemy's evasion by <span>4</span> for <span>3</span> sec upon successful attack.
    Consumes <span>100</span> spirit.
  `,
};
const RainingBlows = {
    name: "Raining Blows",
    attr: "raining-blows",
    prop: "rainingBlows",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    description: `
    Gain strength as you land more hits on the enemy.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Permanently increases dexterity by <span>40</span>.
    <br/><br/>
    Using punching and kicking skills increase physical damage by <span>1%</span> and
    spirit recovery by <span>1</span>, stacking up to <span>10</span> times.
    <br/><br/>
    Can use Feinting Guard EX while in a Kicking or Punching Stance.
  `,
};
const ShockwavePunch = {
    name: "Shockwave Punch",
    attr: "shockwave-punch",
    prop: "shockwavePunch",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 3,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [457, 457, 457, 457, 457],
        increase: [12, 12, 12, 12, 12],
    },
    description: `
    Muster up a surge of fiery energy and unleash it on your enemies.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage to the area in front of you
    <br/><br/>
    Grants Punching Stance.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Punching Stance enhances all punching Skills.
    <br/>
    Permanently upgrades Magnum Blow to Mega Blow, increasing damage by <span>{increase}%</span>.
  `,
};
const VulcanPunch = {
    name: "Vulcan Punch",
    attr: "vulcan-punch",
    prop: "vulcanPunch",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: ShockwavePunch,
            level: 3,
        }],
    values: {
        damage: [91, 91, 91, 91, 91],
    },
    description: `
    Batter enemies with a rapid barrage of jabs.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage to enemies in front of you <span>12</span> times.
    <br/>
    Grants knockback immunity.
    <br/><br/>
    Enhanced by Punching Stance.
  `,
};
const DoubleFistSmash = {
    name: "Double-Fist Smash",
    attr: "double-fist-smash",
    prop: "doubleFistSmash",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    cooldown: 2,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: VulcanPunch,
            level: 2,
        }],
    values: {
        damage: [560, 560, 560, 560, 560],
    },
    description: `
    Leap into the air and strike the ground.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage in an area.
    <br/><br/>
    Grants knockback immunity.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Enhanced by Punching Stance.
  `,
};
const MeridianFlow = {
    name: "Meridian Flow",
    attr: "meridian-flow",
    prop: "meridianFlow",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    spirit: 100,
    cooldown: 30,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: VulcanPunch,
            level: 3,
        }, {
            skill: DoubleFistSmash,
            level: 3,
        }],
    values: {
        attack: [12, 12, 12, 12, 12],
        speed: [10, 10, 10, 10, 10],
        resistance: [75, 75, 75, 75, 75],
    },
    description: `
    Open the pressure points within your body to amplify your physical abilities.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases physical attack by <span>{attack}%</span>,
    attack speed by <span>{speed}%</span>,
    and physical and magic resistance by <span>{resistance}</span> for <span>30</span> sec.
    <br/>
    Restores <span>2</span> spirit per sec.
    <br/><br/>
    Can use Meridian Flow II while this is active. Grants knockback immunity.
    <br/><br/>
    Can cancel other skills.
    <br/><br/>
    Inflicts Balance Disrupted when this skill expires naturally.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Balance Disrupted prevents the use of Meridian Flow, Overcome, Pattern Break and Fighting Spirit for <span>30</span> sec.
  `,
};
const SetupKick = {
    name: "Setup Kick",
    attr: "setup-kick",
    prop: "setupKick",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 3,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [375, 375, 375, 375, 375],
        increase: [4, 4, 4, 4, 4],
    },
    description: `
    Deliver a rising kick to the enemy.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage.
    Grants Kicking Stance.
    <br/><br/>
    Hold down the skill key to move forward <span>1.5</span> m.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Kicking Stance upgrades some kick-based skills.
    Permanently upgrades Dragon Kick to Dragon Fury, increasing damage by <span>{increase}%</span>.
  `,
};
const SpiralCannon = {
    name: "Spiral Cannon",
    attr: "spiral-cannon",
    prop: "spiralCannon",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: SetupKick,
            level: 3,
        }],
    values: {
        damage: [126, 126, 126, 126, 126],
    },
    description: `
    Launch a spinning kick at the enemy.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage <span>8</span> times in front of you.
    <br/><br/>
    Grants knockback immunity.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Enhanced by Kicking Stance.
  `,
};
const SpinKick = {
    name: "Spin Kick",
    attr: "spin-kick",
    prop: "spinKick",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 3,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: SpiralCannon,
            level: 3,
        }],
    values: {
        damage: [162, 162, 162, 162, 162],
        additionalDamage: [431, 431, 431, 431, 431],
    },
    description: `
    Spin in the air and drive your leg into the enemy as you drop down.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    First deals <span>{damage}%</span> damage, then <span>{additionalDamage}%</span> damage.
    <br/><br/>
    Press a directional key to move <span>2</span> m.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Enhanced by Kicking Stance.
  `,
};
const TauntingFeint = {
    name: "Taunting Feint",
    attr: "taunting-feint",
    prop: "tauntingFeint",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    weaponRequired: "Two-handed Knuckles",
    spirit: 10,
    cooldown: 3,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: SpinKick,
            level: 3,
        }],
    values: {
        melee: [240, 240, 240, 240, 240],
        range: [480, 480, 480, 480, 480],
        resistance: [1200, 1200, 1200, 1200, 1200],
    },
    description: `
    Momentarily take a counterattacking stance.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    If struck in melee, deals <span>{melee}%</span> damage <span>2</span> times.
    <br/><br/>
    If struck in range, deals <span>{range}%</span> damage.
    <br/><br/>
    Increases physical and magic resistance by <span>{resistance}</span> and grants counterattack immunity.
    <br/><br/>
    Permanently increases kick skill damage by <span>3%</span> per skill level.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    After a successful counterattack, gain Confidence, increasing attack speed by <span>10%</span> and
    physical attack by <span>10%</span>.
    <br/>
    Kick skills include Setup Kick, Spin kick, Spin Kick EX,
    Spiral Cannon, Spiral Cannon EX, Melee Fade, and Ranged Fade.
  `,
};
const RankOneSkills = {
    Beatdown: Beatdown,
    DragonKick: DragonKick,
    FightingSpirit: FightingSpirit,
    FistsOfFury: FistsOfFury,
    GiganticBurst: GiganticBurst,
    GuardDash: GuardDash,
    Guillotine: Guillotine,
    HurricaneCutter: HurricaneCutter,
    KickTechnician: KickTechnician,
    KnuckleMissile: KnuckleMissile,
    MagnumBlow: MagnumBlow,
    MaharPunch: MaharPunch,
    Overcome: Overcome,
    PaceControl: PaceControl,
    PatternBreak: PatternBreak,
    PowerPuncher: PowerPuncher,
    RisingKick: RisingKick,
};
const RankTwoSkills = {
    RainingBlows: RainingBlows,
    ShockwavePunch: ShockwavePunch,
    VulcanPunch: VulcanPunch,
    DoubleFistSmash: DoubleFistSmash,
    MeridianFlow: MeridianFlow,
    SetupKick: SetupKick,
    SpiralCannon: SpiralCannon,
    SpinKick: SpinKick,
    TauntingFeint: TauntingFeint,
};
const StrikerSkills = Object.assign({}, RankOneSkills, RankTwoSkills);

class StrikerComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.beatdown = StrikerSkills.Beatdown.minLevel;
        this.dragonKick = StrikerSkills.DragonKick.minLevel;
        this.fightingSpirit = StrikerSkills.FightingSpirit.minLevel;
        this.fistsOfFury = StrikerSkills.FistsOfFury.minLevel;
        this.giganticBurst = StrikerSkills.GiganticBurst.minLevel;
        this.guardDash = StrikerSkills.GuardDash.minLevel;
        this.guillotine = StrikerSkills.Guillotine.minLevel;
        this.hurricaneCutter = StrikerSkills.HurricaneCutter.minLevel;
        this.kickTechnician = StrikerSkills.KickTechnician.minLevel;
        this.knuckleMissile = StrikerSkills.KnuckleMissile.minLevel;
        this.magnumBlow = StrikerSkills.MagnumBlow.minLevel;
        this.maharPunch = StrikerSkills.MaharPunch.minLevel;
        this.overcome = StrikerSkills.Overcome.minLevel;
        this.paceControl = StrikerSkills.PaceControl.minLevel;
        this.patternBreak = StrikerSkills.PatternBreak.minLevel;
        this.powerPuncher = StrikerSkills.PowerPuncher.minLevel;
        this.risingKick = StrikerSkills.RisingKick.minLevel;
        this.rainingBlows = StrikerSkills.RainingBlows.minLevel;
        this.shockwavePunch = StrikerSkills.ShockwavePunch.minLevel;
        this.vulcanPunch = StrikerSkills.VulcanPunch.minLevel;
        this.doubleFistSmash = StrikerSkills.DoubleFistSmash.minLevel;
        this.meridianFlow = StrikerSkills.MeridianFlow.minLevel;
        this.setupKick = StrikerSkills.SetupKick.minLevel;
        this.spiralCannon = StrikerSkills.SpiralCannon.minLevel;
        this.spinKick = StrikerSkills.SpinKick.minLevel;
        this.tauntingFeint = StrikerSkills.TauntingFeint.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    componentWillLoad() {
        processSkills(this, StrikerSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, StrikerSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, StrikerSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, StrikerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "striker", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "extras": ["emitChangeEvent"],
        "rank": ["emitChangeEvent"]
    }; }
    static get style() { return ":host{display:block}"; }
}

export { StrikerComponent as ms_striker };
