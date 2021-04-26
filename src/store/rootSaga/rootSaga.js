import { all } from 'redux-saga/effects';
import watchRequestSaga from '../../saga/watchSaga';

export default function* rootSaga() {
  yield all([watchRequestSaga()]);
}
