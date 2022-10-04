import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentRows = ({postId}) => {

    const [comments, setComments] = useState([]);
   
    useEffect(() => {
        const getComments = async () => {
            const { data } = await axios.get(`/api/post/getcommentsbyid?postid=${postId}`);            
            setComments(data);
        }
        getComments();
    }, [comments]);


    return (
        <>
            {comments.map((comment, i) => {
                return (
                    <div key={i} className='row'>
                        <div className='media mb-4'>
                            <div className='media-body'>
                                <h5 className='mt-0'>
                                    {comment.name}
                                    <small>{comment.dateCreated}</small>
                                </h5>
                                {comment.content}
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </>
    )
}

export default CommentRows