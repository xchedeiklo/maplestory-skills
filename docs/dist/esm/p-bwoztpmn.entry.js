import{c as s,d as i,b as t,e as h,f as l}from"./p-707d1bff.js";class e{constructor(t){s(this,t),this.level=0,this.extras=!1,this.limitReached=!1,this.locked=!1,this.disabled=!0,this.loop=!1,this.onLevelChanged=i(this,"levelchanged",7),this.onSkillClicked=i(this,"skillclicked",7)}componentWillLoad(){this.level<this.skill.minLevel&&(this.level=this.skill.minLevel),this.level>this.skill.maxLevel&&(this.level=this.skill.maxLevel),this.column||(this.column=this.skill.column),this.row||(this.row=this.skill.row)}skillChanged(){this.onLevelChanged.emit(this.level)}render(){return t(h,{passive:this.skill.passive},this.renderStyles(),t("div",{class:"skill",onMouseEnter:()=>this.showOverlay(),onMouseLeave:()=>this.hideOverlay(),onClick:()=>this.emitSkillClick()},t("ms-icon",{name:this.skill.attr,sp:this.skill.sp})),t("div",{class:"controls"},t("div",null,t("button",{class:{minus:!0,wrap:this.loop&&this.level===this.skill.minLevel},disabled:this.shouldDisableMinus(),onClick:()=>this.minus(),onMouseEnter:()=>this.showOverlay(-1),onMouseLeave:()=>this.hideOverlay(),hidden:this.level===this.skill.minLevel&&!this.loop},t("img",{src:l("assets/minus.png")}),t("img",{src:l("assets/minus-hover.png")}),t("img",{src:l("assets/minus-active.png")}),t("img",{src:l("assets/minus-wrap.png")}),t("img",{src:l("assets/minus-wrap-hover.png")}),t("img",{src:l("assets/minus-wrap-active.png")}))),t("span",null,this.level,"/",this.skill.maxLevel),t("div",null,t("button",{class:{plus:!0,wrap:this.loop&&(this.level===this.skill.maxLevel||this.limitReached)},disabled:this.shouldDisablePlus(),onClick:()=>this.plus(),onMouseEnter:()=>this.showOverlay(1),onMouseLeave:()=>this.hideOverlay(),hidden:this.level===this.skill.maxLevel&&!this.loop},t("img",{src:l("assets/plus.png")}),t("img",{src:l("assets/plus-hover.png")}),t("img",{src:l("assets/plus-active.png")}),t("img",{src:l("assets/plus-wrap.png")}),t("img",{src:l("assets/plus-wrap-hover.png")}),t("img",{src:l("assets/plus-wrap-active.png")})))),t("ms-skill-overlay",{hidden:!this.overlayLevel,skill:this.skill,extras:this.extras,level:this.overlayLevel||1,class:this.skill.prop}))}renderStyles(){return t("style",{type:"text/css"},`\n        ms-skill .controls { background-image: url(${l("assets/skill-bar.png")}); }\n        :host .controls { background-image: url(${l("assets/skill-bar.png")}); }\n\n        ms-skill:not([passive]) .skill { background-image: url(${l("assets/skill-shield.png")}); }\n        :host(:not([passive])) .skill { background-image: url(${l("assets/skill-shield.png")}); }\n\n        ms-skill[passive] .skill { background-image: url(${l("assets/skill-shield-passive.png")}); }\n        :host([passive]) .skill { background-image: url(${l("assets/skill-shield-passive.png")}); }\n\n        ms-skill[locked] .skill:after { background-image: url(${l("assets/skill-locked.png")}); }\n        :host([locked]) .skill:after { background-image: url(${l("assets/skill-locked.png")}); }\n\n        ms-skill[required]:after { background-image: url(${l("assets/skill-overlay.png")}); }\n        :host([required]):after { background-image: url(${l("assets/skill-overlay.png")}); }\n      `)}shouldDisableMinus(){return this.disabled||this.skill.minLevel===this.skill.maxLevel||!this.loop&&this.level===this.skill.minLevel||this.loop&&this.limitReached&&this.level===this.skill.minLevel}shouldDisablePlus(){return this.disabled||this.skill.minLevel===this.skill.maxLevel||this.limitReached&&(!this.loop||this.level===this.skill.minLevel)}showOverlay(s=0){this.overlayLevel=this.level+s,0===this.overlayLevel?this.overlayLevel=1:this.overlayLevel<0?this.overlayLevel=this.loop?this.skill.maxLevel:1:this.overlayLevel>this.skill.maxLevel&&(this.overlayLevel=this.loop?1:this.skill.maxLevel)}hideOverlay(){this.overlayLevel=0}emitSkillClick(){this.onSkillClicked.emit(this.skill)}plus(){(this.level<this.skill.maxLevel||this.loop)&&(this.level++,(this.level>this.skill.maxLevel||this.limitReached&&this.level>this.skill.minLevel)&&(this.level=this.skill.minLevel),this.skillChanged()),this.showOverlay(1)}minus(){(this.level>this.skill.minLevel||this.loop)&&(this.level--,this.level<this.skill.minLevel&&(this.level=this.skill.maxLevel),this.skillChanged()),this.showOverlay(-1)}static get originalStyleUrls(){return{$:["skill.css"]}}static get watchers(){return{level:["skillChanged"]}}static get style(){return":host{height:115px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.skill,:host{display:block;width:72px}.skill{height:84px;background-repeat:no-repeat}.skill>ms-icon{display:block;position:absolute;left:14px;top:17px}.controls{display:-ms-flexbox;display:flex;width:109px;height:36px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-left:-18.5px;margin-top:-4px}.controls span{text-align:center;-ms-flex-positive:1;flex-grow:1;font-size:.9em}.controls div{margin-top:4px;width:30px}.controls div,_:-ms-lang(x){margin-top:0}:host([locked]) .skill:after{content:\"\"}:host([locked]) .skill:after,:host([required]):after{position:absolute;width:52px;height:61px;top:11px;left:10px;pointer-events:none}:host([required]):after{content:attr(required);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#ff0;font-size:.8em}ms-skill-overlay{position:absolute;margin:0 20px}:host([column=\"1\"]) ms-skill-overlay,:host([column=\"2\"]) ms-skill-overlay{left:100%}:host([column=\"3\"]) ms-skill-overlay,:host([column=\"4\"]) ms-skill-overlay{right:100%}:host([row=\"1\"]) ms-skill-overlay,:host([row=\"2\"]) ms-skill-overlay,:host([row=\"3\"]) ms-skill-overlay{top:0}:host([row=\"4\"]) ms-skill-overlay,:host([row=\"5\"]) ms-skill-overlay,:host([row=\"6\"]) ms-skill-overlay{bottom:0}:host-context(ms-chart) ms-skill-overlay.electricBlast{bottom:-100px}:host-context(ms-chart) ms-skill-overlay.magnumBlow{top:-75px}:host-context(ms-runeblade[sigil=flameSigil]) ms-skill-overlay.impact{top:-25px}:host-context(ms-runeblade[sigil=stormSigil]) ms-skill-overlay.impact{top:-50px}button{width:30px;height:33px;background:none;border:none;padding:0;outline:0;cursor:inherit}.minus img,.plus img,_:-ms-lang(x){cursor:pointer}button:active{cursor:inherit}button img{display:none}button:not([disabled]):not([hidden]){display:inline-block}button.wrap:not([disabled]):active img:nth-child(6),button.wrap:not([disabled]):not(:active):hover img:nth-child(5),button.wrap:not([disabled]):not(:active):not(:hover) img:nth-child(4),button:not(.wrap):not([disabled]):active img:nth-child(3),button:not(.wrap):not([disabled]):not(:active):hover img:nth-child(2),button:not(.wrap):not([disabled]):not(:active):not(:hover) img:first-child{display:inline}.minus{left:-1px}.plus{right:0}"}}export{e as ms_skill};