'use client'

import { Field, Input, Label, Textarea } from "@headlessui/react";
import { ChangeEventHandler, JSX } from "react"

type Props = {
    children?: string | JSX.Element | JSX.Element[],
    inputName: string,
    value?: string,
    defaultValue?: string,
    type?: "text" | "number",
    className?: string,
    labelClassName?: string,
    inputClassName?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export default function TextField(props: Props) {
    return (
        <Field className={`flex flex-col justify-center ${props.className}`}>
            <Label className={`text-center ${props.labelClassName}`}>{props.children}</Label>
            <Textarea name={props.inputName} value={props.value} defaultValue={props.defaultValue} className={`border-b-2 border-b-gray-500 bg-transparent ${props.inputClassName}`} onChange={props.onChange} />
        </Field>
    );
}
