import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function urlshort(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;
  if (req.method === "POST") {
    if (!url.includes("https://www.")) {
      return res.json("Url inválida");
    }

    const chamada = await axios({
      method: "post",
      url: process.env.BITLY_URL,
      headers: {
        Authorization: `${process.env.BITLY_KEY}`,
      },
      data: {
        long_url: url,
      },
    })
      .then((response) => response.data)
      .then((response) => response.link);

    return res.json(chamada);
  } else {
    res.status(400).json("methodo invalido");
  }
}
