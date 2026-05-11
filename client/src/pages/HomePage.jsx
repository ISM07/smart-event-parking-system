import NavigationBar from '../components/Navbar'

function HomePage() {
  return (
    <>
      <NavigationBar />

      <div className='container mt-5'>
        <h1>Smart Event & Parking System</h1>

        <button className='btn btn-primary'>
          Create Event
        </button>
      </div>
    </>
  )
}

export default HomePage