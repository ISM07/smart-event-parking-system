function RegisterPage() {
  return (
    <div className='container mt-5'>

      <h2>Register</h2>

      <input
        type='text'
        placeholder='Name'
        className='form-control mb-3'
      />

      <input
        type='email'
        placeholder='Email'
        className='form-control mb-3'
      />

      <input
        type='password'
        placeholder='Password'
        className='form-control mb-3'
      />

      <button className='btn btn-primary'>
        Register
      </button>

    </div>
  )
}

export default RegisterPage