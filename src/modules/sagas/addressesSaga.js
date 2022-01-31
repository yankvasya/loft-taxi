import { takeEvery, call, put } from 'redux-saga/effects'

import { canBeRoute, getRoutes, GO_ROUTE, LOG_IN } from '../actions'
import { serverAddressList, serverRoute } from '../api'

export function * addressListSaga () {
  const { data } = yield call(serverAddressList)

  yield put(getRoutes(data.addresses))
}

export function * addressGoSaga (action) {
  const { address1, address2 } = action.payload
  const { data } = yield call(serverRoute, address1, address2)

  if (data) {
    yield put(canBeRoute(data))
  }
}

export function * addressesSaga () {
  yield takeEvery(LOG_IN, addressListSaga)
  yield takeEvery(GO_ROUTE, addressGoSaga)
}
