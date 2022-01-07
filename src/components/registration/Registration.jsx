import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'

const Registration = ({ setPage }) => (
    <div className="authorization">
        <div className="authorization__form">
            <h1 className="registration__title">Регистрация</h1>

            <form className="form">
                <Field
                    currentId="email"
                    text="Email"
                    placeholder="mail@mail.ru"
                    autocomplete="email"
                    type="text"
                />

                <Field
                    currentId="firstname"
                    text="Как вас зовут?*"
                    placeholder="Петр Александрович"
                    autocomplete="name"
                    type="text"
                />

                <Field
                    currentId="password"
                    text="Придумайте пароль*"
                    placeholder="*************"
                    autocomplete="password"
                    type="password"
                />

                <Button text="Зарегистрироваться" disabled={false} eventClick={() => setPage('login')}/>
            </form>

            <div className="change-type">
                <h4 className="change-type__title">Уже зарегистрированы?</h4>
                <button onClick={() => setPage('login')} className="change-type__link">Войти</button>
            </div>
        </div>
    </div>
)

export default Registration
