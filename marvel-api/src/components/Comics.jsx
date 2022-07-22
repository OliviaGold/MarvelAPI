import React, { useEffect, useState } from "react";
import CardComics from "./CardComics";
import { Spinner } from 'react-bootstrap';

const Comics = ({value}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading({loading:true})

    if (value === '') {
      fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=1&apikey=da17266bf2856e24a89069d032b48441&hash=4b616dd65d3201a7d0c38461bf331e60`)
        .then(response => response.json())
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .then(console.log(data))
      } else {
      fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=100&titleStartsWith=${value}&ts=1&apikey=da17266bf2856e24a89069d032b48441&hash=4b616dd65d3201a7d0c38461bf331e60`)
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
            <CardComics
              key={result.id}
              comics={result.title}
              img={result.thumbnail.path} 
              description={result.description}
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

export default Comics;