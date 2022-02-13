import { takeEvery, call, put } from 'redux-saga/effects'

import { AUTHENTICATE, authError, getCard, logIn, REGISTRATION } from '../actions'
import { serverLogin, serverRegister } from '../api'
import { checkData } from '../localStorage'

export function * authenticateSaga (action) {
  const { email, password } = checkData(action.payload)
  const { data } = yield call(serverLogin, email, password)

  if (data.success) {
    yield put(logIn(email, password, data.token))
    yield put(getCard(data.token))
  } else {
    yield put(authError(data.error))
  }
}

export function * registrationSaga (action) {
  const { email, password, name, surname } = checkData(action.payload)

  const { data } = yield call(serverRegister, email, password, name, surname)

  if (data.success) {
    yield put(logIn(email, password, data.token))
    yield put(getCard(data.token))
  } else {
    yield put(authError(data.error))
  }
}

export function * authSaga () {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
  yield takeEvery(REGISTRATION, registrationSaga)
}
