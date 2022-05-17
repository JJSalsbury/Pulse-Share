import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function ProfilePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(store => store.user);
    const profile = useSelector(store => store.profile);
    useEffect(() => {
        dispatch({ type: 'GET_PROFILE', payload: id });
    }, [id]);

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
            {/* this goes on the side bar */}
            <p>{user.username}</p>
            <h2>Contact Info</h2>
            <div>{user.email}</div>
            <h2>Privacy</h2>

            {/* this will be a text box center top */}
            <h2>About Me</h2>


            {/* device and Biometrics placement left of Device settings*/}
            <h2>My Device</h2>
            <h2>Biometrics</h2>

            {/* Device settings is a lager text box placement to the right of device and biometrics */}
            <h2>Device Settings</h2>


            <p>{profile.age}</p>



            <button onClick={handleClick}>Post History</button>
            {/* <button onClick={handleEdit}>Edit Profile</button> */}
        </div>
    );
}

export default ProfilePage;