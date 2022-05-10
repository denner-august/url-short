import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { AlertDialog } from "./alert";
import { useFetchUrl } from "../../hooks/swr";
import copy from "copy-to-clipboard";
import style from "./style.module.scss";

export function Main() {
  // const [LongUrl, setLongUrl] = useState("https://www.google.com.br/");
  const [shortUrl, setShrotUrl] = useState("");

  const { data, error } = useFetchUrl("");

  function transformShortUrl(value: string) {
    if (value === "") {
      return AlertDialog();
    }

    if (data) {
      setShrotUrl(data.link);
      copy(shortUrl);
    }

    console.log(data);
  }

  return (
    <main className={style.Container}>
      <span>
        <Input
          background="white"
          // onChange={(value) => setLongUrl(value.target.value)}
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
          // onClick={() => transformShortUrl(LongUrl)}
          colorScheme="blue"
        >
          Encurtar
        </Button>
      </span>
    </main>
  );
}
