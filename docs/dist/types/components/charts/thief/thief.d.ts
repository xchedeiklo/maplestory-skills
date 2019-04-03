import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class ThiefComponent implements IChart {
    editable: boolean;
    extras: boolean;
    bladeDance: number;
    cunningTactics: number;
    deftCombatant: number;
    doubleSlash: number;
    haste: number;
    mesoguardPlus: number;
    mindBreaker: number;
    mindStealer: number;
    poisonEdge: number;
    poisonVial: number;
    quickStep: number;
    retaliation: number;
    ruthlessGuile: number;
    somersaultKick: number;
    spiritThief: number;
    surpriseAttack: number;
    viciousCuts: number;
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render()
}
