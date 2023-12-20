import React from 'react'
import './style/service.css'

const ProdCard = ({name,about,source}) => {
  return (
    <>
    <div className="prodCard">
        <div className="imager">
        <img className='prodimg' src={source}  alt={name}/>
        </div>
        <br />
        <p className="prod-head">{name}</p>
        <br />
        <p className="prodintro">
          {about}
        </p>
    </div>
      
    </>
  )
}

export default ProdCard
