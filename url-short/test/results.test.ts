import axios from "axios";

describe("testando chamadas a api", () => {
  test("testando se ao passar string incorreta retorna erro", async () => {
    const chamada = await axios.post(`http://localhost:3000/api/api`, {
      url: "google.com.br/",
    });

    expect(`${chamada.data}`).toMatch("Url inválida");
  });

  test("testando o retorono da api ao passar string correta", async () => {
    const chamada = await axios.post(`http://localhost:3000/api/api`, {
      url: "https://www.google.com.br/",
    });

    expect(typeof `${chamada.data}`).toEqual("string");
  });
});
