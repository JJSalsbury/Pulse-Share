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
    const [outcomeTag, setOutcomeTag] = useState('');

    

    const handleSearchByOutcome = (event) => {
        dispatch({
            type: 'GET_POSTS_BY_OUTCOME',
            payload: event.target.value
        });
        setOutcomeTag(event.target.value)
    }

    return (
        <Box 
            component={Paper}
            sx={{
                padding: '15px',
                borderRadius: '7px',
                border: '1px solid black',
                boxShadow: 10,
                minHeight: '20vh',
                marginBottom: '15px',
                minWidth: '60vw',
                maxWidth: '60vw'
        }}>
            <ListItem alignItems="flex-start">
            <ListItemAvatar >
                <Avatar alt="Remy Sharp" src={post.profile_picture}/>
                <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {post.username}
                    </Typography>
            </ListItemAvatar>
            <Box>
            <ListItemText
                primary={post.title}
                secondary={
                    <React.Fragment>
                    <Box sx={{
                        marginTop: '10px'
                    }}>
                    {/* <Typography
                        // sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {post.date} {post.time}
                    </Typography> */}
                    {post.date} {post.time}
                    </Box>
                    <br/>
                    <Typography
                        // sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {outcomesList[post.outcome_id - 1]?.outcome}
                    </Typography>
                    <br/>
                    <Chip 
                        label={outcomesList[post.outcome_id - 1]?.outcome} 
                        variant="outlined" 
                        sx={{
                            color: '#4E9BB9',
                            border: '1px solid #4E9BB9'
                        }} 
                        onClick={(event) => handleSearchByOutcome(event)}
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