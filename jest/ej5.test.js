import { mostrarValores } from "./ej5";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test Ej 5", () => {
  afterEach(() => {
    log.mockReset();
  });

  test("se muestran los valores en pantalla", () => {
    mostrarValores();

    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenCalledWith("Carlos");
    expect(log).toHaveBeenCalledWith("Gez");
    expect(log).toHaveBeenCalledWith(26);
    expect(log).toHaveBeenCalledWith("29/06/1998");
    expect(log).toHaveBeenCalledWith("General Artigas");
  });
});