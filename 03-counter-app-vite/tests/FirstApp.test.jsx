import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe( 'Prueba en <FirstApp />', () => {

    test('Debe hacer Match con el Snapshot', () => { 

        const title = 'Hola, soy Juan Esteban'
        const { container } = render( <FirstApp title={title} />)

        // console.log(container);

        expect ( container ).toMatchSnapshot();
    })

  
    // test('Debe mostrar el titulo en un h1', () => { 

    //     const title = 'Hola, soy Esteban'
    //     const { container } = render( <FirstApp title={title} />)
    //     expect ( getByText(title) ).toBeTruthy();

    //     const h1 = container.querySelector('h1');
    //     expect ( h1.innerHTML ).toContain(title);

    // })

    test('Debe mostrar el subtitulo enviado por props', () => { 

        const title = 'Hola, soy Esteban'
        const subtitle = 'De Apellido Valencia'

        const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} />)
        expect ( getAllByText(subtitle).length).toBe(1);
    })

})