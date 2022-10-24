import { getHeroeById } from "../src/base-pruebas/08-imp-exp";
// import { getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";

describe('Test component < />', () => { 

    test('Ver heroe por id', () => { 
        
        const id1 = 1;
        const id2 = 2;
        const id3 = 3;
        const id4 = 4;
        const id5 = 5;

        const hero1 = getHeroeById(id1)
        const hero2 = getHeroeById(id2)
        const hero3 = getHeroeById(id3)
        const hero4 = getHeroeById(id4)
        const hero5 = getHeroeById(id5)

        expect(hero1).toEqual({id: 1, name: 'Batman', owner: 'DC'} );
        expect(hero2).toEqual({id: 2, name: 'Spiderman', owner: 'Marvel'} )
        expect(hero3).toEqual({id: 3, name: 'Superman',  owner: 'DC'} )
        expect(hero4).toEqual({id: 4, name: 'Flash', owner: 'DC'} )
        expect(hero5).toEqual({id: 5, name: 'Wolverine', owner: 'Marvel'} )
     })
    
    
    //  test('Ver heroe por id', () => { 
        
    //     const id = 100;
    //     const hero = getHeroeById(id)
    //     expect(hero).toBeFalsy( ); //Null-Undefine-false, etc
       
    //  })


    //  test('Ver heroe por Owner que sea de 3 elementos DC', () => { 
        
    //     const owner = 'DC';
    //     const hero = getHeroesByOwner(owner)

    //     console.log(hero);
    //     expect(hero.length).toBe(3)   
    //     expect(hero).toEqual([
    //         { id: 1, name: 'Batman', owner: 'DC' },       
    //         { id: 3, name: 'Superman', owner: 'DC' },     
    //         { id: 4, name: 'Flash', owner: 'DC' }
    //       ])   
    //  })

    //  test('Ver heroe por Owner que sea de 2 elementos Marvel', () => { 
        
    //     const owner = 'Marvel';
    //     const hero = getHeroesByOwner(owner)

    //     console.log(hero);
    //     expect(hero.length).toBe(2)   
    //     expect(hero).toEqual(    [
    //         { id: 2, name: 'Spiderman', owner: 'Marvel' },
    //         { id: 5, name: 'Wolverine', owner: 'Marvel' } 
    //       ])   
    //  })     
 } ) 
