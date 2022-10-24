
import {getSaludo} from '../src/base-pruebas/02-template-string'

    test( 'Response: getSaludo(data) debe retornar "Hola Juan"',() => { 

        const message = getSaludo('Hola Juan');

        // expect( message ).toBe(`Hola ${ name }`)
        expect(message).toBe('Hola Juan');   
        
     });


// import {getSaludo} from '../src/base-pruebas/02-template-string'

// describe('Pruebas en 02-template-string ', () => { 

//     test('getSaludo debe retornar "Hola Juan"', () => { 

//         const name = 'Juan';
//         const message = getSaludo( name );

//         // expect( message ).toBe(`Hola ${ name }`)
//         expect(message).toBe(`Hola ${name}`);   
//      });
//  });
