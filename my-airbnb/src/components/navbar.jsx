import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryList from './categoryList'; // Import the CategoryList component

function Navbar() {
  const cart = useSelector((state) => state.cart);

  const onLogout = () => {
    // Your logout logic here
  };

  return (
    <>
      <nav data-bs-theme='dark' className='navbar bg-dark navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            MY_99Acres
          </a>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {/* Your existing navigation links */}
              <li className='nav-item'>
                <Link to='/home' className='nav-link'>
                  Home
                </Link>
              </li>
              {/* Add other existing links */}
              <li className='nav-item'>
                <Link to='/add-property' className='nav-link'>
                  My Profile
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' onClick={onLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      {/* Add CategoryList component below the navbar */}
      </nav>
      <CategoryList />
      
    </>
  );
}

export default Navbar;
