import { useState } from 'react'

import './styles/global.scss'
import './styles/App.scss'

import Auth from './pages/Auth/Auth'
import { Profile } from './pages/Profile/Profile'
import { Map } from './pages/Map/Map'
import { connect } from 'react-redux'

function App ({ isLoggedIn }) {
  const [mainPage, setMainPage] = useState('Auth')

  const setCurrentPage = (page) => (isLoggedIn ? setMainPage(page) : setMainPage('Auth'))

  const pages = {
    Auth: <Auth setCurrentPage={setCurrentPage} />,
    Map: <Map currentPage={mainPage} setCurrentPage={setCurrentPage} />,
    Profile: <Profile currentPage={mainPage} setCurrentPage={setCurrentPage} />
  }

  return (
    <div className="App">
      {pages[mainPage]}
    </div>
  )
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(App)
