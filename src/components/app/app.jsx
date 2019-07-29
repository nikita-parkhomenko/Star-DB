import React, {Component} from 'react';

import Header from '../header/index'
import RandomPlanet from '../randomPlanet'
import ErrorButton from '../errorButton'
import ErrorIndicator from '../errorIndicator'
import PeoplePage from '../peoplePage'

import './app.css'

class App extends Component {

state = {
  hasError: false
}

componentDidCatch() {
  console.log('componentDidCatch()');
  this.setState({hasError: true}) 
}

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }
    return (
      <div className="stardb-app">
        <Header />
        <ErrorButton />
        <RandomPlanet />
        <PeoplePage />

      </div>
    )  
  }
}

export default App