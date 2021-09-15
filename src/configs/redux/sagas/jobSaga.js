import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import types from '../actions/types';
import axios from 'axios';
import {
  fetch_detail_rd,
  fetch_list_rd,
  fetch_list_sg,
} from '../actions/jobActions';
import {paramToURL} from '../../../omni/helpers/urlHelper';

const BASE_URL_LIST =
  'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
const BASE_URL_DETAIL =
  'http://dev3.dansmultipro.co.id/api/recruitment/positions';

export function* jobSaga() {
  yield takeLatest(types.job.FETCH_SG, function* (action) {
    const {refresh, params, onSuccess} = action.payload;
    const getList = state => state.jobReducer.list;
    const list = yield select(getList);
    let newUrl = paramToURL(BASE_URL_LIST, params);
    // console.log(`object`, paramToURL(BASE_URL_LIST, params));

    let res = yield call(
      () => axios.get(newUrl),
      //   {params: {page: 1}},
    );
    console.log(`types.job.FETCH_SG`, action, res, res?.data);
    if (res) {
      yield put(
        fetch_list_rd({
          data: refresh ? res?.data : [...list?.data, ...res?.data],
          meta: {page: action.payload.params?.page},
        }),
      );
    }
    if (typeof onSuccess === 'function') onSuccess();
  });
  yield takeLatest(types.job.DETAIL_SG, function* (action) {
    const {id} = action.payload;
    let res = yield call(() => axios.get(BASE_URL_DETAIL + `/${id}`));
    console.log(`res`, res);
    yield put(fetch_detail_rd(res.data));
  });
}
