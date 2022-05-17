import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function ProfilePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    // const [pronouns, setPronouns] = useState('');
    // const [device, setDevice] = useState('')
    // const [deviceSettings, setDeviceSettings] = useState('')
    // const [injuryLevel, setInjuryLevel] = useState('')
    // const [aisaLevel, setAisaLevel] = useState('')
    // const [timeSinceInjury, setTimeSinceInjury] = useState('')
    // const [baseline, setBaseline] = useState('')
    // const [improvements, setImprovements] = useState('')
    // const [location, setLocation] = useState('')
    // const [jobTitle, setJobTitle] = useState('')
    // const [company, setCompany] = useState('')
    // const [aboutMe , setAboutMe] = useState('')
    // const [public, setPublic] = useState('')
    // const [biologicalGender, setBiologicalGender] = useState('')
    // const [age, setAge] = useState('')
    // const [height, setHeight] = useState('')
    // const [weight, setWeight] = useState('')
    // const [medicalCondition, setMedicalCondtion] = useState('')


    const handleClick = () => {
        history.push('/postHistory')
    }

    return (
        <div>
            <h2>Profile Page goes here</h2>
            <p>{user.username}</p>
            

            <button onClick={handleClick}>Post History</button>
            <button onClick={handleEdit}>Edit Profile</button>
        </div>
    );
}

export default ProfilePage;