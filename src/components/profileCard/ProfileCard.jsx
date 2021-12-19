import './style.scss'
import Button from '../button/Button'
import Card from '../card/Card'

const ProfileCard = () => {
    const saveProfileData = info => {
        console.log('save' ,info)
    }

    return (
        <div className="profile">
            <h1 className="profile__title">Профиль</h1>
            <h3 className="profile__description">Введите платежные данные</h3>

            <div className="profile__data">
                <form className="profile__form form">
                    <div className="form__field">
                        <label htmlFor="card-name" className="form__title">Имя владельца</label>
                        <input
                            name="name"
                            id="card-name"
                            type="text"
                            className="form__input"
                        />
                    </div>

                    <div className="form__field">
                        <label htmlFor="card-number" className="form__title">Номер карты</label>
                        <input
                            name="number"
                            id="card-number"
                            type="text"
                            className="form__input"
                        />
                    </div>

                    <div className="form__info">
                        <div className="form__field">
                            <label htmlFor="card-data" className="form__title">MM/YY</label>
                            <input
                                name="data"
                                id="card-data"
                                type="text"
                                className="form__input"
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="card-cvc" className="form__title">CVC</label>
                            <input
                                name="cvc"
                                id="card-cvc"
                                type="text"
                                className="form__input"
                            />
                        </div>
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

export default ProfileCard;
