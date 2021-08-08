import React from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from './ProfileCard'

function ProfileList(props) {
    return (
        <div className='profile-list'>
            <Link to='/add'>
                <button type='button'>
                    Add Location
                </button>
            </Link>
                <ul className='list'>
                    {props.list.map((profile, i) => {
                        return (
                            <ProfileCard 
                            profile={profile}
                            key={i}
                            />
                        )
                    })}
                </ul>
        </div>
    )
}

export default ProfileList
