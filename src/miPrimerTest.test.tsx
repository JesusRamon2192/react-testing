import { describe, it, expect } from "vitest";

describe('Mi primer test', () => {
    it('la suma de dos numeros', () => {
        const suma = (a: number, b: number) => a + b;
        const resultado = suma(2, 3);
        expect(resultado).toBe(5);
    })

    it('dos textos iguales', () => {
        const text1 = 'Platzi';
        const text2 = 'Platzi';
        expect(text1).toBe(text2);
    })

    it('la multiplicación de dos números', () => {
        const multiplicacion = (a: number, b: number) => a * b;
        const resultado = multiplicacion(4, 5);
        expect(resultado).toBe(20);
    });

    it('la división de dos números', () => {
        const division = (a: number, b: number) => a / b;
        const resultado = division(10, 2);
        expect(resultado).toBe(5);
    });

    it('dos arrays iguales', () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];
        expect(array1).toEqual(array2);
    });
})