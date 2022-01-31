import { takeEvery, call, put } from 'redux-saga/effects'

import { GET_CARD, PUT_CARD, saveCard } from '../actions'
import { serverGetCard, serverPutCard } from '../api'

export function * getCardSaga () {
  const { data } = yield call(serverGetCard)

  console.log(data)

  yield put(saveCard(data.id))
}

export function * putCardSaga (action) {
  const { data } = yield call(serverPutCard)

  if (data.success) {
    yield put(saveCard())
  }
  console.log(data)
}

export function * cardSaga () {
  yield takeEvery(GET_CARD, getCardSaga)
  yield takeEvery(PUT_CARD, putCardSaga)
}
