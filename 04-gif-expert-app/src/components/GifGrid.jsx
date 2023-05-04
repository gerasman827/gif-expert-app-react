import { useState, useEffect } from "react";
import { GifItem } from './GifItem';
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  //efectos secundarios: cuando algo cambie...
  /* si las dependencias se dejan vacías
    quiere decier que se hook ese hook solo se 
    va a disparar que se crea y se destruye
    el componente */
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {/* {
          images.map( img => (
            <li key={img.id}> {img.title} </li>
          ))
        } */}

        {/* usando desestructuración de arreglos: */}
        {
          //images.map(({ id, title }) => (
          images.map(( image ) => (
            //<li key={id}> {title} </li>
            <GifItem 
              key={image.id} 
              //image={image.title}
              //url={image.url}
              //otra forma de pasar los props, exparciendo todas las propiedades del objeto
              { ...image }
            />
          ))
        }
      </div>
    </>
  );
};
