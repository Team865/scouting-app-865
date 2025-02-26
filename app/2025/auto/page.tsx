'use client'

import { AppContext } from "@/app/lib/context";
import Checkbox from "@/app/ui/Checkbox";
import ScoreCounter from "@/app/ui/ScoreCounter";
import { useContext } from "react";

export default function AutoPage() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Auto</p>
      </div>
      <div className="flex flex-col m-4 w-full items-center">
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={context.getData().autoCoralLvl1} onChange={change => context.getData().autoCoralLvl1 += change}>Level 1 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={context.getData().autoCoralLvl2} onChange={change => context.getData().autoCoralLvl2 += change}>Level 2 Coral</ScoreCounter>
        </div>
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={context.getData().autoCoralLvl3} onChange={change => context.getData().autoCoralLvl3 += change}>Level 3 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={context.getData().autoCoralLvl4} onChange={change => context.getData().autoCoralLvl4 += change}>Level 4 Coral</ScoreCounter>
        </div>
        <ScoreCounter className="m-4" initialValue={context.getData().autoProcessor} onChange={change => context.getData().autoProcessor += change}>Processor</ScoreCounter>
        <ScoreCounter className="m-4" initialValue={context.getData().autoBarge} onChange={change => context.getData().autoBarge += change}>Barge</ScoreCounter>
        <Checkbox className="m-4" value={context.getData().autoMobility} onChange={checked => context.getData().autoMobility = checked}>Mobility</Checkbox>
      </div>
    </div>
  );
}
