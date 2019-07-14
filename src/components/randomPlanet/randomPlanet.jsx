import React, {Component} from 'react'
import swapiService from '../../services/swapiServices'
import Spinner from '../spinner'
import PlanetView from './planetView'

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
