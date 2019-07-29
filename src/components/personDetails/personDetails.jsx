import React, {Component} from 'react'

import './personView.css'
import SwapiService from '../../services/swapiServices';
import PersonView from './personView'
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator'

class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({
      person,
      loading: false
    })
  }

  onError = (error) => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then( this.onPersonLoaded )
      .catch( this.onError )
  }


  render() {
    const { person, loading, error } = this.state;

    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = hasData ? <PersonView  person={ person } /> : null;

    return(
      <div className="card person-details">
        {spinner}
        {errorMessage}
        {content}
      </div>
    )



  }
}

export default PersonDetails