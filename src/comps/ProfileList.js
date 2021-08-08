import React, { Component } from 'react'

export default class ProfileList extends Component {
    render() {
        return (
            <div className='list-page'>
                <ul>
                {this.props.list.map((profile, i) => {
                        return (
                            <Profile
                                key={i}
                                profile={profile}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}
