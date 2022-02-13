import { PUT_CARD, GET_CARD, SAVE_CARD } from '../modules/actions'

const initialState = {
  cardNumber: '',
  expiryDate: '',
  cardName: '',
  cvc: '',
  loading: false,
  error: null
}

export const card = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD: {
      return { ...state, loading: true }
    }
    case PUT_CARD: {
      return { ...state, loading: true, error: null }
    }
    case SAVE_CARD: {
      const { cardNumber, expiryDate, cardName, cvc } = action.payload
      return { ...state, cardNumber, expiryDate, cardName, cvc, loading: false, error: null }
    }
    default:
      return state
  }
}
