import { useState } from 'react'
import API from '../services/api'

function RegisterPage() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async () => {

    await API.post('/users/register', {
  name,
  email,
  password
})

    alert('Registered Successfully')

  }

  return (

    <div className='container mt-5'>

      <h2>Register</h2>

      <input
        type='text'
        placeholder='Name'
        className='form-control mb-3'
        onChange={(e) => setName(e.target.value)}
      />

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
        className='btn btn-primary'
        onClick={registerUser}
      >
        Register
      </button>

    </div>
  )
}

export default RegisterPage