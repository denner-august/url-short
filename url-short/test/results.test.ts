import axios from "axios";

describe("testando chamadas a api", () => {
  const api = process.env.PRODUCTION
    ? process.env.PRODUCTION
    : "http://localhost:3000/api/api";
  test("passar string incorreta deve retorna erro", async () => {
    const chamada = await axios.post(`${api}`, {
      url: "google.com.br/",
    });

    expect(`${chamada.data}`).toMatch("Url inválida");
  });

  test("testando o retorno da api ao passar string correta", async () => {
    const chamada = await axios.post(`${api}`, {
      url: "https://www.google.com.br/",
    });

    expect(typeof `${chamada.data}`).toEqual("string");
  });
});
