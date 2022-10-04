import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CommentForm from './CommentForm';
import CommentRows from './CommentRow';
const Viewblog = () => {
    const { postId } = useParams();
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const { data } = await axios.get(`/api/post/getpostbyid?postid=${postId}`)
            setPost(data)
        };
        getPost();
    }, []);
    return (
        <div className='container mt-5' style={{ minHeight: 100, paddingTop: 10 }}>
            <div className='row mt-5'>
                <div className='col-lg-8'>
                    <h1>{post.Title}</h1>
                    <p className='lead'>
                        by {'Rochel Rubin'}
                    </p>
                    <hr />
                    <div>
                        <p>Posted on {post.dateCreated}</p>
                    </div>
                    <hr />
                    <p style={{ whiteSpace: 'prewrap' }}>{post.content}</p>
                </div>
            </div>
            <CommentForm postId={post.Id} />
            <CommentRows postId={post.Id} />
        </div >

    );
};
export default Viewblog;