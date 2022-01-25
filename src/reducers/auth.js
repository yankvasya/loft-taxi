import { LOG_IN, LOG_OUT } from '../actions'

const initialState = {
  isLoggedIn: false
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { isLoggedIn: true }
    }
    case LOG_OUT: {
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      return { isLoggedIn: false }
    }
    default:
      return state
  }
}
