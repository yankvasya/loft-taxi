import './style.scss'

import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
import { ReactComponent as Chip } from '../../assets/icons/chip.svg'
import { ReactComponent as Ellipse } from '../../assets/icons/ellipse.svg'

const Card = ({ cardNumber, expiryDate }) => {
  const isCardGood = () => cardNumber?.length === 16 || cardNumber?.length === 19

  const slicedCardNumber = () => cardNumber?.split(' ').map((numb, npx) => (
    <span key={npx} >{numb}</span>
  ))

  return (
        <div className={`card ${isCardGood() ? 'active' : ''}`}>
            <div className="card__row">
                <Logo className="card__logo" />
                <div className="card__data">
                  {expiryDate}
                </div>
            </div>
            <div className="card__number">
              {slicedCardNumber()}
            </div>
            <div className="card__row">
                <Chip className="card__chip" />
                <div className="card__mastercard">
                    <Ellipse />
                    <Ellipse />
                </div>
            </div>
        </div>
  )
}

export default Card
