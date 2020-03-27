import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Card,Icon} from 'semantic-ui-react'


const Exercise = props => (



<Card>
<Card.Content header={props.exercise.username} />
<Card.Content description={props.exercise.date.substring(0,10)}/>
<Card.Content description={props.exercise.description} />
<Card.Content extra>
  <Icon name='user' />{props.exercise.date.substring(0,10)}
</Card.Content>
</Card>

)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8000/cats/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:8000/cats/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <Container>
        <table className="table">
            { this.exerciseList() }
        </table>
      </Container>
    )
  }
}