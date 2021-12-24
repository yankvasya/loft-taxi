import './style.scss'

import Header from '../../components/header/Header'
import ProfileCard from '../../components/profileCard/ProfileCard'
import MapBox from '../../components/mapbox/MapBox'

const Profile = ({currentPage, setCurrentPage}) => {
    return (
        <div className="page">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MapBox />

            <ProfileCard />
        </div>
    )
}

export default Profile
