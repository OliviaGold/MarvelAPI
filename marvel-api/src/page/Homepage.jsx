import React from 'react';
import heroes from '../img/homepage__hero.png'

const Homepage = () => {
  return (
      <div className="homepage">
        <img className="homepage__img" src={heroes} alt=''/>
      </div>
  )
}

export default Homepage;