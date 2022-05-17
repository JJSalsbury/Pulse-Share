import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Grid } from '@mui/material';
import { Radio } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';



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
    const handleEdit = () => {
        //switch to edit mode "form"
    }
    return (
        <>
            <div>

                {/* this goes on the side bar */}

                <p>"profile image place holder p tag"</p>
                <div>{user.username}</div>
                <h2>Contact Info</h2>
                <div>{user.email}</div>

                <div>
                    <button onClick={handleClick}>Post History</button>
                    <button onClick={handleEdit}>Edit Profile</button>
                </div>
                {/* this will be a text box center top */}
                <h2>About Me</h2>
                <div>{profile.about_me}</div>

                {/* device and Biometrics placement left of Device settings*/}
                <h2>My Device</h2>
                <div>{profile.device}</div>

                <h2>Biometrics</h2>
                <div>Age: {profile.age}</div>
                <div>Height: {profile.height}</div>
                <div>Weight: {profile.weight}</div>
                <div>Biological Gender: {profile.biological_gender}</div>
                <div>Injury Level: {profile.injury_level}</div>
                <div>Aisa Level: {profile.aisa_level}</div>
                <div>Time Since Injury: {profile.time_since_injury}</div>


                {/* Device settings is a lager text box placement to the right of device and biometrics */}
                <h2>Device Settings</h2>
                <div>{profile.device_settings}</div>






            </div>
        </>
    );
}

export default ProfilePage;