import React, { useEffect, useState } from "react";
import CardCharacters from "./CardCharacters";
import { Spinner } from 'react-bootstrap';

const Characters = ({value}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading({loading:true})

    if (value === '') {
      fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=47&ts=1&apikey=da17266bf2856e24a89069d032b48441&hash=4b616dd65d3201a7d0c38461bf331e60`)
        .then(response => response.json())
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .then(console.log(data))
      } else {
      fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${value}&ts=1&apikey=da17266bf2856e24a89069d032b48441&hash=4b616dd65d3201a7d0c38461bf331e60`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
    }
  }, [value])

  if(data.data?.total !== 0) {
    return (
      loading ? (
        <div className="spinner">
          <Spinner animation="border" variant="danger"/>
        </div>
      ) : (
        <div className="card">{
          data.data && data.data.results.map(result => ( 
            <CardCharacters
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
  } else {
    return (
      <div className="notFound">
        <p className="notFound__text">Nothing found! Try again!</p>
      </div>
    )
  }
}

export default Characters;