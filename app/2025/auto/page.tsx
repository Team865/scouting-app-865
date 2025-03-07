'use client'

import { AppContext } from "@/app/lib/context";
import { GameData2025 } from "@/app/lib/games/2025";
import Checkbox from "@/app/ui/Checkbox";
import ScoreCounter from "@/app/ui/ScoreCounter";
import { useContext } from "react";

export default function AutoPage() {
  const context = useContext(AppContext);
  const data = context.gameData as GameData2025;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Auto</p>
      </div>
      <div className="flex flex-col m-4 w-full items-center">
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={data.autoCoralLvl1} onChange={value => data.autoCoralLvl1 = value}>Level 1 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={data.autoCoralLvl2} onChange={value => data.autoCoralLvl2 = value}>Level 2 Coral</ScoreCounter>
        </div>
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={data.autoCoralLvl3} onChange={value => data.autoCoralLvl3 = value}>Level 3 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={data.autoCoralLvl4} onChange={value => data.autoCoralLvl4 = value}>Level 4 Coral</ScoreCounter>
        </div>
        <ScoreCounter className="m-4" initialValue={data.autoProcessor} onChange={value => data.autoProcessor = value}>Processor</ScoreCounter>
        <ScoreCounter className="m-4" initialValue={data.autoBarge} onChange={value => data.autoBarge = value}>Barge</ScoreCounter>
        <Checkbox className="m-4" value={data.autoMobility} onChange={checked => data.autoMobility = checked}>Mobility</Checkbox>
      </div>
    </div>
  );
}
