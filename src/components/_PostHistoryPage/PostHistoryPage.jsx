import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function PostHistoryPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

    useEffect(() => {
        dispatch({
            type: 'GET_POST_HISTORY'
        })
    }, [])

    return (
        <div>
            <h2>Post History goes here</h2>
        </div>
    );
}

export default PostHistoryPage;