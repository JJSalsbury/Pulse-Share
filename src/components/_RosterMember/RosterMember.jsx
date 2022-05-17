import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function RosterMember({member}) {

    return (
        <>
            <p>{member.username}</p>
        </>
    )


}

export default RosterMember;