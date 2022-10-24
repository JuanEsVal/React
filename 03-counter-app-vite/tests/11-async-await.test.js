
import { getImagen } from '../src/base-pruebas/11-async-await'


describe('Test component <async await />', () => { 

    test('GetImagen debe retornar un error por no encontrar un url', async() => { 
        
        const resp = await getImagen()
        expect(typeof resp).toBe('string')    
    })
 } ) 
