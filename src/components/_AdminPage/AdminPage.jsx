import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function AdminPage() {
    const user = useSelector(store => store.user);

    return (
        <div>
            <h2>Admin Page goes here</h2>
        </div>
    );
}

export default AdminPage;