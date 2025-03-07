# WARP7 Scouting App

## Required programs

- [Git](https://git-scm.org/download) or [GitHub Desktop](https://desktop.github.com/download/) (if you're not familiar with the command line)
- [NodeJS](https://nodejs.org), download [this](https://nodejs.org/dist/v22.13.1/node-v22.13.1-win-x64.zip) if the installer needs admin
- [Visual Studio Code](https://code.visualstudio.com) with these extensions:
  - JavaScript and TypeScript
  - Tailwind CSS IntelliSense (optional)
  
## Instructions

1. Clone the repository from https://github.com/Team865/scouting-app-865
2. In VS Code, do File > Open Folder, and select the folder you cloned it to
3. Press Ctrl+Shift+\` to open a terminal, and type `npm run dev` then press Enter
4. In your browser, go to [http://localhost:3000/]()

## Adding new games

note: YYYY means the game's year, Name mean's the game's name in Pascal case (i.e. Name = Reefscape, YYYY = 2025)

1. add the game to the `Game` enum in `app/lib/games.ts`, like `NameYYYY = "NameYYYY"`
2. add a new file called `app/lib/games/YYYY.ts`
3. define `GameDataYYYY` in the file, like `GameData2025`, with all the functions from the `GameData` interface
4. implement the game data functions
5. add a new `GameInfo` to the `games` array in `app/lib/games.ts`:
```typescript
    [Game.NameYYYY]: {
        name: "Name (YYYY)",
        createData() {
            return new GameDataYYYY();
        },
        links: [
            { name: 'Auto', href: '/YYYY/auto' },
            { name: 'Teleop', href: '/YYYY/teleop' },
            { name: 'Endgame', href: '/YYYY/endgame' }
        ],
        field: { normal: '/YYYY/field.png', flipped: '/YYYY/field_flipped.png' }
    },
```
6. make a `YYYY/` folder in `app/`, and make folders for the pages (usually auto, teleop, and endgame)
7. make a `YYYY/` folder in `public/`, and add the field images (normal and flipped, as referenced in `GameInfo`)
8. change the default game in `app/lib/context.ts` to your new one
9. ensure it all works by submitting a report and looking at the JSON in the browser developer console
10.  follow the [backend instructions](https://github.com/Team865/scouting-backend-865)

## Setting up your own version

1. modify `app/lib/backend.ts` with your backend (I should probably change this to be based on the environment at build time).
2. remove the easter egg images in `public/` or add your own, and update/remove `images` in `app/submit/page.tsx`
3. [set up the backend](https://github.com/Team865/scouting-backend-865)
4. set up nginx or something, the backend doesn't work with CORS for some reason, so you want them on the same domain.
