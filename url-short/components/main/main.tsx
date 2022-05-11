import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { AlertDialog } from "./alert";
import copy from "copy-to-clipboard";
import style from "./style.module.scss";
import axios from "axios";
import { SweetAlertIcon } from "sweetalert2";

export function Main() {
  const [LongUrl, setLongUrl] = useState("");
  const [shortUrl, setShort] = useState("");

  async function transformShortUrl(value: string) {
    if (value === "") {
      const propriedades = {
        titulo: "Digite uma url primeiro",
        texto: "",
        tipo: "error" as SweetAlertIcon,
      };

      setShort("digite uma url valida");
      return AlertDialog(propriedades);
    }

    const api = process.env.HOME
      ? process.env.HOME
      : "https://url-short-blue.vercel.app/api/api";

    const chamada = await axios.post(`${api}`, {
      url: LongUrl,
    });

    if (chamada.data === "Url inválida") {
      setLongUrl("digite uma url válida");
      setShort("Url inválida");

      const errorUrl = {
        titulo: "Url inválida",
        texto: ``,
        tipo: "error" as SweetAlertIcon,
      };

      return AlertDialog(errorUrl);
    }

    setShort(chamada.data);
    copy(chamada.data);

    const confirmaçao = {
      titulo: "Url Copiada",
      texto: `${chamada.data}`,
      tipo: "success" as SweetAlertIcon,
    };

    return AlertDialog(confirmaçao);
  }

  return (
    <main className={style.Container}>
      <span>
        <Input
          value={LongUrl}
          background="white"
          onChange={(value: ChangeEvent<HTMLInputElement>) =>
            setLongUrl(value.target.value)
          }
          placeholder="Digite sua url aqui"
        />

        <Input
          value={shortUrl}
          onChange={(value: ChangeEvent<HTMLInputElement>) =>
            setShort(shortUrl)
          }
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
