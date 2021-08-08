import React, { Component } from 'react'
import ButtonContext from '../ButtonContext';

export default class AddForm extends Component {

     render() {
        return (
            <ButtonContext.Consumer>
                {(value) => {
                    return (
                        <form onSubmit={(e) => value.addProf(e)}>
                            <input 
                                type='text' name='newZipcode' aria-label='user zipcode'
                                required maxLength='5' style={{ width: '50px' }}
                            />
                            <input 
                                type='text' name='profileName' aria-label='profile name'
                                required style={{ width: '150px' }}
                            />
                            <button type='submit'>Cont</button>
                        </form>
                    )
                }}
            </ButtonContext.Consumer>
        )
    }
}
