import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSceleton from "./GameCardSceleton";
import GameCardComponent from "./GameCardComponent";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text color="#E53E3E">{error}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {loading &&
        Skeletons.map((skeleton) => (
          <GameCardComponent key={skeleton}>
            <GameCardSceleton />
          </GameCardComponent>
        ))}
      {data.map((game) => (
        <GameCardComponent key={game.id}>
          <GameCard game={game} />
        </GameCardComponent>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
