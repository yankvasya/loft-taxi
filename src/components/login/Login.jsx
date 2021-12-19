import './style.scss'
import Button from '../button/Button'

const Login = ({setPage, setMainPage}) => {
    return (<div className="authorization">
            <div className="authorization__form">
                <h1 className="authorization__title">Войти</h1>

                <form className="form">
                    <label htmlFor="email" className="form__label">Email</label>
                    <input name="email" type="text" placeholder="mail@mail.ru" className="form__input"
                           autoComplete="email"/>
                    <label htmlFor="password" className="form__label">Password</label>
                    <input
                        name="password"
                        placeholder="*************"
                        type="password"
                        className="form__input"
                        autoComplete="password"/>
                    <label className="form__forgot-password">
                        <button onClick={e => e.preventDefault()}>
                            Забыли пароль?
                        </button>
                    </label>
                    <Button text="Войти" disabled={false} eventClick={() => setMainPage('Map')}/>
                </form>

                <div className="change-type">
                    <h4 className="change-type__title">Новый пользователь?</h4>
                    <button onClick={() => setPage('registration')} className="change-type__link">Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default Login
