import { takeEvery, call, put } from 'redux-saga/effects'

import { AUTHENTICATE, logIn, REGISTRATION } from '../actions'
import { serverLogin } from '../api'
import { checkData } from '../localStorage'

export function * authenticateSaga (action) {
  const { email, password } = checkData(action.payload)
  const { data } = yield call(serverLogin, email, password)

  if (data.success) {
    yield put(logIn(email, password, data.token))
  }
}

export function * registrationSaga (action) {
  const { email, password, name, surname } = checkData(action.payload)

  const { data } = yield call(serverLogin, email, password, name, surname)

  if (data.success) {
    console.log(data)
    yield put(logIn(email, password, data.token))
  }
}

export function * authSaga () {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
  yield takeEvery(REGISTRATION, registrationSaga)
}
