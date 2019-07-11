import React, {Component} from 'react'
import swapiService from '../../services/swapiServices'


import './randomPlanet.css'

class RandomPlanet extends Component {

  constructor() {
    super();
    this.updatePlanet();
  }

  swapiService = new swapiService()

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }

  updatePlanet() {
    this.swapiService.getPlanet(7).then( (planet) => {
      this.setState({
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    })
  }

  render() {

    const {name, population, rotationPeriod, diameter} = {...this.state}

    return (
    <div className="random-planet jumbotron rounded">
        <img className="planet-image" alt="planet"
            //  src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
            />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </div>
    )
  }
}

export default RandomPlanet