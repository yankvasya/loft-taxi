import './style.scss'
import Button from '../button/Button'
import Field from '../field/Field'
import { connect } from 'react-redux'
import { registration } from '../../modules/actions'
import { Link } from 'react-router-dom'

const Registration = (props) => {
  const { setPage, isLoggedIn } = props

  const registration = e => {
    e.preventDefault()
    const { email, password, fullName } = e.target.elements
    const [name, surname] = fullName.value.split(' ')
    props.registration(email.value, password.value, name, surname)
  }

  const registr = () => !isLoggedIn
    ? (
     <>
       <form className="form" onSubmit={registration}>
         <Field
           currentId="email"
           text="Email"
           placeholder="mail@mail.ru"
           autocomplete="email"
           type="text"
         />

         <Field
           currentId="fullName"
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

         <Button text="Зарегистрироваться" type="submit" disabled={false} />
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
  state => ({ isLoggedIn: state.auth.isLoggedIn }),
  { registration }
)(Registration)
