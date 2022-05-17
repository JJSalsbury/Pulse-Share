import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function PostDetailPage() {
    const user = useSelector(store => store.user);
    const {id} = useParams();

    useEffect(() => {
        // Get locations of world based on world id -- maybe change to join code for more security
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