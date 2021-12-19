import './style.scss'
import mapImg from '../../assets/img/map.jpg'
import Header from '../../components/header/Header'

const Map = ({currentPage, setCurrentPage}) => {
    return (
        <div className="map">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <img
                src={mapImg}
                alt="Заглушка карты"
                className="map__img"
            />
        </div>
    )
}

export default Map
