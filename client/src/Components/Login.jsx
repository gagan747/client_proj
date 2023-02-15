import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import messageCleaner from '../utils/messageCleaner'
import { hostUrl } from '../config'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  const login = async () => {
    try {
      const res = await fetch(
        `${hostUrl}/api/auth/login`,
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'content-type': 'application/json',
          },
        },
      );
      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem('x-auth-token', res.headers.get('x-auth-token'));
        localStorage.setItem('username', data.username);
        toast.success(data.message, {
          toastId: 'login',
        });
        navigate('/')
      }
      else {
        toast.error(messageCleaner(data.message), {
          toastId: 'login',
        });

      }
    } catch (err) {
      console.log(err);
      toast.error(messageCleaner(err), { toastId: 'loginerror' })
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login()
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className='login'>
      <h1>
        Login
      </h1>
      <input type='email' placeholder='Username...' required />
      <span className='eye-container'><input type={showPassword?'text':'password'} name='password' placeholder='Password' required />
        <i class="fa fa-eye" aria-hidden="true" onClick={()=>setShowPassword(!showPassword)}></i>
      </span>
      <button type='submit'>Login</button>
      <div>
        <Link to='/signup'>Sign Up?</Link>
        <Link to='/forgotpassword'>Forgot Password?</Link>
      </div>


    </form>
  )
}
