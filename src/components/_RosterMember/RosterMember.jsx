import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function RosterMember({ member }) {

    const dispatch = useDispatch();

    const buttonRender = () => {
        if (member.access_level === 2) {
            return <p></p>;
        } else if (member.access_level === 1) {
            return <button onClick={demoteUser}>DEMOTE</button>;
        } else if (member.access_level === 0) {
            return <button onClick={promoteUser}>PROMOTE</button>;
        }

    }

    const demoteUser = () => {
        console.log('clicked demote');
        dispatch({
            type: 'DEMOTE_USER',
            payload: member.id
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

    return (
        <>
            <tr>
                <td>{member.username}</td>
                <td>{buttonRender()}</td>
                <td>{member.access_level < 2 ? <button>DELETE</button> : <p></p>}</td>
            </tr>
        </>
    )


}

export default RosterMember;