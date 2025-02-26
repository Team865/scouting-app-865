'use client'

import { AppContext } from "@/app/lib/context";
import Checkbox from "@/app/ui/Checkbox";
import ScoreCounter from "@/app/ui/ScoreCounter";
import { useContext } from "react";

export default function TeleopPage() {
  const context = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Teleop</p>
      </div>
      <div className="flex flex-col m-4 w-full items-center">
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={context.getData().teleopCoralLvl1} onChange={change => context.getData().teleopCoralLvl1 += change}>Level 1 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={context.getData().teleopCoralLvl2} onChange={change => context.getData().teleopCoralLvl2 += change}>Level 2 Coral</ScoreCounter>
        </div>
        <div className="flex flex-row">
          <ScoreCounter className="m-4" initialValue={context.getData().teleopCoralLvl3} onChange={change => context.getData().teleopCoralLvl3 += change}>Level 3 Coral</ScoreCounter>
          <ScoreCounter className="m-4" initialValue={context.getData().teleopCoralLvl4} onChange={change => context.getData().teleopCoralLvl4 += change}>Level 4 Coral</ScoreCounter>
        </div>
        <ScoreCounter className="m-4" initialValue={context.getData().teleopProcessor} onChange={change => context.getData().teleopProcessor += change}>Processor</ScoreCounter>
        <ScoreCounter className="m-4" initialValue={context.getData().teleopBarge} onChange={change => context.getData().teleopBarge += change}>Barge</ScoreCounter>
        <ScoreCounter className="m-4" initialValue={context.getData().fouls} onChange={change => context.getData().fouls += change}>Fouls</ScoreCounter>
        <Checkbox className="m-4" value={context.getData().defense} onChange={checked => context.getData().defense = checked}>Defense</Checkbox>
      </div>
    </div>
  );
}
