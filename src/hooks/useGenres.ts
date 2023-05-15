import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Genres {
  id: number;
  name: string;
}

interface FetchedGenres {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClients
      // <FetchedGenres> is a Generic type argument to know the response of the get request
      .get<FetchedGenres>("/genres", { signal: controller.signal })
      // tranform the data to body
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, error, loading };
};

export default useGenres;
