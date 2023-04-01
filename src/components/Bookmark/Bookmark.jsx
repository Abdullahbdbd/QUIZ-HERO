import React, { useEffect, useState } from 'react';



const Bookmark = ({readTime,titles}) => {
    console.log(titles)
    
    const [time, setTime]=useState(0);

useEffect(()=>{
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
}, [readTime]);

    return (
        <div className='container-item'>

        <div className='text-2xl font-bold mt-10 text-indigo-600 bg-indigo-200 p-2 rounded-lg'>
           <h1>Spent time on read : {time}min</h1>
        </div>

        <div className='mt-5 bg-slate-200 text-2xl font-bold p-5 w-full h-1/3 rounded-lg'>
            <h1 className='text-4xl'>Bookmarked Blogs : {titles.length}</h1>
            <p className='mt-14 bg-white p-5 rounded-lg'>{titles[0]}</p>
            <p className='mt-14 bg-white p-5 rounded-lg'>{titles[1]}</p>
            <p className='mt-14 bg-white p-5 rounded-lg'>{titles[2]}</p>
            <p className='mt-14 bg-white p-5 rounded-lg'>{titles[3]}</p>
        </div>
           
        </div>
    );
};

export default Bookmark;