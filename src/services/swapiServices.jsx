class SwapiService {

  _apiBase = 'https://swapi.co/api'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    };
  
    return await res.json();
  };

  async getAllPeople() {
    const res = await this.getResource(`/people/`)
    return res.results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`)
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`)
    return res.results.map( this._transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    return await this.getResource(`/starships/`)
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson(person) {
    return{
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}

export default SwapiService