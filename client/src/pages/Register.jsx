import { useState } from 'react'
import API from '../services/api'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = async () => {

    if (!name || !email || !password) {
      alert('Please fill all fields')
      return
    }

    try {

      await API.post('/users/register', {
        name,
        email,
        password
      })

      alert('✅ Registered Successfully')

      setName('')
      setEmail('')
      setPassword('')

    } catch (error) {
      alert('❌ Register Failed')
    }
  }

  return (
    <div className="container">

      <div className="card">

        <h2>Register</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={register}>
          Register
        </button>

      </div>

    </div>
  )
}

export default Register