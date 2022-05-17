import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'

// Basic CSS
import styling from './PostDetailPage.css'

// import for playing videos on dom
import ReactPlayer from 'react-player'

// Material UI
import {Box, Button} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function PostDetailPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

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
        <Box>
            <Box>
                <h2>{post.title}</h2>
                <p>{post.date} {post.time}</p>

                <Box>
                    <img className='profile-pic' src={post.profile_picture} alt="profile picture"/>
                    <br />
                    <a onClick={sendToProfile}>{post.username}</a>
                </Box>
                
                <p>{post.post}</p>

                <img src={post.media} />
                <ReactPlayer 
                url={post.media}
                width='400px'
                height='600px'
                controls = {true}/>

                {user.id === post.user_id && <Button variant="contained"><EditIcon /> Edit </Button>}
                {user.id === post.user_id && <Button variant="contained"><DeleteIcon /> Delete </Button>}
            </Box>

            <div>
                <p>COMMENT FORM WILL GO HERE</p>
            </div>

            <div>
                <p>COMMENTS WILL GO HERE</p>
            </div>
        </Box>
    );
}

export default PostDetailPage;