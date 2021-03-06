import { Component, Prop, State } from "@stencil/core";
import { ISkillChangeEvent } from "../../charts/skill-change-event";
import { Rank } from "../../../global/values/_skillValues.interfaces";

@Component({
  tag: "ms-extra-counter",
  shadow: true
})
export class CounterComponent {

  @Prop() editor?: string;

  @State() _editor: ClassEditorHTMLElement;
  @State() _pointsLeft: number = 0;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLMsExtraCounterElement;
    if (!el) {
      el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
    }

    el.componentOnReady().then((editor: ClassEditorHTMLElement) => {
      this._editor = editor;

      const rank = (this._editor as any).rank;
      this._pointsLeft = rank === Rank.Awakening ? 14 : 68;

      this._editor.addEventListener("skillchanged", (evt: any) => {
        console.log("skillchanged");
        this.updatePointsLeft(evt.detail);
      });
    });
  }

  private updatePointsLeft(changeEvent: ISkillChangeEvent) {
    const rank = (this._editor as any).rank;
    const maxPoints = rank === Rank.Awakening ? 15 : 72;

    this._pointsLeft = maxPoints - changeEvent.skills.reduce((prev, current) => {
      if (current.rank === rank) {
        return prev + current.level;
      } else {
        return prev;
      }
    }, 0);
  }

  render() {
    return this._pointsLeft;
  }
}

type ClassEditorHTMLElement =
  HTMLMsArcherElement |
  HTMLMsAssassinElement |
  HTMLMsBerserkerElement |
  HTMLMsHeavyGunnerElement |
  HTMLMsKnightElement |
  HTMLMsPriestElement |
  HTMLMsRunebladeElement |
  HTMLMsThiefElement |
  HTMLMsWizardElement;
