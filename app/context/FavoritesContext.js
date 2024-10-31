// context/FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    const handleAddToFavorites = (property) => {
        try {
          addFavorite(property);
          alert('Added to favorites!');
        } catch (error) {
          console.error("Error adding to favorites:", error);
          alert('There was an error adding to your favorites.');
        }
      };      
    setFavorites((prevFavorites) => [...prevFavorites, property]);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
