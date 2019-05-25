import { EventEmitter } from "..\..\..\stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class StrikerComponent implements IChart {
    host: HTMLMsStrikerElement;
    editable: boolean;
    rank: number;
    extras: boolean;
    beatdown: number;
    dragonKick: number;
    fightingSpirit: number;
    fistsOfFury: number;
    giganticBurst: number;
    guardDash: number;
    guillotine: number;
    hurricaneCutter: number;
    kickTechnician: number;
    knuckleMissile: number;
    magnumBlow: number;
    maharPunch: number;
    overcome: number;
    paceControl: number;
    patternBreak: number;
    powerPuncher: number;
    risingKick: number;
    rainingBlows: number;
    shockwavePunch: number;
    vulcanPunch: number;
    doubleFistSmash: number;
    meridianFlow: number;
    setupKick: number;
    spiralCannon: number;
    spinKick: number;
    tauntingFeint: number;
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render(): any;
}
