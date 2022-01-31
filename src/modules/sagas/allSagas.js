import { authSaga } from './authSaga'
import { fork } from 'redux-saga/effects'
import { addressesSaga } from './addressesSaga'

export function * allSagas () {
  yield fork(authSaga)
  yield fork(addressesSaga)
}
