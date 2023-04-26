import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeItem } from '../helpers/persistance';
import { authSlice, logoutUser } from '../slice/auth';

const Navbar = () => {
  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    removeItem('token')
    navigate('/login')
    dispatch(logoutUser())
  }

  return (
    <header className="blog-header lh-1 py-3 container border-bottom">
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
                <Link className="link-secondary" to="/">Logo</Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              {loggedIn ? (
                <>
                  <h6 className='m-0 mx-2'>{user.username}</h6>
                  <button className='btn btn-outline-danger' onClick={logoutHandler}>Logout</button>
                </>
              ) : (
                <>
                  <Link className="btn btn-sm btn-outline-secondary me-2" to="/login">Login</Link>
                  <Link className="btn btn-sm btn-outline-secondary" to="/register">Register</Link>
                </>
              )}
            </div>
        </div>
    </header>
  )
}

export default Navbar