import React, {Component} from 'react';

import './peoplePage.css';
import ItemList from '../itemList'
import PersonDetails from '../personDetails'
import ErrorIndicator from '../errorIndicator';

class PeoplePage extends Component {

state = {
    selectedPerson: 1,
    hasError: false
}

componentDidCatch() {
    this.setState({
        hasError: true
    })
}

onItemSelected = (id) => {
    this.setState({
      selectedPerson: id,
      hasError: false
    })
  }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return(
            <div className = "row mb2">
                <div className = "col-md-6">
                    <ItemList onItemSelected={this.onItemSelected}/>
                </div>
        
                <div className = "col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
          </div>
        )
    }
}

export default PeoplePage