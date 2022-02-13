import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'
import { connect } from 'react-redux'
import { authError, registration } from '../../modules/actions'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const Registration = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setPage, isLoggedIn, error, loading } = props

  const registration = ({ email, password, fullName }) => {
    const [name, surname] = fullName.split(' ')
    props.registration(email, password, name, surname)
  }

  useEffect(() => {
    props.authError(null)
  }, [])

  const registr = () => !isLoggedIn
    ? (
     <>
       <form className="form" onSubmit={handleSubmit(registration)}>
         <Field
             register={register}
             errors={errors}
             error="Введите корректный адрес почты"
             label="email"
             text="Email*"
             required
             maxLength="30"
             defaultValue="test@test.com"
             type="email"
             autoComplete="email"
         />

         <Field
             register={register}
             errors={errors}
             error="Введите полное имя и фамилию"
             label="fullName"
             text="Как вас зовут?*"
             required
             maxLength="30"
             defaultValue="Иван Петров"
             type="text"
             autoComplete="fullName"
             pattern={/[А-я]{3,9} [А-я]{3,9}|[A-z]{3,9} [A-z]{3,9}/}
         />

         <Field
             register={register}
             errors={errors}
             error="Пароль должен быть не меньше 5 символов"
             label="password"
             text="Придумайте пароль*"
             required
             minLength="5"
             maxLength="30"
             defaultValue="12345"
             type="password"
             autoComplete="password"
         />

         <Button
             text="Зарегистрироваться"
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
         <h4 className="change-type__title">Уже зарегистрированы?</h4>
         <button onClick={() => setPage('login')} className="change-type__link">Войти</button>
       </div>
     </>
      )
    : <div className="btn-center">
      <Link to="/map" >
        <Button
          text={'Войти'}
          type="button"
        />
      </Link>
    </div>

  return (
    <div className="authorization">
      <div className="authorization__form">
        <h1 className="registration__title">{isLoggedIn ? 'Войти' : 'Регистрация'}</h1>

        {registr()}
      </div>
    </div>
  )
}

export const RegistrationWithData = connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
    loading: state.auth.loading,
    error: state.auth.error
  }),
  { registration, authError }
)(Registration)
