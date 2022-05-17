import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import './AddPostPage.css'

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

    const handleClick = async () => {
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
    }

    return (
        <div className="container">
            <h2>Add Post Page!</h2>
            <div className="postContainer">
                <div>
                    <label htmlFor="post title">
                    Title:
                    <input
                        type="text"
                        name="post title"
                        required
                        value={postTitle}
                        onChange={(event) => setPostTitle(event.target.value)}
                    />
                    </label>
                </div>
                <div>
                <label htmlFor="post body">
                    Body:
                    <input
                        type="text"
                        name="post body"
                        required
                        value={postBody}
                        onChange={(event) => setPostBody(event.target.value)}
                    />
                    </label>
                </div>
                <div>
                <label htmlFor="outcome tag">
                    tag:
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
                    </label>
                </div>
            </div>
            {!media.file && <Dropzone
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
            <button onClick={handleClick}>Submit Post</button>
            <img src={image}/>
            <ReactPlayer 
                url={image}
                width='400px'
                height='600px'
                controls = {true}/>
        </div>
    );
}

export default AddPostPage;