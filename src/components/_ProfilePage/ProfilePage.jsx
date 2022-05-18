import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';





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
                <Box sx={{ p: 2, border: '1px solid black'}}>
                    <Container>
                        <Box sx={{ p: 2}}>"Profile pic"{profile.profile_picture}</Box>
                        <Box sx={{ p: 2 }}>{user.username}</Box>
                        <h2>Contact Info</h2>
                        <Box sx={{ p: 2}}>{user.email}</Box>

                        <Box sx={{ p: 2 }}>
                            <button onClick={handleClick}>Post History</button>
                            <button onClick={handleEdit}>Edit Profile</button>
                        </Box>
                    </Container>
                </Box>
                {/* this will be a text box center top */}
                <Box sx={{ p: 2, border: '1px solid black'}}>
                <Container>
                    <h2>About Me</h2>
                    <box>{profile.about_me}</box>
                </Container>
                </Box>

                {/* device and Biometrics placement left of Device settings*/}
                <Box sx={{ p: 2, border: '1px solid black'}}>
                <Container>
                    <h2>My Device</h2>
                    <div>{profile.device}</div>
                </Container>
                </Box>
                <Box sx={{ p: 2, border: '1px solid black'}}>
                <Container>
                    <h2>Biometrics</h2>
                    <div>Age: {profile.age}</div>
                    <div>Height: {profile.height}</div>
                    <div>Weight: {profile.weight}</div>
                    <div>Biological Gender: {profile.biological_gender}</div>
                    <div>Injury Level: {profile.injury_level}</div>
                    <div>Aisa Level: {profile.aisa_level}</div>
                    <div>Time Since Injury: {profile.time_since_injury}</div>
                </Container>
                </Box>
                <Box sx={{ p: 2, border: '1px solid black'}}>
                {/* Device settings is a lager text box placement to the right of device and biometrics */}
                <Container>
                    <h2>Device Settings</h2>
                    <div>{profile.device_settings}</div>
                </Container>
                </Box>




            </div>
        </>
    );
}

export default ProfilePage;