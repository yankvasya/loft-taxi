import './style.scss'

import Header from '../../components/header/Header'
import ProfileCard from '../../components/profileCard/ProfileCard'
import MapBox from '../../components/mapbox/MapBox'
import { withAuth } from '../../components/authContext/AuthContext'

export const Profile = ({currentPage, setCurrentPage}) => {
    return (
        <div className="page">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MapBox />

            <ProfileCard />
        </div>
    )
}

export const ProfileWithData = withAuth(Profile)
