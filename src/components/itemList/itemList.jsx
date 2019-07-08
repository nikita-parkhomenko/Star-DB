import React, {Component} from 'react'

import './itemList.css'

class ItemList extends Component {

  render() {

    return(

      <ul className = "item-list list-group">
        <li className = "list-group-item">
          Nikita
        </li>
        <li className = "list-group-item">
          Vladimir
        </li>
        <li className = "list-group-item">
          Sergey
        </li>
      </ul>
    )
  }
}

export default ItemList