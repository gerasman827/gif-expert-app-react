import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';
describe('Prueba en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({
            id: 1, name: 'Batman', owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();
    });


     // Tarea
     // Debe de retonar un arreglo con los héroes de DC
     // length === 3
     // Utilizar toEqual al arreglo filtrado
    test('getHeroesByOwner Debe de retornar un arreglo con los héroes de DC', () => { 
        const ownerHeroe = "DC";
        const heroesDC = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]        
        const getHeroresDC = getHeroesByOwner(ownerHeroe);
        expect(getHeroresDC.length).toBe(3);        
        expect(heroesDC).toEqual(getHeroresDC);

        //otra manera, llamando directamente la data
        expect(heroesDC).toEqual(heroes.filter( (heroe)=> heroe.owner === ownerHeroe));
        
    });


     // Debe de retornar un arreglo con los héroes de Marvel
     // length === 2

    test('getHeroesByOwner Debe retornar un arreglo con los héroes de Marvel', () => { 
        const ownerHeroe= 'Marvel';           
      
        const heroesOwner = getHeroesByOwner(ownerHeroe);
        expect(heroesOwner.length).toBe(2);
        expect(heroesOwner).toEqual(heroes.filter( (heroe)=> heroe.owner === ownerHeroe));
    });
 });