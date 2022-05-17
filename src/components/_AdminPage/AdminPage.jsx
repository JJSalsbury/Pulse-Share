import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RosterMember from '../_RosterMember/RosterMember';

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
            <table>
                <th>Username</th>
                <th>Promote/Demote</th>
                <th>Delete</th>
            {roster.map(member => {
                return (
                    <RosterMember
                        key={member.id}
                        member={member}
                    />
                )
            })}
            </table>
        </div>
    );
}

export default AdminPage;