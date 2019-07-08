
class SwapiService {

  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    };
  
    return await res.json();
  };

  getAllPeople() {
    return this.getResource('https://swapi.co/api/people/') 
  }
}