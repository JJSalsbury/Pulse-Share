import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './RosterMember.css'




function RosterMember({ member }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const buttonRender = () => {
        if (member.access_level === 2) {
            return <p></p>;
        } else if (member.access_level === 1) {
            return <Button sx={{ backgroundColor: 'red'}} variant={'contained'} onClick={demoteUser}>DEMOTE</Button>;
        } else if (member.access_level === 0) {
            return <Button sx={{ backgroundColor: 'green'}} variant={'contained'} onClick={promoteUser}>PROMOTE</Button>;
        }

    }

    const demoteUser = () => {
        console.log('clicked demote');
        const id = member.id;
        const user = {
            id: id 
        }
        dispatch({
            type: 'DEMOTE_USER',
            payload: user
        })
    }

    const promoteUser = () => {
        console.log('clicked promote');
        const id = member.id;
        const user = {
            id: id 
        }
        dispatch({
            type: 'PROMOTE_USER',
            payload: user
        })
    }

    const deleteUser = () => {
        console.log('clicked delete');
        const id = member.id;
        const user = {
            id: id 
        }
        dispatch({
            type: 'DELETE_USER',
            payload: user
        })
    }

    return (
        <>
            <TableRow>
                <TableCell align={'center'}><a onClick={() => {history.push(`/profile/${member.id}`)}}>{member.username}</a></TableCell>
                <TableCell align={'center'}>{buttonRender()}</TableCell>
                <TableCell align={'center'}>{member.access_level < 2 ? <Button sx={{ backgroundColor: 'black'}} variant={'contained'} onClick={deleteUser}>DELETE</Button> : <p></p>}</TableCell>
            </TableRow>
        </>
    )


}

export default RosterMember;