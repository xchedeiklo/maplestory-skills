'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./maplestory-skills-10f6f6cf.js');
const __chunk_2 = require('./chunk-3cd691fe.js');

class CounterComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this._pointsLeft = 0;
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
        }
        el.componentOnReady().then((editor) => {
            this._editor = editor;
            const rank = this._editor.rank;
            this._pointsLeft = rank === __chunk_2.Rank.Awakening ? 14 : 68;
            this._editor.addEventListener("skillchanged", (evt) => {
                console.log("skillchanged");
                this.updatePointsLeft(evt.detail);
            });
        });
    }
    updatePointsLeft(changeEvent) {
        const rank = this._editor.rank;
        const maxPoints = rank === __chunk_2.Rank.Awakening ? 15 : 72;
        this._pointsLeft = maxPoints - changeEvent.skills.reduce((prev, current) => {
            if (current.rank === rank) {
                return prev + current.level;
            }
            else {
                return prev;
            }
        }, 0);
    }
    render() {
        return this._pointsLeft;
    }
}

class OutletComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this._skills = { rank: 1, skills: [] };
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
        }
        this._tagName = el.tagName.toLowerCase();
        el.componentOnReady().then((editor) => {
            this._editor = editor;
            this._editor.addEventListener("skillchanged", (evt) => {
                this._skills = evt.detail;
            });
        });
    }
    render() {
        if (!this._editor)
            return;
        return (__chunk_1.h(__chunk_1.Host, null, __chunk_1.h("slot", { name: "first" }), __chunk_1.h("slot", null), this.getTag(), __chunk_1.h("slot", { name: "last" })));
    }
    getTag() {
        let extras = "";
        if (this._editor.extras)
            extras = " extras";
        let props = this.getProperties(this._skills);
        if (props)
            props = " " + props;
        return `<${this._tagName} rank="${this._editor.rank}${extras}${props}></${this._tagName}>`;
    }
    getProperties(changeEvent) {
        let properties = changeEvent.skills.filter((skillChange) => {
            return skillChange.level > skillChange.minLevel;
        }).map((skillChange) => {
            return `${skillChange.attr}="${skillChange.level}"`;
        }).join(" ");
        if (changeEvent.other) {
            properties += " " + changeEvent.other.map((o) => `${o.attr}="${o.value}"`);
        }
        return properties;
    }
}

exports.ms_extra_counter = CounterComponent;
exports.ms_extra_outlet = OutletComponent;
