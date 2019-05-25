import{e,f as a,d as n,g as t}from"./p-d91599c0.js";import{a as i}from"./p-7c277b0f.js";import{a as s,b as r,c as l}from"./p-70f17c57.js";const o={name:"Arcane Blast",attr:"arcane-blast",prop:"arcaneBlast",rank:1,row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",cooldown:6,levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[260,260,279,298,317,336,355,374,393,412,431]},description:"\n    Focus a magical aura on a spot <span>4.5</span> m in front of you, creating an explosion of energy\n    that deals <span>{damage}%</span> damage to enemies within <span>3</span> m and knocks them back <span>1</span> m.\n  "},m={name:"Flame Wave",attr:"flame-wave",prop:"flameWave",rank:1,row:3,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[175,175,188,201,214,227,240,253,266,279,292],dot:[21,21,23,25,27,29,31,33,35,37,39]},description:"\n    Gather fire energy in your staff to fling a flame wave up to <span>8</span> m in front of you,\n    dealing <span>{damage}%</span> fire damage to enemies caught in it and setting them on fire,\n    which deals an additional <span>{dot}%</span> every second for <span>10</span> sec.\n    Consumes <span>20</span> spirit.\n  "},c={name:"Flame Tornado",attr:"flame-tornado",prop:"flameTornado",rank:1,row:4,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:16,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:m,level:4}],values:{damage:[142,142,152,162,172,182,192,202,212,222,232]},description:"\n    Gather fire energy from your surroundings to create a huge flame whirlwind <span>4.5</span> m in front of you.\n    The flame whirlwind lasts for <span>1.5</span> sec, dealing <span>{damage}%</span> fire damage\n    to <span>8</span> enemies within <span>3</span> m every <span>0.3</span> sec.\n    Consumes <span>40</span> spirit.\n  "},p={name:"Ice Spear",attr:"ice-spear",prop:"iceSpear",rank:1,row:3,column:2,minLevel:0,maxLevel:10,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:m,level:4}],values:{damage:[171,171,184,197,210,223,236,249,262,275,288]},description:"\n    Gather ice from the moisture in the air to fling at the closest enemy up to <span>8</span> m in front of you.\n    The spear of ice breaks on impact, its shards dealing <span>{damage}%</span> ice damage\n    to <span>8</span> enemies within <span>2.5</span> m and decreasing movement speed by <span>10%</span> for <span>3</span> sec.\n    This cold effect can stack up to <span>6</span> times.\n    Enemies at max stacks are frozen for <span>1</span> sec.\n    Consumes <span>20</span> spirit.\n  "},d={name:"Ice Storm",attr:"ice-storm",prop:"iceStorm",rank:1,row:4,column:2,minLevel:0,maxLevel:10,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:30,cooldown:12,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:p,level:4}],values:{damage:[152,152,163,174,185,196,207,218,229,240,251]},description:"\n    Blast <span>4</span> ice crystals toward enemies up to <span>8</span> m in front of you,\n    surrounding the targets with a cold front that generates a giant shard of ice.\n    The shard deals <span>{damage}%</span> ice damage to <span>8</span> enemies within <span>2.5</span> m.\n    Consumes <span>30</span> spirit.\n  "},g={name:"Chain Lightning",attr:"chain-lightning",prop:"chainLightning",rank:1,row:3,column:3,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{damage:[62,62,66,70,74,78,82,86,90,94,98],additionalDamage:[288,288,308,328,348,368,388,408,428,448,468]},description:"\n    Release an intense electric load that deals <span>{damage}%</span> electric damage\n    to <span>8</span> enemies up to <span>8</span> m in front of you.\n    Enemies hit with this skill <span>5</span> times pulse with electric energy,\n    attracting a bolt that deals an additional <span>{additionalDamage}%</span> electric damage.\n    Consumes <span>15</span> spirit.\n  "},h={name:"Thunderbolt",attr:"thunderbolt",prop:"thunderbolt",rank:1,row:4,column:3,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:16,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:g,level:4}],values:{damage:[611,611,656,701,746,791,836,881,926,971,1016]},description:"\n    Gather a bolt of electricity to throw at the closest enemy up to <span>8</span> m in front of you,\n    dealing <span>{damage}%</span> electric damage.\n    The bolt bounces up to <span>8</span> times within <span>5</span> m,\n    but won't hit the same target twice in a row.\n    Consumes <span>40</span> spirit.\n  "},u={name:"Magic Armor",attr:"magic-armor",prop:"magicArmor",rank:1,row:3,column:4,minLevel:0,maxLevel:10,cooldown:45,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],values:{barrier:[6,6,8,10,12,14,16,18,20,22,24]},description:"\n    Envelop your body with a magical aura, creating a barrier that absorbs damage\n    up to <span>{barrier}%</span> of your max health for <span>10</span> sec.\n    Cannot be combined with other barrier effects.\n  "},f={name:"Dual Cast",attr:"dual-cast",prop:"dualCast",rank:2,row:1,column:1,minLevel:0,maxLevel:4,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[60,60,60,60,60],values:{handyLightningDamage:[90,90,90,90,90],handyLightningAdditionalDamage:[315,315,315,315,315],iceShotDamage:[100,100,100,100,100],frostDamage:[49,49,49,49,49]},description:"\n    Cast spells of electricity and ice at the same time.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Cast Handy Lightning and Ice Shot at the same time.\n    <br/><br/>\n    Handy Lightning deals <span>{handyLightningDamage}%</span> damage and places a status effect on the target.\n    At <span>5</span> stacks, the Handy lightning effect detonates,\n    dealing an additional <span>{handyLightningAdditionalDamage}%</span> damage.\n    <br/><br/>\n    Ice Shot deals <span>{iceShotDamage}%</span>.\n    <br/><br/>\n    Permanently enhances Ice Spear.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Ice Spear costs no spirit and inflicts Frost.\n    Enemies suffering from Frost take an additional <span>{frostDamage}%</span> damage from Handy Lightning.\n  "},v={name:"Ice Cream Time",attr:"ice-cream-time",prop:"iceCreamTime",rank:2,row:2,column:1,minLevel:0,maxLevel:4,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:20,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:f,level:3}],values:{damage:[418,418,418,418,418],additionalDamage:[500,500,500,500,500],movement:[15,15,15,15,15],dot:[150,150,150,150,150],iceStormIncrease:[49,49,49,49,49]},description:"\n    Make ice cream with ice magic to give your foes some serious brain freeze.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Inflicts a stack of Chill every second.\n    Hit affected enemies with Thunderbolt to trigger Electric Ice Cream.\n    Deals <span>{additionalDamage}%</span> damage when the skill is used again or the duration ends.\n    <br/><br/>\n    Permanently enhances Ice Storm.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Chill decreases movement speed by <span>{movement}%</span> per stack.\n    <br/>\n    Target are unable to act at <span>6</span> stacks.\n    <br/>\n    Electric Ice Cream deals <span>{dot}%</span> damage per sec for <span>10</span> sec.\n    <br/>\n    Increases Ice Storm damage by <span>{iceStormIncrease}%</span>.\n  "},y={name:"Lodestone Field",attr:"lodestone-field",prop:"lodestoneField",rank:2,row:3,column:1,minLevel:0,maxLevel:4,element:"Electric",cooldown:30,levelRequirement:[64,64,64,64,64],skillRequirements:[{skill:v,level:2}],values:{damage:[320,320,320,320,320],additionalDamage:[44,44,44,44,44],stackDamage:[92,92,92,92,92],evasion:[10,10,10,10,10],thunderboltIncrease:[45,45,45,45,45]},description:"\n    Fill the air with a magnetic charge to augment your attacks.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Grants a stack of Lightning Charge.\n    <br/><br/>\n    If you already have Lightning Charge, consume all stacks and cast Call Lightning instead,\n    dealing <span>{damage}%</span> damage,\n    plus an additional <span>{additionalDamage}%</span> per stack.\n    <br/><br/>\n    Permanently enhances Thunderbolt.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    When Lightning Charge stacks, inflicts <span>{stackDamage}%</span> damage to nearby enemies\n    and increases evation by <span>{evasion}%</span> per stack.\n    <br/>\n    Gain stacks by casting Handy Lightning or Electric Ice Cream, or by getting hit.\n    <br/>\n    Increases Thunderbolt damage by <span>{thunderboltIncrease}%</span>.\n  "},b={name:"Ember",attr:"ember",prop:"ember",rank:2,row:1,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[60,60,60,60,60],values:{damage:[302,302,302,302,302],emberDot:[39,39,39,39,39],emberAoe:[366,366,366,366,366],kindlingDot:[45,45,45,45,45],kindlingAoe:[457,457,457,457,457],spreadingDamage:[45,45,45,45,45]},description:"\n    Launch a small fireball to start a big fire.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and inflicts Ember.\n    Prioritizes enemies already suffering from Ember or Kindling.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Ember deals <span>{emberDot}%</span> per sec.\n    When a new stack is added, deals <span>{emberAoe}%</span> area damage and inflicts Spreading Embers and Kindling.\n    <br/>\n    Kindling deals <span>{kindlingDot}%</span> per sec.\n    When Ember is inflicted, deals <span>{kindlingAoe}%</span> area damage and inflicts Spreading Embers.\n    <br/>\n    Spreading Embers deals and additional <span>{spreadingDamage}%</span> damage when hit by Flame Wave.\n  "},w={name:"Barbecue Party",attr:"barbecue-party",prop:"barbecueParty",rank:2,row:2,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:8,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:b,level:3}],values:{damage:[552,552,552,552,552],dot:[59,59,59,59,59],aoeDamage:[548,548,548,548,548]},description:"\n    Grill your enemies with magical flames.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>3</span> times and inflicts Deep Fried.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Deep Fried deals <span>{dot}%</span> damage per sec and\n    deals <span>{aoeDamage}</span> area damage when Arcane Blast hits.\n  "},k={name:"Playing with Fire",attr:"playing-with-fire",prop:"playingWithFire",rank:2,row:4,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Magic",weaponRequired:"Two-handed Staff",passive:!0,levelRequirement:[66,66,66,66,66],skillRequirements:[{skill:w,level:3}],values:{damage:[137,137,137,137,137],chance:[27,27,27,27,27]},description:"\n    You've befriended a mischievous fire spire.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently grants Dancing Flames.\n    Casting Flame Tornado temporarily grants Flame Imp.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Dancing Flames removes the spirit cost of Flame Wave and increases Flame Tornado damage by <span>{damage}%</span>.\n    <br/><br/>\n    Flame Imp lasts for <span>11</span> sec, guaranteeing a critical when Ember hits\n    and granting a <span>{chance}%</span> chance to trigger Party Time on critical hit.\n    <br/>\n    Party Time resets Barbequeue Party's cooldown and allows it to be cast instantly.\n  "},L={ArcaneBlast:o,ChainLightning:g,Cryomancy:{name:"Cryomancy",attr:"cryomancy",prop:"cryomancy",rank:1,row:5,column:2,minLevel:0,maxLevel:10,element:"Ice",passive:!0,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:p,level:5},{skill:d,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced ice technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all ice damage by <span>{damage}%</span>.\n  "},Electromancy:{name:"Electromancy",attr:"electromancy",prop:"electromancy",rank:1,row:6,column:3,minLevel:0,maxLevel:10,element:"Electric",passive:!0,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:g,level:5},{skill:h,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced electric technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all electric damage by <span>{damage}%</span>.\n  "},ElementalMaster:{name:"Elemental Master",attr:"elemental-master",prop:"elementalMaster",rank:1,row:6,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],values:{damage:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic.\n    Increases fire, ice, and electric damage by <span>{damage}%</span>.\n  "},FlameTornado:c,FlameWave:m,FocusSeal:{name:"Focus Seal",attr:"focus-seal",prop:"focusSeal",rank:1,row:5,column:4,minLevel:0,maxLevel:10,cooldown:45,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:u,level:4}],values:{increaseAllies:[1,1,1.4,1.8,2.2,2.6,3,3.4,3.8,4.2,4.6],increaseSelf:[.5,.5,.7,.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3]},description:"\n    Imbue the earth with your magical power, creating a seal that reaches <span>5</span> tiles around you.\n    The seal lasts for <span>20</span> sec and increases the physical attack and magic attack\n    of allies who absorb it by <span>{increaseAllies}%</span> for <span>180</span> sec.\n    Focus Seal also increases the caster's physical and magic attack by an additional <span>{increaseSelf}%</span>.\n  "},IceSpear:p,IceStorm:d,MagicArmor:u,ManaClaw:{name:"Mana Claw",attr:"mana-claw",prop:"manaClaw",rank:1,row:6,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:o,level:3}],values:{firstDamage:[149,149,159,169,179,189,199,209,219,229,239],thirdDamage:[246,246,263,280,297,314,331,348,365,382,399]},description:"\n    Shoot a sphere of condensed mana at the nearest enemy up to <span>9</span> m in front of you,\n    dealing <span>{firstDamage}%</span> damage.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The first and second strikes have the same effect,\n    but the third strike <span>{thirdDamage}%</span> damage and is always critical.\n    Consumes <span>15</span> spirit.\n  "},ManaFont:{name:"Mana Font",attr:"mana-font",prop:"manaFont",rank:1,row:1,column:3,minLevel:1,maxLevel:1,passive:!0,sp:!0,description:"\n    Your fine control over your magical powers allows you to\n    recover <span>1</span> spirit every <span>0.3</span> sec at will.\n  "},PhantomClaw:{name:"Phantom Claw",attr:"phantom-claw",prop:"phantomClaw",rank:1,row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[71,71,77,83,89,95,101,107,113,119,125]},description:"\n    Slash the air with sharp magical claws, dealing <span>{damage}%</span> damage\n    <span>2</span> times to <span>3</span> enemies up to <span>8</span> m in front of you.\n  "},Pyromancy:{name:"Pyromancy",attr:"pyromancy",prop:"pyromancy",rank:1,row:5,column:1,minLevel:0,maxLevel:10,element:"Fire",passive:!0,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:m,level:5},{skill:c,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced fire technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all fire damage by <span>{damage}%</span>.\n  "},Teleport:{name:"Teleport",attr:"teleport",prop:"teleport",rank:1,row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Warp yourself <span>4.5</span> m forward. This skill can cancel other skills.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  "},Thunderbolt:h},R={ManaControl:{name:"Mana Control",attr:"mana-control",prop:"manaControl",rank:2,row:1,column:4,minLevel:1,maxLevel:1,attackType:"Magic",weaponRequired:"Two-handed Staff",spirit:10,cooldown:60,levelRequirement:[60,60,60,60,60],description:"\n    Bend mana to your will.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently increases intelligence by <span>40</span>.\n    Using a skill grants Mana Control, which increases movement speed by <span>35%</span>,\n    increases magic attack by <span>20%</span> when spirit is <span>50%</span> or higher,\n    restores spirit by <span>50%</span>,\n    and decreases spirit cost by half when spirit is less than <span>50%</span>.\n  "},DualCast:f,IceCreamTime:v,LodestoneField:y,PerfectStorm:{name:"Perfect Storm",attr:"perfect-storm",prop:"perfectStorm",rank:2,row:5,column:1,minLevel:0,maxLevel:4,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:5,cooldown:40,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:v,level:3},{skill:y,level:3}],values:{damage:[229,229,229,229,229],additionalDamage:[731,731,731,731,731],elementaryAttack:[24,24,24,24,24]},description:"\n    Attack with a perfect blend of ice and electricity.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Summon a bolt of ice and a bolt of electricity, each dealing <span>{damage}%</span> damage.\n    Hold down the skill key to unleash a fused attack that deals <span>{additionalDamage}%</span> damage.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    After casting Perfect Storm, temporarily increase electric and ice attack\n    by <span>{elementaryAttack}%</span> and reset the cooldowns for Thunderbolt and Ice Storm.\n  "},Ember:b,BarbecueParty:w,PlayingWithFire:k,LittleMeteor:{name:"Little Meteor",attr:"little-meteor",prop:"littleMeteor",rank:2,row:5,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:60,cooldown:30,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:k,level:3}],values:{damage:[2e3,2e3,2e3,2e3,2e3],additionalDamage:[199,199,199,199,199],enlightenFirstDamage:[340,340,340,340,340],enlightenSecondDamage:[350,350,350,350,350]},description:"\n    Summons a meteor to strike enemies. Sometimes summons something else by mistake.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and grants Enlightenment.\n    Deals an additional <span>{additionalDamage}%</span> damage to targets hit with Flame Tornado.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Enlightenment causes Ember to strike twice, dealing <span>{enlightenFirstDamage}%</span> damage\n    and then <span>{enlightenSecondDamage}%</span> damage at no spirit cost.\n  "}},T=Object.assign({},L,R);class S{constructor(n){e(this,n),this.editable=!1,this.rank=i.Basic,this.extras=!1,this.arcaneBlast=T.ArcaneBlast.minLevel,this.chainLightning=T.ChainLightning.minLevel,this.cryomancy=T.Cryomancy.minLevel,this.electromancy=T.Electromancy.minLevel,this.elementalMaster=T.ElementalMaster.minLevel,this.flameTornado=T.FlameTornado.minLevel,this.flameWave=T.FlameWave.minLevel,this.focusSeal=T.FocusSeal.minLevel,this.iceSpear=T.IceSpear.minLevel,this.iceStorm=T.IceStorm.minLevel,this.magicArmor=T.MagicArmor.minLevel,this.manaClaw=T.ManaClaw.minLevel,this.manaFont=T.ManaFont.minLevel,this.phantomClaw=T.PhantomClaw.minLevel,this.pyromancy=T.Pyromancy.minLevel,this.teleport=T.Teleport.minLevel,this.thunderbolt=T.Thunderbolt.minLevel,this.manaControl=T.ManaControl.minLevel,this.dualCast=T.DualCast.minLevel,this.iceCreamTime=T.IceCreamTime.minLevel,this.lodestoneField=T.LodestoneField.minLevel,this.perfectStorm=T.PerfectStorm.minLevel,this.ember=T.Ember.minLevel,this.barbecueParty=T.BarbecueParty.minLevel,this.playingWithFire=T.PlayingWithFire.minLevel,this.littleMeteor=T.LittleMeteor.minLevel,this.onSkillChanged=a(this,"skillchanged",7)}componentWillLoad(){s(this,T)}async getData(){return r(this,T)}levelChanged(e,a){this[e.prop]=a,s(this,T,e),this.host.forceUpdate(),this.emitChangeEvent()}emitChangeEvent(){this.onSkillChanged.emit(r(this,T))}render(){return n("ms-chart",{msClass:"wizard",rank:this.rank,onRankChange:({detail:e})=>this.rank=e},l(this,L,this.editable,this.extras,i.Basic),l(this,R,this.editable,this.extras,i.Awakening))}get host(){return t(this)}static get watchers(){return{extras:["emitChangeEvent"],rank:["emitChangeEvent"]}}static get style(){return":host{display:block}"}}export{S as ms_wizard};