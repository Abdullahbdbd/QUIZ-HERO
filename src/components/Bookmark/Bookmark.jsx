import React, { useEffect, useState } from 'react';


const Bookmark = ({readTime}) => {
    const [time, setTime]=useState(0);

useEffect(()=>{
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
}, [readTime]);

    return (
        <div className=''>

        <div className='text-2xl font-bold mt-10 text-indigo-600 bg-indigo-200 p-2 rounded-lg'>
           <h1>Spent time on read : {time}min</h1>
        </div>

        <div className='mt-5 bg-slate-200 text-6xl'>
            <p></p>
        </div>
           
        </div>
    );
};

export default Bookmark;