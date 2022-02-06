import { takeEvery, call, put } from 'redux-saga/effects'

import { GET_CARD, PUT_CARD, saveCard } from '../actions'
import { serverGetCard, serverPutCard } from '../api'

export function * getCardSaga (action) {
  const { token } = action.payload
  const { data } = yield call(serverGetCard, token)
  const { cardNumber, expiryDate, cardName, cvc, id } = data

  yield put(saveCard(cardNumber, expiryDate, cardName, cvc, id))
}

export function * putCardSaga (action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload
  const { data } = yield call(serverPutCard, cardNumber, expiryDate, cardName, cvc, token)

  if (data.success) {
    yield put(saveCard(cardNumber, expiryDate, cardName, cvc, token))
  }
}

export function * cardSaga () {
  yield takeEvery(GET_CARD, getCardSaga)
  yield takeEvery(PUT_CARD, putCardSaga)
}
