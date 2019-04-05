var e=this&&this.__awaiter||function(e,n,a,s){return new(a||(a=Promise))(function(i,t){function o(e){try{l(s.next(e))}catch(e){t(e)}}function r(e){try{l(s.throw(e))}catch(e){t(e)}}function l(e){e.done?i(e.value):new a(function(n){n(e.value)}).then(o,r)}l((s=s.apply(e,n||[])).next())})},n=this&&this.__generator||function(e,n){var a,s,i,t,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return t={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function r(t){return function(r){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,s&&(i=2&t[0]?s.return:t[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,t[1])).done)return i;switch(s=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return o.label++,{value:t[1],done:!1};case 5:o.label++,s=t[1],t=[0];continue;case 7:t=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===t[0]||2===t[0])){o=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){o.label=t[1];break}if(6===t[0]&&o.label<i[1]){o.label=i[1],i=t;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(t);break}i[2]&&o.ops.pop(),o.trys.pop();continue}t=n.call(e,o)}catch(e){t=[6,e],s=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,r])}}};import{c as a,d as s,b as i}from"./p-707d1bff.js";import{a as t,b as o,c as r}from"./p-3717c441.js";var l={name:"Spirit Thief",attr:"spirit-thief",prop:"spiritThief",row:1,column:3,minLevel:1,maxLevel:1,passive:!0,sp:!0,description:"\n    Steal from an enemy. When successful, attacks restore <span>4</span> spirit on hit.\n  "},p={name:"Mind Stealer",attr:"mind-stealer",prop:"mindStealer",row:1,column:4,minLevel:1,maxLevel:1,attackType:"Close Range / Physical",cooldown:3,description:"\n    Nimbly move forward <span>4.5</span> m, dealing <span>40%</span> damage to <span>3</span> enemies\n    in your path and absorbing their energy to restore <span>10</span> spirit per target.\n  "},c={name:"Double Slash",attr:"double-slash",prop:"doubleSlash",row:1,column:1,minLevel:1,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"One-handed Dagger, One-handed Dagger",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[31,31,33,35,37,39,41,43,45,47,49],cunning:[7,7,8,9,10,11,12,13,14,15,16]},description:"\n    Quickly stab with your daggers, dealing <span>[damage]%</span> damage <span>2</span>\n    times to <span>3</span> enemies up to <span>3</span> m in front of you.\n    Has a <span>[cunning]%</span> chance to activate Cunning for <span>5</span> sec when your attack hits.\n    Movement speed increases by <span>30%</span> while Cunning is active, and some skills are enhanced.\n    The damage of each attack is affected by the weapon in each hand.\n  "},m={name:"Poison Edge",attr:"poison-edge",prop:"poisonEdge",row:2,column:1,minLevel:1,maxLevel:10,element:"Toxic",attackType:"Close Range / Physical",weaponRequired:"One-handed Dagger, One-handed Dagger",spirit:10,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{firstDamage:[68,68,72,76,80,84,88,92,96,100,104],fifthDamage:[72,72,78,84,90,96,102,108,114,120,126]},description:"\n    Swing your poison-coated daggers, dealing <span>[firstDamage]%</span> poison\n    damage to <span>5</span> enemies up to <span>3</span> m in front of you.\n    Keep pressing the key to trigger a <span>5-hit</span> combo.\n    The fifth hit deals <span>[fifthDamage]%</span> poison damage\n    and moves you <span>3</span> m in the direction you select.\n    When Cunning is active, this skill is empowered.\n    Consumes <span>10</span> spirit.\n  ",extras:[{values:{damage:[11,11,12,13,14,15,16,17,18,19,20]},description:"\n      When empowered your daggers poison the target for an additional <span>[damage]%</span> poison damage\n      every second for <span>13</span> sec on each hit of this skill.\n      This effect stacks up to <span>5</span> times.\n      Cunning is canceled when this skill activates.\n    "}]},u={name:"Poison Vial",attr:"poison-vial",prop:"poisonVial",row:3,column:1,minLevel:0,maxLevel:10,element:"Toxic",attackType:"Long Range / Physical",spirit:15,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],skillRequirements:[{skill:c,level:3},{skill:m,level:3}],values:{damage:[45,45,48,51,54,57,60,63,66,69,72],dot:[35,35,38,41,44,47,50,53,56,59,62]},description:"\n    Throw a vial of poison at the closest enemy up to <span>7.5</span> m in front of you,\n    dealing <span>[damage]%</span> poison damage.\n    The vial breaks on impact, splashing a toxic liquid that poisons <span>5</span> enemies within <span>3</span> m and\n    deals <span>[dot]%</span> poison damage every second for <span>10</span> sec.\n    Consumes <span>15</span> spirit.\n  "},d={name:"Surprise Attack",attr:"surprise-attack",prop:"surpriseAttack",row:5,column:1,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"One-handed Dagger, One-handed Dagger",cooldown:6,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:m,level:6},{skill:u,level:4}],values:{damage:[101,101,108,115,122,129,136,143,150,157,164],additionalDamage:[313,313,336,359,382,405,428,451,474,497,520]},description:"\n    Stab <span>3</span> enemies up to <span>3</span> m in front of you,\n    dealing <span>[damage]%</span> damage.\n    If a target is afflicted with Poison Edge or Poison Vial, they’ll take an additional\n    <span>[additionalDamage]%</span> poison damage for each, and the poison will be removed.\n    When Cunning is active, this skill is empowered.\n  ",extras:[{values:{damage:[101,101,108,115,122,129,136,143,150,157,164]},description:"\n      When empowered you spin with your daggers out, dealing <span>[damage]%</span> damage to <span>8</span> enemies within <span>3</span> m.\n    "}]},h={name:"Ruthless Guile",attr:"ruthless-guile",prop:"ruthlessGuile",row:6,column:1,minLevel:0,maxLevel:10,element:"Toxic",attackType:"Physical",levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:m,level:6},{skill:u,level:6}],values:{damage:[2,2,3,4,5,6,7,8,9,10,11]},description:"\n    Prey on the weaknesses of your enemy to deal <span>[damage]%</span> additional\n    poison damage to targets afflicted with Poison Blow or Poison Vial.\n  "},g={name:"Cunning Tactics",attr:"cunning-tactics",prop:"cunningTactics",row:3,column:2,minLevel:0,maxLevel:10,spirit:[20,20,20,20,25,25,25,30,30,30,35],cooldown:[23,23,22,21,20,19,18,17,16,15,14],levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],description:"\n    Using the tricks of the trade, recover <span>[spirit]%</span> spirit and activate Cunning for <span>5</span> sec.\n    While Cunning is active, your movement speed increases by <span>30%</span> and some skills can be empowered.\n  "},v={name:"Blade Dance",attr:"blade-dance",prop:"bladeDance",row:4,column:2,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"One-handed Dagger",spirit:26,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:g,level:2}],values:{firstDamage:[42,42,45,48,51,54,57,60,63,66,69],thirdDamage:[56,56,59,62,65,68,71,74,77,80,83]},description:"\n    Spin with your daggers out, dealing <span>[firstDamage]%</span>, then <span>[firstDamage]%</span>,\n    and then <span>[thirdDamage]%</span> damage to <span>8</span> enemies within <span>3</span> m.\n    While Cunning is active, this skill is enhanced.\n    Consumes <span>26</span> spirit.\n  ",extras:[{values:{evade:[81,81,83,85,87,89,91,93,95,97,99]},description:"\n      When enhanced your spin makes enemies dizzy, granting you a <span>[evade]%</span> chance to evade enemy attacks for <span>1</span> sec.\n      Cunning is cancelled when this skill activates.\n    "}]},f={name:"Retaliation",attr:"retaliation",prop:"retaliation",row:5,column:2,minLevel:0,maxLevel:10,passive:!0,spirit:[12,12,14,16,18,20,22,24,26,28,30],levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:v,level:2}],values:{attack:[4.5,4.5,6,7.5,9,10.5,12,13.5,15,16.5,18],evasion:[6,6,7,8,9,10,11,12,13,14,15]},description:"\n    Deftly dodge an attack and position yourself for a counterattack,\n    which restore <span>[spirit]</span> spirit,\n    increases physical attack and magic attack by <span>[attack]%</span>,\n    and increases evasion by <span>[evasion]</span> for <span>12</span> sec.\n    This effect will not activate again for <span>1</span> sec.\n  "},k={name:"Somersault Kick",attr:"somersault-kick",prop:"somersaultKick",row:3,column:3,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",cooldown:6,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[238,238,254,270,286,302,318,334,350,366,382],movement:[30,30,30,30,35,35,35,40,40,40,45],jump:[30,30,30,30,35,35,35,40,40,40,45]},description:"\n    Perform a somersault kick to deal <span>[damage]%</span> damage to <span>5</span> enemies up\n    to <span>3</span> m in front of you, breaking their stance and decreasing their\n    movement speed by <span>[movement]%</span> and jump power by <span>[jump]%</span>.\n    When Cunning is active, this skill is empowered.\n  ",extras:[{description:"\n      When empowered is active you stun the enemies for <span>1</span> sec.\n      Cunning is cancelled when this skill activates.\n      You will be immune to knockback while this skill is active.\n    "}]},y={name:"Quick Step",attr:"quick-step",prop:"quickStep",row:4,column:3,minLevel:0,maxLevel:10,spirit:[1,1,3,5,7,9,11,13,15,17,19],levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],description:"\n    Swiftly move back <span>3</span> m and recover <span>[spirit]</span> spirit.\n    Consumes <span>40</span> stamina.\n  "},w={name:"Mesoguard Plus",attr:"mesoguard-plus",prop:"mesoguardPlus",row:6,column:3,minLevel:0,maxLevel:10,cooldown:60,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:y,level:2}],values:{reduction:[26,26,32,38,44,50,56,62,68,74,80]},description:"\n    Spend <span>777</span> mesos to create a meso shield that lasts\n    <span>4</span> seconds reducing damage taken by <span>[reduction]%</span>.\n    If Cunning is active, the skill costs no mesos, and Cunning will be removed.\n  "},b={name:"Mind Breaker",attr:"mind-breaker",prop:"mindBreaker",row:3,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],values:{damage:[50,50,100,150,200,250,300,350,400,450,500]},description:"\n    Unlocks Empowered Mind Stealer, which increases the number of targets that can be hit\n    by the skill to <span>5</span> and the skill's damage by <span>[damage]%</span>.\n  "},R={name:"Vicious Cuts",attr:"vicious-cuts",prop:"viciousCuts",row:4,column:4,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"One-handed Dagger, One-handed Dagger",spirit:28,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:k,level:2},{skill:b,level:2}],values:{damage:[35,35,38,41,44,47,50,53,56,59,62]},description:"\n    Quickly stab with your daggers, dealing <span>[damage]%</span> damage <span>5</span> times\n    to <span>3</span> enemies up to <span>3</span> m in front of you.\n    While Cunning is active, this skill is enhanced.\n    The damage of each attack is affected by the weapon in each hand.\n    Consumes <span>28</span> spirit.\n  "},C={name:"Haste",attr:"haste",prop:"haste",row:5,column:4,minLevel:0,maxLevel:10,cooldown:60,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:b,level:5},{skill:R,level:3}],values:{movement:[13,13,14,15,16,17,18,19,20,21,22],attack:[8,8,9,10,11,12,13,14,15,16,17]},description:"\n    Your movements mimic the wind.\n    For <span>60</span> sec, <span>4</span> spirit is consumed in <span>0.5</span> sec\n    intervals to increase attack speed and movement speed by <span>[movement]%</span> and\n    physical attack by <span>[attack]%</span>.\n  "},L={name:"Deft Combatant",attr:"deft-combatant",prop:"deftCombatant",row:6,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:R,level:5},{skill:C,level:3}],values:{damage:[1,1,3,5,7,9,11,13,15,17,19]},description:"\n    Intense training has honed your body, increasing the damage output of\n    Vicious Cuts and Somersault Kick by <span>[damage]%</span>.\n  "},q=Object.freeze({SpiritThief:l,MindStealer:p,DoubleSlash:c,PoisonEdge:m,PoisonVial:u,SurpriseAttack:d,RuthlessGuile:h,CunningTactics:g,BladeDance:v,Retaliation:f,SomersaultKick:k,QuickStep:y,MesoguardPlus:w,MindBreaker:b,ViciousCuts:R,Haste:C,DeftCombatant:L}),x=function(){function x(e){a(this,e),this.editable=!1,this.extras=!1,this.bladeDance=v.minLevel,this.cunningTactics=g.minLevel,this.deftCombatant=L.minLevel,this.doubleSlash=c.minLevel,this.haste=C.minLevel,this.mesoguardPlus=w.minLevel,this.mindBreaker=b.minLevel,this.mindStealer=p.minLevel,this.poisonEdge=m.minLevel,this.poisonVial=u.minLevel,this.quickStep=y.minLevel,this.retaliation=f.minLevel,this.ruthlessGuile=h.minLevel,this.somersaultKick=k.minLevel,this.spiritThief=l.minLevel,this.surpriseAttack=d.minLevel,this.viciousCuts=R.minLevel,this.onSkillChanged=s(this,"skillchanged",7)}return x.prototype.componentWillLoad=function(){t(this,q)},x.prototype.getData=function(){return e(this,void 0,void 0,function(){return n(this,function(){return[2,o(this,q)]})})},x.prototype.levelChanged=function(e,n){this[e.prop]=n,t(this,q,e),this.emitChangeEvent()},x.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(o(this,q))},x.prototype.render=function(){return i("ms-chart",{msClass:"thief"},r(this,q,this.editable,this.extras))},Object.defineProperty(x,"originalStyleUrls",{get:function(){return{$:["thief.css"]}},enumerable:!0,configurable:!0}),Object.defineProperty(x,"watchers",{get:function(){return{extras:["emitChangeEvent"]}},enumerable:!0,configurable:!0}),Object.defineProperty(x,"style",{get:function(){return":host{display:block}"},enumerable:!0,configurable:!0}),x}();export{x as ms_thief};