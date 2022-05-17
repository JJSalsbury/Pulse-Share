import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

function PostDetailPage() {

    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const {id} = useParams();

    useEffect(() => {
        dispatch({ type: 'GET_POST', payload: id });
      }, [id]);

    return (
        <div>
            <div>
                <h2>Post title goes here</h2>
                <p> Post body goes here</p>

                {/* {user.id === post.user_id && <button>Edit</button>}
                {user.id === post.user_id && <button>Delete</button>} */}
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