import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";

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
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList onSelectedGenre={(genre) => setselectedGenre(genre)} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
