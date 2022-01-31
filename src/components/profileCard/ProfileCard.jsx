import './style.scss'
import Button from '../button/Button'
import Card from '../card/Card'
import Field from '../field/Field'
import { useState } from 'react'

const ProfileCard = () => {
  const initialCard = {
    cardNumber: '5545 2300 3432 4666',
    expiryDate: '06/66',
    cardName: '',
    cvc: ''
  }

  const [cardData, changeCardData] = useState(initialCard)

  const submitForm = event => {
    event.preventDefault()
    const data = {
      cardNumber: event.target.elements.cardNumber.value,
      expiryDate: '',
      cardName: '',
      cvc: '',
      token: ''
    }
    console.log('save', data)
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
                        currentId="name"
                        text="Имя владельца"
                        placeholder=""
                        autocomplete="name"
                        type="text"
                    />

                    <Field
                        currentId="cardNumber"
                        text="Номер карты"
                        placeholder=""
                        autocomplete="card-number"
                        type="text"
                        minLength="16"
                        maxLength="16"
                    />

                    <div className="form__info">
                        <Field
                            currentId="card-data"
                            text="MM/YY"
                            placeholder=""
                            autocomplete="card-data"
                            type="text"
                            maxLength="4"
                        />

                        <Field
                            currentId="card-cvc"
                            text="CVC"
                            placeholder=""
                            autocomplete="card-cvc"
                            type="text"
                            maxLength="3"
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

                <Card cardNumber={cardData.cardNumber} expiryDate={cardData.expiryDate} />
            </div>
        </div>
  )
}

export default ProfileCard
