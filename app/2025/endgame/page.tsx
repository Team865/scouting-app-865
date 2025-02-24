'use client'

import { AppContext } from "@/app/lib/context";
import Checkbox from "@/app/ui/Checkbox";
import TextField from "@/app/ui/TextField";
import { useContext, useState } from "react";

export default function EndgamePage() {
  const context = useContext(AppContext);
  const [climbTime, setClimbTime] = useState(context.getData().timeClimbedAt);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Endgame</p>
      </div>
      <div className="flex flex-col m-4 w-full items-center">
        <Checkbox className="m-4" value={context.getData().park} onChange={checked => context.getData().park = checked}>Park</Checkbox>
        <Checkbox className="m-4" value={context.getData().shallow} onChange={checked => context.getData().shallow = checked}>Shallow</Checkbox>
        <Checkbox className="m-4" value={context.getData().deep} onChange={checked => context.getData().deep = checked}>Deep</Checkbox>
        <TextField onChange={(e) => { context.getData().timeClimbedAt = e.target.value; setClimbTime(context.getData().timeClimbedAt) }} inputName="time-climbed-at" className="m-4" type="number" value={climbTime}  inputClassName="w-30 text-center">Time climbed at</TextField>
      </div>
    </div>
  );
}
