'use client'

import { JSX, useState } from "react"
import Button from "./Button"

type Props = {
    children?: string | JSX.Element | JSX.Element[],
    className?: string,
    initialValue: number,
    minValue?: number,
    maxValue?: number,
    increment?: number,
    onChange?: ((change: number) => void) | undefined,
}

export default function ScoreCounter(props: Props) {
    const [value, setValue] = useState(props.initialValue);
    const getIncrement = (): number => {
        return props.increment != undefined ? props.increment : 1;
    };
    const clamp = (value: number): number => {
        const minValue = props.minValue != undefined ? props.minValue : 0;
        const maxValue = props.maxValue != undefined ? props.maxValue : Infinity;
        return Math.max(minValue, Math.min(value, maxValue));
    };
    const onChange = (change: number) => {
        if (props.onChange != undefined) {
			const newValue = clamp(value + change);
            props.onChange(newValue); setValue(newValue);
        }
    };

    return (
        <div className={`flex flex-col items-center ${props.className}`}>
            {props.children}
            <div className="flex flex-row">
                <Button onClick={() => onChange(-Math.abs(-getIncrement()))}>-</Button>
                <p className="mx-2">{value}</p>
                <Button onClick={() => onChange(Math.abs(getIncrement()))}>+</Button>
            </div>
        </div>
    )
}
