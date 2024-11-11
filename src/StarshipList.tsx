import React, { useState, useEffect } from 'react';
import StarshipCard from './components/StarshipCard';
import fetchStarships from './services/fetchStarships';
import { Starship } from './types/Starship';
import { StarshipsAPIResponse } from './types/StarshipsAPIResponse';

export default function StarshipList() {
  const [starships, setStarships] = useState<StarshipsAPIResponse | null>(null);

  useEffect(() => {
    const loadFetchedShips = async () => {
      const data = await fetchStarships();
      setStarships(data); // Guarda todo el objeto, no solo results
    };
    loadFetchedShips();
  }, []);

  if (!starships) {
    return <div>Loading...</div>; // Mientras se cargan las naves, muestra un mensaje o spinner
  }

  return (
    <div className="flex flex-col justify-center gap-8 p-4">
      {starships.results.map((starship: Starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
    </div>
  );
}