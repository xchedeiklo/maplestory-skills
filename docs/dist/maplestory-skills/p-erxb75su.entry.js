import{c as s,b as t,e as r,f as a,g as n}from"./p-8e447e8d.js";class e{constructor(t){s(this,t)}componentDidLoad(){this.resize()}resize(){let s=this.host.parentNode;s.host&&(s=s.host);let t=s.offsetWidth/815;t<1?(this.host.style.transform=`scale(${t})`,this.host.style.marginBottom=`-${770-770*t}px`,this.host.style.marginRight=`-${815-815*t}px`):(this.host.style.transform=null,this.host.style.marginBottom=null,this.host.style.marginRight=null)}render(){return t(r,null,this.renderStyles(),t("ms-footer",null),t("div",{class:"chart"},t("div",{class:"class-icon"},t("div",{class:"chart-class "+this.msClass},t("slot",null)))))}renderStyles(){return t("style",{type:"text/css"},`\n        ms-chart {\n          cursor: url(${a("assets/cursor.png")}) 5 8, auto;\n        }\n        ms-chart:active {\n          cursor: url(${a("assets/cursor-down.png")}) 5 8, auto;\n        }\n        :host, :host(:hover), ms-chart {\n          cursor: url(${a("assets/cursor.png")}) 5 8, auto;\n        }\n        :host(:active) {\n          cursor: url(${a("assets/cursor-down.png")}) 5 8, auto;\n        }\n        .chart {\n          background-image: url(${a("assets/charts/chart.jpg")});\n        }\n        .class-icon {\n          background-image: url(${a(`assets/charts/${this.msClass}-icon.png`)})\n        }\n        .chart-class {\n          background-image: url(${a(`assets/charts/${this.msClass}-lines.png`)});\n        }\n      `)}static get originalStyleUrls(){return{$:["chart.css"]}}get host(){return n(this)}static get style(){return":host{display:block;width:815px;height:770px;position:relative;-webkit-transform-origin:top left;transform-origin:top left;font-size:16px;color:#fff;font-family:Roboto,Arial}:host,:host(:active),_:-ms-lang(x){cursor:auto}.chart{position:absolute}.chart,.class-icon{width:100%;height:100%;background-repeat:no-repeat}.class-icon{background-position:calc(50% + 34px) calc(50% - 18px)}.chart>.class-icon>div{width:100%;height:100%;background-position:171px 88px;background-repeat:no-repeat}ms-footer{margin-top:-30px;-webkit-transition:margin-top .3s ease-in-out;transition:margin-top .3s ease-in-out}:host(:hover) ms-footer{margin-top:0}::slotted(ms-skill){position:absolute}::slotted(ms-skill[row=\"1\"]){top:4px}::slotted(ms-skill[row=\"2\"]){top:132px}::slotted(ms-skill[row=\"3\"]){top:260px}::slotted(ms-skill[row=\"4\"]){top:388px}::slotted(ms-skill[row=\"5\"]){top:516px}::slotted(ms-skill[row=\"6\"]){top:644px}::slotted(ms-skill[column=\"1\"]){left:138px}::slotted(ms-skill[column=\"2\"]){left:318px}::slotted(ms-skill[column=\"3\"]){left:498px}::slotted(ms-skill[column=\"4\"]){left:678px}"}}class c{constructor(t){s(this,t)}render(){return t("a",{href:"https://bodinaren.github.io/maplestory-skills/",target:"_blank"},"MapleStory 2 Skill Charts")}static get originalStyleUrls(){return{$:["footer.css"]}}static get style(){return":host{font-family:Roboto;position:absolute;top:100%;right:0;text-align:center;font-size:.7em;padding:0 5px 2px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#1c1c1c;border-right:1px solid #121212;-webkit-box-shadow:inset -1px 0 #222;box-shadow:inset -1px 0 #222}:host,a{color:#fff}a{cursor:inherit}"}}export{e as ms_chart,c as ms_footer};