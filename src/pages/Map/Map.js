import './style.scss'

import Header from '../../components/header/Header'
import MapBox from '../../components/mapbox/MapBox'

export const Map = ({ currentPage, setCurrentPage }) => {
  return (
        <div className="page">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MapBox />
        </div>
  )
}
