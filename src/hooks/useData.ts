import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchedData<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClients
        // <FetchedGenres> is a Generic type argument to know the response of the get request
        .get<FetchedData<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        // tranform the data to body
        .then((res) => {
          setData(res.data.results);
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
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
