import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

function PostDetailPage() {

    const dispatch = useDispatch();
    const {id} = useParams();

    const user = useSelector(store => store.user);
    const post = useSelector(store => store.post);
    

    useEffect(() => {
        dispatch({ type: 'GET_POST', payload: id });
      }, [id]);

      console.log('POST IS', post);
    return (
        <div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.date} {post.time}</p>

                <div>
                    {post.profile_picture}
                    {post.username}
                </div>
                
                <p>{post.post}</p>

                {user.id === post.user_id && <button>Edit</button>}
                {user.id === post.user_id && <button>Delete</button>}
            </div>

            <div>
                <p>COMMENT FORM WILL GO HERE</p>
            </div>

            <div>
                <p>COMMENTS WILL GO HERE</p>
            </div>
        </div>
    );
}

export default PostDetailPage;