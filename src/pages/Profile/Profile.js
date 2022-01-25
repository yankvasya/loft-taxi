import './style.scss'

import Header from '../../components/header/Header'
import ProfileCard from '../../components/profileCard/ProfileCard'

export const Profile = ({ currentPage, setCurrentPage }) => {
  return (
        <div className="page">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <ProfileCard />
        </div>
  )
}
