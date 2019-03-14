var __awaiter=this&&this.__awaiter||function(e,n,a,t){return new(a||(a=Promise))(function(s,i){function l(e){try{r(t.next(e))}catch(e){i(e)}}function o(e){try{r(t.throw(e))}catch(e){i(e)}}function r(e){e.done?s(e.value):new a(function(n){n(e.value)}).then(l,o)}r((t=t.apply(e,n||[])).next())})},__generator=this&&this.__generator||function(e,n){var a,t,s,i,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,t&&(s=2&i[0]?t.return:i[0]?t.throw||((s=t.return)&&s.call(t),0):t.next)&&!(s=s.call(t,i[1])).done)return s;switch(t=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,t=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(s=(s=l.trys).length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){l.label=i[1];break}if(6===i[0]&&l.label<s[1]){l.label=s[1],s=i;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(i);break}s[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],t=0}finally{a=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};MaplestorySkills.loadBundle("mytao0hl",["exports","./chunk-652046fd.js"],function(e,n){var a=window.MaplestorySkills.h,t={name:"Reload",attr:"reload",prop:"reload",row:1,column:3,minLevel:1,maxLevel:1,weaponRequired:"Two-handed Cannon",sp:!0,description:"\n    Rotate the cannon's ammo cannisters <span>2</span> times\n    in <span>0.25</span> sec intervals to maintain them,\n    restoring <span>50</span> spirit each time,\n    for a total of <span>100</span> spirit.\n  "},s={name:"Jet Boots",attr:"jet-boots",prop:"jetBoots",row:1,column:4,minLevel:1,maxLevel:1,attackType:"Long Range / Physical",description:"\n    Propel <span>6</span> m forward with your jet boots,\n    leaving behind a shockwave that deals <span>120%</span> damage\n    to <span>5</span> enemies within <span>1.5</span> m.\n    Consumes <span>60</span> stamina.\n  "},i={name:"Bullet Spray",attr:"bullet-spray",prop:"bulletSpray",row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[39,39,42,45,48,51,54,57,60,63,66]},description:"\n    Fire wildly as the cannon's barrel spins, dealing <span>[damage]%</span> damage\n    <span>4</span> times to the closest enemy up to <span>8</span> m in front of you.\n    The bullet cannot pierce multiple enemies.\n    Press the skill key again to trigger a <span>2-hit</span> combo.\n    On the second hit, the skill lasts while the skill key is held down.\n  "},l={name:"Gatling Fire",attr:"gatling-fire",prop:"gatlingFire",row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:5,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[44,44,48,52,56,60,64,68,72,76,80]},description:"\n    Fire wildly as the cannon's barrel spins, dealing <span>[damage]%</span> damage\n    <span>3</span> times to <span>5</span> enemies up to <span>8</span> m in front of you.\n    This skill uses a special piercing bullet to damage all targets in range.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The skill continues to alternate between the second and third hit while the skill key is held down.\n    Consumes <span>5</span> spirit.\n  "},o={name:"Lock On",attr:"lock-on",prop:"lockOn",row:3,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:15,cooldown:12,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[{skill:i,level:4},{skill:l,level:3}],values:{damage:[446,446,477,508,539,570,601,632,663,694,725]},description:"\n    Take a shooting stance, aiming at the closest target up to <span>8</span> m in\n    front of you and shooting a special bullet that deals <span>[damage]%</span> damage,\n    pierces the target up to <span>8</span> times, and can damage enemies behind the target.\n    Consumes <span>15</span> spirit.\n  "},r={name:"Advanced Bullets",attr:"advanced-bullets",prop:"advancedBullets",row:5,column:1,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:l,level:5},{skill:o,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Upgrade to high performance bullets. Increases the damage of\n    Bullet Spray, Gatling Fire, and Lock-on by <span>[damage]%</span>.\n  "},p={name:"Magnetic Bomb",attr:"magnetic-bomb",prop:"magneticBomb",row:3,column:2,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:20,cooldown:10,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:i,level:2}],values:{damage:[165,165,177,189,201,213,225,237,249,261,273],movement:[3,3,6,9,12,15,18,21,24,27,30]},description:"\n    Launch a magnetic bomb at the closest enemy up to <span>9</span> m in front of you.\n    The bomb attracts <span>8</span> enemies within <span>3</span> m every second,\n    dealing <span>[damage]%</span> electric damage and decreasing\n    their movement speed by <span>[movement]%</span>.\n    Consumes <span>20</span> spirit.\n  "},m={name:"Electric Blast",attr:"electric-blast",prop:"electricBlast",row:4,column:2,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",cooldown:16,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:p,level:4}],values:{stage1:[455,455,487,519,551,583,615,647,679,711,743],stage2:[455,455,487,519,551,583,615,647,679,711,743],stage3:[455,455,487,519,551,583,615,647,679,711,743]},description:"\n    Activate the compact particle accelerator on your cannon to gather electricity and shoot,\n    dealing <span>[stage1]%</span> electric damage\n    to <span>3</span> enemies up to <span>9</span> m in front of you and knocking them back <span>1.5</span> m.\n    After starting to gather electricity, hold the skill key down for <span>0.5</span> sec to enhance the effect to <span>Stage 2</span> and\n    deal <span>[stage2]%</span> electric damage <span>2</span> times\n    to <span>5</span> enemies up to <span>9</span> m in front of you and knock them back <span>3</span> m.\n    Hold the skill key down for <span>0.5</span> sec at <span>Stage 2</span> to enhance the effect to <span>Stage 3</span> and\n    deal <span>[stage3]%</span> electric damage <span>3</span> times\n    to <span>8</span> enemies up to <span>9</span> m in front of you and knock them back <span>4.5</span> m.\n    You will fire automatically when the skill key is held down for <span>3</span> sec at <span>Stage 3</span>.\n  "},c={name:"Advanced Pulse Weapons",attr:"advanced-pulse-weapons",prop:"advancedPulseWeapons",row:5,column:2,minLevel:0,maxLevel:10,element:"Electric",passive:!0,attackType:"Physical",levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:m,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Upgrade your cannon's magnetic field engine to increase its output.\n    Increase the damage of Magnetic Bomb and Electric Blast by <span>[damage]%</span>.\n  "},u={name:"BlastChargeKit",attr:"blast-charge-kit",prop:"blastChargeKit",row:6,column:2,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:m,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Equip your cannon with a blast charge kit to optimize Electric Blast's output power and efficiency.\n    Electric Blast can be cast repeatedly without cooling down in between, at the cost of lowered damage and spirit.\n    Blast Charge Kit increases the rapid-firing Electric Blast damage by <span>[damage]%</span>.\n  "},d={name:"Rocket Launcher",attr:"rocket-launcher",prop:"rocketLauncher",row:3,column:3,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:20,cooldown:12,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[152,152,163,174,185,196,207,218,229,240,251],aoeDamage:[167,167,175,189,200,211,222,233,244,255,266],burnDuration:[3,3,4,5,6,7,8,9,10,10,10],burnDamage:[51,51,54,57,60,63,66,69,72,75,78]},description:"\n    Fire a missile at the closest enemy up to <span>9</span> m in front of you.\n    The rocket deals <span>[damage]%</span> fire damage to the target,\n    then explodes to deal <span>[aoeDamage]%</span> fire damage\n    to <span>8</span> enemies within <span>3</span> m.\n    The area of the explosion burns for <span>[burnDuration]</span> sec,\n    dealing <span>[burnDamage]%</span> fire damage every second to <span>8</span> enemies.\n    Consumes <span>20</span> spirit.\n  "},h={name:"Homing Missiles",attr:"homing-missiles",prop:"homingMissiles",row:4,column:3,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:15,cooldown:10,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:d,level:4}],values:{damage:[88,88,94,100,106,112,118,124,130,136,142],missiles:[3,3,3,3,4,4,4,5,5,5,5]},description:"\n    Fire <span>[missiles]</span> homing missiles that each deal\n    <span>[damage]%</span> fire damage to enemies within <span>9</span> m.\n    Consumes <span>15</span> spirit.\n  "},g={name:"M-Bomb",attr:"m-bomb",prop:"mBomb",row:5,column:3,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Physical",spirit:15,cooldown:30,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:h,level:5}],values:{damage:[174,174,186,198,210,222,234,246,258,270,282],additionalDamage:[376,376,402,428,454,480,506,532,558,584,610]},description:"\n    Call in a high-tech bomb to drop <span>7.5</span> m in front of you, which deals\n    <span>[damage]%</span> fire damage to <span>8</span> enemies within <span>3</span> m.\n    A second blast occurs after <span>0.5</span> sec, dealing <span>[additionalDamage]%</span>\n    fire damage to <span>8</span> enemies within <span>6</span> m.\n    Consumes <span>15</span> spirit.\n  "},b={name:"Advanced Missiles",attr:"advanced-missiles",prop:"advancedMissiles",row:6,column:3,minLevel:0,maxLevel:10,element:"Fire",passive:!0,attackType:"Physical",levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:h,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Upgrade to high performance missiles.\n    Increases the damage of Rocket Launcher, Homing Missiles, and M-Bomb by <span>[damage]%</span>.\n  "},v={name:"Stun Grenades",attr:"stun-grenades",prop:"stunGrenades",row:3,column:4,minLevel:0,maxLevel:10,element:"Fire",attackType:"Physical",spirit:6,cooldown:5,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{damage:[133,133,143,153,163,173,183,193,203,213,223],range:[1.5,1.5,1.5,1.5,2,2,2,3,3,3,3],stun:[64,64,67,70,73,76,79,82,85,88,91]},description:"\n    Toss two grenades <span>3</span> m in front of you that explode after <span>0.5</span> sec,\n    dealing <span>[damage]%</span> fire damage to <span>5</span> enemies within\n    <span>[range]</span> m and has a <span>[stun]%</span> chance to stun.\n    Consumes <span>6</span> spirit.\n  "},y={name:"Suborbital Bombardment",attr:"suborbital-bombardment",prop:"suborbitalBombardment",row:4,column:4,minLevel:0,maxLevel:10,element:"Electric",attackType:"Physical",spirit:20,cooldown:30,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:v,level:4}],values:{damage:[64,64,67,70,73,76,79,82,85,88,91],duration:[10,10,10,10,11,11,11,12,12,12,12],additionalDamage:[22,22,23,24,25,26,27,28,29,30,31]},description:"\n    Summon a satellite to fire lasers at the closest enemy within <span>8</span> m,\n    dealing <span>[damage]%</span> electric damage\n    to <span>5</span> enemies within <span>2.25</span> m of your initial target\n    every sec for <span>[duration]</span> sec.\n    If you have the Pulse Energy upgrade, the enhanced laser deals\n    an additional <span>[additionalDamage]%</span> electric damage.\n    Consumes <span>20</span> spirit.\n  "},f={name:"MedKit",attr:"med-kit",prop:"medKit",row:6,column:4,minLevel:0,maxLevel:10,attackType:"Physical",cooldown:20,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],values:{health:[400,400,800,1200,1600,2e3,2400,2800,3200,3600,4e3]},description:"\n    Drop a first aid kit that you or an ally can pick up after <span>1</span>\n    sec to instantly restore <span>[health]</span> health.\n  "},k=Object.freeze({Reload:t,JetBoots:s,BulletSpray:i,GatlingFire:l,LockOn:o,AdvancedBullets:r,MagneticBomb:p,ElectricBlast:m,AdvancedPulseWeapons:c,BlastChargeKit:u,RocketLauncher:d,HomingMissiles:h,MBomb:g,AdvancedMissiles:b,StunGrenades:v,SuborbitalBombardment:y,MedKit:f}),w=function(){function e(){this.editable=!1,this.extras=!1,this.advancedBullets=r.minLevel,this.advancedMissiles=b.minLevel,this.advancedPulseWeapons=c.minLevel,this.blastChargeKit=u.minLevel,this.bulletSpray=i.minLevel,this.electricBlast=m.minLevel,this.gatlingFire=l.minLevel,this.homingMissiles=h.minLevel,this.jetBoots=s.minLevel,this.lockOn=o.minLevel,this.magneticBomb=p.minLevel,this.mBomb=g.minLevel,this.medKit=f.minLevel,this.reload=t.minLevel,this.rocketLauncher=d.minLevel,this.stunGrenades=v.minLevel,this.suborbitalBombardment=y.minLevel}return e.prototype.componentWillLoad=function(){n.processSkills(this,k)},e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,n.toSkillChangeEventObject(this,k)]})})},e.prototype.levelChanged=function(e,a){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return this[e.prop]=a,n.processSkills(this,k),this.emitChangeEvent(),[2]})})},e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(n.toSkillChangeEventObject(this,k))},e.prototype.render=function(){return a("ms-chart",{msClass:"heavy-gunner"},n.renderLevelControls(this,k,this.editable,this.extras))},Object.defineProperty(e,"is",{get:function(){return"ms-heavy-gunner"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{advancedBullets:{type:Number,attr:"advanced-bullets",mutable:!0},advancedMissiles:{type:Number,attr:"advanced-missiles",mutable:!0},advancedPulseWeapons:{type:Number,attr:"advanced-pulse-weapons",mutable:!0},blastChargeKit:{type:Number,attr:"blast-charge-kit",mutable:!0},bulletSpray:{type:Number,attr:"bullet-spray",mutable:!0},editable:{type:Boolean,attr:"editable",reflectToAttr:!0},electricBlast:{type:Number,attr:"electric-blast",mutable:!0},extras:{type:Boolean,attr:"extras",watchCallbacks:["emitChangeEvent"]},gatlingFire:{type:Number,attr:"gatling-fire",mutable:!0},getData:{method:!0},homingMissiles:{type:Number,attr:"homing-missiles",mutable:!0},jetBoots:{type:Number,attr:"jet-boots",mutable:!0},lockOn:{type:Number,attr:"lock-on",mutable:!0},magneticBomb:{type:Number,attr:"magnetic-bomb",mutable:!0},mBomb:{type:Number,attr:"m-bomb",mutable:!0},medKit:{type:Number,attr:"med-kit",mutable:!0},reload:{type:Number,attr:"reload",mutable:!0},rocketLauncher:{type:Number,attr:"rocket-launcher",mutable:!0},skills:{state:!0},stunGrenades:{type:Number,attr:"stun-grenades",mutable:!0},suborbitalBombardment:{type:Number,attr:"suborbital-bombardment",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"skillchanged",method:"onSkillChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:!0,configurable:!0}),e}();e.MsHeavyGunner=w,Object.defineProperty(e,"__esModule",{value:!0})});