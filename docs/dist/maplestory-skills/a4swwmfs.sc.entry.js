const s=window.MaplestorySkills.h;class t{componentDidLoad(){this.resize()}resize(){let s=this.host.parentNode;s.host&&(s=s.host);let t=s.offsetWidth/815;t<1?(this.host.style.transform=`scale(${t})`,this.host.style.marginBottom=`-${770-770*t}px`,this.host.style.marginRight=`-${815-815*t}px`):(this.host.style.transform=null,this.host.style.marginBottom=null,this.host.style.marginRight=null)}render(){return[this.renderStyles(),s("ms-footer",null),s("div",{class:"chart"},s("div",{class:"class-icon"},s("div",{class:"chart-class "+this.msClass},s("slot",null))))]}renderStyles(){return s("style",{type:"text/css"},`\n        ms-chart {\n          cursor: url(${this.publicPath}assets/cursor.png) 5 8, auto;\n        }\n        ms-chart:active {\n          cursor: url(${this.publicPath}assets/cursor-down.png) 5 8, auto;\n        }\n        :host, :host(:hover), ms-chart {\n          cursor: url(${this.publicPath}assets/cursor.png) 5 8, auto;\n        }\n        :host(:active) {\n          cursor: url(${this.publicPath}assets/cursor-down.png) 5 8, auto;\n        }\n        .chart {\n          background-image: url(${this.publicPath}assets/charts/chart.jpg);\n        }\n        .class-icon {\n          background-image: url(${this.publicPath}assets/charts/${this.msClass}-icon.png)\n        }\n        .chart-class {\n          background-image: url(${this.publicPath}assets/charts/${this.msClass}-lines.png);\n        }\n      `)}static get is(){return"ms-chart"}static get encapsulation(){return"shadow"}static get properties(){return{host:{elementRef:!0},msClass:{type:String,attr:"ms-class"},publicPath:{context:"publicPath"}}}static get listeners(){return[{name:"window:resize",method:"resize",passive:!0}]}static get style(){return"\@import url(\"https://fonts.googleapis.com/css?family=Roboto:500\");.sc-ms-chart-h{display:block;width:815px;height:770px;position:relative;-webkit-transform-origin:top left;transform-origin:top left;font-size:16px;color:#fff;font-family:Roboto,Arial}.sc-ms-chart-h, .sc-ms-chart-h:active, _.sc-ms-chart:-ms-lang(x){cursor:auto}.chart.sc-ms-chart{position:absolute}.chart.sc-ms-chart, .class-icon.sc-ms-chart{width:100%;height:100%;background-repeat:no-repeat}.class-icon.sc-ms-chart{background-position:calc(50% + 34px) calc(50% - 18px)}.chart.sc-ms-chart > .class-icon.sc-ms-chart > div.sc-ms-chart{width:100%;height:100%;background-position:171px 88px;background-repeat:no-repeat}ms-footer.sc-ms-chart{margin-top:-30px;-webkit-transition:margin-top .3s ease-in-out;transition:margin-top .3s ease-in-out}.sc-ms-chart-h:hover   ms-footer.sc-ms-chart{margin-top:0}.sc-ms-chart-s > ms-skill{position:absolute}.sc-ms-chart-s > ms-skill[row=\"1\"]{top:4px}.sc-ms-chart-s > ms-skill[row=\"2\"]{top:132px}.sc-ms-chart-s > ms-skill[row=\"3\"]{top:260px}.sc-ms-chart-s > ms-skill[row=\"4\"]{top:388px}.sc-ms-chart-s > ms-skill[row=\"5\"]{top:516px}.sc-ms-chart-s > ms-skill[row=\"6\"]{top:644px}.sc-ms-chart-s > ms-skill[column=\"1\"]{left:138px}.sc-ms-chart-s > ms-skill[column=\"2\"]{left:318px}.sc-ms-chart-s > ms-skill[column=\"3\"]{left:498px}.sc-ms-chart-s > ms-skill[column=\"4\"]{left:678px}"}}class e{render(){return s("a",{href:"https://bodinaren.github.io/maplestory-skills/",target:"_blank"},"MapleStory 2 Skill Charts")}static get is(){return"ms-footer"}static get encapsulation(){return"shadow"}static get style(){return".sc-ms-footer-h{font-family:Roboto;position:absolute;top:100%;right:0;text-align:center;font-size:.7em;padding:0 5px 2px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#1c1c1c;border-right:1px solid #121212;-webkit-box-shadow:inset -1px 0 #222;box-shadow:inset -1px 0 #222}.sc-ms-footer-h, a.sc-ms-footer{color:#fff}a.sc-ms-footer{cursor:inherit}"}}class l{constructor(){this.sp=!1}render(){return[s("img",{src:`${this.publicPath}assets/skills/${this.name}.png`}),this.sp&&s("img",{src:`${this.publicPath}assets/sp.png`})]}static get is(){return"ms-icon"}static get encapsulation(){return"shadow"}static get properties(){return{name:{type:String,attr:"name",reflectToAttr:!0},publicPath:{context:"publicPath"},sp:{type:Boolean,attr:"sp",reflectToAttr:!0}}}static get style(){return".sc-ms-icon-h{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:43px;height:50px;-ms-flex-pack:center;justify-content:center}img.sc-ms-icon:nth-of-type(2){position:absolute;bottom:1px;left:-4px}"}}class i{constructor(){this.level=0,this.extras=!1,this.limitReached=!1,this.locked=!1,this.disabled=!0,this.loop=!1}componentWillLoad(){this.level<this.skill.minLevel&&(this.level=this.skill.minLevel),this.level>this.skill.maxLevel&&(this.level=this.skill.maxLevel),this.column||(this.column=this.skill.column),this.row||(this.row=this.skill.row)}skillChanged(){this.onLevelChanged.emit(this.level)}hostData(){return{passive:this.skill.passive}}render(){return[this.renderStyles(),s("div",{class:"skill",onMouseEnter:()=>this.showOverlay(),onMouseLeave:()=>this.hideOverlay(),onClick:()=>this.emitSkillClick()},s("ms-icon",{name:this.skill.attr,sp:this.skill.sp})),s("div",{class:"controls"},s("div",null,s("button",{class:{minus:!0,wrap:this.loop&&this.level===this.skill.minLevel},disabled:this.shouldDisableMinus(),onClick:()=>this.minus(),onMouseEnter:()=>this.showOverlay(-1),onMouseLeave:()=>this.hideOverlay(),hidden:this.level===this.skill.minLevel&&!this.loop},s("img",{src:`${this.publicPath}assets/minus.png`}),s("img",{src:`${this.publicPath}assets/minus-hover.png`}),s("img",{src:`${this.publicPath}assets/minus-active.png`}),s("img",{src:`${this.publicPath}assets/minus-wrap.png`}),s("img",{src:`${this.publicPath}assets/minus-wrap-hover.png`}),s("img",{src:`${this.publicPath}assets/minus-wrap-active.png`}))),s("span",null,this.level,"/",this.skill.maxLevel),s("div",null,s("button",{class:{plus:!0,wrap:this.loop&&(this.level===this.skill.maxLevel||this.limitReached)},disabled:this.shouldDisablePlus(),onClick:()=>this.plus(),onMouseEnter:()=>this.showOverlay(1),onMouseLeave:()=>this.hideOverlay(),hidden:this.level===this.skill.maxLevel&&!this.loop},s("img",{src:`${this.publicPath}assets/plus.png`}),s("img",{src:`${this.publicPath}assets/plus-hover.png`}),s("img",{src:`${this.publicPath}assets/plus-active.png`}),s("img",{src:`${this.publicPath}assets/plus-wrap.png`}),s("img",{src:`${this.publicPath}assets/plus-wrap-hover.png`}),s("img",{src:`${this.publicPath}assets/plus-wrap-active.png`})))),s("ms-skill-overlay",{hidden:!this.overlayLevel,skill:this.skill,extras:this.extras,level:this.overlayLevel||1,class:this.skill.prop})]}renderStyles(){return s("style",{type:"text/css"},`\n        ms-skill .controls { background-image: url(${this.publicPath}assets/skill-bar.png); }\n        :host .controls { background-image: url(${this.publicPath}assets/skill-bar.png); }\n\n        ms-skill:not([passive]) .skill { background-image: url(${this.publicPath}assets/skill-shield.png); }\n        :host(:not([passive])) .skill { background-image: url(${this.publicPath}assets/skill-shield.png); }\n\n        ms-skill[passive] .skill { background-image: url(${this.publicPath}assets/skill-shield-passive.png); }\n        :host([passive]) .skill { background-image: url(${this.publicPath}assets/skill-shield-passive.png); }\n\n        ms-skill[locked] .skill:after { background-image: url(${this.publicPath}assets/skill-locked.png); }\n        :host([locked]) .skill:after { background-image: url(${this.publicPath}assets/skill-locked.png); }\n\n        ms-skill[required]:after { background-image: url(${this.publicPath}assets/skill-overlay.png); }\n        :host([required]):after { background-image: url(${this.publicPath}assets/skill-overlay.png); }\n      `)}shouldDisableMinus(){return this.disabled||this.skill.minLevel===this.skill.maxLevel||!this.loop&&this.level===this.skill.minLevel||this.loop&&this.limitReached&&this.level===this.skill.minLevel}shouldDisablePlus(){return this.disabled||this.skill.minLevel===this.skill.maxLevel||this.limitReached&&(!this.loop||this.level===this.skill.minLevel)}showOverlay(s=0){this.overlayLevel=this.level+s,0===this.overlayLevel?this.overlayLevel=1:this.overlayLevel<0?this.overlayLevel=this.loop?this.skill.maxLevel:1:this.overlayLevel>this.skill.maxLevel&&(this.overlayLevel=this.loop?1:this.skill.maxLevel)}hideOverlay(){this.overlayLevel=0}emitSkillClick(){this.onSkillClicked.emit(this.skill)}plus(){(this.level<this.skill.maxLevel||this.loop)&&(this.level++,(this.level>this.skill.maxLevel||this.limitReached&&this.level>this.skill.minLevel)&&(this.level=this.skill.minLevel),this.skillChanged()),this.showOverlay(1)}minus(){(this.level>this.skill.minLevel||this.loop)&&(this.level--,this.level<this.skill.minLevel&&(this.level=this.skill.maxLevel),this.skillChanged()),this.showOverlay(-1)}static get is(){return"ms-skill"}static get encapsulation(){return"shadow"}static get properties(){return{column:{type:Number,attr:"column",reflectToAttr:!0,mutable:!0},disabled:{type:Boolean,attr:"disabled"},extras:{type:Boolean,attr:"extras"},level:{type:Number,attr:"level",reflectToAttr:!0,mutable:!0,watchCallbacks:["skillChanged"]},limitReached:{type:Boolean,attr:"limit-reached"},locked:{type:Boolean,attr:"locked",reflectToAttr:!0},loop:{type:Boolean,attr:"loop"},overlayLevel:{state:!0},publicPath:{context:"publicPath"},required:{type:String,attr:"required",reflectToAttr:!0},row:{type:Number,attr:"row",reflectToAttr:!0,mutable:!0},skill:{type:"Any",attr:"skill"}}}static get events(){return[{name:"levelchanged",method:"onLevelChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"skillclicked",method:"onSkillClicked",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ms-skill-h{height:115px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.skill.sc-ms-skill, .sc-ms-skill-h{display:block;width:72px}.skill.sc-ms-skill{height:84px;background-repeat:no-repeat}.skill.sc-ms-skill > ms-icon.sc-ms-skill{display:block;position:absolute;left:14px;top:17px}.controls.sc-ms-skill{display:-ms-flexbox;display:flex;width:109px;height:36px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-left:-18.5px;margin-top:-4px}.controls.sc-ms-skill   span.sc-ms-skill{text-align:center;-ms-flex-positive:1;flex-grow:1;font-size:.9em}.controls.sc-ms-skill   div.sc-ms-skill{margin-top:4px;width:30px}.controls.sc-ms-skill   div.sc-ms-skill, _.sc-ms-skill:-ms-lang(x){margin-top:0}[locked].sc-ms-skill-h   .skill.sc-ms-skill:after{content:\"\"}[locked].sc-ms-skill-h   .skill.sc-ms-skill:after, [required].sc-ms-skill-h:after{position:absolute;width:52px;height:61px;top:11px;left:10px;pointer-events:none}[required].sc-ms-skill-h:after{content:attr(required);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#ff0;font-size:.8em}ms-skill-overlay.sc-ms-skill{position:absolute;margin:0 20px}[column=\"1\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [column=\"2\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{left:100%}[column=\"3\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [column=\"4\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{right:100%}[row=\"1\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"2\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"3\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{top:0}[row=\"4\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"5\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"6\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{bottom:0}button.sc-ms-skill{width:30px;height:33px;background:none;border:none;padding:0;outline:0;cursor:inherit}.minus.sc-ms-skill   img.sc-ms-skill, .plus.sc-ms-skill   img.sc-ms-skill, _.sc-ms-skill:-ms-lang(x){cursor:pointer}button.sc-ms-skill:active{cursor:inherit}button.sc-ms-skill   img.sc-ms-skill{display:none}button.sc-ms-skill:not([disabled]):not([hidden]){display:inline-block}button.wrap.sc-ms-skill:not([disabled]):active   img.sc-ms-skill:nth-child(6), button.wrap.sc-ms-skill:not([disabled]):not(:active):hover   img.sc-ms-skill:nth-child(5), button.wrap.sc-ms-skill:not([disabled]):not(:active):not(:hover)   img.sc-ms-skill:nth-child(4), button.sc-ms-skill:not(.wrap):not([disabled]):active   img.sc-ms-skill:nth-child(3), button.sc-ms-skill:not(.wrap):not([disabled]):not(:active):hover   img.sc-ms-skill:nth-child(2), button.sc-ms-skill:not(.wrap):not([disabled]):not(:active):not(:hover)   img.sc-ms-skill:first-child{display:inline}.minus.sc-ms-skill{left:-1px}.plus.sc-ms-skill{right:0}"}}let r=/\[(.*?)\]/;class a{constructor(){this.level=0,this.extras=!1}componentWillLoad(){this.refreshData()}componentWillUpdate(){this.refreshData()}refreshData(){this.setRequirements(),this.setSpirit(),this.setCooldown(),this.description=this.parseDescription(this.skill),this.extraDescriptions=void 0,this.extras&&this.skill.extras&&(this.extraDescriptions=this.skill.extras.map(s=>this.parseDescription(s)))}render(){return s("div",null,s("h1",{class:this.skill.element,style:this.skill.element&&{background:`url(${this.publicPath}assets/${this.skill.element.toLowerCase()}.jpg), ${this.getGradient(this.skill.element)}`}},this.skill.name,this.skill.element&&s("span",{class:"element"},this.skill.element)),s("div",{class:"content"},s("div",null,s("div",{class:"content-header"},s("div",{class:"icon"},this.skill.attr&&s("ms-icon",{slot:"icon",name:this.skill.attr,sp:this.skill.sp})||s("slot",{name:"icon"})),s("div",{class:"infoAndLevel"},s("div",{class:"shortInfo"},this.spirit&&`Spirit ${this.spirit}`,this.spirit&&this.cooldown&&" / ",this.cooldown&&`Cooldown: ${this.cooldown} Sec`),s("div",{class:"level"},"Level ",this.level||1,this.level===this.skill.maxLevel&&" | MAX"))),this.requirements&&this.requirements.length>0&&s("div",{class:"requirements"},s("p",null,"[Requirements]"),this.requirements.map(t=>s("p",null,t)))),s("div",null,s("p",null,this.skill.passive?"Passive":"Active"),this.skill.attackType&&s("p",null,this.skill.attackType),this.skill.weaponRequired&&s("p",null,"Weapon Required: ",this.skill.weaponRequired)),s("div",{class:"description"},this.description&&s("p",{innerHTML:this.description})||s("p",null,s("slot",{name:"description"}))),this.extraDescriptions&&this.extraDescriptions.map(t=>s("div",{class:"description extras"},s("p",{innerHTML:t})))))}setRequirements(){let s=[];this.skill.levelRequirement&&this.skill.levelRequirement[this.level]>0&&s.push(`Level ${this.skill.levelRequirement[this.level]}+`),this.skill.skillRequirements&&Array.prototype.push.apply(s,this.skill.skillRequirements.map(s=>`${s.skill.name} [Level ${s.level}+]`)),this.requirements=s}setSpirit(){Array.isArray(this.skill.spirit)?this.spirit=this.skill.spirit[this.level]:this.spirit||(this.spirit=this.skill.spirit)}setCooldown(){Array.isArray(this.skill.cooldown)?this.cooldown=this.skill.cooldown[this.level]:this.cooldown||(this.cooldown=this.skill.cooldown)}parseDescription(s){let t,e=s.description;for(;t=r.exec(e);){let l=s.values&&s.values[t[1]];l||(l=s[t[1]]),e=e.replace(t[0],l[this.level].toString())}return e}getGradient(s){switch(console.log(s),s.toLowerCase()){case"dark":return"linear-gradient(to right, #1F0A1B 0%, #1F0A1B 60%, #3D1620 100%)";case"electric":return"linear-gradient(to right, #0A262A 0%, #0A262A 60%, #135764 100%)";case"fire":return"linear-gradient(to right, #3A0803 0%, #3A0803 60%, #6E2A11 100%)";case"holy":return"linear-gradient(to right, #3C1E04 0%, #3C1E04 60%, #7C4D01 100%)";case"ice":return"linear-gradient(to right, #021835 0%, #021835 60%, #153772 100%)";case"toxic":return"linear-gradient(to right, #20142C 0%, #20142C 60%, #3E1652 100%)"}}static get is(){return"ms-skill-overlay"}static get encapsulation(){return"shadow"}static get properties(){return{extras:{type:Boolean,attr:"extras"},level:{type:Number,attr:"level",reflectToAttr:!0},publicPath:{context:"publicPath"},skill:{type:"Any",attr:"skill"}}}static get style(){return".sc-ms-skill-overlay-h{color:#fff;z-index:100;width:350px;background-color:rgba(0,0,0,.9);border:1px solid #2c2c2c;pointer-events:none;font-size:.9em;border-radius:3px;overflow:hidden;-webkit-box-shadow:0 0 3px 1px #000;box-shadow:0 0 3px 1px #000}h1.sc-ms-skill-overlay{text-transform:none;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:1.3em;margin:0;padding:.5em .7em;background:#1f1f1f;font-weight:400;text-shadow:1px 1px 1px #000;background-size:cover!important}h1.sc-ms-skill-overlay   .element.sc-ms-skill-overlay{font-size:.8em}.content.sc-ms-skill-overlay{padding:10px 0 5px}.content.sc-ms-skill-overlay > div.sc-ms-skill-overlay, .sc-ms-skill-overlay-s > :not(:empty){display:block;clear:both;padding:5px 15px 5px}.content.sc-ms-skill-overlay > div.sc-ms-skill-overlay:not(:first-of-type){border-top:1px solid #212121}.content.sc-ms-skill-overlay > div.sc-ms-skill-overlay:not(:last-child){border-bottom:1px solid #000}.sc-ms-skill-overlay-s > :not(:empty){border-top:1px solid #212121}.content-header.sc-ms-skill-overlay{display:-ms-flexbox;display:flex;margin-bottom:15px}.icon.sc-ms-skill-overlay{margin-right:15px;width:44px;height:50px;background-color:#434343;position:relative;padding:2px 5px;border-radius:3px}.icon.sc-ms-skill-overlay:before{content:\" \";position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px;z-index:-1;background:-webkit-gradient(linear,left top,left bottom,from(#1b1b1b),to(#343434));background:linear-gradient(180deg,#1b1b1b 0,#343434);border-radius:3px}.infoAndLevel.sc-ms-skill-overlay{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:5px}.level.sc-ms-skill-overlay{font-size:1.5em}.requirements.sc-ms-skill-overlay{clear:both}.requirements.sc-ms-skill-overlay   p.sc-ms-skill-overlay:not(:first-child){color:#ecc400}.requirements.sc-ms-skill-overlay   p.fail.sc-ms-skill-overlay{color:#ce3434}.sc-ms-skill-overlay-s > *, p.sc-ms-skill-overlay{color:#999;margin:1px 0;line-height:1.5em}.description.sc-ms-skill-overlay   span.sc-ms-skill-overlay{color:#09c}.extras.sc-ms-skill-overlay{font-style:italic}"}}export{t as MsChart,e as MsFooter,l as MsIcon,i as MsSkill,a as MsSkillOverlay};