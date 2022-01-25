import { Link } from 'react-router-dom'

import './style.scss'

import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
import { ReactComponent as Title } from '../../assets/logo/title.svg'

import Menu from '../menu/Menu'

const Header = () => {
  return (
        <header className="header">
            <Link to="/map" replace>
                <button className="logo">
                    <Logo className="logo__img" />
                    <Title className="logo__title" />
                </button>
            </Link>
            <Menu />
        </header>
  )
}

export default Header
