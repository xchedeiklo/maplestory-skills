import { e as registerInstance, d as h, h as Host } from './maplestory-skills-fe8c7252.js';
import { a as Rank } from './chunk-7c277b0f.js';
var CounterComponent = /** @class */ (function () {
    function CounterComponent(hostRef) {
        registerInstance(this, hostRef);
        this._pointsLeft = 0;
    }
    CounterComponent.prototype.componentDidLoad = function () {
        var _this = this;
        var el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
        }
        el.componentOnReady().then(function (editor) {
            _this._editor = editor;
            var rank = _this._editor.rank;
            _this._pointsLeft = rank === Rank.Awakening ? 14 : 68;
            _this._editor.addEventListener("skillchanged", function (evt) {
                console.log("skillchanged");
                _this.updatePointsLeft(evt.detail);
            });
        });
    };
    CounterComponent.prototype.updatePointsLeft = function (changeEvent) {
        var rank = this._editor.rank;
        var maxPoints = rank === Rank.Awakening ? 15 : 72;
        this._pointsLeft = maxPoints - changeEvent.skills.reduce(function (prev, current) {
            if (current.rank === rank) {
                return prev + current.level;
            }
            else {
                return prev;
            }
        }, 0);
    };
    CounterComponent.prototype.render = function () {
        return this._pointsLeft;
    };
    return CounterComponent;
}());
var OutletComponent = /** @class */ (function () {
    function OutletComponent(hostRef) {
        registerInstance(this, hostRef);
        this._skills = { rank: 1, skills: [] };
    }
    OutletComponent.prototype.componentDidLoad = function () {
        var _this = this;
        var el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
        }
        this._tagName = el.tagName.toLowerCase();
        el.componentOnReady().then(function (editor) {
            _this._editor = editor;
            _this._editor.addEventListener("skillchanged", function (evt) {
                _this._skills = evt.detail;
            });
        });
    };
    OutletComponent.prototype.render = function () {
        if (!this._editor)
            return;
        return (h(Host, null, h("slot", { name: "first" }), h("slot", null), this.getTag(), h("slot", { name: "last" })));
    };
    OutletComponent.prototype.getTag = function () {
        var extras = "";
        if (this._editor.extras)
            extras = " extras";
        var props = this.getProperties(this._skills);
        if (props)
            props = " " + props;
        return "<" + this._tagName + " rank=\"" + this._editor.rank + extras + props + "></" + this._tagName + ">";
    };
    OutletComponent.prototype.getProperties = function (changeEvent) {
        var properties = changeEvent.skills.filter(function (skillChange) {
            return skillChange.level > skillChange.minLevel;
        }).map(function (skillChange) {
            return skillChange.attr + "=\"" + skillChange.level + "\"";
        }).join(" ");
        if (changeEvent.other) {
            properties += " " + changeEvent.other.map(function (o) { return o.attr + "=\"" + o.value + "\""; });
        }
        return properties;
    };
    return OutletComponent;
}());
export { CounterComponent as ms_extra_counter, OutletComponent as ms_extra_outlet };
