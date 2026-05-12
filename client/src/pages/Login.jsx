import { useState } from 'react'
import API from '../services/api'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const login = async () => {

    if (!email || !password) {
      alert('Please fill all fields')
      return
    }

    try {

      setLoading(true)

      const res = await API.post('/users/login', {
        email,
        password
      })

      if (res.data.success) {

        alert('✅ Login Success')

        localStorage.setItem('token', res.data.token)

      } else {
        alert('❌ Invalid Email or Password')
      }

    } catch (error) {
      alert('Server Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">

      <div className="card">

        <h2>Login</h2>

        <input
          type="email"
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

        <button onClick={login}>
          {loading ? 'Loading...' : 'Login'}
        </button>

      </div>

    </div>
  )
}

export default Login