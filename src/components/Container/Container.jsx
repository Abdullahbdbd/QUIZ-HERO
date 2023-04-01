import React from 'react';
import Blog from '../Blog/Blog';
import BlogCart from '../BlogCart/BlogCart';
import Bookmark from '../Bookmark/Bookmark';
import './Container.css'

const Container = ({handleWatchTime,addToBookmark}) => {
    return (
        <div className='container-item ml-20 gap-4'>
            <div className='blog-container'>
                <Blog addToBookmark={addToBookmark} handleWatchTime={handleWatchTime}></Blog>
                
            </div>
            <div className='bookmark-container'>
           
            </div>

        </div>
    );
};

export default Container;