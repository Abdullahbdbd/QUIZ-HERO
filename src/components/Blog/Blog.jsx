import React, { useEffect, useState } from 'react';
import BlogCart from '../BlogCart/BlogCart';

const Blog = ({handleWatchTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div>
            <div className='blog-container'>

                {blogs.map((blog) => (
                    <BlogCart handleWatchTime={handleWatchTime} blog={blog}></BlogCart>
                ))}
            </div>

        </div>
    );
};

export default Blog;