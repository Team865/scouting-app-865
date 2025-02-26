'use client'

import { Game, games } from "../lib/games";

import Dropdown from "./Dropdown";
import Link from 'next/link';
import { MenuItem } from "@headlessui/react";
import { useContext } from "react";
import { AppContext } from "../lib/context";

export default function NavBar() {
    const context = useContext(AppContext);
    const links = [
        {name: "Home", href: "/"},
        ...games[context.game].links,
        {name: "Submit", href: "/submit"}
    ];
    // percentage of the nav bar each thing on it takes up
    const width = 100 / (links.length + 2) - 1; // 2 more than number of dynamic buttons for game chooser and home button, -1% just looks nice
    const buttonClass = "flex h-[48px] grow items-center justify-center rounded-md bg-gray-900 p-3 text-sm font-medium hover:bg-sky-300 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    return (
        <div className="flex flex-row justify-evenly">
            {/* game chooser dropdown, styled to blend in with other buttons */}
            {/*<Dropdown
                name={games[context.game].name}
                className={buttonClass}
                style={{ width: `${width}%` }}
            >
                {Object.entries(games).map((game) => {
                    return (
                        <div key={game[0]}>
                            <MenuItem>
                                <Link
                                    href={'/'}
                                    onClick={() => {
                                        context.game = game[0] as Game;
                                        context.gameData = games[context.game].createData();
                                    }}
                                >
                                    <p>{game[1].name}</p>
                                </Link>
                            </MenuItem>
                        </div>
                    );
                })}
            </Dropdown>*/}

            {/* nav bar buttons, Home is special, other ones are rendered dynamically */}

            {links.map((link) => {
                //const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={buttonClass}
                        style={{ width: `${width}%` }}
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}