import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'

const Login = ({setPage, setMainPage}) => {
    return (<div className="authorization">
            <div className="authorization__form">
                <h1 className="authorization__title">Войти</h1>

                <form className="form">
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
