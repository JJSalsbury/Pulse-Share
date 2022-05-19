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
    FormControl,
    Avatar,
    ListItem,
    List,
    Divider,
    ListItemAvatar,
    ListItemText
} from '@mui/material';

function PostListItem({post}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {user.username}
                    </Typography>
                </ListItemAvatar>
                <ListItemText
                primary={post.title}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {post.date} {post.time}
                    </Typography>
                    
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}

export default PostListItem;