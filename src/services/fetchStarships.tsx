export default async function fetchStarships() {
    const URL = 'https://swapi.dev/api/starships';
    try {
      const res = await fetch(URL);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error)
    }
}
