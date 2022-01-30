import { authSaga } from './authSaga'
import { fork } from 'redux-saga/effects'

export function * allSagas () {
  yield fork(authSaga)
}
