import { useState } from 'react'

import './styles/global.scss'
import './styles/App.scss'

import Auth from './pages/Auth/Auth'
import { ProfileWithData } from './pages/Profile/Profile'
import { MapWithData } from './pages/Map/Map'
import { withAuth } from './components/authContext/AuthContext'

const App = ({ isLoggedIn }) => {
    const [mainPage, setMainPage] = useState('Auth')

    const setCurrentPage = page => isLoggedIn ? setMainPage(page) : setMainPage('Auth')

    const pages = {
        Auth: <Auth setCurrentPage={setCurrentPage} />,
        Map: <MapWithData currentPage={mainPage} setCurrentPage={setCurrentPage} />,
        Profile: <ProfileWithData currentPage={mainPage} setCurrentPage={setCurrentPage} />
    }

  return (
    <div className="App">
        {pages[mainPage]}
    </div>
  );
}

export default withAuth(App);
