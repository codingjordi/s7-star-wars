export default async function fetchStarships( page : number) {
  const URL = 'https://swapi.dev/api/starships/?page=';

  try {
    const res = await fetch(`${URL}${page}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data)
    return data; // Devuelve los datos procesados
  } catch (error) {
    console.error('Error fetching starships:', error);
  }
}
