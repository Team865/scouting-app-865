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

note: YYYY means the game's year, Name mean's the game's name in Pascal case

1. add the game to the `Game` enum in `app/lib/games.ts`, like `NameYYYY = "YYYY"`
2. define `GameDataYYYY`, like `GameData2025`, with all the functions from the `GameData` interface
3. implement the game data functions
4. add a new `GameInfo` to the `games` array, like the `Reefscape2025` one:
```typescript
    [Game.Reefscape2025]: {
        name: "Reefscape (2025)",
        createData() {
            return new GameData2025();
        },
        links: [
            { name: 'Auto', href: '/2025/auto' },
            { name: 'Teleop', href: '/2025/teleop' },
            { name: 'Endgame', href: '/2025/endgame' }
        ],
        field: { normal: '/2025/field.png', flipped: '/2025/field_flipped.png' }
    },
```
5. make a `YYYY/` folder in `app/`, and make folders for the pages (usually auto, teleop, and endgame)
6. make a `YYYY/` folder in `public/`, and add the field images (normal and flipped, as referenced in `GameInfo`)
7. ensure it all works by submitting a report with the network tab open in your developer tools, make sure all your
   fields are in the JSON body of the request to `<backend>/warp7api/scouting/add_report`
8. follow the [backend instructions](https://github.com/Team865/scouting-backend-865)
