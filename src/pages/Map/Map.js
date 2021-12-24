import './style.scss'

import Header from '../../components/header/Header'
import MapBox from "../../components/mapbox/MapBox";

const Map = ({currentPage, setCurrentPage}) => {
    return (
        <div className="page">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MapBox />
        </div>
    )
}

export default Map
