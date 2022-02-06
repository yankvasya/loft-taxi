import { combineReducers } from 'redux'
import { auth } from './auth'
import { routes } from './routes'
import { card } from './card'

export default combineReducers({ auth, routes, card })
