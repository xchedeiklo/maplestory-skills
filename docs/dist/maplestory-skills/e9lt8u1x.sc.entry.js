const e=window.MaplestorySkills.h;import{a,b as n,c as t}from"./chunk-c587a3f2.js";const s={name:"Mantra Array",attr:"mantra-array",prop:"mantraArray",row:1,column:3,minLevel:1,maxLevel:1,sp:!0,description:"\n    Focus the mysterious animus energy within you to create Mantra Cores (orb energy) and\n    restore <span>12</span> spirit. You can create up to <span>4</span> Mantra Cores,\n    which can be activated consecutively as long as you continue to hold the key.\n    While you are creating Mantra Cores, you can control a greater amount of energy\n    and enhance some skills prior to activation.\n  "},r={name:"Illusion",attr:"illusion",prop:"illusion",row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Consume <span>40</span> stamina to release a mysterious aura from your body\n    and rush <span>4.5</span> m, leaving and afterimage in your wake.\n    Gain <span>50</span> evasion while moving.\n    The skill can be both canceled and triggered immediately while using other skills.\n    You are immune to knockback while this skill is active.\n  "},i={name:"Soaring Orb",attr:"soaring-orb",prop:"soaringOrb",row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[38,38,41,44,47,50,53,56,59,62,65],aoe:[170,170,182,194,206,218,230,242,254,266,278]},description:"\n    Gather energy from your surroundings to form and launch an orb at the nearest enemy\n    up to <span>7.5</span> m in front of you, dealing <span>[damage]%</span> damage.\n    Keep pressing the key to trigger a 3-hit combo.\n    The third strike launches an energy orb that explodes upon collision,\n    dealing <span>[aoe]%</span> damage to <span>5</span> enemies within a <span>2.25</span> m radius.\n  "},o={name:"Radiant Salvo",attr:"radiant-salvo",prop:"radiantSalvo",row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:3,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[58,58,62,66,70,74,78,82,86,90,94]},description:"\n    Concentrate life energy in the palms of your hands, then launch a salvo of orbs at the nearest enemy\n    within <span>7.5</span> m, dealing <span>[damage]%</span> damage <span>4</span> times.\n    Each orb that collides with an enemy ricochets <span>4</span> times\n    onto other enemies within a <span>3</span> m radius, dealing <span>[damage]%</span> damage.\n    Energy orbs do not damage the same target twice.\n    Consumes <span>3</span> spirit.\n  "},l={name:"Expansion Blast",attr:"expansion-blast",prop:"expansionBlast",row:3,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:4,cooldown:8,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:i,level:2},{skill:o,level:2}],values:{damage:[625,625,669,713,757,801,845,889,933,977,1021]},description:"\n    Condense the energy of Narubashan into a powerful,\n    one-meter-wide electric energy orb and shoot it <span>7.5</span> m forward,\n    dealing <span>[damage]%</span> damage to up to <span>8</span> enemies in its path.\n    The orb also shocks targets, dealing an additional <span>20%</span> electric damage every sec for <span>3</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>4</span> spirit.\n  "},p={name:"Flash Strike",attr:"flash-strike",prop:"flashStrike",row:4,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:6,cooldown:15,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:l,level:5}],values:{damage:[688,688,736,784,832,880,928,976,1024,1072,1120]},description:"\n    Gather light energy in your hands and fire a beam with energy force to push you back <span>1.5</span> m.\n    The light beam deals <span>[damage]%</span> damage to up\n    to <span>8</span> enemies up to <span>10.5</span> m in front of you.\n    Consumes <span>6</span> spirit.\n  "},m={name:"Shooting Star",attr:"shooting-star",prop:"shootingStar",row:5,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:4,cooldown:8,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:o,level:6},{skill:p,level:4}],values:{damage:[242,242,259,276,293,310,327,344,361,378,395]},description:"\n    Channel the strength of the animus to form <span>3</span> orbs infused with the\n    celestral energy and launch them at enemies up to <span>8</span> m in front of you.\n    The orbs will explode upon collision, spreading celestral energy over the area and dealing\n    <span>[damage]%</span> damage to up to <span>5</span> enemies within a <span>2.25</span> m radius.\n    Skill effects are enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>4</span> spirit.\n  "},u={name:"Concussion Orb",attr:"concussion-orb",prop:"concussionOrb",row:6,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:i,level:8}],values:{damage:[179,179,191,203,215,227,239,251,263,275,287]},description:"\n    Gather energy from your surroundings to form and launch an orb\n    at the nearest enemy up to <span>7.5</span> m in front of you.\n    The energy orb explodes upon collision, dealing <span>[damage]%</span> damage\n    to <span>5</span> enemies within a <span>2.25</span> m radius.\n    Keep pressing the trigger for a 2-hit combo.\n  "},h={name:"Raging Tempest",attr:"raging-tempest",prop:"ragingTempest",row:3,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",cooldown:15,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],skillRequirements:[{skill:i,level:4}],values:{dot:[23,23,25,27,29,31,33,35,37,39,41],additionalDamage:[68,68,72,76,80,84,88,92,96,100,104],reduction:[1,1,1,1,2,2,3,3,4,4,4]},description:"\n    Shift the flow of the atmosphere to create a whirlwind <span>6</span> m in front of you.\n    The whirlwind rages every <span>0.2</span> sec for a total of <span>4</span> times,\n    dealing <span>[dot]%</span> damage to up to <span>8</span> enemies\n    in a <span>3</span> m radius and gathering them at its center.\n    After <span>1</span> sec, the dence energy in the eye of the whirlwind explodes,\n    dealing <span>[additionalDamage]%</span> damage to up to <span>8</span> enemies within a <span>3</span> m radius\n    and decreasing their accuracy and evasion by <span>[reduction]</span>.\n  "},d={name:"Energy Surge",attr:"energy-surge",prop:"energySurge",row:4,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:5,cooldown:16,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:h,level:3}],values:{damage:[308,308,330,352,374,396,418,440,462,484,506],stun:[.3,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2]},description:"\n    Stir up earth energy, driving it toward the nearest enemy up to\n    <span>8</span> m in front of you and forcing the ground upward,\n    dealing <span>[damage]%</span> damage to up to <span>8</span> enemies within a <span>2.25</span> m radius.\n    The massive quake will stun targets for <span>[stun]</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>5</span> spirit.\n  "},c={name:"Static Flash",attr:"static-flash",prop:"staticFlash",row:5,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",spirit:15,cooldown:10,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:h,level:6},{skill:d,level:2}],values:{damage:[44,44,47,50,53,56,59,62,65,68,71],reduction:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Reverse the flow of nature's pure energy within a <span>7.5</span> m radius,\n    exhausting the vitality of up to <span>8</span> enemies within range,\n    dealing <span>[damage]%</span> damage,\n    and reducing both defense and movement speed by <span>[reduction]%</span> for <span>10</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>15</span> spirit.\n  "},g={name:"Light Barrier",attr:"light-barrier",prop:"lightBarrier",row:3,column:3,minLevel:0,maxLevel:10,spirit:12,cooldown:30,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[10,10,13,16,19,22,25,28,31,34,37]},description:"\n    Harness your animus energy to forge a shield that lasts for <span>4</span> sec\n    and absorbs damage equivalent to <span>[damage]%</span> of your max health.\n    This shield does not stack with other protective shield effects.\n    Consumes all Mantra Cores.\n    Skill effects are enhanced in proportion to number of Mantra Cores consumed.\n    Consumes <span>12</span> spirit.\n  "},v={name:"Healing Bond",attr:"healing-bond",prop:"healingBond",row:4,column:3,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",spirit:12,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:g,level:4}],values:{health:[85,85,90,95,100,105,110,115,120,125,130]},description:"\n    Restore your health and the health of <span>4</span> allies within a <span>3</span> m radius\n    by <span>[health]%</span> of your magic attack by harnessing nature's pure energy.\n    Consumes all Mantra Cores.\n    Skill effects are enhanced in proportion to number of Mantra Cores consumed.\n    Consumes <span>12</span> spirit.\n  "},y={name:"Fount of Renewal",attr:"fount-of-renewal",prop:"fountOfRenewal",row:6,column:3,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",cooldown:30,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:v,level:4}],values:{health:[300,300,321,342,363,384,405,426,447,468,489],resistance:[200,200,213,226,239,252,265,278,291,304,317],healingBond:[4,4,8,12,16,20,24,28,32,36,40]},description:"\n    Gather a field of concentrated life force <span>6</span> m ahead of you\n    with a radius of <span>2.25</span> m, lasting <span>3</span> sec.\n    This field restores the health of up to <span>8</span> allies within range by <span>[health]%</span>\n    of your magic attack and increases physical and magic resistance by <span>[resistance]</span>.\n    Increases the potency of Healing Bond by <span>[healingBond]%</span>.\n    While you are within the Fount of Renewal, you are immune to knockback from standard attacks.\n  "},b={name:"Orb Mastery",attr:"orb-mastery",prop:"orbMastery",row:3,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],values:{attack:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Harmonize more effectively with your Mantra Orbs thanks to your valuable lessons from Guidance.\n    Increase the strength of your weapon attack by <span>[attack]%</span> when you have an orb equipped.\n  "},f={name:"Narubashan Unleashed",attr:"narubashan-unleashed",prop:"narubashanUnleashed",row:5,column:4,minLevel:0,maxLevel:10,cooldown:60,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:b,level:4}],values:{interval:[4,4,3.5,3,2.5,2,1.5,1,.5,.5,.5],totalTime:[20,20,20,20,20,20,20,20,20,21,22]},description:"\n    Unleash the incredible power of Narubashan as explosive energy courses through your veins.\n    This energy automatically forms into Mantra Cores every <span>[interval]</span> sec for <span>[totalTime]</span> sec.\n    No more than <span>4</span> Mantra Cores can be created.\n  "},w={name:"Animus Focus",attr:"animus-focus",prop:"animusFocus",row:6,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:b,level:6},{skill:f,level:3}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12],recovery:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Focus the strength of animus within yourself and amplify the Mantra Core's energy.\n    Increases the damage of Expansion Blast, Energy Surge, and Shooting Star\n    (which activate when the maximum quantity of Mantra Cores has been achieved) by\n    <span>[damage]%</span> and increases the recovery of Healing Bond by <span>[recovery]%</span>.\n  "};var k=Object.freeze({MantraArray:s,Illusion:r,SoaringOrb:i,RadiantSalvo:o,ExpansionBlast:l,FlashStrike:p,ShootingStar:m,ConcussionOrb:u,RagingTempest:h,EnergySurge:d,StaticFlash:c,LightBarrier:g,HealingBond:v,FountOfRenewal:y,OrbMastery:b,NarubashanUnleashed:f,AnimusFocus:w});class L{constructor(){this.editable=!1,this.extras=!1,this.animusFocus=w.minLevel,this.concussionOrb=u.minLevel,this.soaringOrb=i.minLevel,this.ragingTempest=h.minLevel,this.staticFlash=c.minLevel,this.energySurge=d.minLevel,this.expansionBlast=l.minLevel,this.flashStrike=p.minLevel,this.illusion=r.minLevel,this.healingBond=v.minLevel,this.mantraArray=s.minLevel,this.narubashanUnleashed=f.minLevel,this.orbMastery=b.minLevel,this.radiantSalvo=o.minLevel,this.shootingStar=m.minLevel,this.lightBarrier=g.minLevel,this.fountOfRenewal=y.minLevel}componentWillLoad(){a(this,k)}async getData(){return n(this,k)}levelChanged(e,n){this[e.prop]=n,a(this,k,e),this.emitChangeEvent()}emitChangeEvent(){this.onSkillChanged.emit(n(this,k))}render(){return e("ms-chart",{msClass:"soul-binder"},t(this,k,this.editable,this.extras))}static get is(){return"ms-soul-binder"}static get encapsulation(){return"shadow"}static get properties(){return{animusFocus:{type:Number,attr:"animus-focus",mutable:!0},concussionOrb:{type:Number,attr:"concussion-orb",mutable:!0},editable:{type:Boolean,attr:"editable",reflectToAttr:!0},energySurge:{type:Number,attr:"energy-surge",mutable:!0},expansionBlast:{type:Number,attr:"expansion-blast",mutable:!0},extras:{type:Boolean,attr:"extras",watchCallbacks:["emitChangeEvent"]},flashStrike:{type:Number,attr:"flash-strike",mutable:!0},fountOfRenewal:{type:Number,attr:"fount-of-renewal",mutable:!0},getData:{method:!0},healingBond:{type:Number,attr:"healing-bond",mutable:!0},illusion:{type:Number,attr:"illusion",mutable:!0},lightBarrier:{type:Number,attr:"light-barrier",mutable:!0},mantraArray:{type:Number,attr:"mantra-array",mutable:!0},narubashanUnleashed:{type:Number,attr:"narubashan-unleashed",mutable:!0},orbMastery:{type:Number,attr:"orb-mastery",mutable:!0},radiantSalvo:{type:Number,attr:"radiant-salvo",mutable:!0},ragingTempest:{type:Number,attr:"raging-tempest",mutable:!0},shootingStar:{type:Number,attr:"shooting-star",mutable:!0},skills:{state:!0},soaringOrb:{type:Number,attr:"soaring-orb",mutable:!0},staticFlash:{type:Number,attr:"static-flash",mutable:!0}}}static get events(){return[{name:"skillchanged",method:"onSkillChanged",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ms-soul-binder-h{display:block}"}}export{L as MsSoulBinder};