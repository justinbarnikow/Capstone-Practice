import React from 'react'
import './DisplayCard.css'

function DisplayCard(props) {
    return (
        <div className='display-card'>
            <h2>{props.hourly.name}</h2>
            <p>{props.hourly.main.temp}</p>
            <p>{props.hourly.weather[0].description}</p>
        </div>
    )
}

export default DisplayCard
