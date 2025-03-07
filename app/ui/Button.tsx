'use client'

import { Button as HeadlessButton } from "@headlessui/react";
import { JSX, MouseEventHandler } from "react";

type Props = {
    children?: string | JSX.Element | JSX.Element[],
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
};

export default function Button(props: Props) {
    return (
        <HeadlessButton className={`bg-gray-600 hover:bg-gray-100 rounded-xl px-3 py-2 ${props.className}`} onClick={props.onClick}>{props.children}</HeadlessButton>
    )
}