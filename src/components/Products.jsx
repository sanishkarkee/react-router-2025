import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='Search Products' />
      </div>

      <nav className='secondary-nav'>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>

      {/* <OUTLET/>: Its used to display the content of CHILD route/component inside PARENT route */}
      <Outlet />
    </>
  );
};
