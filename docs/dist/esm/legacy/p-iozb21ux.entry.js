var e=this&&this.__awaiter||function(e,n,a,s){return new(a||(a=Promise))(function(i,t){function l(e){try{o(s.next(e))}catch(e){t(e)}}function r(e){try{o(s.throw(e))}catch(e){t(e)}}function o(e){e.done?i(e.value):new a(function(n){n(e.value)}).then(l,r)}o((s=s.apply(e,n||[])).next())})},n=this&&this.__generator||function(e,n){var a,s,i,t,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return t={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function r(t){return function(r){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,s&&(i=2&t[0]?s.return:t[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,t[1])).done)return i;switch(s=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,s=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){l.label=t[1];break}if(6===t[0]&&l.label<i[1]){l.label=i[1],i=t;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(t);break}i[2]&&l.ops.pop(),l.trys.pop();continue}t=n.call(e,l)}catch(e){t=[6,e],s=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,r])}}};import{c as a,d as s,b as i}from"./p-707d1bff.js";import{a as t,b as l,c as r}from"./p-3717c441.js";var o={name:"Iron Defense",attr:"iron-defense",prop:"ironDefense",row:1,column:3,minLevel:1,maxLevel:1,weaponRequired:"Off-hand Shield",cooldown:5,sp:!0,description:"\n    Adopt a knightly defensive stance, restoring <span>4</span> spirit every <span>0.3</span> sec\n    and decreasing damage taken by <span>10%</span>, but also reducing physical and magic attack by <span>25%</span>.\n    Press the skill key again to toggle the stance.\n  "},p={name:"Shield Charge",attr:"shield-charge",prop:"shieldCharge",row:1,column:4,minLevel:1,maxLevel:1,attackType:"Physical",weaponRequired:"Off-hand Shield",description:"\n    Charge forward <span>4.5</span> m, dealing <span>70%</span> damage to <span>5</span> enemies\n    and knocking them back <span>3</span> m. While charging, you cannot be knocked back.\n    This skill can cancel other skills.\n    Consumes <span>40</span> stamina.\n  "},c={name:"Cross Cut",attr:"cross-cut",prop:"crossCut",row:1,column:1,minLevel:1,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[79,79,85,91,97,103,109,115,121,127,133]},description:"\n    A swing of your sword deals <span>[damage]%</span> damage <span>2</span> times\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n  "},d={name:"Tornado Slash",attr:"tornado-slash",prop:"tornadoSlash",row:2,column:1,minLevel:1,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",spirit:12,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[81,81,86,91,96,101,106,111,116,121,126]},description:"\n    Perform a spin slash, dealing <span>[damage]%</span> damage <span>3</span> times\n    to <span>8</span> enemies within <span>3</span> m and pulling them in <span>1</span> m.\n    Consumes <span>12</span> spirit.\n  "},h={name:"Divine Strike",attr:"divine-strike",prop:"divineStrike",row:3,column:1,minLevel:0,maxLevel:10,element:"Holy",attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",cooldown:8,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:d,level:2},{skill:c,level:2}],values:{damage:[501,501,536,571,606,641,676,711,746,781,816]},description:"\n    Gathers light and smashes it down, creating a shockwave that deals <span>[damage]%</span>\n    holy damage to <span>8</span> enemies and knocks them back <span>2</span> m.\n    Enemy attacks will not push you back while this skill is active.\n  "},u={name:"Stinging Flurry",attr:"stinging-flurry",prop:"stingingFlurry",row:4,column:1,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",spirit:13,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:c,level:5},{skill:h,level:5}],values:{damage:[83,83,89,95,101,107,113,119,125,131,137]},description:"\n    Captain Allon's special skill stabs quickly,\n    dealing <span>[damage]%</span> damage <span>3</span> times\n    to <span>3</span> enemies up to <span>3</span> m in front of you.\n    The skill lasts while the skill key is held down.\n    Consumes <span>13</span> spirit.\n  "},m={name:"Drill Thrust",attr:"drill-thrust",prop:"drillThrust",row:5,column:1,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",cooldown:8,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:h,level:6}],values:{damage:[412,412,441,470,499,528,557,586,615,644,673]},description:"\n  Strike forth with your weapon, moving you <span>4.5</span> m and creating a whirlwind.\n  You pierce enemies in your path,\n  dealing <span>[damage]%</span> damage on up to <span>8</span> enemies.\n  "},g={name:"Longsword Mastery",attr:"longsword-mastery",prop:"longswordMastery",row:6,column:1,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:c,level:6},{skill:m,level:2}],values:{attack:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Captain Allon's secret training improves your swordsmanship, increasing your weapon attack\n    by <span>[attack]%</span> when you have a longsword equipped.\n  "},v={name:"Typhoon Slash",attr:"typhoon-slash",prop:"typhoonSlash",row:3,column:2,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",spirit:50,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[{skill:d,level:3}],values:{damage:[147,147,158,169,180,191,202,213,224,235,246]},description:"\n    Spin with your weapon out, dealing <span>[damage]%</span> damage <span>5</span> times\n    to <span>8</span> enemies within <span>3</span> m. Each hit pulls them in <span>1</span> m.\n    During the attack, press a direction key to move <span>4.5</span> m.\n    Consumes <span>50</span> spirit.\n  "},k={name:"IronShield",attr:"iron-shield",prop:"ironShield",row:3,column:3,minLevel:0,maxLevel:10,weaponRequired:"Off-hand Shield",levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{reduction:[25,25,30,35,40,45,50,55,60,65,70]},description:"\n    Adopt a defensive stance with your shield, reducing incoming damage by <span>[reduction]%</span>.\n    The skill lasts while the skill key is held down, although powerful attacks may break the skill early.\n    This skill can cancel other skills.\n    In PvP zones, the damage reduction is halved.\n  "},y={name:"Shield Toss",attr:"shield-toss",prop:"shieldToss",row:4,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Off-hand Shield",spirit:12,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:k,level:4},{skill:v,level:4}],values:{damage:[60,60,64,68,72,76,80,84,88,92,96],reduction:[1,1,1.2,2.2,2.2,3.2,4,4.2,5.2,5.8,6.4]},description:"\n    Toss your shield <span>7.5</span> m forward like a boomerang,\n    dealing <span>[damage]%</span> damage <span>2</span> times\n    to <span>8</span> enemies and reducing their defense\n    by <span>[reduction]%</span> for <span>12</span> sec.\n    Consumes <span>16</span> spirit.\n  "},f={name:"Shield Mastery",attr:"shield-mastery",prop:"shieldMastery",row:5,column:3,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:k,level:4}],values:{evasion:[9,9,12,15,18,21,24,27,30,33,36],perfectGuard:[5,5,6,7,8,9,10,11,12,13,14],increaseChance:[40,40,44,48,52,56,60,64,68,72,76],damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Your fervent desire to protect others increases your shield mastery,\n    increasing critical evasion by <span>[evasion]</span> and perfect guard chance\n    by <span>[perfectGuard]%</span> when you have a shield equipped when using Iron Shield.\n    Blocking an attack grants a <span>[increaseChance]%</span> chance to increase your damage\n    by <span>[damage]%</span> for <span>10</span> sec.\n  "},w={name:"Shield Booster",attr:"shield-booster",prop:"shieldBooster",row:6,column:3,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Off-hand Shield",cooldown:16,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:f,level:2}],values:{damage:[190,190,204,218,232,246,260,274,288,302,316],increase:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Lift <span>5</span> enemies up to <span>2</span> m in front of you with your shield,\n    dealing <span>[damage]%</span> damage.\n    Increases physical and magic resistance by <span>450</span>.\n    For <span>10</span> sec, has a chance to trigger counter when hit.\n    Also increases your counterattack damage\n    by an additional <span>[increase]%</span>.\n  "},b={name:"Shield Wall",attr:"shield-wall",prop:"shieldWall",row:3,column:4,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Shield",cooldown:45,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{resistance:[90,90,120,150,180,210,240,270,300,330,360]},description:"\n    Create a <span>3</span> m holy field around you for <span>10</span> sec,\n    increasing the physical resistance and magic resistance of <span>10</span> allies,\n    including yourself, by <span>[resistance]</span>.\n  "},R={name:"Warhorn",attr:"warhorn",prop:"warhorn",row:4,column:4,minLevel:0,maxLevel:10,spirit:40,cooldown:30,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:b,level:3}],values:{allies:[4,4,5,6,7,8,9,10,11,12,13],increase:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Shout to raise morale, increasing the physical attack and magic attack of <span>[allies]%</span>\n    within <span>3</span> m, plus yourself, by <span>[increase]%</span> for <span>10</span> sec.\n    Consumes <span>40</span> spirit.\n  "},L={name:"Bulwark",attr:"bulwark",prop:"bulwark",row:5,column:4,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Shield",cooldown:[130,130,120,110,100,90,80,70,60,55,50],levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:b,level:4},{skill:R,level:3}],values:{allies:[4,4,5,6,7,8,9,10,11,12,13]},description:"\n    Create a protective barrier for <span>3</span> sec to make <span>[allies]</span> allies,\n    including yourself, invulnerable to enemy attacks.\n    Some attacks cannot be blocked.\n  "},q={name:"Defender of the Faith",attr:"defender-of-the-faith",prop:"defenderOfTheFaith",row:6,column:4,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Shield",cooldown:[130,130,120,110,100,90,80,70,60,55,50],levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:b,level:4},{skill:R,level:3}],values:{allies:[4,4,5,6,7,8,9,10,11,12,13]},description:"\n    Dash to the nearest ally within <span>8</span> m to create a protective barrier that lasts\n    <span>3</span> sec and makes <span>[allies]</span> allies, including yourself, invulnerable to enemy attacks.\n    Some attacks cannot be blocked.\n  "},S=Object.freeze({IronDefense:o,ShieldCharge:p,CrossCut:c,TornadoSlash:d,DivineStrike:h,StingingFlurry:u,DrillThrust:m,LongswordMastery:g,TyphoonSlash:v,IronShield:k,ShieldToss:y,ShieldMastery:f,ShieldBooster:w,ShieldWall:b,Warhorn:R,Bulwark:L,DefenderOfTheFaith:q}),C=function(){function C(e){a(this,e),this.editable=!1,this.extras=!1,this.bulwark=L.minLevel,this.crossCut=c.minLevel,this.defenderOfTheFaith=q.minLevel,this.divineStrike=h.minLevel,this.drillThrust=m.minLevel,this.ironDefense=o.minLevel,this.ironShield=k.minLevel,this.longswordMastery=g.minLevel,this.shieldBooster=w.minLevel,this.shieldCharge=p.minLevel,this.shieldMastery=f.minLevel,this.shieldToss=y.minLevel,this.shieldWall=b.minLevel,this.stingingFlurry=u.minLevel,this.tornadoSlash=d.minLevel,this.typhoonSlash=v.minLevel,this.warhorn=R.minLevel,this.onSkillChanged=s(this,"skillchanged",7)}return C.prototype.componentWillLoad=function(){t(this,S)},C.prototype.getData=function(){return e(this,void 0,void 0,function(){return n(this,function(){return[2,l(this,S)]})})},C.prototype.levelChanged=function(e,n){this[e.prop]=n,t(this,S,e),this.emitChangeEvent()},C.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(l(this,S))},C.prototype.render=function(){return i("ms-chart",{msClass:"knight"},r(this,S,this.editable,this.extras))},Object.defineProperty(C,"originalStyleUrls",{get:function(){return{$:["knight.css"]}},enumerable:!0,configurable:!0}),Object.defineProperty(C,"watchers",{get:function(){return{extras:["emitChangeEvent"]}},enumerable:!0,configurable:!0}),Object.defineProperty(C,"style",{get:function(){return":host{display:block}"},enumerable:!0,configurable:!0}),C}();export{C as ms_knight};