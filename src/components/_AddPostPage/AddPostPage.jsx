import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import './AddPostPage.css'
// imports for MUI v5
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {
    Box,
    Container,
    Paper,
    Select,
    MenuItem,
    InputLabel,
    Button
} from '@mui/material';

// imports for file upload
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

// import for playing videos on dom
import ReactPlayer from 'react-player'

function AddPostPage() {
    useEffect(() => {
        dispatch({
            type: 'GET_OUTCOMES_LIST'
        });
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user);
    const image = useSelector(store => store.image);
    const media = useSelector( store => store.mediaReducer);
    const outcomesList = useSelector( store => store.outcomesListReducer);

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [outcomeTag, setOutcomeTag] = useState('');
    
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
        
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files[0])
        const fileToUpload = files[0];
        console.log(fileToUpload['file']);

        dispatch({
            type: 'SET_MEDIA',
            payload: fileToUpload
        })

        // Empties Dropzone 
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    // function will clear media reducer and allow user to input new media
    const handleChangeImage = () => {
        dispatch({
            type: 'CLEAR_MEDIA'
        })
    }

    const handleClick = async () => {
        // if title or body text fields are empty, won't submit
        if (postTitle !== '' || postBody !== '') {
             // get secure url from our server
            const { url } = await fetch("/s3Url").then(res => res.json())
            console.log(url)

            // post the image directly to the s3 bucket
            await fetch(url, {
                method: "PUT",
                headers: {
                "Content-Type": "image/jpeg"
                },
                body: media['file']
            })

            const imageUrl = url.split('?')[0]
            console.log(imageUrl)

            dispatch({
                type: 'CREATE_NEW_POST',
                payload: {
                    postTitle: postTitle,
                    postBody: postBody,
                    postMedia: imageUrl,
                    postTag: outcomeTag
                }
            })

            history.push('/posts')
        }
    }

    return (
        <Container>
            
            <h2>Add Post Page!</h2>
            <Box 
                component={Paper}
                sx={{
                    padding: '15px',
                    borderRadius: '7px',
                    border: '1px solid black',
                }}
            >
                <Box>
                    
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        defaultValue={postTitle}
                        style={{
                            marginBottom: 15,
                            minWidth: '80%'
                        }}
                        onChange={(event) => setPostTitle(event.target.value)}
                    />
                    {/* <input
                        type="text"
                        name="post title"
                        required
                        value={postTitle}
                        onChange={(event) => setPostTitle(event.target.value)}
                    /> */}
                </Box>
                <Box>
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Body"
                        multiline
                        rows={4}
                        defaultValue={postBody}
                        style={{
                            marginBottom: 15,
                            minWidth: '80%'
                        }}
                        onChange={(event) => setPostBody(event.target.value)}
                    />
                    {/* <input
                        type="text"
                        name="post body"
                        required
                        value={postBody}
                        onChange={(event) => setPostBody(event.target.value)}
                    /> */}
                </Box>
                <Box>
                    <InputLabel id="demo-simple-select-label">Outcome Tag</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={outcomeTag}
                        label="Age"
                        style={{
                            marginBottom: 15,
                            minWidth: '20%'
                        }}
                        onChange={(event) => setOutcomeTag(event.target.value)}
                        >
                            {outcomesList?.map(outcome => {
                                return (
                                    <MenuItem 
                                        key={outcome.id} 
                                        value={outcome.id}
                                    >{outcome.outcome}</MenuItem>
                                )
                            })}
                        </Select>
                {/* <label htmlFor="outcome tag">
                    Tag:
                    <select name="outcome tag" onChange={(event) => setOutcomeTag(event.target.value)}>
                            <option>Choose Outcome Tag</option>
                        {outcomesList?.map(outcome => {
                            return (
                                <option 
                                    key={outcome.id} 
                                    value={outcome.id}
                                >{outcome.outcome}</option>
                            )
                        })}
                    </select>
                    </label> */}
                </Box>
                <Box>
                    {media.file ? 
                        <Button 
                            onClick={handleChangeImage}
                            style={{
                                marginBottom: 15,
                            }}
                        >Change Photo
                        </Button> 
                        : 
                        <Dropzone
                            getUploadParams={getUploadParams}
                            onChangeStatus={handleChangeStatus}
                            onSubmit={handleSubmit}
                            maxFiles={1}
                            inputContent={(files, extra) => (extra.reject ? 
                                'Image and video files only' 
                                : 
                                'Click Here or Drag 1 Picture/Video'
                            )}
                            styles={{
                            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                            inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
                            dropzone: { width: 250, minHeight: 180, maxHeight: 180 },
                            dropzoneActive: { borderColor: "green" }
                            }}
                            accept="image/*,video/*"
                        />}
                </Box>
                
                {/* {!media.file && <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    onSubmit={handleSubmit}
                    maxFiles={1}
                    inputContent={(files, extra) => (extra.reject ? 
                        'Image and video files only' 
                        : 
                        'Click Here or Drag 1 Picture/Video'
                    )}
                    styles={{
                    dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                    inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
                    dropzone: { width: 250, minHeight: 180, maxHeight: 180 },
                    dropzoneActive: { borderColor: "green" }
                    }}
                    accept="image/*,video/*"
                />} */}
                <Box>
                    <Button variant="contained" onClick={handleClick} >Submit Post</Button>
                </Box>
            </Box>
            
            
            
            {/* <img src={image}/>
            <ReactPlayer 
                url={image}
                width='400px'
                height='600px'
                controls = {true}/> */}
        </Container>
    );
}

export default AddPostPage;