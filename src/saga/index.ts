import { put, all, call, takeLatest, fork, take, delay } from 'redux-saga/effects';

import * as ActionTypes from '../actions/actionTypes';

export function* switchCount() {
  yield delay(1000);
  yield put({ type: ActionTypes.INCREMENT, payload: { amount: 1 } });
  yield delay(2000);
  yield put({ type: ActionTypes.DECREMENT, payload: { amount: 1 } });
}

export default function* rootSaga() {
  yield all([takeLatest(ActionTypes.CHANGE, switchCount)]);
}
