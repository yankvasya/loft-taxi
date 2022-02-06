import { fork } from 'redux-saga/effects'

import { authSaga } from './authSaga'
import { addressesSaga } from './addressesSaga'
import { cardSaga } from './cardSaga'

export function * allSagas () {
  yield fork(authSaga)
  yield fork(addressesSaga)
  yield fork(cardSaga)
}
