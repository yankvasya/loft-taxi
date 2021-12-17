import {useState} from "react";

import './global.scss'
import './App.scss';

import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Map from "./pages/Map/Map";

function App() {
    const [mainPage, setMainPage] = useState('Auth')

    const pages = {
        'Auth': <Auth setMainPage={setMainPage} />,
        'Map': <Map currentPage={mainPage} setCurrentPage={setMainPage} />,
        'Profile': <Profile currentPage={mainPage} setCurrentPage={setMainPage} />
    }

  return (
    <div className="App">
        {pages[mainPage]}
    </div>
  );
}

export default App;
