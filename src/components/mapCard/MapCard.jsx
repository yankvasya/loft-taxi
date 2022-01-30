import './style.scss'

import Button from '../button/Button'

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'

import Standard from '../../assets/img/standard.jpg'
import Premium from '../../assets/img/premium.jpg'
import Business from '../../assets/img/business.jpg'

const MapCard = () => {
  return (
    <form className="mapCard">
      <div className="addresses">
        <div className="address">
          <div className="icon" />
          <select className="address__select">
            <option className="address__option" value="Лесная поляна 34, п.8">Лесная поляна 34, п.8</option>
            <option className="address__option" value="Березовая роща 146, п.14">Березовая роща 146, п.14</option>
          </select>

          <button className="close" />
        </div>

        <div className="address">
          <Arrow />
          <select className="address__select">
            <option className="address__option" value="Лесная поляна 34, п.8">Лесная поляна 34, п.8</option>
            <option className="address__option" value="Березовая роща 146, п.14">Березовая роща 146, п.14</option>
          </select>

          <button className="close" />
        </div>
      </div>

      <div className="cars">
        <label className="car current">
          <h4 className="car__name">Стандарт</h4>
          <h6 className="car__desc">Стоимость</h6>
          <h5 className="car__price">150 Р</h5>

          <div className="car__img">
            <img src={Standard} alt="Стандартная подача"/>
          </div>

          <input name="car" id="standardCar" type="radio" defaultChecked />
        </label>

        <label className="car">
          <h4 className="car__name">Премиум</h4>
          <h6 className="car__desc">Стоимость</h6>
          <h5 className="car__price">250 Р</h5>

          <div className="car__img">
            <img src={Premium} alt="Премиум подача"/>
          </div>

          <input name="car" id="premiumCar" type="radio"/>
        </label>

        <label className="car">
          <h4 className="car__name">Бизнес</h4>
          <h6 className="car__desc">Стоимость</h6>
          <h5 className="car__price">300 Р</h5>

          <div className="car__img">
            <img src={Business} alt="Бизнес подача"/>
          </div>

          <input name="car" id="businessCar" type="radio"/>
        </label>
      </div>

      <Button
        type="submit"
        text="Заказать"
        className="form__submit"
        eventClick={e => e.preventDefault()}
      />
    </form>
  )
}

export default MapCard
