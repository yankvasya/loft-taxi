import './style.scss'

import Header from '../../components/header/Header'
import MapBox from '../../components/mapbox/MapBox'
import { withAuth } from '../../components/authContext/AuthContext'

export const Map = ({currentPage, setCurrentPage}) => {
    return (
        <div className="page">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MapBox />
        </div>
    )
}

export const MapWithData = withAuth(Map)
