Object.defineProperty(exports,"__esModule",{value:!0});var s=require("./p-5f48ee19.js");exports.ms_extra_outlet=class{constructor(e){s.registerInstance(this,e),this._skills={skills:[]}}componentDidLoad(){let s=document.getElementById(this.editor);s||(s=document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard")),this._tagName=s.tagName.toLowerCase(),s.componentOnReady().then(s=>{this._editor=s,this._editor.addEventListener("skillchanged",s=>{this._skills=s.detail})})}render(){if(this._editor)return s.h(s.Host,null,s.h("slot",{name:"first"}),s.h("slot",null),"$",this.getTag(),s.h("slot",{name:"last"}))}getTag(){let s="";this._editor.extras&&(s=" extras");let e=this.getProperties(this._skills);return e&&(e=" "+e),`<${this._tagName}${s}${e}></${this._tagName}>`}getProperties(s){let e=s.skills.filter(s=>s.level>s.minLevel).map(s=>`${s.attr}="${s.level}"`).join(" ");return s.other&&(e+=" "+s.other.map(s=>`${s.attr}="${s.value}"`)),e}};