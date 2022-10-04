import React, { useState } from 'react';
import produce from 'immer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Admin = () => {
    const [post, setPost] = useState({
        title: '',
        content: ''
    });
    const history = useHistory();
    const { title, content } = post;

    const onTextChange = (e) => {
        const newPost = produce(post, draft => {
            draft[e.target.name] = e.target.value
        })
        setPost(newPost);
    }

    const onSubmitClick = async () => {
        await axios.post('/api/post/addpost', post);
        history.push('/');
    }


    return (
        <div className='container mt-5'>
            <div className='row mt-8'>
                <div className='col-md-8 offset-md-2 card card-body bg-light mt-5'>
                    <h1>Add a new post</h1>
                    <input type='text' className='form-control' name='title' value={title} onChange={onTextChange} placeholder="Title" />
                    <br />
                    <textarea className='form-control' name='content' rows='10' value={content} onChange={onTextChange} placeholder="What's on your mind?"></textarea>
                    <br />
                    <button className='btn btn-primary btn-block' onClick={onSubmitClick}>Submit Post</button>
                </div>
            </div>
        </div>
    )
}

export default Admin;