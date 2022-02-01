import './style.scss'

import Header from '../../components/header/Header'
import MapBox from '../../components/mapbox/MapBox'
import { MapCardWithData } from '../../components/mapCard/MapCard'
import { connect } from 'react-redux'

const MapNoData = (props) => {
  const { currentPage, setCurrentPage, card } = props

  const getCard = () => card ? (<MapCardWithData />) : (<></>)

  return (
        <div className="page">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <MapBox />

          {getCard()}
        </div>
  )
}

export const Map = connect(
  state => ({ card: state.card.cardNumber })
)(MapNoData)
