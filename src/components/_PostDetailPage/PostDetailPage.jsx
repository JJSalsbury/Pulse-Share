import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function PostDetailPage() {
    const user = useSelector(store => store.user);

    return (
        <div>
            <h2>Post Detail Page goes here</h2>
        </div>
    );
}

export default PostDetailPage;