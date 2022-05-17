import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function RosterMember({ member }) {

    const buttonRender = () => {
        if (member.access_level === 2) {
            return <p></p>;
        } else if (member.access_level === 1) {
            return <button>DEMOTE</button>
        } else if (member.access_level === 0) {
            return <button>PROMOTE</button>
        }

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