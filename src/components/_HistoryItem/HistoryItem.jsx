import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, Button, Container, Paper } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function HistoryItem({ post }) {

    return (
        <>
            <Box
                component={Paper}
                onClick={() => {history.push(`/postDetail/${post.id}`)}}
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