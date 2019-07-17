import React, {Component} from 'react'
import swapiService from '../../services/swapiServices'
import Spinner from '../spinner'
import PlanetView from './planetView'
import ErrorIndicator from '../errorIndicator'

class RandomPlanet extends Component {

  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 5000)
  }

  swapiService = new swapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
     })
  }

  onError = (error) => {
    this.setState({ 
      error: true,
      loading: false 
    });
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17 + 3 )
    this.swapiService
      .getPlanet(id)
      .then( this.onPlanetLoaded )
      .catch( this.onError )
  }

  render() {

    const { planet, loading, error } = {...this.state}

    const hasData = !(loading || error)
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={ planet } /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
    )
  }
}

export default RandomPlanet
