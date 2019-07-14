import React, {Component} from 'react'
import swapiService from '../../services/swapiServices'
import Spinner from '../spinner'


import './randomPlanet.css'

class RandomPlanet extends Component {

  constructor() {
    super();
    this.updatePlanet();
  }

  swapiService = new swapiService()

  state = {
    planet: {},
    loading: true
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
     })
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 10 )
    this.swapiService.getPlanet(id).then( this.onPlanetLoaded )
  }

  render() {

    const { planet, loading } = {...this.state}

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={ planet } /> : null;

    return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
    </div>
    )
  }
}

export default RandomPlanet


const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>

      <img className="planet-image" alt="planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
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

    </React.Fragment>
  )
}