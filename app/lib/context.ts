import { AlliancePosition, Game } from "./types";
import { createContext } from "react";

export interface AppData {
    game: Game,
    scouterName: string,
    team: string,
    match: string,
    position?: AlliancePosition
    l1CoralTeleop: number
    l2CoralTeleop: number
    l3CoralTeleop: number
    l4CoralTeleop: number
    algaeNetTeleop: number
    algaePrcsrTeleop: number
    foul: number
    techFoul: number
    defense: boolean
};

export const AppContext = createContext<AppData>({
    game: Game._2025,
    scouterName: "",
    team: "",
    match: "",
    position: undefined,
    l1CoralTeleop: 0,
    l2CoralTeleop: 0,
    l3CoralTeleop: 0,
    l4CoralTeleop: 0,
    algaeNetTeleop: 0,
    algaePrcsrTeleop: 0,
    foul: 0,
    techFoul: 0,
    defense: false,
})