import { usContext } from "../src/base-pruebas/06-deses-obj"


describe( 'Probando la funcion deses-obj...', () => {

    test('Debe retornar un objeto ', () => {

            const clave= 'Ironman'
            const edad= 45
            const latlng = { 
                lat: 14.1232,
                lng: -12.3232
                }

            const miObj = {
                clave,
                edad,
                latlng
            }          
        

        console.log('1: ', usContext( clave, edad));
        console.log('2: ', miObj );

      
       expect(usContext( clave, edad)).toEqual(miObj)
    })
})
