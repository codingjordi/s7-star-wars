import React, { useState, useEffect } from 'react';
import StarshipCard from './components/StarshipCard';
import fetchStarships from './services/fetchStarships';
import { Starship } from './types/Starship';
import { StarshipsAPIResponse } from './types/StarshipsAPIResponse';

export default function StarshipList() {
  const [starships, setStarships] = useState<StarshipsAPIResponse>({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadFetchedShips = async () => {
      try {
        console.log('currentPage BEFORE fetch: ', currentPage)
        const data = await fetchStarships(currentPage); // Fetch con pagineishon
        console.log('currentPage AFTER fetch: ', currentPage)
        setStarships((prevStarships) => ({
          ...data,
          results: [...prevStarships.results, ...data.results], 
        }));
        
      } catch (error) {
        console.error('Error fetching starships:', error);
      } 
    };
    loadFetchedShips();
  }, [currentPage]);

  

  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 p-4">
      {(!starships.results.length) && <div>Loading...</div>}
      {starships.results.map((starship: Starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
      {starships.next && (
        <button className='bg-zinc-700 w-fit px-6 py-2 rounded-md' onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
          Load More
        </button>
      )}
    </div>
  );
}
