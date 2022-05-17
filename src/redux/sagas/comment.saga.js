import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addComment(action) {
    //add comment to DB
    try{
        console.log('Payload in addComment:', action.payload);
        const comment = yield axios.post('/comment', action.payload)
        console.log('added comment:', comment.data)
    } catch (error) {
        console.log('addComment error:', error)
    }
}

function* commentSaga() {
    yield takeLatest('CREATE_NEW_COMMENT', addComment);
}

export default commentSaga;