import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

// imports for MUI v5
import {
    Box,
    Container,
    Paper,
    Select,
    MenuItem,
    InputLabel,
    Button,
    Modal,
    Typography,
    TextField,
    FormControl
} from '@mui/material';

function PostListItem({post}) {
    useEffect(() => {
        dispatch({
            type: 'GET_ALL_POSTS'
        });
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

    return (
        <Container>
            <Box>
                {post.post}
            </Box>

        </Container>
    );
}

export default PostListItem;