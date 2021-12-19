import './style.scss'

import Header from '../../components/header/Header'
import mapImg from '../../assets/img/map.jpg'
import ProfileCard from '../../components/profileCard/ProfileCard'

const Profile = ({currentPage, setCurrentPage}) => {
    return (
        <div className="map">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <img
                src={mapImg}
                alt="Заглушка карты"
                className="map__img"
            />

            <ProfileCard />
        </div>
    )
}

export default Profile
