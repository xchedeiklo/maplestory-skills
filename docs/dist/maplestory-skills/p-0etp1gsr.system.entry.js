var e=this&&this.__awaiter||function(e,a,n,s){return new(n||(n=Promise))(function(t,r){function i(e){try{l(s.next(e))}catch(e){r(e)}}function o(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){e.done?t(e.value):new n(function(a){a(e.value)}).then(i,o)}l((s=s.apply(e,a||[])).next())})},a=this&&this.__generator||function(e,a){var n,s,t,r,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,s&&(t=2&r[0]?s.return:r[0]?s.throw||((t=s.return)&&t.call(s),0):s.next)&&!(t=t.call(s,r[1])).done)return t;switch(s=0,t&&(r=[2&r[0],t.value]),r[0]){case 0:case 1:t=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,s=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!t||r[1]>t[0]&&r[1]<t[3])){i.label=r[1];break}if(6===r[0]&&i.label<t[1]){i.label=t[1],t=r;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(r);break}t[2]&&i.ops.pop(),i.trys.pop();continue}r=a.call(e,i)}catch(e){r=[6,e],s=0}finally{n=t=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}};System.register(["./p-2de999fe.system.js","./p-d366d181.system.js"],function(n){"use strict";var s,t,r,i,o,l;return{setters:[function(e){s=e.d,t=e.e,r=e.c},function(e){i=e.a,o=e.b,l=e.c}],execute:function(){var p={name:"Shadow Chaser",attr:"shadow-chaser",prop:"shadowChaser",row:1,column:3,minLevel:1,maxLevel:1,element:"Dark",attackType:"Long Range / Physical",sp:!0,description:"\n    Send your mirror image to the nearest enemy within <span>8</span> m in front of you,\n    dealing <span>23%</span> damage and marking them with Assassin's Brand,\n    which steals their energy to grant you <span>1</span> spirit every <span>0.1</span> sec for <span>30</span> sec.\n  "},m={name:"Dash",attr:"dash",prop:"dash",row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Deftly leap forward <span>4.5</span> m.\n    This skill can cancel other skills.\n    Consumes <span>40</span> stamina.\n  "},h={name:"Lucky Stars",attr:"lucky-stars",prop:"luckyStars",row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"One-handed Thrown Weapon, One-handed Thrown Weapon",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[76,76,81,86,91,96,101,106,111,116,121],aoe:[76,76,81,86,91,96,101,106,111,116,121]},description:"\n    Throw your weapons at the closest enemy within <span>8</span> m to deal <span>[damage]%</span> damage <span>2</span> times.\n    Each weapon then ricochets to other enemies within <span>3</span> m and deals <span>[aoe]%</span> damage <span>2</span> times.\n    The damage of each attack is affected by the weapon in each hand.\n  "},d={name:"Fragmented Star",attr:"fragmented-star",prop:"fragmentedStar",row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"One-handed Thrown Weapon",spirit:20,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[215,215,229,243,257,271,285,299,313,327,341]},description:"\n    Throw a shattering weapon at the closest enemy within <span>8</span> m in front of you which breaks apart\n    on impact to deal <span>[damage]%</span> damage to <span>8</span> enemies within <span>3</span> m.\n    The damage of this attack is affected by the weapon in your right hand.\n    Consumes <span>20</span> spirit.\n  "},c={name:"Star Chaser",attr:"star-chaser",prop:"starChaser",row:3,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"One-handed Thrown Weapon, One-handed Thrown Weapon",spirit:15,cooldown:4,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[{skill:d,level:4}],values:{damage:[39,39,42,45,48,51,54,57,60,63,66]},description:"\n    Equip <span>4</span> homing weapons in each hand, and throw them at <span>8</span>\n    enemies up to <span>8</span> m in front of you, dealing <span>[damage]%</span> damage per hit.\n    The damage of each attack is affected by the weapon in each hand.\n    Consumes <span>15</span> spirit.\n  "},u={name:"Star Flurry",attr:"star-flurry",prop:"starFlurry",row:4,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"One-handed Thrown Weapon, One-handed Thrown Weapon",spirit:15,cooldown:4,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:h,level:4},{skill:c,level:3}],values:{damage:[59,59,62,65,68,71,74,77,80,83,86]},description:"\n    Equip <span>3</span> weapons in each hand and throw them\n    at the closest enemy within <span>8</span> m in front of you,\n    dealing <span>[damage]%</span> damage <span>6</span> times.\n    The damage of each attack is affected by the weapon in each hand.\n    Consumes <span>15</span> spirit.\n  "},w={name:"Thrown Weapon Mastery",attr:"thrown-weapon-mastery",prop:"thrownWeaponMastery",row:6,column:1,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:d,level:5},{skill:u,level:4}],values:{attack:[1,1,1.4,1.8,2.2,2.6,3,3.4,3.8,5.8,6.4]},description:"\n    Your proficiency with thrown weapons increases your weapon attack\n    by <span>[attack]%</span> when you have thrown weapons equipped.\n  "},g={name:"Shadow Cutter",attr:"shadow-cutter",prop:"shadowCutter",row:3,column:2,minLevel:0,maxLevel:10,element:"Dark",attackType:"Long Range / Physical",weaponRequired:"One-handed Thrown Weapon",spirit:13,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[99,99,106,113,120,127,134,141,148,155,162]},description:"\n    Throw your weapon forward <span>8</span> m with a strong spin to deal <span>[damage]%</span> dark\n    damage <span>2</span> times to <span>8</span> enemies in its path both ways.\n    The damage of this attack is affected by the weapon in your right hand.\n    Consumes <span>13</span> spirit.\n  "},k={name:"Shadow Burst",attr:"shadow-burst",prop:"shadowBurst",row:4,column:2,minLevel:0,maxLevel:10,element:"Dark",attackType:"Long Range / Physical",weaponRequired:"One-handed Thrown Weapon, One-handed Thrown Weapon",spirit:30,cooldown:12,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:g,level:4}],values:{damage:[211,211,225,239,253,267,281,295,309,323,337],additionalDamage:[211,211,225,239,253,267,281,295,309,323,337]},description:"\n    Equip <span>5</span> thrown weapons imbued with dark magic in each hand,\n    then throw them forward at the same time to deal <span>[damage]%</span> dark\n    damage <span>2</span> times to <span>8</span> enemies within <span>8</span> m.\n    If any of the enemies hit are marked for death the mark explodes,\n    dealing an additional <span>[additionalDamage]%</span> dark damage.\n    The damage of each attack is affected by the weapon in each hand.\n    Consumes <span>30</span> spirit.\n  "},v={name:"Soul Grind",attr:"soul-grind",prop:"soulGrind",row:5,column:2,minLevel:0,maxLevel:10,element:"Dark",attackType:"Long Range / Physical",weaponRequired:"One-handed Thrown Weapon",spirit:30,cooldown:14,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:h,level:4},{skill:k,level:3}],values:{damage:[97,97,103,109,115,121,127,133,139,145,151]},description:"\n    Throw a giant weapon at the closest enemy within <span>8</span> m in front of you,\n    which spins rapidonly on impact, dealing <span>[damage]%</span> dark damage\n    to <span>5</span> enemies within <span>3</span> m <span>5</span> times.\n    The damage of this attack is affected by the weapon in your right hand.\n    Consumes <span>30</span> spirit.\n  "},y={name:"Shadow Arts",attr:"shadow-arts",prop:"shadowArts",row:6,column:2,minLevel:0,maxLevel:10,element:"Dark",passive:!0,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:g,level:5},{skill:v,level:4}],values:{damage:[2,2,4,6,8,10,12,14,16,18,20]},description:"\n    Utilize secret assassin techniques to strengthen your command of dark magic.\n    Increases the damage of Shadow Burst, Shadow Cutter, Soul Grind, Shadow Web, and Death Sentence by <span>[damage]%</span>.\n  "},f={name:"Dark Cloak",attr:"dark-cloak",prop:"darkCloak",row:3,column:3,minLevel:0,maxLevel:10,element:"Dark",cooldown:[33,33,31,29,27,25,23,21,19,17,15],levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],values:{movement:[21,21,23,25,27,29,31,33,35,37,39]},description:"\n    Utilize dark magic to walk in shadows for <span>12</span> sec.\n    While hidden, your movement speed increases\n    by <span>[movement]%</span> and\n    your spirit recovery increases by <span>2</span>.\n    While hidden, you can ambush enemies, stunning them for <span>1.5</span> sec.\n    Using a skill or an item, or being hit by an enemy, will take you out of hiding.\n  "},L={name:"Mark of Death",attr:"mark-of-death",prop:"markOfDeath",row:4,column:3,minLevel:0,maxLevel:10,element:"Dark",passive:!0,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:f,level:2}],values:{damage:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Attacks against enemies with <span>30%</span> health or less\n    have a <span>25%</span> to mark them for death for <span>6</span> sec.\n    Marked enemies take <span>[damage]%</span> additional damage.\n  "},b={name:"Death Sentence",attr:"death-sentence",prop:"deathSentence",row:5,column:3,minLevel:0,maxLevel:10,element:"Dark",attackType:"Long Range / Physical",cooldown:45,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:L,level:3}],values:{damage:[83,83,88,93,98,103,108,113,118,123,128]},description:"\n    Summon <span>3</span> mirror images and send them toward <span>3</span> enemies up to <span>8</span> m in front of you,\n    dealing <span>[damage]%</span> dark damage each and shadow marking the enemies for death, regardless of health.\n    These shadows marks last for <span>6</span> sec and increase damage taken by <span>1%</span>.\n    Your mirror images' shadow marks stack with your marks of death.\n    The mirror images will not attack the same target.\n  "},S={name:"Fatal Strikes",attr:"fatal-strikes",prop:"fatalStrikes",row:3,column:4,minLevel:0,maxLevel:10,cooldown:60,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{duration:[8,8,9,10,11,12,13,14,15,16,17]},description:"\n    Utilize dark magic to strengthen your secret assassin techniques,\n    allowing you to identify enemy weak spots.\n    All attacks become critical hits for <span>[duration]</span> sec.\n  "},T={name:"Shadow Web",attr:"shadow-web",prop:"shadowWeb",row:5,column:4,minLevel:0,maxLevel:10,element:"Dark",attackType:"Close Range / Physical",spirit:28,cooldown:7,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:S,level:2}],values:{damage:[28,28,30,32,34,36,38,40,42,44,46],additionalDamage:[14,14,15,16,17,18,19,20,21,22,23],movement:[10,10,12,14,16,18,20,22,24,26,28]},description:"\n    Summon a mirror image and backstep <span>3</span> m. The clone explodes after <span>1</span> sec,\n    tossing out a web that deals <span>[damage]%</span> dark energy\n    to <span>5</span> enemies within <span>3</span> m and entangles them,\n    reducing movement speed and jump power by <span>[movement]%</span> for <span>4</span> sec and dealing an\n    additional <span>[additionalDamage]%</span> damage every sec for <span>4</span> sec.\n    This skill can cancel other skills.\n    Consumes <span>28</span> spirit.\n  "},R={name:"Mirror Image: Dark Blade",attr:"mirror-image-dark-blade",prop:"mirrorImageDarkBlade",row:6,column:4,minLevel:0,maxLevel:10,element:"Dark",attackType:"Close Range / Physical",cooldown:40,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:T,level:2}],values:{damage:[236,236,252,268,284,300,316,332,348,364,380]},description:"\n    Marks a <span>2.25</span> m radius spot on the ground with an insignia of darkness for <span>10</span> sec,\n    dealing <span>[damage]%</span> dark damage to <span>3</span> enemies within the mark by sending a mirror image to attack them.\n    This skill also brands enemies, reducing their accuracy by <span>20</span> for <span>10</span> sec.\n    All attacks dealt to branded enemies have a <span>30%</span> chance to summon additional\n    mirror images to attack them for <span>23%</span> dark damage <span>4</span> times.\n    Summoned mirror images can only appear once every <span>1.5</span> sec.\n    The accuracy reduction does not stack.\n  "},q=Object.freeze({ShadowChaser:p,Dash:m,LuckyStars:h,FragmentedStar:d,StarChaser:c,StarFlurry:u,ThrownWeaponMastery:w,ShadowCutter:g,ShadowBurst:k,SoulGrind:v,ShadowArts:y,DarkCloak:f,MarkOfDeath:L,DeathSentence:b,FatalStrikes:S,ShadowWeb:T,MirrorImageDarkBlade:R}),C=function(){function n(e){s(this,e),this.editable=!1,this.extras=!1,this.darkCloak=f.minLevel,this.dash=m.minLevel,this.deathSentence=b.minLevel,this.fatalStrikes=S.minLevel,this.fragmentedStar=d.minLevel,this.luckyStars=h.minLevel,this.markOfDeath=L.minLevel,this.mirrorImageDarkBlade=R.minLevel,this.shadowArts=y.minLevel,this.shadowBurst=k.minLevel,this.shadowChaser=p.minLevel,this.shadowCutter=g.minLevel,this.shadowWeb=T.minLevel,this.soulGrind=v.minLevel,this.starChaser=c.minLevel,this.starFlurry=u.minLevel,this.thrownWeaponMastery=w.minLevel,this.onSkillChanged=t(this,"skillchanged",7)}return n.prototype.componentWillLoad=function(){i(this,q)},n.prototype.getData=function(){return e(this,void 0,void 0,function(){return a(this,function(){return[2,o(this,q)]})})},n.prototype.levelChanged=function(e,a){this[e.prop]=a,i(this,q,e),this.emitChangeEvent()},n.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(o(this,q))},n.prototype.render=function(){return r("ms-chart",{msClass:"assassin"},l(this,q,this.editable,this.extras))},Object.defineProperty(n,"watchers",{get:function(){return{extras:["emitChangeEvent"]}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return":host{display:block}"},enumerable:!0,configurable:!0}),n}();n("ms_assassin",C)}}});