import { EventEmitter } from "..\..\..\stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class WizardComponent implements IChart {
    host: HTMLMsWizardElement;
    editable: boolean;
    rank: number;
    extras: boolean;
    arcaneBlast: number;
    chainLightning: number;
    cryomancy: number;
    electromancy: number;
    elementalMaster: number;
    flameTornado: number;
    flameWave: number;
    focusSeal: number;
    iceSpear: number;
    iceStorm: number;
    magicArmor: number;
    manaClaw: number;
    manaFont: number;
    phantomClaw: number;
    pyromancy: number;
    teleport: number;
    thunderbolt: number;
    manaControl: number;
    dualCast: number;
    iceCreamTime: number;
    lodestoneField: number;
    perfectStorm: number;
    ember: number;
    barbecueParty: number;
    playingWithFire: number;
    littleMeteor: number;
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render(): any;
}
