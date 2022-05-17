import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getProfile() {
    try {
        const response = yield axios.get('/profile');
        yield put({ type: 'SET_PROFILE', payload: response.data });
    }
    catch (error) {
        console.log('PROFILE GET failure', error);

    }
}
function* profileSaga() {
    yield takeEvery('GET_EDIBLE', getProfile)

}
export default profileSaga;