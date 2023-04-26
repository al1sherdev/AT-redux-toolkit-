import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets/index';
import AuthService from '../service/auth';
import { signUserFailed, signUserStart, signUserSuccess } from '../slice/auth';
import Input from '../ui/input';
import ValidationError from './ValidationError';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const {isLoading, loggedIn} = useSelector(state => state.auth)
  const navigate = useNavigate()

  const loginHandler = async(e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {email, password}
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')
    } catch (error) {
      dispatch(signUserFailed(error.response.data.errors))
    }
  }

  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  return (
    <div className='text-center'>
    <main className="form-signin w-25 m-auto mt-5">
        <form>
            <img className="mb-4" src={logo} alt="" width="72" height="60" />
            <h1 className="h3 mb-3 fw-normal">Please login</h1>
            <ValidationError />

            <Input label={"Email address"} state={email} setState={setEmail} type={"email"} />
            <Input label={"Password"} state={password} setState={setPassword} type={"password"} />

            <button 
              className="w-100 btn btn-lg btn-primary mt-3" 
              type="submit"
              onClick={loginHandler}
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Login"}
            </button>
        </form>
    </main>
</div>
  )
}

export default Login