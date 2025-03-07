import { GameData2024 } from "./games/2024"
import { GameData2025 } from "./games/2025"

export enum Game {
    Crescendo2024 = "Crescendo2024",
    Reefscape2025 = "Reefscape2025",
}

export interface GameData {
    clear(): void,
    serialize(): object,
    check(): boolean
};

type GameInfo = {
    // the name of the game in the dropdown
    name: string,

    // creates the game-specific data for the context (gets sent to google sheets)
    createData(): GameData,

    // buttons in the navbar
    links: {
        name: string,
        href: string
    }[],

    // field images
    field: { normal: string, flipped: string },
}

// Information about different games
export const games: { [game in Game]: GameInfo } = {
    [Game.Crescendo2024]: {
        name: "Crescendo (2024)",
        createData() {
            return new GameData2024();
        },
        links: [
            // { name: 'Auto', href: '/2024/auto' },
            // { name: 'Teleop', href: '/2024/teleop' },
            // { name: 'Endgame', href: '/2024/endgame' }
        ],
        field: { normal: '/2024/field.png', flipped: '/2024/field_flipped.png' }
    },
    [Game.Reefscape2025]: {
        name: "Reefscape (2025)",
        createData() {
            return new GameData2025();
        },
        links: [
            { name: 'Auto', href: '/2025/auto' },
            { name: 'Teleop', href: '/2025/teleop' },
            { name: 'Endgame', href: '/2025/endgame' }
        ],
        field: { normal: '/2025/field.png', flipped: '/2025/field_flipped.png' }
    },
}
