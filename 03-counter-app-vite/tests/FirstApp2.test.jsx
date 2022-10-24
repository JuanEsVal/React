import { render, screen  } from '@testing-library/react'
import { FirstApp }  from '../src/FirstApp'

describe( 'Prueba en <App />', () => {

    const title = 'Hola Soy Juancho';
    const subtitle = 'De Apellido Valencia'

    test('Debe hacer Match con el Snapshot', () => { 
        
        const { container } = render( <FirstApp title={title} />);
        expect ( container ).toMatchSnapshot();
    })
    
    test('Debe mostrar el mensaje "Hola soy juancho"', () => { 
        
        render( <FirstApp title={title} />);
        expect ( screen.getByText(title) ).toBeTruthy();

        screen.debug();
    })

      
    test('Debe mostrar el titulo en un h1', () => { 

        render( <FirstApp title={title} />);
        expect ( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
        screen.debug();
    })

    test('Debe mostrar el subtitulo enviado por props', () => { 


        render(<FirstApp title={title} subtitle={subtitle} />)
        expect ( screen.getAllByText(subtitle).length).toBe(1);
    })

})