import React, {Component} from 'react'

import './personDetails.css'
import SwapiService from '../../services/swapiServices';

class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null
  }

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }


  updatePerson() {
    const {personId} = this.props;
    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then( (person) => {
        this.setState( {
          person
        })
      })
  }



  render() {

    if (!this.state.person) {
      return <p>Select a person from a list.</p>
    }
    const {person: {id, name, gender, birthYear, eyeColor} } = this.state;


    return (
      <div className="person-details card">
        <img className="person-image" alt="person"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4> {name} </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span> {gender} </span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span> {birthYear} </span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span> {eyeColor} </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PersonDetails