import { PropTypes } from 'prop-types'

// Realmente:
// h1 deberia estar dentro de un heder
// h2 deberia estar dentro deun parrafo al igual que h3... etc
 

export const FirstApp = ({title, subtitle, name}) => {
  return (
    <>
        <h1> {title} </h1>     
        <h2>{subtitle}</h2>
        <h3>{name}</h3>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  // subtitle: PropTypes.number.isRequired
}

// Valores por defecto si no llega información
FirstApp.defaultProps = {
  title: 'No hay Titulo',
  subtitle: 'No hay Subtitulo',
  name: 'Juan Valencia'
}