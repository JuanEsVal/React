import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";

describe('Test component <09-promesas />', () => { 

   
    test('getHeroById debe retornar un heroe', (done) => {  // done me ayuda a esperar la respuesta asincrona

     const id = 1;
     
     getHeroeByIdAsync(id)
     .then( hero => {
         
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
        done() // Jest espera hasta que llegue la respuesta. Dentro del .then()
     })

   })


//    test('getHeroById debe retornar un error por el catch si heroe no existe', (done) => { 

//     const id = 1;
    
//     getHeroeByIdAsync(id)
//     .then( hero => {
//         expect(hero).toBeFalsy()
//         done()
//     })
//     .catch(error => {
//         expect(error).toBe(`No seencontro el heroe con id ${id}`)
//         done() // espera la respuesta hasta que llegue o saca error
//         })
//     })
}) 