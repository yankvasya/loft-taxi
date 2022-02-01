import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'
import { connect } from 'react-redux'
import { authenticate } from '../../modules/actions'
import { Link } from 'react-router-dom'

export const Login = (props) => {
  const { setPage, isLoggedIn } = props
  const authorization = e => {
    e.preventDefault()
    const { email, password } = e.target
    props.authenticate(email.value, password.value)
  }

  const login = () => !isLoggedIn
    ? (
            <>
                <form onSubmit={authorization} className="form">
                    <Field
                        currentId="email"
                        text="Email"
                        placeholder="mail@mail.ru"
                        autocomplete="email"
                        type="text"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                        text={'Попытка входа'}
                        disabled={false} type="submit"
                    />
                </form>

                <div className="change-type">
                    <h4 className="change-type__title">Новый пользователь?</h4>
                    <button onClick={() => setPage('registration')} className="change-type__link">Регистрация</button>
                </div>
            </>
      )
    : <div className="btn-center">
          <Link to="/map" >
              <Button
                  text={'Войти'}
                  disabled={false}
                  type="button"
              />
          </Link>
        </div>

  return (
        <div className="authorization">
            <div className="authorization__form">
                <h1 className="authorization__title">Войти</h1>

                {login()}
            </div>
        </div>
  )
}

export const LoginWithData = connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login)
