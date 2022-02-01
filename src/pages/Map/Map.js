import './style.scss'

import Header from '../../components/header/Header'
import { MapBox } from '../../components/mapbox/MapBox'
import { MapCardWithData } from '../../components/mapCard/MapCard'
import { connect } from 'react-redux'
import { NewOrder } from '../../components/newOrder/NewOrder'
import { NeedCard } from '../../components/needCard/NeedCard'

const MapNoData = (props) => {
  const { currentPage, setCurrentPage, card } = props

  const getCard = () =>
    props.route
      ? (<NewOrder />)
      : card
        ? (<MapCardWithData />)
        : (<NeedCard />)

  return (
        <div className="page">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <MapBox />

          {getCard()}
        </div>
  )
}

export const Map = connect(
  state => ({ card: state.card.cardNumber, route: state.routes.route })
)(MapNoData)
