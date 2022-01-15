import { logIn, AUTHENTICATE } from './actions'
import { serverLogin } from './api'

export const authMiddleware = store => next => async action => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload
    const success = await serverLogin(email, password)
    if (success) {
      setLocalStorage(email, password)
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
}

const setLocalStorage = (email, password) => {
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)
}
