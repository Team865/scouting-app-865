'use client'

import { AppContext } from "@/app/lib/context";
import { GameData2025 } from "@/app/lib/games/2025";
import Checkbox from "@/app/ui/Checkbox";
import ScoreCounter from "@/app/ui/ScoreCounter";
import { useContext } from "react";

export default function TeleopPage() {
  const context = useContext(AppContext);
  const data = context.gameData as GameData2025;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Teleop</p>
      </div>
      <div className="flex flex-col m-4 w-full items-center">
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={data.teleopCoralLvl1} onChange={value => data.teleopCoralLvl1 = value}>Level 1 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={data.teleopCoralLvl2} onChange={value => data.teleopCoralLvl2 = value}>Level 2 Coral</ScoreCounter>
        </div>
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={data.teleopCoralLvl3} onChange={value => data.teleopCoralLvl3 = value}>Level 3 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={data.teleopCoralLvl4} onChange={value => data.teleopCoralLvl4 = value}>Level 4 Coral</ScoreCounter>
        </div>
        <ScoreCounter className="m-4" initialValue={data.teleopProcessor} onChange={value => data.teleopProcessor = value}>Processor</ScoreCounter>
        <ScoreCounter className="m-4" initialValue={data.teleopBarge} onChange={value => data.teleopBarge = value}>Barge</ScoreCounter>
        <ScoreCounter className="m-4" initialValue={data.fouls} onChange={value => data.fouls = value}>Fouls</ScoreCounter>
        <Checkbox className="m-4" value={data.defense} onChange={checked => data.defense = checked}>Defense</Checkbox>
      </div>
    </div>
  );
}
