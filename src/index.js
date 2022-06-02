import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';


let store = createStore(todoApp)

render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/detail" element={<ItemDetail />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
