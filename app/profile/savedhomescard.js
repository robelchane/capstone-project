'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function ViewedSavedPropertiesCard() {
  const router = useRouter();
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  // Function to handle saving a property
  const handleSaveFavorite = (property) => {
    setFavoriteProperties((prevFavorites) => [...prevFavorites, property]);
    console.log(`Added to favorites: ${property.name}`);
  };

  const handleSavedPropertiesClick = () => {
    console.log('Navigating to /profile/saved-properties'); // Check if this logs
    router.push('/profile/saved-properties'); // Ensure the route is correct
  };

  return (
    <Card className="cursor-pointer max-w-md ml-4 mt-10">
      <CardHeader>
        <CardTitle>Viewed and Saved Properties</CardTitle>
        <CardDescription>
          Easily access your recently viewed and saved properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Keep track of the properties you've viewed and saved for later.</p>
        <ul>
          {/*}
          {favoriteProperties.length > 0 ? (
            favoriteProperties.map((property, index) => (
              <li key={index}>{property.name}</li> // Display favorite properties
            ))
          ) : (
            <p>No favorite properties yet.</p>
          )}
          */}
        </ul>
      </CardContent>
      <CardFooter className="space-x-4">
        {/*
        <Button onClick={() => handleSaveFavorite({ name: 'Sample Property' })}>
          View Favorite Properties
        </Button>
        */}
        <Button onClick={handleSavedPropertiesClick}>Saved Properties</Button>
      </CardFooter>
      
        
    </Card>
  );
}


