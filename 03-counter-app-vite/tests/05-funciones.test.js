
import {getUser} from '../src/base-pruebas/05-funciones'
import {getUsuarioActivo} from '../src/base-pruebas/05-funciones'

describe( 'Probando la funcion getUsers...', () => {

    test( 'Debe retornar un Objeto...', () =>{       
        
        const user = getUser();

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        expect( testUser ).toStrictEqual( user );  // toEqual funciona igual
    })



    test('Debe retornar un objeto y una variable nombre', () => {

        const name = 'El_Papi1502';          
        // const usuarioActivo = getUsuarioActivo(name)  
        
        expect( getUsuarioActivo(name) ).toStrictEqual( {
            uid: 'ABC567',
            username: name
        } );  
    })
})