import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, Button, Container, Paper } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';



function HistoryItem({ post }) {

    const history = useHistory();

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
                    <h2>{post.title}</h2>
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