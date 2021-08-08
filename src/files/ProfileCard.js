import React from 'react'
import './ProfileCard.css'

function ProfileCard(props) {
    return (
        <div className='profile-card'>
            <h3>{props.profile.name}</h3>
            <p>{props.profile.zipcode}</p>
            <button type='button'
            onClick={() => console.log('click')}>
                Details
            </button>
        </div>
    )
}

export default ProfileCard
