import './style.scss'
import Button from '../button/Button'
import Card from '../card/Card'
import Field from '../field/Field'
import { useState } from 'react'
import { connect } from 'react-redux'
import { putCard } from '../../modules/actions'

const ProfileCard = (props) => {
  const {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
    token = ''
  } = props

  const initialCard = {
    cardNumber,
    expiryDate,
    cardName,
    cvc
  }

  const [cardData, changeCardData] = useState(initialCard)

  const submitForm = event => {
    event.preventDefault()
    const form = event.target.elements

    const data = {
      cardNumber: form.cardNumber.value,
      expiryDate: form.expiryDate.value,
      cardName: form.cardName.value,
      cvc: form.cvc.value,
      token
    }
    props.putCard(data.cardNumber, data.expiryDate, data.cardName, data.cvc, token)
  }

  const cardChanged = event => {
    changeCardData({ ...cardData, [event.target.name]: event.target.value })
  }

  return (
        <div className="profile">
            <h1 className="profile__title">Профиль</h1>
            <h3 className="profile__description">Введите платежные данные</h3>

            <div className="profile__data">
                <form className="profile__form form" onSubmit={submitForm} onInput={cardChanged}>
                    <Field
                        currentId="cardName"
                        text="Имя владельца"
                        placeholder=""
                        autocomplete="cardName"
                        inputValue={cardName}
                    />

                    <Field
                        currentId="cardNumber"
                        text="Номер карты"
                        placeholder=""
                        autocomplete="cardNumber"
                        type="numeric"
                        minLength="16"
                        maxLength="19"
                        inputValue={cardNumber}

                    />

                    <div className="form__info">
                        <Field
                            currentId="expiryDate"
                            text="MM/YY"
                            placeholder=""
                            autocomplete="expiryDate"
                            type="numeric"
                            minLength="5"
                            maxLength="5"
                            inputValue={expiryDate}
                        />

                        <Field
                            currentId="cvc"
                            text="CVC"
                            placeholder=""
                            autocomplete="cvc"
                            type="numeric"
                            maxLength="3"
                            inputValue={cvc}
                        />
                    </div>
                    <div className="form__submit">
                        <Button
                            type="submit"
                            text="Сохранить"
                            className="form__submit"
                        />
                    </div>
                </form>

                <Card cardNumber={cardNumber} expiryDate={expiryDate} />
            </div>
        </div>
  )
}

export const ProfileCardWithData = connect(
  state =>
    ({
      cardNumber: state.card.cardNumber,
      expiryDate: state.card.expiryDate,
      cardName: state.card.cardName,
      cvc: state.card.cvc,
      token: state.auth.token
    }),
  { putCard }
)(ProfileCard)
