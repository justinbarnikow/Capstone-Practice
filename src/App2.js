import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import DisplayCard from './files/DisplayCard'
import Searchbar from './files/Searchbar'
import ProfileList from './files/ProfileList.js'
import AddForm from './files/AddForm'
import AppContext from './AppContext'
import ProfilePage from './files/ProfilePage'
import Hardcode from './files/Hardcode'

export default class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hourly: [],
            data: [
                { 
                    name: 'Hubs', phone: '732-604-9540', eContact: 'Wife',
                    ePhone: '609-276-5644', notes: 'likes bacon', profWeather: Hardcode
                },
                { 
                    name: 'Wife', phone: '609-276-5644', eContact: 'Hubs',
                    ePhone: '732-604-9540', notes: 'likes potatoes', profWeather: Hardcode
                }
            ],
            addProfile: this.handleAddProfile,
            deleteProfile: this.handleDeleteProfile
        }
    }

    // RENDER SEARCH BAR
    renderSearchbar() {
        return (
            <Route exact path='/hourly'
            render={() => {
                return (
                    <Searchbar fetch={this.fetchWeather} />
                )
            }}
            />
        )
    }

    //SEARCHBAR WEATHER FETCH
    fetchWeather = (newZipcode) => {
        const apiKey = `a739cb21d31cec280c853c80f9c01d55`
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${newZipcode}&appid=${apiKey}&units=imperial`
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(hourly => {
                console.log(hourly)
                this.setState({ hourly })
            })
    }

    //RENDER TEMPERATURE DISPLAY CARD
    renderDisplayCard() {
        if (!this.state.hourly.name) {
            return null
        }
        return (
            <Route exact path='/hourly' 
                render={() => {
                    return (
                        <DisplayCard hourly={this.state.hourly} />
                    )
                }}
            />
        )
    }

    //RENDER PROFILES LIST
    renderProfilesList() {
        return (
            <Route exact path='/list' 
                render={() => {
                    return (
                        <ProfileList list={this.state.data} />
                    )
                }}
            />
        )
    }

    // RENDER ADD-PROFILE FORM
    renderAddForm() {
        return (
            <Route path='/add'
                render={({ history }) => {
                    console.log(history)
                    return (
                        <AddForm
                            onClickCancel={() => history.push('/list')}
                        />
                    )
                }}
            />
        )
    }

    //CONTEXT FUNCTION: ADD PROFILE TO LIST
    //set function as state. pass state as contextvalue. pass contvalue to provider
    handleAddProfile = (e) => {
        e.preventDefault();
        const name = e.target.profileName.value
        const zipcode = e.target.zipcode.value
        const phone = e.target.phoneNumber.value
        const eContact = e.target.eContact.value
        const ePhone = e.target.ePhone.value
        const notes = e.target.noteSection.value
        const apiKey = `a739cb21d31cec280c853c80f9c01d55`
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}&units=imperial`
        fetch(url)
            .then(response => response.json())
            .then(profWeather => {
                console.log(profWeather)
            
                const newList = [
                    ...this.state.data,
                    { 
                        name: name, phone: phone, eContact: eContact,
                        ePhone: ePhone, notes: notes, profWeather: profWeather
                    }
                ]
            this.setState({ data: newList })
        })
    }

    //HANDLE DELETE PROFILE
    handleDeleteProfile = (e) => {
        e.preventDefault()
        console.log(e.target[0].name)
        const newTarget = e.target[0].name
        console.log(newTarget)
        const newList = this.state.data.filter((profile) => profile.name !== newTarget )
        console.log(newList)
        this.setState({ data: newList })

    }

    // RENDER PROFILE PAGE : INDIVIDUALS
    renderProfilePage() {
    //        for (let i = 0; i < this.state.data.length; i++) {
    //            let prof = this.state.data[i]
    //            console.log(prof, prof.name)
                return (
                    <Route exact path='/list/:profileId'
                        render={(props) => {
                            return (
                                <ProfilePage data={this.state.data} props={props} />
                            )
                        }}
                    />
                )
    }
   

    // FINAL RENDER
    render() {
        const contextValue = {
            addProfile: this.state.addProfile,
            data: this.state.data,
            deleteProfile: this.state.deleteProfile
        }
        return (
            <AppContext.Provider value={contextValue}>
                <div className='App'>
                    <h1>WeatherApp</h1>

                    <div className='nav'>
                        <NavLink to='/hourly'>Hourly</NavLink>
                        <NavLink to='/list'>Profiles</NavLink>
                    </div>

                    <div className='weather-lookup'>
                        {this.renderSearchbar()}
                        {this.renderDisplayCard()}
                    </div>

                    <div className='profiles'>
                        {this.renderProfilesList()}
                        {this.renderAddForm()}
                        {this.renderProfilePage()}
                    </div>
                </div>
            </AppContext.Provider>
            )
    }
}
