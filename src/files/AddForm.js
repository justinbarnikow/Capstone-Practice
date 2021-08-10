import React from 'react'
import AppContext from '../AppContext'
import { withRouter } from 'react-router-dom'

function AddForm(props) {
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <form onSubmit={(e) => {
                        value.addProfile(e);
                        props.history.push('/saved')
                    }
                    } id='myForm' >
                        <input
                            type='text' name='profileName' aria-label='new profile name'
                            required placeholder='justin, work, mom..'
                        />
                        <input
                            type='text' name='zipcode' aria-label='new profile zipcode'
                            required maxLength='5' style={{ width: '50px' }}
                        />
                        <input 
                            type='text' name='phoneNumber' placeholder='732-604-9540' 
                            aria-label='phone number for profile'
                        />
                        <input 
                            type='text' name='eContact' placeholder='Mom' 
                            aria-label='emergency contact name for profile'
                        />
                        <input 
                            type='text' name='ePhone' placeholder='732-604-9540' 
                            aria-label='emergency contact phone number'
                        />
                        <textarea 
                            name='noteSection' rows='10' cols='30'
                            placeholder='notes & details here..'>
                        </textarea>
                        <button type='button'
                        onClick={props.onClickCancel}>
                            Cancel
                        </button>
                        <button type='submit'>
                            Add
                        </button>
                    </form>
                )
            }}
        </AppContext.Consumer>
    )
}

export default withRouter(AddForm)
