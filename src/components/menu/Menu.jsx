import './style.scss'
import { connect } from 'react-redux'
import { logOut } from '../../actions'
import { Link, useLocation } from 'react-router-dom'

const Menu = (props) => {
  const { pathname } = useLocation()

  const handleClick = (name) => name === 'Logout' && logout()

  const logout = () => props.logOut()

  const pages =
        [
          { title: 'Карта', name: 'Map', path: '/map' },
          { title: 'Профиль', name: 'Profile', path: '/profile' },
          { title: 'Выйти', name: 'Logout', path: '/' }
        ]

  return (
        <ul className="menu">
            {pages.map(({ name, title, path }) => (
                <li className="menu__item" key={name}>
                    <Link to={path} replace >
                        <button
                            className={`menu__link ${pathname === path && 'active'}`}
                            disabled={false}
                            onClick={() => handleClick(name)}
                        >
                            {title}
                        </button>
                    </Link>
                </li>
            ))}
        </ul>
  )
}

export default connect(
  null,
  { logOut }
)(Menu)
