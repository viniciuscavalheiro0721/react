import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, { data } from '../components/data/DataContext'
import Store from '../components/data/store'



const App = props => {

    return (
        <div className="App">
            <Store>
                <DataContext.Provider value={data}>
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </DataContext.Provider>
            </Store>
        </div>
    )
}

export default App