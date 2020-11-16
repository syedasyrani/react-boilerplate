import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Routes from './routes'

import { AuthProvider } from './stores/Auth/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  )
}

export default hot(App)
