import './style.scss'
import Button from '../button/Button'
import Card from '../card/Card'
import Field from '../field/Field'
import { useState } from 'react'
import { connect } from 'react-redux'
import { putCard } from '../../modules/actions'
import { useForm } from 'react-hook-form'

const ProfileCard = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
    token = '',
    loading,
    error
  } = props

  const initialCard = {
    cardNumber,
    expiryDate,
    cardName,
    cvc
  }

  const [cardData, changeCardData] = useState(initialCard)

  const submitForm = ({ cardName, cardNumber, expiryDate, cvc }) =>
    props.putCard(cardNumber, expiryDate, cardName, cvc, token)

  const cardChanged = event => {
    changeCardData({ ...cardData, [event.target.name]: event.target.value })
  }

  return (
        <div className="profile">
            <h1 className="profile__title">Профиль</h1>
            <h3 className="profile__description">Введите платежные данные</h3>

            <div className="profile__data">
                <form className="profile__form form" onSubmit={handleSubmit(submitForm)} onInput={cardChanged}>
                    <Field
                        register={register}
                        errors={errors}
                        error="Введите имя владельца карты"
                        label="cardName"
                        text="Имя владельца"
                        required
                        defaultValue="Ivan Ivanov"
                        type="text"
                        autoComplete="name"
                        pattern={/[A-z]{3,9} [A-z]{3,9}/}
                    />

                    <Field
                        register={register}
                        errors={errors}
                        error="Введите номер карты"
                        label="cardNumber"
                        text="Номер карты"
                        required
                        defaultValue="1111 2222 3333 4444"
                        type="numeric"
                        autoComplete="cardNumber"
                        pattern={
                          /([0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4})|([0-9]{16})/
                        }
                    />

                    <div className="form__info">
                        <Field
                            register={register}
                            errors={errors}
                            error="Введите срок действия карты"
                            label="expiryDate"
                            text="MM/YY"
                            required
                            defaultValue="12/12"
                            type="numeric"
                            autoComplete="expiryDate"
                            pattern={/[0-9]{2}\/[0-9]{2}/}
                        />

                        <Field
                            register={register}
                            errors={errors}
                            error="Введите CVC"
                            label="cvc"
                            text="CVC"
                            required
                            minLength="3"
                            maxLength="3"
                            defaultValue="111"
                            type="numeric"
                            autoComplete="cvc"
                        />
                    </div>
                    <div className="form__submit">
                        <Button
                            type="submit"
                            text="Сохранить"
                            className="form__submit"
                            disabled={loading}
                        />
                    </div>

                  {error && (
                    <span className="error">
                      {error}
                    </span>
                  )}
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
      token: state.auth.token,
      error: state.card.error,
      loading: state.card.loading
    }),
  { putCard }
)(ProfileCard)
