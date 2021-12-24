import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './style.scss'
import {useEffect, useRef} from 'react'

const MapBox = () => {
    const mapContainer = useRef()
    let map = null

    useEffect(()=> {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZWhvdHVreiIsImEiOiJja3hrdjN6aTUxaXFsMnBranR3cHgzengzIn0.6n4f6lFf6K0v0FuXN9ZajA'

        console.log(mapContainer.current)

        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9
        })

        return () => {
            map.remove()
        }
    }, [])

    return (
        <div className="map-wrapper">
            <div data-testid="map" className="map" ref={ mapContainer } />
        </div>
    )
}

export default MapBox
