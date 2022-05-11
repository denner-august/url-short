import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { AlertDialog } from "./alert";
import { UseFetchUrl } from "../../hooks/swr";
import copy from "copy-to-clipboard";
import style from "./style.module.scss";
import axios from "axios";

export function Main() {
  const [LongUrl, setLongUrl] = useState("");
  const [shortUrl, setShrotUrl] = useState("");

  async function transformShortUrl(value: string) {
    if (value === "") {
      return AlertDialog();
    }

    // const chamada = await UseFetchUrl(LongUrl);
    //   const chamada = await axios.post(`http://localhost:3000/${LongUrl}`);

    //   setShrotUrl(chamada);
    //   copy(chamada);
  }

  return (
    <main className={style.Container}>
      <span>
        <Input
          background="white"
          onChange={(value) => setLongUrl(value.target.value)}
          placeholder="Digite sua url aqui"
        />

        <Input
          defaultValue={shortUrl}
          onChange={() => setShrotUrl(shortUrl)}
          background="white"
          placeholder="Url Encurtada"
        />
        <Button
          textColor="black"
          onClick={() => transformShortUrl(LongUrl)}
          colorScheme="blue"
        >
          Encurtar
        </Button>
      </span>
    </main>
  );
}
