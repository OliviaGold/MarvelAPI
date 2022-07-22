import React from 'react';
import { Container } from 'react-bootstrap';
import Comics from '../components/Comics';
import Input from '../components/Input';

class ComicsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    console.log('event', event)
    this.setState({ value: event.target.value });
  }

  render() {
      return (
        <Container>
        <form>
          <Input label="Find some comics!" name="search" value={this.state.value} onChange={(event) => this.handleChange(event)} />
        </form>
        <Comics value={this.state.value}/>
      </Container>
    )
  }
}

export default ComicsPage;