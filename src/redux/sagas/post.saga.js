import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getPostDetails(action) {
    try {
        console.log('GETTING POST DETAILS', action.payload);
    } catch (err) {
        console.log(err);
    }
}






function* postSaga() {
    yield takeEvery('GET_POST', getPostDetails);
}

export default postSaga;