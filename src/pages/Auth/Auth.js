import './style.scss'

import { LoginWithData } from '../../components/login/Login'
import Aside from '../../components/aside/Aside'
import Registration from '../../components/registration/Registration'
import { useState } from 'react'

const Auth = ({ setCurrentPage }) => {
    const [page, setPage] = useState('login');
    const pages = {
        login: <LoginWithData page={page} setPage={setPage} setMainPage={setCurrentPage} />,
        registration: <Registration page={page} setPage={setPage} />
    }

    const currentPage = () => pages[page]

    return (
     <div className="auth">
         <Aside />
         <div className="auth__container">
             {currentPage()}
         </div>
     </div>
    )
}

export default Auth
