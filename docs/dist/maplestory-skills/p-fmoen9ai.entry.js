import{e,f as a,d as n}from"./p-7f14dd53.js";import{a as s,b as i,c as l}from"./p-ce17090e.js";const t={name:"Steadfast Faith",attr:"steadfast-faith",prop:"steadfastFaith",row:1,column:3,minLevel:1,maxLevel:1,element:"Holy",passive:!0,sp:!0,description:"\n    You've been rewarded for your devotion,\n    recovering <span>8</span> spirit every <span>0.5</span> sec,\n    plus an addition <span>4</span> if at least one foe is suffering from Celestial Light.\n  "},o={name:"Heavenly Wings",attr:"heavenly-wings",prop:"heavenlyWings",row:1,column:4,minLevel:1,maxLevel:1,element:"Holy",weaponRequired:"Off-hand Codex",description:"\n    Spread your wings of light and soar to the farthest ally up to <span>6</span> m in front of you.\n    The wings then transform into a divine aura, increasing you and your target's movement\n    speed by <span>20%</span> for <span>5</span> sec and restoring health up to <span>90%</span> of your magic attack.\n    If no allies are in range, you'll fly <span>4.5</span> m forward. This skill can cancel other skills.\n    You will be immune to knockback while this skill is active. Consumes <span>60</span> stamina.\n  "},r={name:"Celestial Light",attr:"celestial-light",prop:"celestialLight",row:1,column:1,minLevel:1,maxLevel:10,element:"Holy",attackType:"Long Range / Magic",weaponRequired:"Main Hand Scepter",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[53,53,57,61,65,69,73,77,81,85,89],additionalDamage:[4,4,5,6,7,8,9,10,11,12,13]},description:"\n    Strikes enemies with holy light, dealing <span>[damage]%</span> holy damage\n    to <span>3</span> enemies up to <span>8</span> m in front of you,\n    plus an additional <span>[additionalDamage]%</span> holy damage per sec for <span>6</span> sec.\n  "},p={name:"Holy Blast",attr:"holy-blast",prop:"holyBlast",row:2,column:1,minLevel:1,maxLevel:10,element:"Holy",attackType:"Close Range / Magic",weaponRequired:"Main Hand Scepter",spirit:16,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[147,147,157,167,177,187,197,207,217,227,237],range:[6,6,6,6,7,7,7,7,7,7,8],additionalDamage:[71,71,75,79,83,87,91,95,99,103,107]},description:"\n    An eruption of holy power deals <span>[damage]%</span> holy damage to <span>8</span> enemies\n    within <span>[range]</span> m and knocks them back <span>0.5</span> m.\n    If Celestial Light also activates, it causes an explosion that deals an additional\n    <span>[additionalDamage]%</span> holy damage to enemies within <span>2</span> m.\n    Consumes <span>16</span> spirit.\n  "},m={name:"Shield of the Archon",attr:"shield-of-the-archon",prop:"shieldOfTheArchon",row:3,column:1,minLevel:0,maxLevel:10,element:"Holy",attackType:"Close Range / Magic",cooldown:18,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[{skill:r,level:3},{skill:p,level:3}],values:{resistance:[165,165,220,275,330,385,440,495,550,605,660],damage:[80,80,85,90,95,100,105,110,115,120,125]},description:"\n    Conjure a shield of judgment for <span>5</span> sec, increasing physical resistance\n    and magic resistance by <span>[resistance]</span> and dealing <span>[damage]%</span>\n    holy damage to <span>5</span> enemies within <span>3</span> m.\n  "},c={name:"Holy Relic",attr:"holy-relic",prop:"holyRelic",row:4,column:1,minLevel:0,maxLevel:10,element:"Holy",attackType:"Close Range / Magic",cooldown:15,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:m,level:3}],values:{damage:[174,174,186,198,210,222,234,246,258,270,282]},description:"\n    A holy cross deals <span>[damage]%</span> holy damage to <span>8</span> enemies within <span>3</span> m\n    for <span>8</span> sec, knocks them back <span>1</span> m, and reduces their stamina to <span>0</span>.\n  "},h={name:"Healing Prayer",attr:"healing-prayer",prop:"healingPrayer",row:3,column:2,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Codex",spirit:15,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{healing:[160,160,168,176,184,192,200,208,216,224,232]},description:"\n    Through prayer, restore your health and the health of <span>6</span> allies\n    within <span>3</span> m by <span>[healing]%</span> of your magic attack.\n    Consumes <span>15</span> spirit.\n  "},d={name:"Scourging Wave",attr:"scourging-wave",prop:"scourgingWave",row:4,column:2,minLevel:0,maxLevel:10,element:"Holy",attackType:"Long Range / Magic",weaponRequired:"Main Hand Scepter",spirit:18,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:h,level:2}],values:{damage:[180,180,193,206,219,232,245,258,271,284,297]},description:"\n    Blast holy power <span>7.5</span> m ahead, dealing <span>[damage]%</span> holy damage to <span>5</span> enemies.\n    The skill lasts while the skill key is held down.\n    Consumes <span>18</span> spirit.\n  "},g={name:"Sanctuary",attr:"sanctuary",prop:"sanctuary",row:5,column:2,minLevel:0,maxLevel:10,element:"Holy",attackType:"Magic",weaponRequired:"Off-hand Codex",cooldown:40,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:h,level:3},{skill:d,level:3}],values:{range:[5,5,5,9,9,13,13,13,13,13,13],damage:[227,227,242,257,272,287,302,317,332,347,362],healing:[60,60,67,74,81,88,95,102,109,116,123]},description:"\n    Sanctify the ground within a <span>[range]</span>-tile cross for <span>10</span> sec to\n    deal <span>[damage]%</span> damage to enemies and restore health of you and your allies equal\n    to <span>[healing]%</span> of your magic attack.\n  "},u={name:"Smiting Aura",attr:"smiting-aura",prop:"smitingAura",row:6,column:2,minLevel:0,maxLevel:10,element:"Holy",attackType:"Long Range / Magic",levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:r,level:4},{skill:g,level:3}],values:{damage:[124,124,132,140,148,156,164,172,180,188,196],damageIncrease:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Surround the nearest enemy within <span>8</span> m in front of you with holy power,\n    dealing <span>[damage]%</span> damage to <span>3</span> enemies\n    within <span>1.5</span> m of the target and increasing the damage taken\n    by the target by <span>[damageIncrease]%</span>.\n  "},y={name:"Celestial Guardian",attr:"celestial-guardian",prop:"celestialGuardian",row:3,column:3,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Codex",spirit:45,cooldown:30,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{attack:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Summons a little angel for <span>30</span> sec, who increases your magic attack\n    by <span>[attack]%</span> when you have a codex equipped.\n    Consumes <span>45</span> spirit.\n  "},v={name:"Celestial Blessings",attr:"celestial-blessings",prop:"celestialBlessings",row:4,column:3,minLevel:0,maxLevel:10,element:"Holy",attackType:"Long Range / Magic",weaponRequired:"Off-hand Codex",spirit:45,cooldown:11,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:y,level:3}],values:{resistance:[10,10,30,50,70,90,110,130,150,170,190],attack:[1,3201,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4],healing:[320,320,352,384,416,448,480,512,544,576,608]},description:"\n    With the help of your angel, bless <span>10</span> allies within <span>6</span> m for <span>10</span> sec,\n    increasing their physical resistance and magic resistance by <span>[resistance]</span>\n    and their physical attack and magic attack by <span>[attack]%</span>.\n    Restores their health by <span>[healing]%</span> of your magic attack.\n    Can only be used when your angel is present.\n    Consumes <span>45</span> spirit.\n  "},f={name:"Holy Symbol",attr:"holy-symbol",prop:"holySymbol",row:5,column:3,minLevel:0,maxLevel:10,element:"Holy",spirit:[1,1,3,5,7,9,11,13,15,17,19],cooldown:180,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:y,level:6},{skill:v,level:3}],values:{increase:[1,1,3,5,7,9,11,13,15,17,19],accuracy:[1,1,3,5,7,9,11,13,15,17,19]},description:"\n    Create a magic seal with a <span>4.5</span> m radius that lasts <span>10</span> sec\n    and affects up to <span>10</span> allies standing on it.\n    Grants a blessing that restores <span>[spirit]</span> spirit per sec\n    and increases physical damage, magic damage, and attack speed\n    by <span>[increase]%</span> and accuracy by <span>[accuracy]</span> for <span>10</span> sec.\n    Once applied, the blessing has a <span>3</span> min cooldown.\n  "},k={name:"Disciple",attr:"disciple",prop:"disciple",row:6,column:3,minLevel:0,maxLevel:10,element:"Holy",passive:!0,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:v,level:6},{skill:f,level:4}],values:{duration:[30,30,40,50,60,70,80,90,100,110,120]},description:"\n    Increases the duration of Celestial Guardian, Celestial Blessings,\n    and Holy Symbol buffs by <span>[duration]%</span>.\n  "},w={name:"Scepter Mastery",attr:"scepter-mastery",prop:"scepterMastery",row:3,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],values:{attack:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Your proficiency with scepters increases weapon attack by <span>[attack]%</span> when you have a scepter equipped.\n  "},L={name:"Healing Mastery",attr:"healing-mastery",prop:"healingMastery",row:5,column:4,minLevel:0,maxLevel:10,element:"Holy",passive:!0,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:w,level:4}],values:{recovery:[4,4,8,12,16,20,24,28,32,36,40]},description:"\n    Your experience in combat increases the amount of health and spirit\n    restored through recovery skills by <span>[recovery]%</span>.\n    This skill does not affect your natural health and spirit regeneration rates.\n  "},R={name:"Angelic Ray",attr:"angelic-ray",prop:"angelicRay",row:6,column:4,minLevel:0,maxLevel:10,element:"Holy",attackType:"Long Range / Magic",weaponRequired:"Main Hand Scepter, Off-hand Codex",spirit:30,cooldown:10,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:w,level:4}],values:{damage:[662,662,708,754,800,846,892,938,984,1030,1076],healing:[365,365,391,417,443,469,495,521,547,573,599]},description:"\n    Fire a beam of holy light, dealing <span>[damage]%</span> holy damage\n    to <span>8</span> enemies up to <span>12</span> m in front of you.\n    Restores health to <span>8</span> allies hit equal\n    to <span>[healing]%</span> of your magic attack.\n    Consumes <span>30</span> spirit.\n  "},b=Object.freeze({SteadfastFaith:t,HeavenlyWings:o,CelestialLight:r,HolyBlast:p,ShieldOfTheArchon:m,HolyRelic:c,HealingPrayer:h,ScourgingWave:d,Sanctuary:g,SmitingAura:u,CelestialGuardian:y,CelestialBlessings:v,HolySymbol:f,Disciple:k,ScepterMastery:w,HealingMastery:L,AngelicRay:R});class q{constructor(n){e(this,n),this.editable=!1,this.extras=!1,this.heavenlyWings=o.minLevel,this.steadfastFaith=t.minLevel,this.celestialLight=r.minLevel,this.holyBlast=p.minLevel,this.healingPrayer=h.minLevel,this.scepterMastery=w.minLevel,this.celestialGuardian=y.minLevel,this.shieldOfTheArchon=m.minLevel,this.scourgingWave=d.minLevel,this.celestialBlessings=v.minLevel,this.holyRelic=c.minLevel,this.sanctuary=g.minLevel,this.holySymbol=f.minLevel,this.healingMastery=L.minLevel,this.smitingAura=u.minLevel,this.disciple=k.minLevel,this.angelicRay=R.minLevel,this.onSkillChanged=a(this,"skillchanged",7)}componentWillLoad(){s(this,b)}async getData(){return i(this,b)}levelChanged(e,a){this[e.prop]=a,s(this,b,e),this.emitChangeEvent()}emitChangeEvent(){this.onSkillChanged.emit(i(this,b))}render(){return n("ms-chart",{msClass:"priest"},l(this,b,this.editable,this.extras))}static get watchers(){return{extras:["emitChangeEvent"]}}static get style(){return":host{display:block}"}}export{q as ms_priest};