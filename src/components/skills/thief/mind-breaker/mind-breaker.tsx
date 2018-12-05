import { Component, Prop } from "@stencil/core";
import { MindBreaker } from "../../../../global/values/thief";

@Component({
  tag: "ms-mind-breaker",
  styleUrls: ["../../skills.scss", "mind-breaker.scss"],
  shadow: true
})
export class MindBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = MindBreaker.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MindBreaker.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MindBreaker.levelRequirement[this.level] }+`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="mind-breaker"></ms-icon>,
      <ms-skill-overlay heading={ MindBreaker.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="mind-breaker"></ms-icon>
        <div slot="description">
          Unlocks Empowered Mind Stealer, which increases the number of targets
          that can be hit by the skill to <span>5</span> and the
          skill's damage by <span>{ MindBreaker.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
