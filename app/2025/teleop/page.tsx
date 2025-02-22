'use client'

import { useContext } from "react";
import { AppContext } from "../../lib/context";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";

function changeState(value: boolean) {
  return !value;
}

export default function Page() {
  const context = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col m-4 w-full justify-center">
            <p className="text-lg text-center">Teleop</p>
          </div>
          <div className="flex flex-col m-4 w-full items-center">
            <h1>Level 1 Coral Scored</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.l1CoralTeleop --;
                window.location.reload();
                }}>-</Button>
              <b>{context.l1CoralTeleop}</b>
              <Button className="m-2" onClick={_ => {
                context.l1CoralTeleop ++;
                window.location.reload();
                }}>+</Button>
            </div>
            <h1>Level 2 Coral Scored</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.l2CoralTeleop --;
                window.location.reload();
                }}>-</Button>
              <b>{context.l2CoralTeleop}</b>
              <Button className="m-2" onClick={_ => {
                context.l2CoralTeleop ++;
                window.location.reload();
                }}>+</Button>
            </div>
            <h1>Level 3 Coral Scored</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.l3CoralTeleop --;
                window.location.reload();
                }}>-</Button>
              <b>{context.l3CoralTeleop}</b>
              <Button className="m-2" onClick={_ => {
                context.l3CoralTeleop ++;
                window.location.reload();
                }}>+</Button>
            </div>
            <h1>Level 4 Coral Scored</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.l4CoralTeleop --;
                window.location.reload();
                }}>-</Button>
              <b>{context.l4CoralTeleop}</b>
              <Button className="m-2" onClick={_ => {
                context.l4CoralTeleop ++;
                window.location.reload();
                }}>+</Button>
            </div>
            <h1>Algae Scored in Net</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.algaeNetTeleop --;
                window.location.reload();
                }}>-</Button>
              <b>{context.algaeNetTeleop}</b>
              <Button className="m-2" onClick={_ => {
                context.algaeNetTeleop ++;
                window.location.reload();
                }}>+</Button>
            </div>
            <h1>Algae Scored in Processor</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.algaeProcessorTeleop --;
                window.location.reload();
                }}>-</Button>
              <b>{context.algaeProcessorTeleop}</b>
              <Button className="m-2" onClick={_ => {
                context.algaeProcessorTeleop ++;
                window.location.reload();
                }}>+</Button>
            </div>
            <h1>Fouls</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.foul --;
                window.location.reload();
                }}>-</Button>
              <b>{context.foul}</b>
              <Button className="m-2" onClick={_ => {
                context.foul ++;
                window.location.reload();
                }}>+</Button>
            </div>
            <h1>Tech Fouls</h1>            
            <div className="flex flex-row m-4">
              <Button className="m-2" onClick={_ => {
                context.techFoul --;
                window.location.reload();
              }}>-</Button>
              <b>{context.techFoul}</b>
              <Button className="m-2" onClick={_ => {context.techFoul ++;
                window.location.reload();}}>+</Button>
            </div>
            <Checkbox className="m-2" value={context.defense} onChange={value => changeState(value)}>Defense</Checkbox>
          </div>
        </div>
  );
}
