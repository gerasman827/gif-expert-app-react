import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

const title = 'Hola, soy Goku';
const subTitle = "Soy un subtítulo";

describe('Pruebas en FirstApp', () => { 
  test('Debe de hacer match con el snapsho', () => { 
    
    const {container} = render(<FirstApp title={title}/>);
    expect( container ).toMatchSnapshot();
   });

   test('Debe de mostrar el mensaje "Hola, soy Goku"', () => { 
      render( <FirstApp title={title}/>);
      /* screen.debug(); */
      expect( screen.getByText(title) ).toBeTruthy();
    });

    test('DEbe mostrar el título en un h1', () => { 
      render( <FirstApp title={title}/>);
      expect( screen.getByRole('heading',{level:1} ).innerHTML).toContain(title);
     });

     test('Debe de mostrar el subtítulo enviado por props', () => { 
        render(
        <FirstApp
          title={title}
          subTitle={subTitle}
        />);

        expect( screen.getAllByText(subTitle).length).toBe(2);
      })
 });