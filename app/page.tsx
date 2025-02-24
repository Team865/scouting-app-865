'use client'

import { useCallback, useContext, useState } from "react";
import { AppContext } from "./lib/context";
import TextField from "./ui/TextField";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { games } from "./lib/games";
import { AlliancePosition, BluePositions, RedPositions } from "./lib/alliance";
import RadioButton from "./ui/RadioButton";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";

export default function HomePage() {
	const context = useContext(AppContext);

	// in order to clear this page, these have to be tracked here too.
	// the other pages re-render when you switch back to them after clearing, so it's not necessary on them.
	const [team, setTeam] = useState(context.team);
	const [match, setMatch] = useState(context.match);
	const [position, setPosition] = useState(context.position);
	const clearPage = () => {
		setTeam("");
		setMatch("");
		setPosition(AlliancePosition.None);
	};
	const [flipField, setFlipped] = useState(false);

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col m-4 w-full justify-center">
				<p className="text-lg text-center">Home</p>
			</div>
			<div className="flex flex-col m-4 w-min items-center">
				<TextField inputName="scouter-name" value={context.scouterName} onChange={(e) => context.scouterName = e.target.value} className="p-2" inputClassName="text-center">Scouter Name</TextField>
				<div className="flex flex-row m-4">
					<TextField type="number" inputName="team-number" value={team} onChange={(e) => { context.team = e.target.value; setTeam(context.team) }} className="px-4" inputClassName="w-20 text-center">Team Number</TextField>
					<TextField type="number" inputName="match-number" value={match} onChange={(e) => { context.match = e.target.value; setMatch(context.match) }} className="px-4" inputClassName="w-20 text-center">Match Number</TextField>
				</div>
				<Button className="m-2" onClick={_ => { context.clear(); clearPage() }}>Clear data</Button>
			</div>
			<div className="flex flex-col m-4 w-full items-center">
				<RadioGroup value={position} onChange={value => { context.position = value; setPosition(context.position) }} className="flex flex-row w-52">
					<div className="flex flex-col items-right w-1/2">
						{
							// blue alliance buttons
							BluePositions.map(pos => {
								return (
									<RadioButton label={pos.toString()} value={pos} keyName={`position-${pos}`} />
								);
							})
						}
					</div>
					<div className="flex flex-col items-left w-1/2">
						{
							// red alliance buttons
							RedPositions.map(pos => {
								return (
									<RadioButton label={pos.toString()} value={pos} keyName={`position-${pos}`} />
								);
							})
						}
					</div>
				</RadioGroup>
			</div>
			<div className="flex flex-col m-4 items-center">
				<Checkbox value={context.flipField} onChange={value => { context.flipField = value; setFlipped(context.flipField) }}>Flip field</Checkbox>
				<img src={context.flipField ? games[context.game].field.flipped : games[context.game].field.normal} width="90%" />
			</div>
		</div>
	);
}
