import {all} from 'redux-saga/effects';
import {authSaga} from './authSaga';
import {jobSaga} from './jobSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    jobSaga(),
    // otherSaga()
  ]);
}
