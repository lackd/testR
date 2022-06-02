import React from 'react'
import Filter from './filter'
import VisibleItemList from '../containers/visibleItemList'

import './App.css';

const App = () => (
    <div className="App-body">
        <Filter />
        <VisibleItemList />
    </div>
)

export default App