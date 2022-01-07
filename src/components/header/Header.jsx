import './style.scss'

import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
import { ReactComponent as Title } from '../../assets/logo/title.svg'

import Menu from '../menu/Menu'

const Header = ({ currentPage, setCurrentPage }) => {
  const goMainPage = () => {
    setCurrentPage('Map')
  }

  return (
        <header className="header">
            <button className="logo" onClick={goMainPage}>
                <Logo className="logo__img" />
                <Title className="logo__title" />
            </button>
            <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </header>
  )
}

export default Header
