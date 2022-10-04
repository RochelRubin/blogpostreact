import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get('./api/post/getall');
            setPosts(data);
        }
        getPosts();
    }, []);

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1 className='mt-4'>Blog Site</h1>
                    {posts.map((p, i) => {
                        return (
                            <div className='card mb-4' key={i}>
                                <div className='card-body'>
                                    <h2 className='card-title'>
                                        <Link to={`/viewblog/${p.id}`}>
                                            {p.title}
                                        </Link>
                                    </h2>
                                    <p className='card-text'>
                                        {p.content.length < 200 ? p.content : p.content.SubString(0, 200) + "..."}
                                    </p>
                                    <h6>{p.comments.length} comment(s)</h6>
                                    <br />
                                    <br />
                                    <Link to={`/viewblog/${p.id}`}>
                                        <button className="btn btn-primary">
                                            Read More &#10140;
                                        </button>
                                    </Link>
                                </div>
                                <div className='card-footer text-muted'>
                                    Posted on {format(new Date(p.dateCreated), 'EEEE LLLL do, R')}
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )

}

export default Home;