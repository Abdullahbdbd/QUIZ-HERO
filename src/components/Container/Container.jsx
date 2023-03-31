import React from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import './Container.css'

const Container = () => {
    return (
        <div className='container-item ml-20 gap-4'>
            <div className='blog-container'>
                <Blog></Blog>
            </div>
            <div className='bookmark-container'>
                <Bookmark></Bookmark>
            </div>

        </div>
    );
};

export default Container;