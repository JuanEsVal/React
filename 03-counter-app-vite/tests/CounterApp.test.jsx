import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'


describe( 'Prueba en <CounterApp />', () => {

    const value = 100

    test('Debe hacer Match con el Snapshot', () => { 

        const { container } = render( <CounterApp value={value} />)
        expect ( container ).toMatchSnapshot();

        screen.debug();
    })

    test('Debe mostrar valor inicial de value (100)', () => { 

        render( <CounterApp value={value} />)
        expect( screen.getByText(100)).toBeTruthy();
        screen.debug();
    })
    
    test('Debe de incrementar con el boton +1', () => {
        
        render( <CounterApp value={value} />)
        fireEvent.click( screen.getByText('+1') )
        expect(screen.getByText(101)).toBeTruthy();
        screen.debug();        
    })
    
    test('Debe de decrementar con el boton -1', () => {
        
        render( <CounterApp value={value} />)
        fireEvent.click( screen.getByText('-1') )
        expect(screen.getByText(99)).toBeTruthy();
        screen.debug();        
    })

    // test('Debe de retornar a 100 con el boton Reset', () => {
        
    //     render( <CounterApp value={value} />)
    //     fireEvent.click( screen.getByText(value) )
    //     expect(screen.getByText(100)).toBeTruthy();
    //     screen.debug();        
    // })
    
    test('Debe de retornar a 100 con el boton Reset', () => {
        
        render( <CounterApp value={value} />)
        fireEvent.click( screen.getByText('Reset') )
        expect(screen.getByText(100)).toBeTruthy();
        screen.debug();        
    })    
})