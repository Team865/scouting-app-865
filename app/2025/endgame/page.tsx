'use client'

import { AppContext } from "@/app/lib/context";
import { GameData2025 } from "@/app/lib/games/2025";
import Checkbox from "@/app/ui/Checkbox";
import TextField from "@/app/ui/TextField";
import { useContext, useState } from "react";

export default function EndgamePage() {
  const context = useContext(AppContext);
  const data = context.gameData as GameData2025;
  const [climbTime, setClimbTime] = useState(data.timeClimbedAt);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Endgame</p>
      </div>
      <div className="flex flex-col m-4 w-full items-center">
        <Checkbox className="m-4" value={data.park} onChange={checked => data.park = checked}>Park</Checkbox>
        <Checkbox className="m-4" value={data.shallow} onChange={checked => data.shallow = checked}>Shallow</Checkbox>
        <Checkbox className="m-4" value={data.deep} onChange={checked => data.deep = checked}>Deep</Checkbox>
        <TextField onChange={(e) => { data.timeClimbedAt = e.target.value; setClimbTime(data.timeClimbedAt) }} inputName="time-climbed-at" className="m-4" type="number" value={climbTime}  inputClassName="w-30 text-center">Time climbed at</TextField>
      </div>
    </div>
  );
}
