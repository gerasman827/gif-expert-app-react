import { CounterApp } from '../src/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

const valorInicial = 0;

describe('Pruebas en CounterApp', () => { 

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={valorInicial}/>);
        expect( container ).toMatchSnapshot();
     });

     test('Debe mostrar el valor inicial de 0', () => { 
        render( <CounterApp value={0}/>);
        //screen es la representación de lo que están en el render
        expect( screen.getByText(valorInicial)).toBeTruthy();
        //otra forma
        expect(screen.getByRole('heading',{level:2} ).innerHTML).toContain('0');
      });

      test('Debe incrementar con el botón +1', () => { 
        render(<CounterApp value={valorInicial}/>);
        //con el +1, asumiendo que es el único texto en el documento pudo obtener el elemento
        fireEvent.click( screen.getByText('+1') );
        //Al activar el evento click se debería aumentar en +1 el elemento
        expect(screen.getByText('1')).toBeTruthy();
       });

       test('Debe decrementar con el botón -1', () => { 
            render(<CounterApp value={valorInicial}/>);
            fireEvent.click( screen.getByText('-1') );
            expect(screen.getAllByText('-1')).toBeTruthy();
        });

        test('Debe de funcionar el botón de reset', () => { 
            render(<CounterApp value={valorInicial}/>);
            fireEvent.click( screen.getByText('+1') );
            fireEvent.click( screen.getByText('+1') );
            fireEvent.click( screen.getByText('+1') );
            /* fireEvent.click( screen.getByText('Reset') ); */
            fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));

            expect(screen.getAllByText('0')).toBeTruthy();
         })
 });