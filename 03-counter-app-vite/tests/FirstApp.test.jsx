import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => { 
  test('Debe de hacer match match con el snapshot', () => { 
    //renderiza el componente en memoria  
    const title = "Hola, soy Goku";
    //el render expone ciertas propiedades: container
    /* render( <FirstApp title={title} /> ) */
    const {container} = render( <FirstApp title={title} /> );
    
    expect(container).toMatchSnapshot();

   });

   test('debe mostrar el título en un h1', () => { 
      const title = "Hola, soy Goku";
      const { container, getByText, getByTestId } = render(<FirstApp title={title}/>);
      expect(getByText(title)).toBeTruthy();
      
     /*const h1 = container.querySelector('h1');
      expect(h1.innerHTML).toContain(title); */

      //test a través de un testId
      expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Debe mostrar el subtítulo enviado por props', () => { 
      const title = 'Hola, soy Vegeta';
      const subTitle = 'Soy un subtitulo';
      const { getAllByText } = render ( 
        <FirstApp
          title={title}
          subTitle={subTitle}
        />
       );

       //validar la cantidad de elementos que requiero existan
       expect( getAllByText(subTitle).length ).toBe(2);

     });
 });