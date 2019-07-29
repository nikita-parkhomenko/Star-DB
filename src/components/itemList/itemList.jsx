import React, {Component} from 'react'
import SwapiService from '../../services/swapiServices'
import Spinner from '../spinner'

import './itemList.css'

class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: []
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then( (peopleList) => {
        this.setState({
          peopleList
        })
      })
  }

  renderItems = (arr) => {
    return arr.map( (person) => {
      return (
        <li key={person.id} 
          className="list-group-item"
          onClick={ () => this.props.onItemSelected(person.id)} >
          {person.name}
        </li>
      )
    })
  }

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />
    }
    
    const items = this.renderItems(peopleList);
    
    return(
      <ul className = "item-list list-group">
        {items}
      </ul>
    )
  }
}

export default ItemList 