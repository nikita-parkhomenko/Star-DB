import React from 'react';

import Header from '../header/index'
import RandomPlanet from '../randomPlanet'
// import ItemList from '../itemList'
// import PersonDetails from '../personDetails'

import './app.css'

const App = () => {

  return (
    <>
      <Header />
      <RandomPlanet />
{/* 
      <div className = "row mb2">

        <div className = "col-md-6">
          <ItemList />
        </div>

        <div className = "col-md-6">
          <PersonDetails />
        </div>

      </div> */}
    </>
  )
}

export default App