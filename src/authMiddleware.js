import { logIn, AUTHENTICATE } from './actions'
import { serverLogin } from './api'

const checkData = (payload) => payload.email && payload.password ? payload : getLocalStorage()

const getLocalStorage = () => {
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  return { email, password }
}

const setLocalStorage = (email, password) => {
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)
}

export const authMiddleware = store => next => async action => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = checkData(action.payload)
    const success = await serverLogin(email, password)

    if (success) {
      setLocalStorage(email, password)
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
}
