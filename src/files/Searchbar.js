import React, { Component } from 'react'

export default class Searchbar extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const newZipcode = e.target.newZipcode.value
        this.props.fetch(newZipcode)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' name='newZipcode' aria-label='zipcode of new city'
                    required maxLength='5' style={{ width: '150px' }}
                />
                <button type='submit'>Go</button>
            </form>
        )
    }
}
