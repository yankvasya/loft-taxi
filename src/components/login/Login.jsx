import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'
import { withAuth } from '../authContext/AuthContext'

export const Login = ({ setPage, setMainPage, isLoggedIn, logIn }) => {
    const authorization = e => {
        e.preventDefault()
        const { email, password } = e.target
        logIn(email.value, password.value)
    }

    return (<div className="authorization">
            <div className="authorization__form">
                <h1 className="authorization__title">Войти</h1>

                <form onSubmit={authorization} className="form">
                    <Field
                        currentId="email"
                        text="Email"
                        placeholder="mail@mail.ru"
                        autocomplete="email"
                        type="text"
                    />

                    <Field
                        currentId="password"
                        text="Password"
                        placeholder="*************"
                        autocomplete="password"
                        type="password"
                    />

                    <label className="form__forgot-password">
                        <span onClick={() => console.log('Забыли пароль')}>
                            Забыли пароль?
                        </span>
                    </label>
                    <Button
                        text={isLoggedIn ? 'Войти' : 'Попытка'}
                        disabled={false} type="submit"
                        eventClick={isLoggedIn && (() => setMainPage('Map'))}
                    />
                </form>

                <div className="change-type">
                    <h4 className="change-type__title">Новый пользователь?</h4>
                    <button onClick={() => setPage('registration')} className="change-type__link">Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export const LoginWithData = withAuth(Login)
