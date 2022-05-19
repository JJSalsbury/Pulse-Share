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
    ListItemText,
    Chip
} from '@mui/material';

function PostListItem({post}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const outcomesList = useSelector( store => store.outcomesListReducer);

    const handleClick = () => {
        history.push('')
    }


    return (
        <Box 
            component={Paper}
            sx={{
                padding: '15px',
                borderRadius: '7px',
                border: '1px solid black',
                boxShadow: 10,
                // minHeight: '20vh',
                marginBottom: '15px',
                minWidth: '60vw',
                maxWidth: '60vw'
        }}>
            <ListItem alignItems="flex-start">
            <ListItemAvatar >
                <Avatar alt="Profile Picture" src={post.profile_picture}/>
                <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                        onClick={(event) => handleClick()}
                    >
                        <a onClick={() => { history.push(`/profile/${post.user_id}`) }}>{post.username}</a>
                        
                    </Typography>
            </ListItemAvatar>
            <Box sx={{
                // minHeight: '20vh',
                display: 'flex'
            }}>
            <ListItemText
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                primary={
                <Box>
                    <Typography
                        // sx={{ display: 'inline' }}
                        component="span"
                        variant="h4"
                        color="text.primary"
                    >
                        {post.title}
                    </Typography>
                    <br/>
                    <Typography
                        // sx={{ display: 'inline' }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                    >
                        {post.post}
                    </Typography>
                </Box>}
                secondary={
                    <React.Fragment>
                    <Box sx={{
                        marginTop: '10px'
                    }}>
                    {post.date} {post.time}
                    </Box>
                    {/* <br/>
                    <Typography
                        // sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {outcomesList[post.outcome_id - 1]?.outcome}
                    </Typography> */}
                    <br/>
                    <Chip 
                        label={outcomesList[post.outcome_id - 1]?.outcome} 
                        variant="outlined" 
                        sx={{
                            color: '#4E9BB9',
                            border: '1px solid #4E9BB9'
                        }} 
                    />
                    </React.Fragment>
                }
                />
            </Box>
            </ListItem>
            {/* <ListItem alignItems="flex-start">
                <ListItemAvatar >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {post.username}
                    </Typography>
                </ListItemAvatar>
                <ListItemText
                primary={post.title}
                secondary={
                    <React.Fragment>
                    <Typography
                        // sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {post.date} {post.time}
                    </Typography>
                    <br/>
                    <Typography
                        // sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {outcomesList[post.outcome_id - 1].outcome}
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" /> */}
        </Box>
    );
}

export default PostListItem;