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
    const outcomesList = useSelector( store => store.outcomesListReducer);

    

    // const handleOutcome = () => {
    //     for(let outcome of outcomesList){
    //         if(outcome.id === post.outcome_id){
                
    //             console.log('outcomeTag', outcome.outcome);
                
    //         }
    //     }
    // }

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
                minWidth: '50vw'
        }}>
            <ListItem alignItems="flex-start">
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