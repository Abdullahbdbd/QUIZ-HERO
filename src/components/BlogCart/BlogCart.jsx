import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'




function BlogCart({ blog, handleWatchTime, addToBookmark }) {

   
    return (
        <div className='blog-cart mt-10'>
            <img className='rounded-lg' src={blog.img} alt="" />


            <div className='flex justify-between'>
                <div className='flex mt-5'>
                    <div>
                        <img className='h-20 w-20 rounded-full' src={blog.img2} alt="" />
                    </div>

                    <div className='ml-2 mt-3'>
                        <h1 className='text-2xl font-bold'>{blog.name}</h1>
                        <h1 className='text-slate-500'>{blog.date}</h1>
                    </div>
                </div>

                <div className='flex gap-1'>
                    <h1 className='text-slate-500 mt-9 font-bold'>{blog.time} min read</h1>
                    <button onClick={() => addToBookmark(blog.title)}><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>


            <h1 className='text-3xl font-bold mt-8'>{blog.title}</h1>
            <button onClick={() => handleWatchTime(blog.time)} className='btn-mark my-10 font-bold text-purple-700'>Mark as read</button>
            <hr />


        </div>
    );
}

export default BlogCart;