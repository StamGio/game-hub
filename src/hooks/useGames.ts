import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchedGames {
  count: number;
  results: [];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClients
      // <FetchedGames> is a Generic type argument to know the response og the get request
      .get<FetchedGames>("/games", { signal: controller.signal })
      // tranform the data to body
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // cleaner function : clean and finally abort
    return () => controller.abort();
    // never forget the [] of dependencies in the end
  }, []);

  return { games, error, loading };
};

export default useGames;
