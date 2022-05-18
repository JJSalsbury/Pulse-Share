import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { Button, CardActionArea, CardActions } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 300,
//         margin: "3rem",
//     },
// });


function CommentItem({ comment }) {

    const dispatch = useDispatch();

    const history = useHistory()

    // const classes = useStyles();

    // useEffect(() => {
    //     dispatch({ type: 'GET_COMMENTS', payload: comment.post_id});
    // }, [id]);

    // const handleDetails = () => {
    //     // console.log('clicked for comment details (description)');
    //     dispatch({ type: 'FETCH_DETAILS', payload: comment.id });
    //     history.push('/details');
    // }

    // style={{width: 175, height: 375}}
    // style={{width: 175, height: 100}}  

    //Render return all comments in DB
    return (
        <>
        <div>
            <p>User Id - {comment.user_id}</p> 
            <p>Comment: "{comment.comment}" </p>             
        </div>
        </>
    )
}

export default CommentItem;