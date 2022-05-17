import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function PostDetailPage() {
    const user = useSelector(store => store.user);

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