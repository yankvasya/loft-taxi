import './style.scss'

const Menu = ({currentPage, setCurrentPage}) => {
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

    return (
        <ul className="menu">
            {pages.map(({ name,title }) => (
                <li className="menu__item" key={name}>
                    <button
                        className={`menu__link ${currentPage === name && 'active' }`}
                        onClick={e => goToPage(e, name)}
                        disabled={currentPage === name}
                    >
                        {title}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Menu
