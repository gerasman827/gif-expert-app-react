import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    //el push en .js realiza mutaciones del objeto y en react se debe evitar hacer mutaciones
    /* categories.push("Valorant"); */

    //una forma de hacerlo
    /* setCategories([...categories, 'Valorant']); */

    //ahora, validar que la categoria nueva no exista en el arreglo
    //una forma:
    if (categories.includes(newCategory)) return;

    //otra forma
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //esto oculta la implementación
        //setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((category) =>(
            <GifGrid
                key={ category }
                category={ category }
            />
        ))
      }
    </>
  )
}
