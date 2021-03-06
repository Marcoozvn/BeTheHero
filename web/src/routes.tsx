import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Route path='/' component={Logon} exact/>
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/incidents/new' component={NewIncident} />
    </BrowserRouter>
  )
}

export default Routes