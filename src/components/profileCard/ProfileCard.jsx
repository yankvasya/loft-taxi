import './style.scss'
import Button from '../button/Button'
import Card from '../card/Card'
import Field from '../field/Field'

const ProfileCard = () => {
  const saveProfileData = info => {
    console.log('save', info)
  }

  return (
        <div className="profile">
            <h1 className="profile__title">Профиль</h1>
            <h3 className="profile__description">Введите платежные данные</h3>

            <div className="profile__data">
                <form className="profile__form form">
                    <Field
                        currentId="name"
                        text="Имя владельца"
                        placeholder=""
                        autocomplete="name"
                        type="text"
                    />

                    <Field
                        currentId="card-number"
                        text="Номер карты"
                        placeholder=""
                        autocomplete="card-number"
                        type="text"
                    />

                    <div className="form__info">
                        <Field
                            currentId="card-data"
                            text="MM/YY"
                            placeholder=""
                            autocomplete="card-data"
                            type="text"
                        />

                        <Field
                            currentId="card-cvc"
                            text="CVC"
                            placeholder=""
                            autocomplete="card-cvc"
                            type="text"
                        />
                    </div>
                    <div className="form__submit">
                        <Button
                            type="submit"
                            text="Сохранить"
                            className="form__submit"
                            eventClick={e => saveProfileData(e)}
                        />
                    </div>
                </form>

                <Card />
            </div>
        </div>
  )
}

export default ProfileCard
