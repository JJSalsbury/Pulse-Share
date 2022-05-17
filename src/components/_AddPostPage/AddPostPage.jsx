import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import './AddPostPage.css'
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
    TextField
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
    const image = useSelector( store => store.imageReducer);
    const video = useSelector( store => store.videoReducer);
    const outcomesList = useSelector( store => store.outcomesListReducer);

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [outcomeTag, setOutcomeTag] = useState('');

    const [openImageModal, setOpenImageModal] = React.useState(false);
    const handleOpenImageModal = () => setOpenImageModal(true);
    const handleCloseImageModal = () => setOpenImageModal(false);

    const [openVideoModal, setOpenVideoModal] = React.useState(false);
    const handleOpenVideoModal = () => setOpenVideoModal(true);
    const handleCloseVideoModal = () => setOpenVideoModal(false);
    
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
        
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmitImage = (files, allFiles) => {
        console.log(files[0])
        const imageToUpload = files[0];
        console.log(imageToUpload['file']);

        dispatch({
            type: 'SET_IMAGE',
            payload: imageToUpload
        })

        // Empties Dropzone 
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

     // receives array of files that are done uploading when submit button is clicked
    const handleSubmitVideo = (files, allFiles) => {
        console.log(files[0])
        const videoToUpload = files[0];
        console.log(videoToUpload['file']);

        dispatch({
            type: 'SET_VIDEO',
            payload: videoToUpload
        })

        // Empties Dropzone 
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    // function will clear media reducer and allow user to input new media
    const handleChangeImage = () => {
        dispatch({
            type: 'CLEAR_IMAGE'
        })
    }

    // function will clear media reducer and allow user to input new media
    const handleChangeVideo = () => {
        dispatch({
            type: 'CLEAR_VIDEO'
        })
    }

    const handleClick = async () => {
        // if title or body text fields are empty, won't submit
        if (postTitle !== '' || postBody !== '') {
            if(image.file) {
                // get secure url from our server
                const { url } = await fetch("/s3Url").then(res => res.json())
                console.log(url)

                // post the image directly to the s3 bucket
                await fetch(url, {
                    method: "PUT",
                    headers: {
                    "Content-Type": "image/jpeg"
                    },
                    body: image['file']
                })

                const imageUrl = url.split('?')[0]
                console.log(imageUrl)
            }

            if(video.file) {
                const { url } = await fetch("/s3Url").then(res => res.json())
                console.log(url)

                await fetch(url, {
                    method: "PUT",
                    headers: {
                    "Content-Type": "video/mp4"
                    },
                    body: video['file']
                })
    
                const videoUrl = url.split('?')[0]
                console.log(videoUrl)
            }
            
            dispatch({
                type: 'CREATE_NEW_POST',
                payload: {
                    postTitle: postTitle,
                    postBody: postBody,
                    postImage: imageUrl,
                    postVideo: videoUrl,
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
                </Box>
                {/* <Box>
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
                </Box> */}
                {image.file ?
                    <Button 
                        onClick={handleChangeImage}
                        style={{
                            marginBottom: 15,
                        }}
                    >Change Photo
                    </Button> 
                    : 
                    <Button 
                        onClick={handleOpenImageModal}
                        style={{
                            marginBottom: 15,
                        }}
                    >Add Photo
                    </Button>
                }
                {video.file ?
                    <Button 
                        onClick={handleChangeImage}
                        style={{
                            marginBottom: 15,
                        }}
                    >Change Video
                    </Button> 
                    : 
                    <Button 
                        onClick={handleOpenVideoModal}
                        style={{
                            marginBottom: 15,
                        }}
                    >Add Video
                    </Button>
                }
                <Modal
                    open={openImageModal}
                    onClose={handleCloseImageModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        marginBottom: 15,
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add A Photo Here!
                    </Typography>
                    {image.file ? 
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
                            onSubmit={handleSubmitImage}
                            maxFiles={1}
                            inputContent={(files, extra) => (extra.reject ? 
                                'Image files only' 
                                : 
                                'Click or Drag 1 Image Here'
                            )}
                            styles={{
                            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                            inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
                            dropzone: { width: 250, minHeight: 180, maxHeight: 180 },
                            dropzoneActive: { borderColor: "green" }
                            }}
                            accept="image/*"
                        />}
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    </Box>
                </Modal>
                <Modal
                    open={openVideoModal}
                    onClose={handleCloseVideoModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        marginBottom: 15,
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add A video Here!
                    </Typography>
                    {video.file ? 
                        <Button 
                            onClick={handleChangeVideo}
                            style={{
                                marginBottom: 15,
                            }}
                        >Change Video
                        </Button> 
                        : 
                        <Dropzone
                            getUploadParams={getUploadParams}
                            onChangeStatus={handleChangeStatus}
                            onSubmit={handleSubmitVideo}
                            maxFiles={1}
                            inputContent={(files, extra) => (extra.reject ? 
                                'Video files only' 
                                : 
                                'Click or Drag 1 Video Here'
                            )}
                            styles={{
                            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                            inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
                            dropzone: { width: 250, minHeight: 180, maxHeight: 180 },
                            dropzoneActive: { borderColor: "green" }
                            }}
                            accept="video/*"
                        />}
                    </Box>
                </Modal>
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