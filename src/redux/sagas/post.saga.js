import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// saga getOutcomesList will get the list of outcomes from DB
function* getOutcomesList() {
    try {
        const outcomesList = yield axios.get('/post/outcomesList');

        yield put({ type: 'SET_OUTCOMES_LIST', payload: outcomesList.data });
    } catch (error) {
        console.log('Outcomes List GET request failed', error);
    }
}

function* postSaga() {
    yield takeLatest('GET_OUTCOMES_LIST', getOutcomesList);
}

export default postSaga;