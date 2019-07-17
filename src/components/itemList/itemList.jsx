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
        });
      })
  }

  renderItems(arr) {
    return arr.map( ({ id, name }) => {
      return (
      <li className="list-group-item" 
          key={id}
          onClick={ () => this.props.onItemSelected(id) } >
          {name}
      </li>
      )
    })
  }


  render() {

    const { peopleList } = this.state;

    const items = this.renderItems(peopleList);

    if (!peopleList) {
      return <Spinner />
    }

    return(
      <ul className = "item-list list-group">
        {items}
      </ul>
    )
  }
}

export default ItemList 