import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import Platformselector from "./components/Platformselector";

function App() {
  const [selectedGenre, setselectedGenre] = useState<Genres | null>(null);

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
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setselectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Platformselector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
