import { Game, GameData } from "../games";

export class GameData2025 implements GameData {
	// auto
	autoCoralLvl1: number = 0;
	autoCoralLvl2: number = 0;
	autoCoralLvl3: number = 0;
	autoCoralLvl4: number = 0;
	autoBarge: number = 0;
	autoProcessor: number = 0;
	autoMobility: boolean = false;

	// teleop
	teleopCoralLvl1: number = 0;
	teleopCoralLvl2: number = 0;
	teleopCoralLvl3: number = 0;
	teleopCoralLvl4: number = 0;
	teleopBarge: number = 0;
	teleopProcessor: number = 0;
	fouls: number = 0;
	defense: boolean = false;

	// endgame
	park: boolean = false;
	shallow: boolean = false;
	deep: boolean = false;
	timeClimbedAt?: number = undefined;

	clear(): void {
		this.autoCoralLvl1 = 0;
		this.autoCoralLvl2 = 0;
		this.autoCoralLvl3 = 0;
		this.autoCoralLvl4 = 0;
		this.autoBarge = 0;
		this.autoProcessor = 0;
		this.autoMobility = false;

		this.teleopCoralLvl1 = 0;
		this.teleopCoralLvl2 = 0;
		this.teleopCoralLvl3 = 0;
		this.teleopCoralLvl4 = 0;
		this.teleopBarge = 0;
		this.teleopProcessor = 0;
		this.fouls = 0;
		this.defense = false;

		this.park = false;
		this.shallow = false;
		this.deep = false;
		this.timeClimbedAt = undefined;
	}

	serialize(): object {
		return {
			game: Game.Reefscape2025,
			auto: {
				coral1: this.autoCoralLvl1,
				coral2: this.autoCoralLvl2,
				coral3: this.autoCoralLvl3,
				coral4: this.autoCoralLvl4,
				barge: this.autoBarge,
				processor: this.autoProcessor,
				mobility: this.autoMobility,
			},
			teleop: {
				coral1: this.teleopCoralLvl1,
				coral2: this.teleopCoralLvl2,
				coral3: this.teleopCoralLvl3,
				coral4: this.teleopCoralLvl4,
				barge: this.teleopBarge,
				processor: this.teleopProcessor,
				fouls: this.fouls,
				defense: this.defense,
			},
			endgame: {
				park: this.park,
				shallow: this.shallow,
				deep: this.deep,
				time_climbed_at: this.timeClimbedAt ? this.timeClimbedAt : 0,
			},
		};
	}

	check(): boolean {
		return true;
	}
}
