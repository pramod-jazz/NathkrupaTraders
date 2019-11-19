import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Pamplet from './Pamplet'

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/preview"   render={(props) => <Pamplet{...props} isAuthed={true} />} ></Route>
     

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))