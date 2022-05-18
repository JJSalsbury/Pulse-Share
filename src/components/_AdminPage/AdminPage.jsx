import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RosterMember from '../_RosterMember/RosterMember';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AdminPage() {
    const user = useSelector(store => store.user);
    const roster = useSelector(store => store.rosterReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ROSTER'
        })
    }, [])

    return (
        <div>
            <h2>Admin Page goes here</h2>
            <TableContainer component={Paper}>
                <Table sx={{ width: 600, margin: 'auto', borderRadius: 5, boxShadow: 5, mt: 5, mb: 5 }}>
                    <TableHead sx={{ backgroundColor: '#cfd8dc', borderBottom: 3, borderRadius: 5}}>
                        <TableRow>
                            <TableCell align={'center'}>Username</TableCell>
                            <TableCell align={'center'}>Promote/Demote</TableCell>
                            <TableCell align={'center'}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roster.map(member => {
                            return (
                                <RosterMember
                                    key={member.id}
                                    member={member}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AdminPage;