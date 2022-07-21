import React from "react";
import Card from "./Card";
import { Spinner } from 'react-bootstrap';

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: { },
      loading: false,
      // currentPage: 1,
      // fetching: true
    }
  }

  makeRequest() {
    this.setState({ loading: true })

    if (this.props.value === '') {
      fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=47&ts=1&apikey=da17266bf2856e24a89069d032b48441&hash=4b616dd65d3201a7d0c38461bf331e60`)
        .then(response => response.json())
        .then(data => this.setState({ data, loading: false }))
    }else {
      fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.props.value}&ts=1&apikey=da17266bf2856e24a89069d032b48441&hash=4b616dd65d3201a7d0c38461bf331e60`)
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }))
    }
  }

  componentDidMount() {
    this.makeRequest()
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.makeRequest()
    }
  }

  render() {
    const { data, loading } = this.state;
    // console.log("data", data)

    return (
      loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="danger"/>
        </div>
      ) : (
        <div className="card">{
          data.data && data.data.results.map(result => ( 
            <Card
              key={result.id}
              character={result.name}
              img={result.thumbnail.path} 
              text={result.description}
              series={result.comics.items}
            />
          ))
        }
      </div>
      )
    )
  }
}

export default Characters;