import React from 'react'
import AppContext from '../AppContext'

function ProfilePage(props) {
const profile = props.data.find( ({ name }) =>
         name === props.props.match.params.profileId
          )
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <div className='profile-page'>
                        <button type='button'
                        onClick={() => props.props.history.push('/list')}>
                            return to list
                        </button>
                        <h3>Profile Name: {profile.name}</h3>
                        <p>Phone Number: {profile.phone}</p>
                        <p>Emergency Contact: {profile.eContact}</p>
                        <p>Emergency Contact Phone Number: {profile.ePhone}</p>
                        <p>Notes: {profile.notes}</p>


                        <form onSubmit={(e) => {
                            value.deleteProfile(e);
                            props.props.history.push('/list')
                        }
                        }>
                            <button type='submit' name={profile.name}>Delete</button>
                        </form>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}

export default ProfilePage
