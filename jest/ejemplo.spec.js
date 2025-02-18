import { suma } from "./suma.js";

describe("Nuestro primer test", () => {
    test("Suma de dos valores y retorna el resultado",()=>{
        expect(suma(2,2)).toBe(4)
    });

    test("Suma de dos valores negativos",()=>{
        expect(suma(-2,-2)).toBe(-4)
    });

    test("Suma numero mas string",()=>{
        expect(suma("2",2)).toBe(4)
    });

    test("Retorna NaN si pasa un string que no es un numero",()=>{
        expect(suma("carlos",2)).toBe(NaN)
    });
});

