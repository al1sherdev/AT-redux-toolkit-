import React, { useState } from 'react';
import { logo } from '../assets/index';
import Input from '../ui/input';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='text-center'>
        <main class="form-signin w-25 m-auto mt-5">
            <form>
                <img class="mb-4" src={logo} alt="" width="72" height="60" />
                <h1 class="h3 mb-3 fw-normal">Please register</h1>

                <Input label={"Username"} state={username} setState={setUsername} type={'text'} />
                <Input label={"Email address"} state={email} setState={setEmail} type={"email"} />
                <Input label={"Password"} state={password} setState={setPassword} type={"password"} />

                <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Register</button>
            </form>
        </main>
    </div>
  )
}

export default Register