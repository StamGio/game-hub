import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchedGames {
  count: number;
  results: [];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClients
      // <FetchedGames> is a Generic type argument to know the response og the get request
      .get<FetchedGames>("/games", { signal: controller.signal })
      // tranform the data to body
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // cleaner function : clean and finally abort
    return () => controller.abort();
    // never forget the [] of dependencies in the end
  }, []);

  return { games, error };
};

export default useGames;
