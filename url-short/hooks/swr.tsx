import axios from "axios";

export async function UseFetchUrl(url: string) {
  const chamada = await axios({
    method: "post",
    url: process.env.NEXT_PUBLIC_BITLY_URL,
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_BITLY_KEY}`,
    },
    data: {
      long_url: url,
    },
  })
    .then((response) => response.data)
    .then((response) => response.link);

  return chamada;
}
