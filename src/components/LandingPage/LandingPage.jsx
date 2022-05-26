import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// imports for MUI v5
import {
  Box,
  Container,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Modal,
  Typography,
  TextField,
  FormControl,
  Avatar,
  ListItem,
  List,
  Divider,
  ListItemAvatar,
  ListItemText
} from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome To Pulse Share');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Container 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>{heading}</h1>

      <Box 
        component={Paper}
          sx={{
              padding: '15px',
              borderRadius: '7px',
              border: '1px solid black',
              boxShadow: 10,
              marginTop: '15px',
              textAlign: 'center'
              // minWidth: '60vw',
              // maxWidth: '60vw',
          }}
      >
        <h3>Mission</h3>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
          ut ex molestie blandit. Etiam et turpis sit amet risus mollis
          interdum. Suspendisse et justo vitae metus bibendum fringilla sed
          sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
          elementum eget. Praesent efficitur eros vitae nunc interdum, eu
          interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
          Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
          luctus. Duis a sapien metus.
        </Typography>
      </Box>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          // alignItems: 'center',
        }}
      >
        <Box
          component={Paper}
          sx={{
            padding: '15px',
            borderRadius: '7px',
            border: '1px solid black',
            boxShadow: 10,
            marginTop: '15px',
            textAlign: 'center',
            mr: '5px',
            minWidth: '50%',
            maxWidth: '50%',
          }}
        >
          <h3>Learn More</h3>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Box>
              <img height='100px' src="https://spinal-stim-forum-test-bucket.s3.us-east-2.amazonaws.com/9a5116b1d45c0833.jpeg" alt="Medtronic Webpage" />
            </Box>
            <Box
              sx={{
                maxWidth: '400px'
              }}
            >
              <a
                target="_blank"
                href='https://www.medtronic.com/us-en/patients/treatments-therapies/spinal-cord-stimulation-chronic-pain/therapy-overview.html?cmpid=PPC_Goog_Q3_adgrp_Gen_H1_Spin_Cord_H2_Watc_the%20_H3_Expl_Trea_SCS_Patient_Pan_Pain_Patient_FY22'
                sx={{
                  overflow: 'auto',
                }}
              >
                Medtronic Webpage
              </a>
            </Box>
          </Box>
          <br/>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Box>
              <img height='100px' src="https://spinal-stim-forum-test-bucket.s3.us-east-2.amazonaws.com/fc512b7a98a28f16.jpeg" alt="Medtronic Webpage" />
            </Box>
            <Box
              sx={{
                maxWidth: '400px'
              }}
            >
              <a
                target="_blank"
                href='https://www.bostonscientific.com/en-US/medical-specialties/pain-management/wavewriter-alpha-scs.html?gclsrc=aw.ds&gclid=CjwKCAjwyryUBhBSEiwAGN5OCLjnQ-8BR6_JER4YFdUYuf1682JbsaknXv2rlwYGQffM-_1KwFJvDhoCMi0QAvD_BwE'
                sx={{
                  overflow: 'auto',
                }}
              >
                Boston Scientific Webpage
              </a>
            </Box>
          </Box>
        </Box>
        <Box
          component={Paper}
          sx={{
            padding: '15px',
            borderRadius: '7px',
            border: '1px solid black',
            boxShadow: 10,
            marginTop: '15px',
            textAlign: 'center',
            ml: '5px',
            // maxWidth: '60vw',
          }}
        >
          <h3>What is SCS?</h3>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
            ut ex molestie blandit. Etiam et turpis sit amet risus mollis
            interdum. Suspendisse et justo vitae metus bibendum fringilla sed
            sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
            elementum eget. Praesent efficitur eros vitae nunc interdum, eu
            interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
            Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
            luctus. Duis a sapien metus.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default LandingPage;
