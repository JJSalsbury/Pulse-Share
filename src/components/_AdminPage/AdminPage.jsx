import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

function AdminPage() {
    const user = useSelector(store => store.user);

    useEffect(() => {
        dispatch({
            type: 'GET_ROSTER'
        })
    }, [])

    return (
        <div>
            <h2>Admin Page goes here</h2>
        </div>
    );
}

export default AdminPage;