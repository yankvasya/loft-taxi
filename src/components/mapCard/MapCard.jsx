import './style.scss'

import { connect } from 'react-redux'
import Button from '../button/Button'

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'

import Standard from '../../assets/img/standard.jpg'
import Premium from '../../assets/img/premium.jpg'
import Business from '../../assets/img/business.jpg'
import { useEffect, useState } from 'react'
import { goRoute } from '../../modules/actions'

const MapCard = (props) => {
  const [currentCar, changeCurrentCar] = useState(0)
  const [currentAddresses, changeCurrentAddresses] = useState({ address1: '', address2: '' })

  useEffect(() => {
    changeCurrentAddresses({ address1: props.routes[0], address2: props.routes[1] })
  }, [])

  const cars = [
    { type: 'Стандарт', price: 150, img: Standard },
    { type: 'Премиум', price: 250, img: Premium },
    { type: 'Бизнес', price: 300, img: Business }
  ]

  const changeType = (number) => {
    changeCurrentCar(number)
  }

  const routes = (another) =>
    props.routes.filter(route => route !== currentAddresses[another])
      .map(route => (
      <option
        className="address__option"
        value={route}
        key={route}
      >
        {route}
      </option>
      ))

  const submitForm = (event) => {
    event.preventDefault()
    const { address1, address2 } = event.target.elements

    props.goRoute(address1.value, address2.value)
  }

  const addressChanged = ({ target }) => {
    changeCurrentAddresses({ ...currentAddresses, [target.name]: target.value })
  }

  return (
    <form className="mapCard" onSubmit={submitForm}>
      <div className="addresses">
        <div className="address">
          <div className="icon" />
          <select
            name="address1"
            className="address__select"
            onChange={addressChanged}
          >
            {routes('address2')}
          </select>

          <button className="close" />
        </div>

        <div className="address">
          <Arrow />
          <select
            name="address2"
            className="address__select"
            onChange={addressChanged}
          >
            {routes('address1')}
          </select>

          <button className="close" />
        </div>
      </div>

      <div className="cars">
        {cars.map(({ type, price, img }, npx) => (
          <label className={`car ${npx === currentCar ? 'current' : ''}`} key={type}>
            <h4 className="car__name">{type}</h4>
            <h6 className="car__desc">Стоимость</h6>
            <h5 className="car__price">{price} Р</h5>

            <div className="car__img">
              <img src={img} alt={`${type} подача`}/>
            </div>

            <input
              name="car"
              type="radio"
              value={type}
              defaultChecked={npx === currentCar}
              onChange={() => changeType(npx)}
            />
          </label>
        ))}
      </div>

      <Button
        type="submit"
        text="Заказать"
        className="form__submit"
      />
    </form>
  )
}

export const MapCardWithData = connect(
  state => ({ routes: state.routes.routes }),
  { goRoute }
)(MapCard)
