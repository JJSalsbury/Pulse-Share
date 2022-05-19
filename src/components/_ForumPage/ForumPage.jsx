import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import PostListItem from '../_PostListItem/PostListItem';

import './ForumPage.css'

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
    FormControl,
    Avatar,
    ListItem,
    List,
    Divider,
    ListItemAvatar,
    ListItemText
} from '@mui/material';

function ForumPage() {
    useEffect(() => {
        dispatch({
            type: 'GET_ALL_POSTS'
        });
        dispatch({
            type: 'GET_OUTCOMES_LIST'
        });
    }, []);

    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const postList = useSelector(store => store.postListReducer);
    const outcomesList = useSelector( store => store.outcomesListReducer);

    const handleClick = () => {
        history.push('/addPost')
    }

    return (
        <Container >
            <h2>Post List goes here</h2>

            <Button 
                sx={{
                    backgroundColor: '#4E9BB9',
                    margin: '2px'
                }}
                variant="contained" 
                onClick={handleClick}
            >Add Post
            </Button>
            <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
            {postList?.map(post => {
                return (
                    <PostListItem 
                        key={post.id}
                        post={post}
                    />
                )
            })}
            </List>
        </Container>
    );
}

export default ForumPage;