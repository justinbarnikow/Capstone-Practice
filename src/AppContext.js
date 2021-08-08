import React from 'react'

const AppContext = React.createContext({
    data: [],
    addProfile: () => {}
})

export default AppContext