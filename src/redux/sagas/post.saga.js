import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


//get details for single post
function* getPostDetails(action) {
    try {
        console.log('GETTING POST DETAILS', action.payload);
        const details = yield axios.get(`/post/${action.payload}`);
        yield put({type: 'SET_POST', payload: details.data[0]});
    } catch (err) {
        console.log(err);
    }
}

// Delete selected post
function* deletePost(action) {
    try {
        console.log('IN DELETE SAGA');
        yield axios.delete(`/post/${action.payload}`)
        // GET ALL POSTS HERE
    } catch (err) {
        console.log(err);
    }
}




function* postSaga() {
    yield takeEvery('GET_POST', getPostDetails);
    yield takeEvery('DELETE_POST', deletePost)
}

export default postSaga;