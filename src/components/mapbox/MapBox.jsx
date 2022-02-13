import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './style.scss'
import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { drawRoute } from '../../modules/mapRoute'

const MapBoxNoData = (props) => {
  const mapContainer = useRef()
  let map = null

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWhvdHVreiIsImEiOiJja3hrdjN6aTUxaXFsMnBranR3cHgzengzIn0.6n4f6lFf6K0v0FuXN9ZajA'

    // eslint-disable-next-line react-hooks/exhaustive-deps
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.29, 59.98],
      zoom: 13
    })

    if (props.route && map !== null) {
      console.log('рисуем')
      setTimeout(() => {
        drawRoute(map, props.route)
      }, 666)
    }

    return () => {
      map.remove()
    }
  }, [props.route])

  return (
    <div className="map-wrapper">
      <div data-testid="map" className="map" ref={ mapContainer } />
    </div>
  )
}

export const MapBox = connect(
  state => ({ route: state.routes.route, loading: state.routes.loading })
)(MapBoxNoData)
