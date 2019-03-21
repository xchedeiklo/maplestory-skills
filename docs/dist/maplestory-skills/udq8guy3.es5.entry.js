var __awaiter=this&&this.__awaiter||function(e,a,n,t){return new(n||(n=Promise))(function(s,r){function i(e){try{o(t.next(e))}catch(e){r(e)}}function l(e){try{o(t.throw(e))}catch(e){r(e)}}function o(e){e.done?s(e.value):new n(function(a){a(e.value)}).then(i,l)}o((t=t.apply(e,a||[])).next())})},__generator=this&&this.__generator||function(e,a){var n,t,s,r,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(s=2&r[0]?t.return:r[0]?t.throw||((s=t.return)&&s.call(t),0):t.next)&&!(s=s.call(t,r[1])).done)return s;switch(t=0,s&&(r=[2&r[0],s.value]),r[0]){case 0:case 1:s=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,t=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(s=(s=i.trys).length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){i.label=r[1];break}if(6===r[0]&&i.label<s[1]){i.label=s[1],s=r;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(r);break}s[2]&&i.ops.pop(),i.trys.pop();continue}r=a.call(e,i)}catch(e){r=[6,e],t=0}finally{n=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};MaplestorySkills.loadBundle("udq8guy3",["exports","./chunk-c1161754.js"],function(e,a){var n=window.MaplestorySkills.h,t={name:"Dark Aura",attr:"dark-aura",prop:"darkAura",row:1,column:3,minLevel:1,maxLevel:1,element:"Dark",passive:!0,description:"\n    Your latent dark power restores <span>10</span> spirit every second.\n    Dark Aura stacks on hit, up to once per second, up to <span>10</span> times total.\n    Each stack increases the amount restored by an additional <span>1</span> spirit.\n  "},s={name:"X Slash",attr:"x-slash",prop:"xSlash",row:1,column:4,minLevel:1,maxLevel:1,attackType:"Close Range / Physical",weaponRequired:"Two-handed Greatsword",description:"\n    Swing your greatsword in an X as you charge forward <span>4.5</span> m,\n    dealing <span>75%</span> damage <span>2</span> times to <span>5</span> enemies in your path.\n    This skill can cancel other skills.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  "},r={name:"Raging Slash",attr:"raging-slash",prop:"ragingSlash",row:1,column:1,minLevel:1,maxLevel:10,element:"Dark",attackType:"Close Range / Physical",weaponRequired:"Two-handed Greatsword",levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[56,56,59,62,65,68,71,74,77,80,83]},description:"\n    Swing your weapon to deal <span>[damage]%</span> dark damage\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The attack speed increases with each hit.\n    The third hit is a double strike, and when finished you start over from the beginning.\n    During the attack, press a direction key to move <span>0.6</span> m.\n  "},i={name:"Death Spin",attr:"death-spin",prop:"deathSpin",row:2,column:1,minLevel:1,maxLevel:10,element:"Dark",attackType:"Close Range / Physical",weaponRequired:"Two-handed Greatsword",spirit:4,levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[69,69,74,79,84,89,94,99,104,109,114]},description:"\n    Spin your greatsword, dealing <span>[damage]%</span> dark damage\n    to <span>8</span> enemies within <span>3</span> m.\n    During the attack, press a direction key to move <span>1.6</span> m.\n    The distance decreases to <span>1.2</span> m on your second spin and\n    to <span>0.8</span> m on your third and subsequent spins.\n    Consumes <span>4</span> spirit.\n  "},l={name:"Ground Breaker",attr:"ground-breaker",prop:"groundBreaker",row:3,column:1,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Two-handed Greatsword",spirit:40,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[{skill:r,level:4},{skill:i,level:3}],values:{damage:[218,218,233,248,263,278,293,308,323,338,353]},description:"\n    Old Ten's specialty move. Strike down your greatsword to deal <span>[damage]%</span> damage\n    to <span>8</span> enemies within <span>3</span> m and knock them back <span>1.5</span> m.\n    If Dark Aura activates, damage increases by <span>16%</span> per stack.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> spirit.\n  "},o={name:"Dark Might",attr:"dark-might",prop:"darkMight",row:6,column:1,minLevel:0,maxLevel:10,element:"Dark",cooldown:30,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:r,level:6},{skill:l,level:6}],values:{increase:[16,16,18,20,22,24,26,28,30,32,34]},description:"\n    Temporarily amplify Dark Aura to increase attack speed, physical attack, and magic attack by\n    <span>[increase]%</span> for <span>10</span> sec and restore <span>1</span> additional spirit on hit.\n    This skill can only be used by consuming Dark Aura at max stacks.\n  "},p={name:"Void Slash",attr:"void-slash",prop:"voidSlash",row:3,column:2,minLevel:0,maxLevel:10,element:"Dark",attackType:"Close Range / Physical",weaponRequired:"Two-handed Greatsword",spirit:24,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{firstDamage:[257,257,274,291,308,325,342,359,376,393,410],secondDamage:[97,97,103,109,115,121,127,133,139,145,151]},description:"\n    Swing your greatsword upward to deal <span>[firstDamage]%</span> dark damage\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n    Press the skill key again to trigger a <span>2-hit</span> combo.\n    The second part is two quick swings,\n    dealing <span>[secondDamage]%</span> dark damage <span>2</span> times\n    to <span>5</span> enemies up to <span>2</span> m in front of you.\n    On the first hit, press a direction key to move <span>4</span> m and attack.\n    On the second hit, the skill lasts while the skill key is held down.\n    You will be immune to knockback while this skill is active.\n    The first hit consumes <span>24</span> spirit and the second hit consumes <span>1</span> spirit.\n  "},u={name:"Dark Breaker",attr:"dark-breaker",prop:"darkBreaker",row:4,column:2,minLevel:0,maxLevel:10,element:"Dark",attackType:"Close Range / Physical",weaponRequired:"Two-handed Greatsword",levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:r,level:4},{skill:p,level:3}],values:{damage:[357,357,382,407,432,457,482,507,532,557,582],dot:[148,148,158,168,178,188,198,208,218,228,238]},description:"\n    Gather dark power into your greatsword and strike down with great force to\n    deal <span>[damage]%</span> dark damage\n    to <span>8</span> enemies within <span>3</span> m.\n    The impact area resonates with darkness for <span>5</span> sec,\n    dealing <span>[dot]%</span> dark damage\n    to <span>8</span> enemies in range every second.\n    This skill can only be used by consuming Dark Aura at max stacks.\n    You will be immune to knockback while this skill is active.\n  "},m={name:"Warrior's Instinct",attr:"warriors-instinct",prop:"warriorsInstinct",row:5,column:2,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:p,level:6},{skill:u,level:5}],values:{resistance:[15,15,20,25,30,35,40,45,50,55,60],piercing:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Surrender yourself to your natural combat instinct.\n    Increases physical resistance by <span>[resistance]</span> and\n    piercing by <span>[piercing]%</span>.\n  "},d={name:"Bloodlust",attr:"bloodlust",prop:"bloodlust",row:3,column:3,minLevel:0,maxLevel:10,element:"Dark",attackType:"Close Range / Physical",weaponRequired:"Two-handed Greatsword",cooldown:8,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:r,level:2}],values:{damage:[129,129,138,147,156,165,174,183,192,201,210],health:[7,7,11,15,19,23,27,31,35,39,43]},description:"\n    Thrust your darkened greatsword into <span>2</span> enemies up to <span>3</span> m in front of you,\n    then pull it out to deal <span>[damage]%</span> damage <span>2</span> times.\n    The stab attack is always a critical, and pulling the sword out steals health from the enemy,\n    restoring <span>[health]%</span> of your max health.\n    In PvP zones, the amount restored is halved.\n  "},c={name:"Adrenaline Rush",attr:"adrenaline-rush",prop:"adrenalineRush",row:4,column:3,minLevel:0,maxLevel:10,element:"Dark",passive:!0,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:d,level:4}],values:{stage1:[1,1,2,2,2,3,3,3,4,4,4],stage2:[2,2,2,3,3,3,4,4,4,5,5],stage3:[3,3,3,3,4,4,4,5,5,5,6]},description:"\n    Your Dark Aura goes crazy as you're pushed into a corner, increasing the amount of spirit restored\n    by <span>[stage1]</span> when your health is at <span>60%</span> or less,\n    by <span>[stage2]</span> at <span>45%</span> or less,\n    and by <span>[stage3]</span> at <span>30%</span> or less.\n  "},h={name:"Blood Price",attr:"blood-price",prop:"bloodPrice",row:5,column:3,minLevel:0,maxLevel:10,element:"Dark",cooldown:60,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:d,level:6},{skill:c,level:2}],values:{damage:[5,5,6,7,8,9,10,11,12,13,14]},description:"\n    Darkness fuels you, increasing your damage by <span>[damage]%</span> but\n    depleting your health by <span>1%</span> on hit for <span>30</span> sec.\n    This effect will stop consuming health when you get to <span>25%</span> health.\n  "},k={name:"Inhuman Endurance",attr:"inhuman-endurance",prop:"inhumanEndurance",row:6,column:3,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:c,level:3},{skill:h,level:1}],values:{resistance:[100,100,150,200,250,300,350,400,450,500,550]},description:"\n    Dire conditions strengthen your resolve. Your physical resistance and magic resistance increase\n    by <span>[resistance]</span> when your health is less than <span>30%</span>.\n  "},g={name:"Greatsword Mastery",attr:"greatsword-mastery",prop:"greatswordMastery",row:3,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],skillRequirements:[{skill:r,level:3}],values:{attack:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Ten's lessons on asceticism increase your skill with a greatsword.\n    Your weapon attack increases by <span>[attack]%</span> when you have a greatsword equipped.\n  "},v={name:"Intimidation",attr:"intimidation",prop:"intimidation",row:4,column:4,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",cooldown:16,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:g,level:4}],values:{damage:[121,121,129,137,145,153,161,169,177,185,193],attack:[9,9,12,15,18,21,24,27,30,33,36],movement:[9,9,12,15,18,21,24,27,30,33,36]},description:"\n    Overwhelm enemies with a show of force, dealing <span>[damage]%</span> damage\n    to <span>5</span> enemies within <span>3</span> m.\n    Enemies lost the will to fight, reducing their physical attack and magic attack by <span>[attack]%</span>\n    and their movement speed and jump power by <span>[movement]%</span> for <span>4</span> sec.\n    When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill.\n    Some powerful enemies are immune.\n  "},y={name:"Deep Wounds",attr:"deep-wounds",prop:"deepWounds",row:5,column:4,minLevel:0,maxLevel:10,passive:!0,attackType:"Physical",levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:g,level:6},{skill:v,level:4}],values:{damage:[4,4,7,10,13,16,19,22,25,28,31]},description:"\n    Critical attacks inflicted with a greatsword make the enemy bleed,\n    dealing <span>[damage]%</span> damage every second for <span>10</span> sec.\n  "},w={name:"Earthquake",attr:"earthquake",prop:"earthquake",row:6,column:4,minLevel:0,maxLevel:10,attackType:"Physical",weaponRequired:"Two-handed Greatsword",cooldown:60,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:y,level:2}],values:{damage:[298,298,319,340,361,382,403,424,445,466,487]},description:"\n    Drive your greatsword into the ground, creating an earthquake <span>9</span> tiles around you for <span>5</span> sec.\n    Enemies caught in the quake are stunned and take <span>[damage]%</span> damage every second.\n  "},b=Object.freeze({DarkAura:t,XSlash:s,RagingSlash:r,DeathSpin:i,GroundBreaker:l,DarkMight:o,VoidSlash:p,DarkBreaker:u,WarriorsInstinct:m,Bloodlust:d,AdrenalineRush:c,BloodPrice:h,InhumanEndurance:k,GreatswordMastery:g,Intimidation:v,DeepWounds:y,Earthquake:w}),f=function(){function e(){this.editable=!1,this.extras=!1,this.adrenalineRush=c.minLevel,this.bloodPrice=h.minLevel,this.bloodlust=d.minLevel,this.darkAura=t.minLevel,this.darkBreaker=u.minLevel,this.darkMight=o.minLevel,this.deathSpin=i.minLevel,this.deepWounds=y.minLevel,this.earthquake=w.minLevel,this.greatswordMastery=g.minLevel,this.groundBreaker=l.minLevel,this.inhumanEndurance=k.minLevel,this.intimidation=v.minLevel,this.ragingSlash=r.minLevel,this.voidSlash=p.minLevel,this.warriorsInstinct=m.minLevel,this.xSlash=s.minLevel}return e.prototype.componentWillLoad=function(){a.processSkills(this,b)},e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,a.toSkillChangeEventObject(this,b)]})})},e.prototype.levelChanged=function(e,n){this[e.prop]=n,a.processSkills(this,b,e),this.emitChangeEvent()},e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(a.toSkillChangeEventObject(this,b))},e.prototype.render=function(){return n("ms-chart",{msClass:"berserker"},a.renderLevelControls(this,b,this.editable,this.extras))},Object.defineProperty(e,"is",{get:function(){return"ms-berserker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{adrenalineRush:{type:Number,attr:"adrenaline-rush",mutable:!0},bloodlust:{type:Number,attr:"bloodlust",mutable:!0},bloodPrice:{type:Number,attr:"blood-price",mutable:!0},darkAura:{type:Number,attr:"dark-aura",mutable:!0},darkBreaker:{type:Number,attr:"dark-breaker",mutable:!0},darkMight:{type:Number,attr:"dark-might",mutable:!0},deathSpin:{type:Number,attr:"death-spin",mutable:!0},deepWounds:{type:Number,attr:"deep-wounds",mutable:!0},earthquake:{type:Number,attr:"earthquake",mutable:!0},editable:{type:Boolean,attr:"editable",reflectToAttr:!0},extras:{type:Boolean,attr:"extras",watchCallbacks:["emitChangeEvent"]},getData:{method:!0},greatswordMastery:{type:Number,attr:"greatsword-mastery",mutable:!0},groundBreaker:{type:Number,attr:"ground-breaker",mutable:!0},inhumanEndurance:{type:Number,attr:"inhuman-endurance",mutable:!0},intimidation:{type:Number,attr:"intimidation",mutable:!0},ragingSlash:{type:Number,attr:"raging-slash",mutable:!0},skills:{state:!0},voidSlash:{type:Number,attr:"void-slash",mutable:!0},warriorsInstinct:{type:Number,attr:"warriors-instinct",mutable:!0},xSlash:{type:Number,attr:"x-slash",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"skillchanged",method:"onSkillChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:!0,configurable:!0}),e}();e.MsBerserker=f,Object.defineProperty(e,"__esModule",{value:!0})});