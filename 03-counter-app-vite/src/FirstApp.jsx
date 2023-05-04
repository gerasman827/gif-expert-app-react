/* export function App() {
    return <h1>Hola mundo</h1>
}
 */
/* import React from 'react' */

// este no viene por defecto en vite pero si en reactApp
//sirve para definir el tipo a las props
import PropTypes from 'prop-types';

/* const result = (nombre) => {
  return "Me llamo "+nombre;
}
 */

export const FirstApp = ( { title, subTitle, name }) => {
    
  return (
    <>
      <h1> {title} </h1>
      {/* <div data-testid="test-title"> {title} </div> */}
      <h2> {name} </h2>   
      <p>{subTitle} </p>
      <p>{subTitle} </p>
    </>
  );
};

//para definir los tipos de los propTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,

}

FirstApp.defaultProps = {
  title: "Germán Arenas Sánchez",
  subTitle:  'SOy un subtítulo',
  title: 'No hay título',
}