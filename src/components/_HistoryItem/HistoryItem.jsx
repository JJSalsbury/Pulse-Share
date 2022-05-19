import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, Button, Container, Paper } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import './HistoryItem.css'


function HistoryItem({ post }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log(post.id);

        Swal.fire({
            title: `Are you sure you want to delete your post titled '${post.title}' ?`,
            text: "Click OK to Delete",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete the post.',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then((result) => {
            // clicking 'OK' sends dispatch to delete user
            if (result.isConfirmed) {

                dispatch({
                    type: 'DELETE_POST',
                    payload: post.id
                })
                Swal.fire(
                    'Delete!',
                    `You have deleted your post.`,
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    `Delete cancelled.`,
                    'error'
                )
            }
        })
        
    }

    return (
        <>
            <Box
                component={Paper}
                sx={{
                    border: '1px solid black',
                    borderRadius: '7px',
                    padding: '15px',
                    margin: '10px'
                }}
            >
                <Box>
                    <h2 className="postTitle" onClick={() => { history.push(`/postDetail/${post.id}`) }}>{post.title}</h2>
                    <p>{post.date} {post.time}</p>

                    <p>{post.post}</p>
                </Box>

                <Box className="btn-holder">
                    <Button
                        onClick={() => { history.push(`/postDetail/${post.id}`) }}
                        sx={{
                            backgroundColor: '#4E9BB9',
                            margin: '2px'
                        }}
                        variant="contained"
                        className='buttons'
                    ><VisibilityIcon /> VIEW POST </Button>
                    <Button
                        onClick={handleDelete}
                        variant="contained"
                        className='buttons'
                        sx={{
                            backgroundColor: 'red',
                            margin: '2px'
                        }}
                    ><DeleteIcon /> Delete </Button>
                </Box>
            </Box>
        </>
    )
}


export default HistoryItem;