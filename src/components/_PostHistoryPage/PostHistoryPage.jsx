import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, Container, Paper } from '@mui/material'

function PostHistoryPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const postHistory = useSelector(store => store.postHistoryReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_POST_HISTORY'
        })
    }, [])

    return (
        <div>
            <h2>Post History goes here</h2>
            <Container>
                {postHistory.map(post => {
                    return (
                        <HistoryItem
                        key={post.id}
                        post={post}
                        />
                    )
                })}
            </Container>

        </div>
    );
}

export default PostHistoryPage;