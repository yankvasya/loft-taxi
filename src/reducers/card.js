import { PUT_CARD, GET_CARD, SAVE_CARD } from '../modules/actions'

const initialState = {
  card: '',
  loading: false,
  error: null
}

export const card = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD: {
      console.log(GET_CARD, action.payload)
      return state
    }
    case PUT_CARD: {
      console.log(PUT_CARD, action.payload)
      return state
    }
    case SAVE_CARD: {
      console.log(PUT_CARD, action.payload)
      return state
    }
    default:
      return state
  }
}
