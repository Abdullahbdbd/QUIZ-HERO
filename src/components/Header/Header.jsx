import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='container flex justify-between items-center ml-20 mt-10'>
      <h1 className=' text-3xl font-bold'>Knowledge Store</h1>
      <a href="">Menu</a>
      <a href="">About</a>
      <a href="">Help</a>
      <img className='h-20 w-20 rounded-full' src="https://bdun.org/wp-content/uploads/2020/03/HPM.jpg" alt="" />
      </div>
      <hr className='container ml-20 mt-6'/>
        </div>
    );
};

export default Header;