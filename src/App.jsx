import { Routes, Route } from 'react-router-dom'

import './styles/global.scss'
import './styles/App.scss'

import Auth from './pages/Auth/Auth'
import { Profile } from './pages/Profile/Profile'
import { Map } from './pages/Map/Map'
import { connect } from 'react-redux'
// import { PrivateRoute } from './PrivateRoute'

function App ({ isLoggedIn }) {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(App)
