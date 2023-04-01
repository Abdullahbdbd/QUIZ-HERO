import React, { useEffect, useState } from 'react';
import BlogCart from '../BlogCart/BlogCart';




const Blog = ({handleWatchTime,addToBookmark}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, []);

    return (
        <div>
            <div className='blog-container'>

                {blogs.map((blog) => 
                    <div>
                        <BlogCart addToBookmark={addToBookmark} handleWatchTime={handleWatchTime}
                        blog={blog}
                    ></BlogCart>
                    
                    </div>
                    
                )}
            </div>

        </div>
    );
};

export default Blog;