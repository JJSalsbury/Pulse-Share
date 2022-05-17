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

// saga createNewPost will insert new post to DB
function* createNewPost(action) {
    try {
        yield axios.post('/post', action.payload);

        // FIXME - once get route for all posts is made, update type
        // yield put({ type: 'GET_POST'});
        yield put({type: 'CLEAR_IMAGE'})
    } catch (error) {
        console.log('Create new post request failed', error);
    }
}

function* postSaga() {
    yield takeLatest('GET_OUTCOMES_LIST', getOutcomesList);
    yield takeLatest('CREATE_NEW_POST', createNewPost)
}

export default postSaga;