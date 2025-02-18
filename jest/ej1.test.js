import {
    nombre,
    apellido,
    edad,
    fechaDeNacimiento,
    direccion,
  } from "./ej1";
  
  describe("Test Ej 1", () => {
    test("la variable nombre está declarada pero no tiene valor", () => {
      expect(nombre).toBeUndefined();
    });
  
    test("la variable apellido está declarada pero no tiene valor", () => {
      expect(apellido).toBeUndefined();
    });
  
    test("la variable edad está declarada pero no tiene valor", () => {
      expect(edad).toBeUndefined();
    });
  
    test("la variable fechaDeNacimiento está declarada pero no tiene valor", () => {
      expect(fechaDeNacimiento).toBeUndefined();
    });
  
    test("la variable direccion está declarada pero no tiene valor", () => {
      expect(direccion).toBeUndefined();
    });
  });