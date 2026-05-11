function LoginPage() {
  return (
    <div className='container mt-5'>
      <h2>Login</h2>

      <input
        type='email'
        className='form-control mb-3'
        placeholder='Email'
      />

      <input
        type='password'
        className='form-control mb-3'
        placeholder='Password'
      />

      <button className='btn btn-success'>
        Login
      </button>
    </div>
  )
}

export default LoginPage