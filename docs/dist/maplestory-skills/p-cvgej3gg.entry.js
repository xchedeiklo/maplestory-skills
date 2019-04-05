import{c as e,d as a,b as n}from"./p-8e447e8d.js";import{a as s,b as t,c as i}from"./p-d5eeb280.js";const l={name:"Mana Font",attr:"mana-font",prop:"manaFont",row:1,column:3,minLevel:1,maxLevel:1,passive:!0,sp:!0,description:"\n    Your fine control over your magical powers allows you to\n    recover <span>1</span> spirit every <span>0.3</span> sec at will.\n  "},r={name:"Teleport",attr:"teleport",prop:"teleport",row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Warp yourself <span>4.5</span> m forward. This skill can cancel other skills.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  "},o={name:"Phantom Claw",attr:"phantom-claw",prop:"phantomClaw",row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[71,71,77,83,89,95,101,107,113,119,125]},description:"\n    Slash the air with sharp magical claws, dealing <span>[damage]%</span> damage\n    <span>2</span> times to <span>3</span> enemies up to <span>8</span> m in front of you.\n  "},m={name:"Arcane Blast",attr:"arcane-blast",prop:"arcaneBlast",row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",cooldown:6,levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[260,260,279,298,317,336,355,374,393,412,431]},description:"\n    Focus a magical aura on a spot <span>4.5</span> m in front of you, creating an explosion of energy\n    that deals <span>[damage]%</span> damage to enemies within <span>3</span> m and knocks them back <span>1</span> m.\n  "},p={name:"Flame Wave",attr:"flame-wave",prop:"flameWave",row:3,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[175,175,188,201,214,227,240,253,266,279,292],dot:[21,21,23,25,27,29,31,33,35,37,39]},description:"\n    Gather fire energy in your staff to fling a flame wave up to <span>8</span> m in front of you,\n    dealing <span>[damage]%</span> fire damage to enemies caught in it and setting them on fire,\n    which deals an additional <span>[dot]%</span> every second for <span>10</span> sec.\n    Consumes <span>20</span> spirit.\n  "},c={name:"Flame Tornado",attr:"flame-tornado",prop:"flameTornado",row:4,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:16,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:p,level:4}],values:{damage:[142,142,152,162,172,182,192,202,212,222,232]},description:"\n    Gather fire energy from your surroundings to create a huge flame whirlwind <span>4.5</span> m in front of you.\n    The flame whirlwind lasts for <span>1.5</span> sec, dealing <span>[damage]%</span> fire damage\n    to <span>8</span> enemies within <span>3</span> m every <span>0.3</span> sec.\n    Consumes <span>40</span> spirit.\n  "},d={name:"Pyromancy",attr:"pyromancy",prop:"pyromancy",row:5,column:1,minLevel:0,maxLevel:10,element:"Fire",passive:!0,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:p,level:5},{skill:c,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced fire technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all fire damage by <span>[damage]%</span>.\n  "},h={name:"Mana Claw",attr:"mana-claw",prop:"manaClaw",row:6,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:m,level:3}],values:{firstDamage:[149,149,159,169,179,189,199,209,219,229,239],thirdDamage:[246,246,263,280,297,314,331,348,365,382,399]},description:"\n    Shoot a sphere of condensed mana at the nearest enemy up to <span>9</span> m in front of you,\n    dealing <span>[firstDamage]%</span> damage.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The first and second strikes have the same effect,\n    but the third strike <span>[thirdDamage]%</span> damage and is always critical.\n    Consumes <span>15</span> spirit.\n  "},u={name:"Ice Spear",attr:"ice-spear",prop:"iceSpear",row:3,column:2,minLevel:0,maxLevel:10,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:p,level:4}],values:{damage:[171,171,184,197,210,223,236,249,262,275,288]},description:"\n    Gather ice from the moisture in the air to fling at the closest enemy up to <span>8</span> m in front of you.\n    The spear of ice breaks on impact, its shards dealing <span>[damage]%</span> ice damage\n    to <span>8</span> enemies within <span>2.5</span> m and decreasing movement speed by <span>10%</span> for <span>3</span> sec.\n    This cold effect can stack up to <span>6</span> times.\n    Enemies at max stacks are frozen for <span>1</span> sec.\n    Consumes <span>20</span> spirit.\n  "},g={name:"Ice Storm",attr:"ice-storm",prop:"iceStorm",row:4,column:2,minLevel:0,maxLevel:10,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:30,cooldown:12,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:u,level:4}],values:{damage:[152,152,163,174,185,196,207,218,229,240,251]},description:"\n    Blast <span>4</span> ice crystals toward enemies up to <span>8</span> m in front of you,\n    surrounding the targets with a cold front that generates a giant shard of ice.\n    The shard deals <span>[damage]%</span> ice damage to <span>8</span> enemies within <span>2.5</span> m.\n    Consumes <span>30</span> spirit.\n  "},v={name:"Cryomancy",attr:"cryomancy",prop:"cryomancy",row:5,column:2,minLevel:0,maxLevel:10,element:"Ice",passive:!0,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:u,level:5},{skill:g,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced ice technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all ice damage by <span>[damage]%</span>.\n  "},f={name:"Chain Lightning",attr:"chain-lightning",prop:"chainLightning",row:3,column:3,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{damage:[62,62,66,70,74,78,82,86,90,94,98],additionalDamage:[288,288,308,328,348,368,388,408,428,448,468]},description:"\n    Release an intense electric load that deals <span>[damage]%</span> electric damage\n    to <span>8</span> enemies up to <span>8</span> m in front of you.\n    Enemies hit with this skill <span>5</span> times pulse with electric energy,\n    attracting a bolt that deals an additional <span>[additionalDamage]%</span> electric damage.\n    Consumes <span>15</span> spirit.\n  "},w={name:"Thunderbolt",attr:"thunderbolt",prop:"thunderbolt",row:4,column:3,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:16,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:f,level:4}],values:{damage:[611,611,656,701,746,791,836,881,926,971,1016]},description:"\n    Gather a bolt of electricity to throw at the closest enemy up to <span>8</span> m in front of you,\n    dealing <span>[damage]%</span> electric damage.\n    The bolt bounces up to <span>8</span> times within <span>5</span> m,\n    but won't hit the same target twice in a row.\n    Consumes <span>40</span> spirit.\n  "},y={name:"Electromancy",attr:"electromancy",prop:"electromancy",row:6,column:3,minLevel:0,maxLevel:10,element:"Electric",passive:!0,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:f,level:5},{skill:w,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced electric technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all electric damage by <span>[damage]%</span>.\n  "},k={name:"Magic Armor",attr:"magic-armor",prop:"magicArmor",row:3,column:4,minLevel:0,maxLevel:10,cooldown:45,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],values:{barrier:[6,6,8,10,12,14,16,18,20,22,24]},description:"\n    Envelop your body with a magical aura, creating a barrier that absorbs damage\n    up to <span>[barrier]%</span> of your max health for <span>10</span> sec.\n    Cannot be combined with other barrier effects.\n  "},L={name:"Focus Seal",attr:"focus-seal",prop:"focusSeal",row:5,column:4,minLevel:0,maxLevel:10,cooldown:45,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:k,level:4}],values:{increaseAllies:[1,1,1.4,1.8,2.2,2.6,3,3.4,3.8,4.2,4.6],increaseSelf:[.5,.5,.7,.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3]},description:"\n    Imbue the earth with your magical power, creating a seal that reaches <span>5</span> tiles around you.\n    The seal lasts for <span>20</span> sec and increases the physical attack and magic attack\n    of allies who absorb it by <span>[increaseAllies]%</span> for <span>180</span> sec.\n    Focus Seal also increases the caster's physical and magic attack by an additional <span>[increaseSelf]%</span>.\n  "},R={name:"Elemental Master",attr:"elemental-master",prop:"elementalMaster",row:6,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],values:{damage:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic.\n    Increases fire, ice, and electric damage by <span>[damage]%</span>.\n  "};var b=Object.freeze({ManaFont:l,Teleport:r,PhantomClaw:o,ArcaneBlast:m,FlameWave:p,FlameTornado:c,Pyromancy:d,ManaClaw:h,IceSpear:u,IceStorm:g,Cryomancy:v,ChainLightning:f,Thunderbolt:w,Electromancy:y,MagicArmor:k,FocusSeal:L,ElementalMaster:R});class q{constructor(n){e(this,n),this.editable=!1,this.extras=!1,this.arcaneBlast=m.minLevel,this.chainLightning=f.minLevel,this.cryomancy=v.minLevel,this.electromancy=y.minLevel,this.elementalMaster=R.minLevel,this.flameTornado=c.minLevel,this.flameWave=p.minLevel,this.focusSeal=L.minLevel,this.iceSpear=u.minLevel,this.iceStorm=g.minLevel,this.magicArmor=k.minLevel,this.manaClaw=h.minLevel,this.manaFont=l.minLevel,this.phantomClaw=o.minLevel,this.pyromancy=d.minLevel,this.teleport=r.minLevel,this.thunderbolt=w.minLevel,this.onSkillChanged=a(this,"skillchanged",7)}componentWillLoad(){s(this,b)}async getData(){return t(this,b)}levelChanged(e,a){this[e.prop]=a,s(this,b,e),this.emitChangeEvent()}emitChangeEvent(){this.onSkillChanged.emit(t(this,b))}render(){return n("ms-chart",{msClass:"wizard"},i(this,b,this.editable,this.extras))}static get originalStyleUrls(){return{$:["wizard.css"]}}static get watchers(){return{extras:["emitChangeEvent"]}}static get style(){return":host{display:block}"}}export{q as ms_wizard};