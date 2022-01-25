import { Routes, Route } from 'react-router-dom'

import './styles/global.scss'
import './styles/App.scss'

import Auth from './pages/Auth/Auth'
import { Profile } from './pages/Profile/Profile'
import { Map } from './pages/Map/Map'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import { useEffect } from 'react'
import { authenticate } from './actions'

function App (props) {
  useEffect(() => {
    props.authenticate()
  }, [])

  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Auth />} />
      <Route path="/map" element={<PrivateRoute><Map /></PrivateRoute>} />}
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(App)
