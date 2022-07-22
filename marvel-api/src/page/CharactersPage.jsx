import React from 'react';
import { Container } from 'react-bootstrap';
import Characters from '../components/Characters';
import Input from '../components/Input';

class CharactersPage extends React.Component {
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
          <Input label="Find your character!" name="search" value={this.state.value} onChange={(event) => this.handleChange(event)} />
        </form>
        <Characters value={this.state.value}/>
      </Container>
    )
  }
}

export default CharactersPage;