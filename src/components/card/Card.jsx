import './style.scss';
import {ReactComponent as Logo}  from "../../assets/logo/logo.svg";
import {ReactComponent as Chip}  from "../../assets/icons/chip.svg";
import {ReactComponent as Ellipse}  from "../../assets/icons/ellipse.svg";

const Card = () => {

    return (
        <div className="card">
            <div className="card__row">
                <Logo className="card__logo" />
                <div className="card__data">
                    05/08
                </div>
            </div>
            <div className="card__number">5545 2300 3432 4521</div>
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

export default Card;
