import React from 'react'
import { Link } from 'react-router-dom'
import './ProfileCard.css'

function ProfileCard(props) {
    let statusColor = 'black'
    const statusId = props.profile.profWeather.weather[0].id
    if ( 
        300 <= statusId && statusId <= 501 
        || 520 <= statusId && statusId <= 599
        || statusId == 701
        || 800 <= statusId && statusId <= 804
    ) {
        statusColor = 'green'
    } else if ( 
        200 <= statusId && statusId <= 201
        || 210 <= statusId && statusId <= 211
        || 230 <= statusId && statusId <= 232
        || 502 <= statusId && statusId <= 503
        || 600 <= statusId && statusId <= 601
        || statusId == 612
        || statusId == 615
        || statusId == 620
        || 711 <= statusId && statusId <= 721
        || statusId == 741
    ) {
        statusColor = 'yellow'
    } else {
        statusColor = 'red'
    }
    
    console.log(statusColor, statusId)


    return (
        <div className='profile-card'>
            <h3 style={{ color: statusColor }}>{props.profile.name}</h3>
            <p>{props.profile.zipcode}</p>
            <Link to={`/list/${props.profile.name}`}>
                <button type='button'>
                        Details
                </button>
            </Link>
        </div>
    )
}

export default ProfileCard
