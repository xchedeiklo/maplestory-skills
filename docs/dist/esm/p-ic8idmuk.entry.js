import{c as s}from"./p-707d1bff.js";class t{constructor(t){s(this,t),this._pointsLeft=68}componentDidLoad(){let s=document.getElementById(this.editor);s||(s=document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard")),s.componentOnReady().then(s=>{this._editor=s,this._editor.addEventListener("skillchanged",s=>{this.updatePointsLeft(s.detail)})})}updatePointsLeft(s){this._pointsLeft=72-s.skills.reduce((s,t)=>s+t.level,0)}render(){return this._pointsLeft}}export{t as ms_extra_counter};