import { call, put, takeLatest } from 'redux-saga/effects';
import * as AppConstant from '../util/AppConstant';
import { receiveApiData } from './actions/actions';
import  fetchData  from '../networking/WeatherApi';

// worker Saga: will be fired on WEATHER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData,action.payload);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(AppConstant.REQUEST_API_DATA, getApiData);
}