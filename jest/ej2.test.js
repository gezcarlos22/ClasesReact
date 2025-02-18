import Variables from "./ej2";

describe("Test Ej 2", () => {
  test("la variable nombre está declarada y tiene valor", () => {
    expect(Variables.nombre).toBe("Carlos");
  });

  test("la variable apellido está declarada y tiene valor", () => {
    expect(Variables.apellido).toBe("Gez");
  });

  test("la variable edad está declarada y tiene valor", () => {
    expect(Variables.edad).toBe(26);
  });

  test("la variable fechaDeNacimiento está declarada y tiene valor", () => {
    expect(Variables.fechaDeNacimiento).toBe("29/06/1998");
  });

  test("la variable direccion está declarada y tiene valor", () => {
    expect(Variables.direccion).toBe("General Artigas");
  });
});