import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class PriestComponent implements IChart {
    editable: boolean;
    extras: boolean;
    heavenlyWings: number;
    steadfastFaith: number;
    celestialLight: number;
    holyBlast: number;
    healingPrayer: number;
    scepterMastery: number;
    celestialGuardian: number;
    shieldOfTheArchon: number;
    scourgingWave: number;
    celestialBlessings: number;
    holyRelic: number;
    sanctuary: number;
    holySymbol: number;
    healingMastery: number;
    smitingAura: number;
    disciple: number;
    angelicRay: number;
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render()
}
