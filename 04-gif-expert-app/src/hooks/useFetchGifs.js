import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);

  };

  useEffect(() => {
    getImages();
  }, []);

  //un hook no es otra cosa una función
  //que retorna algo (objeto)
  return {
    images,
    isLoading
  };
};
