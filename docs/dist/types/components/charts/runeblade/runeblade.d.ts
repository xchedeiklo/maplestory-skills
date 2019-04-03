import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import { Sigil } from "./runeblade-sigil";
export declare class RunebladeComponent implements IChart {
    editable: boolean;
    extras: boolean;
    sigil: Sigil;
    bladeChasm: number;
    bladeMastery: number;
    blink: number;
    elementalPotency: number;
    echoingBlade: number;
    flameSigil: number;
    flurry: number;
    frostSigil: number;
    gravityRune: number;
    honingRunes: number;
    illusoryBlades: number;
    impact: number;
    runeBalance: number;
    runeFocus: number;
    stormSigil: number;
    wardingRune: number;
    whirlingBlades: number;
    private publicPath;
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    private runebladeSkills;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    private changeSigil;
    private updateSigil;
    emitChangeEvent(): void;
    render()
    private renderStyles;
}
