import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

import './App.css';

const App = () => (
    <div className="App-body">
        <Footer />
        <AddTodo />
        <VisibleTodoList />
    </div>
)

export default App