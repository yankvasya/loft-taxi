import './style.scss'

const Menu = ({currentPage, setCurrentPage}) => {
    const goToPage = (e, page) => {
        e.preventDefault()
        setCurrentPage(page)
    }

    return (
        <ul className="menu">
           <li className="menu__item">
               <button className={currentPage === 'Map' ? 'menu__link active' : 'menu__link'}
                       onClick={e => goToPage(e, 'Map')}
                       disabled={currentPage === 'Map'}
               >
                   Карта
               </button>
           </li>
            <li className="menu__item">
                <button className={currentPage === 'Profile' ? 'menu__link active' : 'menu__link'}
                        onClick={e => goToPage(e, 'Profile')}
                        disabled={currentPage === 'Profile'}
                >
                    Профиль
                </button>
            </li>
            <li className="menu__item">
                <button className={currentPage === 'Logout' ? 'menu__link active' : 'menu__link'}
                        onClick={e => goToPage(e)}
                        disabled={currentPage === 'Logout'}
                >
                    Выйти
                </button>
            </li>
        </ul>
    )
}

export default Menu
