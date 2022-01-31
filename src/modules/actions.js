export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REGISTRATION = 'REGISTRATION'
export const GET_ROUTES = 'GET_ROUTES'
export const GO_ROUTE = 'GO_ROUTE'
export const CAN_BE_ROUTE = 'CAN_BE_ROUTE'
export const PUT_CARD = 'PUT_CARD'
export const GET_CARD = 'GET_CARD'
export const SAVE_CARD = 'SAVE_CARD'

export const logIn = (email, password, token) => ({ type: LOG_IN, payload: { email, password, token } })
export const logOut = () => ({ type: LOG_OUT })
export const authenticate = (email, password) => ({ type: AUTHENTICATE, payload: { email, password } })
export const putCard = (cardNumber, expiryDate, cardName, cvc, token) =>
  ({ type: PUT_CARD, payload: { cardNumber, expiryDate, cardName, cvc, token } })
export const getCard = (token) => ({ type: GET_CARD, payload: { token } })
export const getRoutes = (routes) => ({ type: GET_ROUTES, payload: { routes } })
export const goRoute = (address1, address2) => ({ type: GO_ROUTE, payload: { address1, address2 } })
export const registration = (email, password, name, surname) =>
  ({ type: REGISTRATION, payload: { email, password, name, surname } })
export const saveCard = (cardNumber, expiryDate, cardName, cvc, token) =>
  ({ type: SAVE_CARD, payload: { cardNumber, expiryDate, cardName, cvc, token } })
export const canBeRoute = (route) => ({ type: CAN_BE_ROUTE, payload: { route } })
