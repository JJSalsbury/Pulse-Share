import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import './RosterMember.css'




function RosterMember({ member }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const buttonRender = () => {
        if (member.access_level === 2) {
            return <p></p>;
        } else if (member.access_level === 1) {
            return <Button sx={{ backgroundColor: 'red' }} variant={'contained'} onClick={demoteUser}>DEMOTE</Button>;
        } else if (member.access_level === 0) {
            return <Button sx={{ backgroundColor: 'green' }} variant={'contained'} onClick={promoteUser}>PROMOTE</Button>;
        }

    }

    const demoteUser = () => {
        console.log('clicked demote');
        const id = member.id;
        const user = {
            id: id
        }
        Swal.fire({
            title: `Are you sure you want to demote ${member.username} to a normal user?`,
            text: "Click OK to Demote",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Demote!',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'DEMOTE_USER',
                    payload: user
                })
                Swal.fire(
                    'Demoted!',
                    `You revoked ${member.username}'s Moderator privileges.`,
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    `${member.username} will remain a Moderator.`,
                    'error'
                )
            }
        })
    }

    const promoteUser = () => {
        console.log('clicked promote');
        const id = member.id;
        const user = {
            id: id
        }

        Swal.fire({
            title: `Are you sure you want to promote ${member.username} to a Moderator?`,
            text: "Click OK to Promote",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Promote!',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'PROMOTE_USER',
                    payload: user
                })
                Swal.fire(
                    'Promoted!',
                    `You have promoted ${member.username} to a Moderator.`,
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    `${member.username} will remain a normal user.`,
                    'error'
                )
            }
        })


    }

    const deleteUser = () => {
        console.log('clicked delete');
        const id = member.id;
        const user = {
            id: id
        }
        Swal.fire({
            title: `Are you sure you want to delete ${member.username}'s account?`,
            text: "Click OK to Delete",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete the account.',
            cancelButtonText: 'No, Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'DELETE_USER',
                    payload: user
                })
                Swal.fire(
                    'Delete!',
                    `You have deleted ${member.username}'s account.`,
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    `${member.username} will remain a user.`,
                    'error'
                )
            }
        })
    }

    return (
        <>
            <TableRow>
                <TableCell align={'center'}><a onClick={() => { history.push(`/profile/${member.id}`) }}>{member.username}</a></TableCell>
                <TableCell align={'center'}>{buttonRender()}</TableCell>
                <TableCell align={'center'}>{member.access_level < 2 ? <Button sx={{ backgroundColor: 'black' }} variant={'contained'} onClick={deleteUser}>DELETE</Button> : <p></p>}</TableCell>
            </TableRow>
        </>
    )


}

export default RosterMember;