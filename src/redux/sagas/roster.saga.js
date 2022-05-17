import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* rosterSaga() {
    yield takeLatest('GET_ROSTER', getRoster);
}

function* getRoster(action) {
    console.log('in getRoster');
    try {
        const roster = yield axios.get('/api/roster')
        yield put ({type: 'SET_ROSTER', payload: roster.data})
    } catch {
        console.log('ERROR GETTING ROSTER');
        
    }
    
}

export default rosterSaga;