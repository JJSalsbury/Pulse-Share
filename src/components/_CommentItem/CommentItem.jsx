//Imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
//Styling Imports 
import { Box, Button, Container, ListItemAvatar, Avatar, Typography, Divider, ListItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';



function CommentItem({ comment, postId }) {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log('user:', user, 'id:', id);




    // const handleDetails = () => {
    //     // console.log('clicked for comment details (description)');
    //     dispatch({ type: 'FETCH_DETAILS', payload: comment.id });
    //     history.push('/details');
    // }

    // Delete the post
    const deleteComment = () => {

        Swal.fire({
            title: `Are you sure you want to delete this post?`,
            text: `This action cannot be undone.`,
            icon: 'warning',
            background: 'white',
            color: 'black',
            showCancelButton: true,
            confirmButtonColor: '#4E9BB9',
            cancelButtonColor: 'red',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({type: 'DELETE_COMMENT', payload: {id:comment.id, post_id: postId}})
                history.push(`/postDetail/${id}`) 
                Swal.fire({
                    background: 'white',
                    color: 'black',
                    confirmButtonColor: '#4E9BB9',
                    title: 'Deleted!',
                    text: `Post has been deleted.`,
                    icon: 'success'
                })
            }
        })
    }

    console.log('COMMENT:', comment.comment);

    return (
        <ListItem alignItems="flex-start">
            <Container>
                <ListItemAvatar> {comment.profile_picture == '' ?
                    <Avatar alt="profile picture" src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" /> :
                    <Avatar alt="profile picture" src={comment.profile_picture} />}
                </ListItemAvatar>
                {/* </Box> */}
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                    >
                        {comment.username}
                    {/* <br /> */}
                    </Typography>
                    <Box
                    sx={{
                        justifyContent: 'space-evenly',
                        display: 'flex-start'
                    }}
                >
                    <Typography sx={{ display: 'flex-start', marginLeft: '75px', textAlign: 'left', marginBottom:'25px' }}>
                    "{comment.comment}"
                    
                    </Typography>
                    </Box> 
                    <Box className="btn-holder">
                {user.id === comment.user_id ?
                    <Button
                        sx={{
                            backgroundColor: '#4E9BB9',
                            margin: '2px',
                            marginBottom: '5px',
                        }}
                        variant="contained"
                        className='buttons'
                    ><EditIcon /> Edit </Button> : <div></div>} 
                {user.id === comment.user_id &&
                    <Button
                        variant="contained"
                        className='buttons'
                        onClick={deleteComment}
                        sx={{
                            backgroundColor: 'red',
                            margin: '2px',
                            marginBottom: '5px'
                        }}
                    ><DeleteIcon /> Delete </Button>}                  
                </Box>
                </React.Fragment>
                
                {/* <p>Comment: "{comment.comment}" </p> */}
                <br />
               
                <Divider variant="inset" />
            </Container>
        </ListItem>
    )
}

export default CommentItem;