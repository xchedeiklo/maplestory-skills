import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { SoulBinderSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/soul-binder";
export class SoulBinderComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.animusFocus = SoulBinderSkills.AnimusFocus.minLevel;
        this.concussionOrb = SoulBinderSkills.ConcussionOrb.minLevel;
        this.soaringOrb = SoulBinderSkills.SoaringOrb.minLevel;
        this.ragingTempest = SoulBinderSkills.RagingTempest.minLevel;
        this.staticFlash = SoulBinderSkills.StaticFlash.minLevel;
        this.energySurge = SoulBinderSkills.EnergySurge.minLevel;
        this.expansionBlast = SoulBinderSkills.ExpansionBlast.minLevel;
        this.flashStrike = SoulBinderSkills.FlashStrike.minLevel;
        this.illusion = SoulBinderSkills.Illusion.minLevel;
        this.healingBond = SoulBinderSkills.HealingBond.minLevel;
        this.mantraArray = SoulBinderSkills.MantraArray.minLevel;
        this.narubashanUnleashed = SoulBinderSkills.NarubashanUnleashed.minLevel;
        this.orbMastery = SoulBinderSkills.OrbMastery.minLevel;
        this.radiantSalvo = SoulBinderSkills.RadiantSalvo.minLevel;
        this.shootingStar = SoulBinderSkills.ShootingStar.minLevel;
        this.lightBarrier = SoulBinderSkills.LightBarrier.minLevel;
        this.fountOfRenewal = SoulBinderSkills.FountOfRenewal.minLevel;
        this.awakenedMantra = SoulBinderSkills.AwakenedMantra.minLevel;
        this.spiritBound = SoulBinderSkills.SpiritBound.minLevel;
        this.spiritCrush = SoulBinderSkills.SpiritCrush.minLevel;
        this.visionTorrent = SoulBinderSkills.VisionTorrent.minLevel;
        this.awakenedMind = SoulBinderSkills.AwakenedMind.minLevel;
        this.soulFlock = SoulBinderSkills.SoulFlock.minLevel;
        this.soulShield = SoulBinderSkills.SoulShield.minLevel;
        this.soulHarmony = SoulBinderSkills.SoulHarmony.minLevel;
        this.triuneLink = SoulBinderSkills.TriuneLink.minLevel;
    }
    componentWillLoad() {
        processSkills(this, SoulBinderSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, SoulBinderSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, SoulBinderSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, SoulBinderSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "soul-binder", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
            renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
            renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    static get is() { return "ms-soul-binder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["soul-binder.css"]
    }; }
    static get styleUrls() { return {
        "$": ["soul-binder.css"]
    }; }
    static get properties() { return {
        "editable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "editable",
            "reflect": true,
            "defaultValue": "false"
        },
        "rank": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "rank",
            "reflect": true,
            "defaultValue": "Rank.Basic"
        },
        "extras": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "extras",
            "reflect": false,
            "defaultValue": "false"
        },
        "animusFocus": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "animus-focus",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.AnimusFocus.minLevel"
        },
        "concussionOrb": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "concussion-orb",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.ConcussionOrb.minLevel"
        },
        "soaringOrb": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "soaring-orb",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.SoaringOrb.minLevel"
        },
        "ragingTempest": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "raging-tempest",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.RagingTempest.minLevel"
        },
        "staticFlash": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "static-flash",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.StaticFlash.minLevel"
        },
        "energySurge": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "energy-surge",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.EnergySurge.minLevel"
        },
        "expansionBlast": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "expansion-blast",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.ExpansionBlast.minLevel"
        },
        "flashStrike": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "flash-strike",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.FlashStrike.minLevel"
        },
        "illusion": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "illusion",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.Illusion.minLevel"
        },
        "healingBond": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "healing-bond",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.HealingBond.minLevel"
        },
        "mantraArray": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "mantra-array",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.MantraArray.minLevel"
        },
        "narubashanUnleashed": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "narubashan-unleashed",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.NarubashanUnleashed.minLevel"
        },
        "orbMastery": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "orb-mastery",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.OrbMastery.minLevel"
        },
        "radiantSalvo": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "radiant-salvo",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.RadiantSalvo.minLevel"
        },
        "shootingStar": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shooting-star",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.ShootingStar.minLevel"
        },
        "lightBarrier": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "light-barrier",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.LightBarrier.minLevel"
        },
        "fountOfRenewal": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fount-of-renewal",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.FountOfRenewal.minLevel"
        },
        "awakenedMantra": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "awakened-mantra",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.AwakenedMantra.minLevel"
        },
        "spiritBound": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "spirit-bound",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.SpiritBound.minLevel"
        },
        "spiritCrush": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "spirit-crush",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.SpiritCrush.minLevel"
        },
        "visionTorrent": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "vision-torrent",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.VisionTorrent.minLevel"
        },
        "awakenedMind": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "awakened-mind",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.AwakenedMind.minLevel"
        },
        "soulFlock": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "soul-flock",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.SoulFlock.minLevel"
        },
        "soulShield": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "soul-shield",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.SoulShield.minLevel"
        },
        "soulHarmony": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "soul-harmony",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.SoulHarmony.minLevel"
        },
        "triuneLink": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "triune-link",
            "reflect": false,
            "defaultValue": "SoulBinderSkills.TriuneLink.minLevel"
        }
    }; }
    static get states() { return {
        "skills": {}
    }; }
    static get events() { return [{
            "method": "onSkillChanged",
            "name": "skillchanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getData": {
            "complexType": {
                "signature": "() => Promise<import(\"C:/Programming/_github/maplestory-skills/src/components/charts/skill-change-event\").ISkillChangeEvent>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "ISkillChangeEvent": {
                        "location": "global"
                    }
                },
                "return": "Promise<ISkillChangeEvent>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "extras",
            "methodName": "emitChangeEvent"
        }, {
            "propName": "rank",
            "methodName": "emitChangeEvent"
        }]; }
}
