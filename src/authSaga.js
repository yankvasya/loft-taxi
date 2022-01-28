import { takeEvery, call, put } from 'redux-saga/effects'

import { AUTHENTICATE, logIn } from './actions'
import { serverLogin } from './api'

const checkData = (payload) => payload.email && payload.password ? payload : getLocalStorage()

const getLocalStorage = () => {
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  return { email, password }
}

const setLocalStorage = (email, password) => {
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)
}

export function * authenticateSaga (action) {
  const { email, password } = checkData(action.payload)
  const success = yield call(serverLogin, email, password)
  if (success) {
    setLocalStorage(email, password)
    yield put(logIn())
  }
}

export function * authSaga () {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}
