import { CAN_BE_ROUTE, DELETE_ROUTE, GET_ROUTES, GO_ROUTE } from '../modules/actions'

const initialState = {
  routes: [],
  route: null,
  address1: '',
  address2: '',
  loading: false,
  error: null
}

export const routes = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTES: {
      const { routes } = action.payload

      return { ...state, routes }
    }
    case GO_ROUTE: {
      const { address1, address2 } = action.payload
      return { ...state, address1, address2, loading: true }
    }
    case CAN_BE_ROUTE: {
      const { route } = action.payload
      return { ...state, route, loading: false, error: null }
    }
    case DELETE_ROUTE: {
      return { ...state, route: null }
    }
    default:
      return state
  }
}
