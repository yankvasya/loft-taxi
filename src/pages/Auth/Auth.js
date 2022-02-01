import './style.scss'

import { useState } from 'react'
import { LoginWithData } from '../../components/login/Login'
import Aside from '../../components/aside/Aside'
import { RegistrationWithData } from '../../components/registration/Registration'

function Auth () {
  const [page, setPage] = useState('login')
  const pages = {
    login: <LoginWithData page={page} setPage={setPage} />,
    registration: <RegistrationWithData page={page} setPage={setPage} />
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
