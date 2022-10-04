import React, { useState } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { useHistory} from "react-router-dom";


const CommentForm = ({postId}) => {
    const [comment, setComment] = useState({
        name: '',
        content: ''
        
      
    });
const history=useHistory();
    const { name, content } = comment;


   const onSubmitClick = async () => {
        await axios.post('/api/post/addcomment', {name, content, postId});
        history.push('/')
    }

    const onTextChange = (e) => {
        const newComment = produce(comment, draft => {
            draft[e.target.name] = e.target.value;
        });
        setComment(newComment);
    }

    return (
        <div className='card' style={{ width: '35rem' }}>
            <h5 className='card-header'>Leave a comment:</h5>
            <div className='card-body'>
                <div className='form-group'>
                    <input type='text' placeholder='Please enter your name' onChange={onTextChange} className='form-control' name='name' value={name} />
                </div>
                <div className='form-group'>
                    <textarea placeholder='Type comment here' onChange={onTextChange} name='content' value={content} className='form-control' rows='3' />
                </div>
                <button className='btn btn-primary' onClick={onSubmitClick}>Submit</button>
            </div>
        </div>
    )
}
export default CommentForm;