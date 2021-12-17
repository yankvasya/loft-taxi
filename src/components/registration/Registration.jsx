import './style.scss'
import Button from "../button/Button";

const Registration = ({setPage}) => (
    <div className="authorization">
        <div className="authorization__form">
            <h1 className="registration__title">Регистрация</h1>

            <form className="form">
                <label htmlFor="email" className="form__title">Email*</label>
                <input name="email"
                       type="text"
                       placeholder="mail@mail.ru"
                       className="form__input"
                       autoComplete="email"/>
                <label htmlFor="firstname" className="form__title">Как вас зовут?*</label>
                <input name="firstname"
                       type="text"
                       placeholder="Петр Александрович"
                       className="form__input"
                       autoComplete="name"/>
                <label htmlFor="password" className="form__title">Придумайте пароль*</label>
                <input
                    name="password"
                    placeholder="*************"
                    type="password"
                    className="form__input"
                    autoComplete="password"/>
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
