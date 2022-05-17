import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'

// Basic CSS
import styling from './PostDetailPage.css'

// import for playing videos on dom
import ReactPlayer from 'react-player'

// Material UI
import { Box, Button, Container, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function PostDetailPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const user = useSelector(store => store.user);
    const post = useSelector(store => store.post);


    useEffect(() => {
        dispatch({ type: 'GET_POST', payload: id });
    }, [id]);

    const sendToProfile = () => {
        history.push(`/profile/${post.user_id}`)
    }

    console.log('POST IS', post);
    return (
        <Container>

            <Box
                component={Paper}
                sx={{
                    border: '1px solid black',
                    borderRadius: '7px',
                    padding: '15px',
                }}
            >

                <Box
                
                >
                    <a onClick={sendToProfile}>
                        <img className='profile-pic' src={post.profile_picture} alt="profile picture" />
                        <br />
                        {post.username}</a>
                </Box>

                <Box>
                    <h2>{post.title}</h2>
                    <p>{post.date} {post.time}</p>
                </Box>


                <Box>
                    <p>{post.post}</p>
                </Box>
                {/* <img src={post.media} />
                    <ReactPlayer
                        url={post.media}
                        width='400px'
                        height='600px'
                        controls={true} /> */}

                <Box className="btn-holder">
                    {user.id === post.user_id &&
                        <Button
                            sx={{
                                backgroundColor: '#4E9BB9',
                                margin: '2px'
                            }}
                            variant="contained"
                            className='buttons'
                        ><EditIcon /> Edit </Button>}
                    {user.id === post.user_id &&
                        <Button
                            variant="contained"
                            className='buttons'
                            sx={{
                                backgroundColor: 'red',
                                margin: '2px'
                            }}
                        ><DeleteIcon /> Delete </Button>}
                </Box>

            </Box>



            <div>
                <p>COMMENT FORM WILL GO HERE</p>
            </div>

            <div>
                <p>COMMENTS WILL GO HERE</p>
            </div>


        </Container>

    );
}

export default PostDetailPage;