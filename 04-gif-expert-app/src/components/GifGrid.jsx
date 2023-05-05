import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  
///////////////////////////////////////////////
//////Este bloque puede resumirse màs: y este contenido lo llevamos
//al custom hook : useFetchGifs
  /* const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  //efectos secundarios: cuando algo cambie...
  //7si las dependencias se dejan vacías
    //quiere decier que ese hook solo se 
    //va a disparar que se crea y se destruye
    //el componente 
  useEffect(() => {
    getImages();
  }, []); */
/////////////////////////////////////////
//todo lo relacionado con la category se puede
//desestructurar en una solo línea, reduciendo todo el bloque anterior
//todo usando un custom Hook, como este:
const { images, isLoading } = useFetchGifs(category);

console.log({images, isLoading});



  return (
    <>
      <h3> {category} </h3>

      {/* este ifternario se podría hacer más resumido */}
      {/* {
        isLoading ? (<h2>Cargando...</h2>) : null
      } */}
      {
        isLoading && (<h2>Cargando...</h2>)
      }



      <h2>Cargando...</h2>

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
