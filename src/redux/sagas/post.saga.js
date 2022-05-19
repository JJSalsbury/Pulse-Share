import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

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
        const postId = yield axios.post('/post', action.payload);
        yield put({ type: 'GET_POST', payload: postId.data[0].id });

        // FIXME - once get route for all posts is made, update type
        // yield put({ type: 'GET_POST'});
        yield put({ type: 'CLEAR_IMAGE' })
        yield put({ type: 'CLEAR_VIDEO' })
    } catch (error) {
        console.log('Create new post request failed', error);
    }
}

//get details for single post
function* getPostDetails(action) {
    try {
        console.log('GETTING POST DETAILS', action.payload);
        const details = yield axios.get(`/post/${action.payload}`);
        yield put({ type: 'SET_POST', payload: details.data[0] });
    } catch (err) {
        console.log(err);
    }
}

// get user's previous posts
function* getPostHistory() {
    console.log('in getPostHistory');
    try {
        const postHistory = yield axios.get(`/history`);
        yield put({ type: 'SET_POST_HISTORY', payload: postHistory.data });
    } catch (err) {
        console.log(`ERROR GETTING POST HISTORY`);
    }
}

function* postSaga() {
    yield takeEvery('GET_POST', getPostDetails);
    yield takeLatest('GET_OUTCOMES_LIST', getOutcomesList);
    yield takeLatest('CREATE_NEW_POST', createNewPost);
    yield takeLatest('GET_POST_HISTORY', getPostHistory)
}

export default postSaga;