import './style.scss'

import Header from '../../components/header/Header'
import MapBox from '../../components/mapbox/MapBox'
import MapCard from '../../components/mapCard/MapCard'

export const Map = ({ currentPage, setCurrentPage }) => {
  return (
        <div className="page">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MapBox />

            <MapCard />
        </div>
  )
}
