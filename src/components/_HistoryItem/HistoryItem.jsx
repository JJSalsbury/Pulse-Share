import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, Button, Container, Paper } from '@mui/material'



function HistoryItem({ post }) {

    return (
        <>
            <Box>
                <h2>{post.title}</h2>
                <p>{post.date} {post.time}</p>

                <p>{post.post}</p>
            </Box>
        </>
    )
}


export default HistoryItem;