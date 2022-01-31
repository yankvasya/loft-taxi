import { takeEvery, call, put } from 'redux-saga/effects'

import { AUTHENTICATE, getRoutes, logIn } from '../actions'
import { serverLogin } from '../api'
import { checkData } from '../localStorage'

export function * authenticateSaga (action) {
  const { email, password } = checkData(action.payload)
  const { data } = yield call(serverLogin, email, password)

  if (data.success) {
    yield put(logIn(email, password, data.token))
  }
}

export function * authSaga () {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}
