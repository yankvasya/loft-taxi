import { AUTH_ERROR, AUTHENTICATE, LOG_IN, LOG_OUT, REGISTRATION } from '../modules/actions'
import { removeLocalStorage, setLocalStorage } from '../modules/localStorage/index'

const initialState = {
  isLoggedIn: false,
  token: '',
  error: null,
  loading: false
}

export const auth = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case AUTHENTICATE: {
      return { ...state, loading: true, error: null }
    }
    case LOG_IN: {
      const { email, password, token } = action.payload
      setLocalStorage(email, password)
      return { ...state, isLoggedIn: true, token, loading: false }
    }
    case LOG_OUT: {
      removeLocalStorage()
      return { isLoggedIn: false }
    }
    case AUTH_ERROR: {
      const { error } = action.payload
      return { ...state, loading: false, error: error }
    }
    case REGISTRATION: {
      return { ...state, loading: true, error: null }
    }
    default:
      return state
  }
}
