import { number } from "prop-types";
import { retornaArreglo } from "../src/base-pruebas/07-deses-arr"

describe('Test component <Component />', () => { 

    test('Debe retornar un string y un number', () => { 
        
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        
        expect(letters).toEqual(expect.any(String));
        expect(numbers).toStrictEqual(expect.any(Number));

    })
 } ) 
