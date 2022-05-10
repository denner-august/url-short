import axios from "axios";
import useSWR from "swr";

export function useFetchUrl(url: string) {
  const fetcher = (url: string) => axios.post(url).then((res) => res.data);

  const { data, error } = useSWR(
    "https://api-ssl.bitly.com/v4/shorten",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    error,
  };
}
