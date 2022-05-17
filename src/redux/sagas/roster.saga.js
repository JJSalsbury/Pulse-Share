import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* rosterSaga() {
    yield takeLatest('GET_ROSTER', getRoster);
    yield takeLatest('PROMOTE_USER', promoteUser);
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

function* promoteUser(action) {
    console.log('in promoteUser');
    console.log(action.payload);
    
    yield axios.put('api/roster/promote', action.payload)
    yield put({type: 'GET_ROSTER'})
    
}

export default rosterSaga;