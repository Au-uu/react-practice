import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators'

function* getInitList() {
  try{
    const res = yield axios.get('/api/todolist.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch(error) {
    console.warn('rquest error:' + error);
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;