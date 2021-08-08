import React, { Component } from 'react'

export default class Searchbar extends Component {
    handleForm = (e) => {
        e.preventDefault()
        const zipcode = e.target.zipCode.value
        this.props.fetch(zipcode)
    }
    render() {
        return (
            <form>
                <input 
                type='text' name='zipCode' placeholder='08753'
                maxLength='5' aria-label='user zipcode' style={{ width: '50px' }}
                />
                <button type='submit'>Go</button>
            </form>
        )
    }
}
