import './style.scss'
import { connect } from 'react-redux'
import { logOut } from '../../actions'

const Menu = ({ currentPage, setCurrentPage, logOut }) => {
  const pages =
        [
          { title: 'Карта', name: 'Map' },
          { title: 'Профиль', name: 'Profile' },
          { title: 'Выйти', name: 'Auth' }
        ]

  const goToPage = (e, page) => {
    e.preventDefault()
    setCurrentPage(page)
  }

  const logout = (e, page) => {
    logOut()
    goToPage(e, page)
  }

  return (
        <ul className="menu">
            {pages.map(({ name, title }) => (
                <li className="menu__item" key={name}>
                    <button
                        className={`menu__link ${currentPage === name && 'active'}`}
                        onClick={e => title === 'Выйти' ? logout(e, name) : goToPage(e, name)}
                        disabled={currentPage === name}
                    >
                        {title}
                    </button>
                </li>
            ))}
        </ul>
  )
}

export default connect(
  null,
  { logOut }
)(Menu)
