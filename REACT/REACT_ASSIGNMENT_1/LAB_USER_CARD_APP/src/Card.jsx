import React from 'react'

const Card = (props) => {
    const cardStyle = {
    border: '2px solid #333',
    borderRadius: '12px',
    padding: '16px',
    width: '250px',
    margin: '20px auto',
  };
  return (
    <>
    <div style={cardStyle}>
        <h2>NAME : {props.Name}</h2>
        <p>AGE : {props.Age}</p>
        <p>LOCATION : {props.Location} </p>
    </div>
    </>
  )
}

export default Card