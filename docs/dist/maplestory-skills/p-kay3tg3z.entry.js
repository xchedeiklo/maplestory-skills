import{c as s,b as t,e}from"./p-8e447e8d.js";class r{constructor(t){s(this,t),this._skills={skills:[]}}componentDidLoad(){let s=document.getElementById(this.editor);s||(s=document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard")),this._tagName=s.tagName.toLowerCase(),s.componentOnReady().then(s=>{this._editor=s,this._editor.addEventListener("skillchanged",s=>{this._skills=s.detail})})}render(){if(this._editor)return t(e,null,t("slot",{name:"first"}),t("slot",null),"$",this.getTag(),t("slot",{name:"last"}))}getTag(){let s="";this._editor.extras&&(s=" extras");let t=this.getProperties(this._skills);return t&&(t=" "+t),`<${this._tagName}${s}${t}></${this._tagName}>`}getProperties(s){let t=s.skills.filter(s=>s.level>s.minLevel).map(s=>`${s.attr}="${s.level}"`).join(" ");return s.other&&(t+=" "+s.other.map(s=>`${s.attr}="${s.value}"`)),t}}export{r as ms_extra_outlet};