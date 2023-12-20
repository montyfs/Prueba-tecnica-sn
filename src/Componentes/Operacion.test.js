import Operacion from './Operacion';

describe("Funcion calcular",()=>{

    test("Entrada 1",()=> {
        const result = Operacion(1);
        expect(result).toBe(0);
    });
    test("Entrada 2",()=> {
        const result = Operacion(2);
        expect(result).toBe(6);
    });
    test("Entrada 3",()=> {
        const result = Operacion(3);
        expect(result).toBe(14);
    });
    test("Entrada 4",()=> {
        const result = Operacion(4);
        expect(result).toBe(26);
    });
    test("Entrada 5",()=> {
        const result = Operacion(5);
        expect(result).toBe(39);
    });
    test("Entrada 6",()=> {
        const result = Operacion(6);
        expect(result).toBe(57);
    });
    test("Entrada 7",()=> {
        const result = Operacion(7);
        expect(result).toBe(75);
    });
    test("Entrada 8",()=> {
        const result = Operacion(8);
        expect(result).toBe(96);
    });
    test("Entrada 9",()=> {
        const result = Operacion(9);
        expect(result).toBe(114);
    });
    test("Entrada 10",()=> {
        const result = Operacion(10);
        expect(result).toBe(126);
    });
    
});