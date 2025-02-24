export enum Game {
    Reefscape2025 = "Reefscape2025",
}

export interface GameData {
    clear(): void,
    serialize(): object,
    check(): boolean
};

export class GameData2025 implements GameData {
    // auto
    autoCoralLvl1: number = 0;
    autoCoralLvl2: number = 0;
    autoCoralLvl3: number = 0;
    autoCoralLvl4: number = 0;
    autoBarge: number = 0;
    autoMobility: boolean = false;

    // teleop
    teleopCoralLvl1: number = 0;
    teleopCoralLvl2: number = 0;
    teleopCoralLvl3: number = 0;
    teleopCoralLvl4: number = 0;
    teleopBarge: number = 0;
    teleopAlgaeProcessor: number = 0;
    fouls: number = 0;
    defense: boolean = false;

    // endgame
    park: boolean = false;
    shallow: boolean = false;
    deep: boolean = false;
    timeClimbedAt: number = 0;

    clear(): void {
        this.autoCoralLvl1 = 0;
        this.autoCoralLvl2 = 0;
        this.autoCoralLvl3 = 0;
        this.autoCoralLvl4 = 0;
        this.autoBarge = 0;
        this.autoMobility = false;

        this.teleopCoralLvl1 = 0;
        this.teleopCoralLvl2 = 0;
        this.teleopCoralLvl3 = 0;
        this.teleopCoralLvl4 = 0;
        this.teleopBarge = 0;
        this.teleopAlgaeProcessor = 0;
        this.fouls = 0;
        this.defense = false;

        this.park = false;
        this.shallow = false;
        this.deep = false;
        this.timeClimbedAt = 0;
    }

    serialize(): object {
        return {
            "game": Game.Reefscape2025,
            "auto": {
                "coral1": this.autoCoralLvl1,
                "coral2": this.autoCoralLvl2,
                "coral3": this.autoCoralLvl3,
                "coral4": this.autoCoralLvl4,
                "barge": this.autoBarge,
                "mobility": this.autoMobility
            },
            "teleop": {
                "coral1": this.teleopCoralLvl1,
                "coral2": this.teleopCoralLvl2,
                "coral3": this.teleopCoralLvl3,
                "coral4": this.teleopCoralLvl4,
                "barge": this.teleopBarge,
                "algae_processor": this.teleopAlgaeProcessor,
                "fouls": this.fouls,
                "defense": this.defense
            },
            "endgame": {
                "park": this.park,
                "shallow": this.shallow,
                "deep": this.deep,
                "time_climbed_at": this.timeClimbedAt
            }
        }
    }

    check(): boolean {
        return true;
    }
}

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
    [Game.Reefscape2025]: {
        name: "Reefscape (2025)",
        createData() {
            return new GameData2025();
        },
        links: [
            { name: 'Auto', href: '/2025/auto' },
            { name: 'Teleop', href: '/2025/teleop' },
            { name: 'Endgame', href: '/2025/endgame' },
            { name: 'Submit', href: '/2025/submit' }
        ],
        field: { normal: '/2025/field.png', flipped: '/2025/field_flipped.png' }
    },
}