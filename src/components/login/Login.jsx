import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'
import { connect } from 'react-redux'
import { authenticate, authError } from '../../modules/actions'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

export const Login = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setPage, isLoggedIn, error, loading } = props
  const authorization = ({ email, password }) => props.authenticate(email, password)

  useEffect(() => {
    props.authError(null)
  }, [])

  const login = () => !isLoggedIn
    ? (
        <>
            <form onSubmit={handleSubmit(authorization)} className="form">

                 <Field
                     register={register}
                     errors={errors}
                     error="Введите email"
                     label="email"
                     text="Email"
                     required
                     maxLength="30"
                     defaultValue="test@test.com"
                     type="email"
                     autoComplete="email"
                 />

                <Field
                    register={register}
                    errors={errors}
                    error="Введите пароль"
                    label="password"
                    text="Пароль"
                    required
                    maxLength="30"
                    defaultValue="123123"
                    type="password"
                    autoComplete="password"
                />

                <label className="form__forgot-password">
                <span onClick={() => console.log('Забыли пароль')}>
                Забыли пароль?
                </span>
                </label>

                <Button
                    text={'Попытка входа'}
                    type="submit"
                    disabled={loading}
                />

                {error &&
                    (
                    <span className="error" >
                      {error}
                    </span>
                    )}
            </form>

            <div className="change-type">
                <h4 className="change-type__title">Новый пользователь?</h4>
                <button onClick={() => setPage('registration')} className="change-type__link">Регистрация</button>
            </div>
        </>
      )
    : (
          <div className="btn-center">
              <Link to="/map" >
                  <Button
                      text='Войти'
                      type="button"
                  />
              </Link>
          </div>
      )

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
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth.loading,
    error: state.auth.error
  }),
  { authenticate, authError }
)(Login)
