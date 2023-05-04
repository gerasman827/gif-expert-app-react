import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    /* console.log( target.value ); */
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //que no lleguen espacios al inicio y final y que al menos tenga 2 caracteres la cadena que llega
    if (inputValue.trim().length <= 1) return;

    /* setCategories((categories) => [inputValue, ...categories]); */
    onNewCategory( inputValue.trim() );
    setInputValue("");
  };
  //esta línea de form se puede resumir más:
  
  /* <form onSubmit={ (event) => onSubmit(event)}> */
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        /* onChange={ (event) =>  onInputChange(event) } */
        onChange={onInputChange}
      />
    </form>
  );
};
