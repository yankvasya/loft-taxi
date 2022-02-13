import { AUTHENTICATE, LOG_IN, LOG_OUT, REGISTRATION } from '../modules/actions'
import { removeLocalStorage, setLocalStorage } from '../modules/localStorage/index'

const initialState = {
  isLoggedIn: false,
  token: '',
  error: null,
  loading: false
}

export const auth = (state = initialState, action) => {
  console.log(LOG_OUT)
  switch (action.type) {
    case AUTHENTICATE: {
      return state
    }
    case LOG_IN: {
      const { email, password, token } = action.payload
      setLocalStorage(email, password)
      return { ...state, isLoggedIn: true, token }
    }
    case LOG_OUT: {
      removeLocalStorage()
      return { isLoggedIn: false }
    }
    case REGISTRATION: {
      return state
    }
    default:
      return state
  }
}
