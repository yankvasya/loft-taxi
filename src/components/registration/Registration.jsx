import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'
import { connect } from 'react-redux'
import { registration } from '../../modules/actions'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Registration = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setPage, isLoggedIn } = props

  const registration = ({ email, password, fullName }) => {
    const [name, surname] = fullName.split(' ')
    props.registration(email, password, name, surname)
  }

  const registr = () => !isLoggedIn
    ? (
     <>
       <form className="form" onSubmit={handleSubmit(registration)}>
         <Field
             register={register}
             errors={errors}
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
             label="fullName"
             text="Как вас зовут?*"
             required
             maxLength="30"
             defaultValue="123123"
             type="text"
             autoComplete="fullName"
             pattern={/[А-я]{3,9} [А-я]{3,9}|[A-z]{3,9} [A-z]{3,9}/}
         />

         <Field
             register={register}
             errors={errors}
             label="password"
             text="Придумайте пароль*"
             required
             maxLength="30"
             defaultValue="123123"
             type="password"
             autoComplete="password"
         />

         <Button text="Зарегистрироваться" type="submit"/>
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
          disabled={false}
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
    loading: state.auth.loading
  }),
  { registration }
)(Registration)
