import React from 'react'

const AppContext = React.createContext({
    data: [],
    addProfile: () => {},
    deleteProfile: () => {}
})

export default AppContext