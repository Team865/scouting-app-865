'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/NavBar";
import { usePathname } from "next/navigation";
import Dropdown from "./ui/Dropdown";
import { useContext, useState } from "react";
import { AppContext } from "./lib/context";
import { Game, games } from "./lib/games";
import { MenuItem } from "@headlessui/react";
import Checkbox from "./ui/Checkbox";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = useContext(AppContext);
  const [game, setGame] = useState(context.game);

  const buttonClass = "bg-gray-600 hover:bg-gray-100 rounded-xl px-3 py-2 m-2";

  return (
    <html lang="en">
      <head>
        <title>WARP7 Scouting App</title>
      </head>
      <body
        className={`flex flex-col gap-auto h-dvh static ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex-grow overflow-y-auto">
          {children}
          {usePathname() == "/" ? (
            <div className="flex flex-col m-4 items-center">
              {/* really should be in /page.tsx, but I want it in this div */}
              <Checkbox className="m-2" value={context.isTest} onChange={value => context.isTest = value}>Test mode</Checkbox>

              {/* game chooser dropdown, styled to blend in with other buttons. only enabled on home page.
                defined here in order to refresh the navbar when it's used. */}
              <Dropdown
                name={games[game].name}
                className={buttonClass}
              >
                {Object.entries(games).map((e) => {
                  return (
                    <div key={e[0]} className={buttonClass}>
                      <MenuItem>
                        <Link
                          href={'/'}
                          onClick={() => {
                            context.game = e[0] as Game;
                            setGame(context.game);
                            context.gameData = games[game].createData();
                          }}
                        >
                          <p>{e[1].name}</p>
                        </Link>
                      </MenuItem>
                    </div>
                  );
                })}
              </Dropdown>
            </div>) : ""}
        </div>
        <div className="sticky bottom-0 w-full pb-2 bg-[--background]">
          <NavBar />
        </div>
      </body>
    </html>
  );
}
