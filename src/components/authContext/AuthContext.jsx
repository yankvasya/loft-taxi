import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = (email, password) => setIsLoggedIn(email === 'test' && password === '123')

  const logOut = () => setIsLoggedIn(false)

  return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
  )
}

export const withAuth = WrappedComponent =>
  props => (<AuthContext.Consumer>{ value => <WrappedComponent {...value} {...props} /> }</AuthContext.Consumer>)
