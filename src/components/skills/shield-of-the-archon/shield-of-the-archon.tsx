import { Component, Prop } from "@stencil/core";
import { ShieldOfTheArchonValues } from "../../../global/values/priest";

@Component({
  tag: "ms-shield-of-the-archon",
  styleUrls: ["../skills.scss", "shield-of-the-archon.scss"],
  shadow: true
})
export class ShieldOfTheArchonComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldOfTheArchonValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = ShieldOfTheArchonValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Celestial Light [Level 3+]`,
      `Holy Blast [Level 3+]`,
    ];
  }

  getLevel(): number {
    return ShieldOfTheArchonValues.levelRequirement[this.level];
  }

  getResistance(): number {
    return ShieldOfTheArchonValues.resistance[this.level];
  }

  getDamage(): number {
    return ShieldOfTheArchonValues.damage[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="shield-of-the-archon"></ms-icon>
        }
        <ms-skill-overlay heading="Shield of the Archon"
                          element="Holy"
                          level={ this.level }
                          type="Close Range / Magic"
                          requirements={ this.getRequirements() }
                          cooldown={ 18 }>
          <ms-icon slot="icon" name="shield-of-the-archon"></ms-icon>
          <div slot="description">
            Conjure a shield of judgment for <span>5</span> sec,
            increasing physical resistance and magic resistance
            by <span>{ this.getResistance() }</span> and
            dealing <span>{ this.getDamage() }%</span> holy damage
            to <span>5</span> enemies within <span>3</span> m.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
