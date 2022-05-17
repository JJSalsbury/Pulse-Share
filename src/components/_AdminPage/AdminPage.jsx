import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function AdminPage() {
    const user = useSelector(store => store.user);
    const roster = useSelector(store => store.rosterReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ROSTER'
        })
    }, [])

    return (
        <div>
            <h2>Admin Page goes here</h2>
            <h3>Roster is:</h3>
        </div>
    );
}

export default AdminPage;