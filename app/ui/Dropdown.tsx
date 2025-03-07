import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { CSSProperties, JSX } from 'react';

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
    name: string,
    className?: string,
    style?: CSSProperties
}

export default function Dropdown(props: Props) {
    return (
        <Menu>
            <MenuButton className={props.className} style={props.style}>{props.name}</MenuButton>
            <MenuItems anchor={"top"}>
                {props.children}
            </MenuItems>
        </Menu>
    );
}