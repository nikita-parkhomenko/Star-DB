import React, {Component} from 'react';

import Header from '../header/index'
import RandomPlanet from '../randomPlanet'
import ItemList from '../itemList'
import PersonDetails from '../personDetails'

import './app.css'

class App extends Component {

  state = {
    selectedPerson: 1
  }

  onItemSelected = (id) => {
    this.setState( {
      selectedPerson: id
    })
  }
  render() {
    return (
      <>
        <Header />
        <RandomPlanet />
   
        <div className = "row mb2">
  
          <div className = "col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
  
          <div className = "col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
  
        </div>
      </>
    )  
  }
}

export default App