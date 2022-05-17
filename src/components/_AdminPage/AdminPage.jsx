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
            <h3>Roster is:</h3>
            {roster.map(member => {
                return (
                    <RosterMember
                        key={member.id}
                        member={member}
                    />
                )
            })}
        </div>
    );
}

export default AdminPage;