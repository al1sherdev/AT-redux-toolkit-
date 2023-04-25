import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header class="blog-header lh-1 py-3 container">
        <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
                <Link class="link-secondary" to="/">Logo</Link>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
                <Link class="link-secondary" to="/" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                </Link>
                <Link class="btn btn-sm btn-outline-secondary me-2" to="/login">Login</Link>
                <Link class="btn btn-sm btn-outline-secondary" to="/register">Register</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar