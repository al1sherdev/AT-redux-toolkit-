import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="blog-header lh-1 py-3 container">
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
                <Link className="link-secondary" to="/">Logo</Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <Link className="btn btn-sm btn-outline-secondary me-2" to="/login">Login</Link>
                <Link className="btn btn-sm btn-outline-secondary" to="/register">Register</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar