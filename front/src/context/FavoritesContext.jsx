// Importamos lo necesario de React
import React, { createContext, useContext, useState } from "react";

// Creamos el contexto de favoritos
const FavoritesContext = createContext();

// Hook personalizado para usar el contexto más fácil
export const useFavorites = () => {

  // Obtenemos el contexto
  const data = useContext(FavoritesContext);

  // Si el contexto no existe mostramos error
  if (!data) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }

  return data;
};


// Componente que provee el contexto a toda la aplicación
export const FavoritesProvider = ({ children }) => {

  // Estado donde guardamos los motos favoritos
  const [favorites, setFavorites] = useState([]);

  // Función para agregar un moto a favoritos
  const addToFavorites = (product) => {

    // Verificamos si ya existe el moto
    const exist = favorites.find((item) => item.id === product.id);

    // Si ya existe no hacemos nada
    if (exist) {
      return;
    }

    // Si no existe lo agregamos
    setFavorites([...favorites, product]);
  };


  // Función para eliminar un moto de favoritos
  const removeFromFavorites = (id) => {

    // Filtramos todos menos el que queremos eliminar
    const newList = favorites.filter((item) => item.id !== id);

    setFavorites(newList);
  };


  // Función para saber si un moto ya está en favoritos
  const isFavorite = (id) => {

    // Retorna true o false
    return favorites.some((item) => item.id === id);
  };


  // Retornamos el provider con los valores que usará la app
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};