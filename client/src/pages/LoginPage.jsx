import { useState } from 'react'

import API from '../services/api'

function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {

    try {

      const res = await API.post('/users/login', {

        email,
        password

      })

      alert('Login Success')

      console.log(res.data)

    } catch (err) {

      alert('Invalid Credentials')

    }

  }

  return (

    <div className='container mt-5'>

      <h2>Login</h2>

      <input
        type='email'
        placeholder='Email'
        className='form-control mb-3'
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type='password'
        placeholder='Password'
        className='form-control mb-3'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className='btn btn-success'
        onClick={loginUser}
      >
        Login
      </button>

    </div>
  )
}

export default LoginPage