
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { edad, clave } = persona;

export const usContext = ( clave, edad ) => ({  

        clave,
        edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
)

// console.log(usContext( clave, edad ))

