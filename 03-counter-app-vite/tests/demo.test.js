
describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no debe de fallar', () => {

        //con jest ayuda a no realizar código como este
       /*  if(1 === 2){
            throw new Error('NO puede dividir entre cero');
        } */
    
    
        //1. inicialización
        const message1 = 'Hola mundo';
    
        //2. estímulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento... esperado
        //para tener un autocompletar de test install: npm install --save @types/jest
        expect(message1).toBe(message2)  //sería algo así como al usar un if
    
    });
 });
