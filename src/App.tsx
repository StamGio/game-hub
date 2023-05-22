import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import Platformselector from "./components/Platformselector";

import { Genres } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import Shorting from "./components/Shorting";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // Query Object Pattern

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: '"nav " " main"',
        lg: '"nav nav" "aside main"', // 1026px
      }}
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack marginBottom={2}>
          <Platformselector
            selectedPlatform={gameQuery.platform}
            onselectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <Shorting
            sortOrder={gameQuery.sortOrder}
            onSelectedsortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
