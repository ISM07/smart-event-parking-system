import { useState } from 'react'

function EventPage() {

  const [title, setTitle] = useState('')

  const createEvent = () => {
    alert('Event Created')
  }

  return (
    <div className='container mt-5'>

      <h2>Create Event</h2>

      <input
        type='text'
        placeholder='Event Title'
        className='form-control mb-3'
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type='date'
        className='form-control mb-3'
      />

      <select className='form-select mb-3'>
        <option>Parking Area A</option>
        <option>Parking Area B</option>
      </select>

      <div className='mb-3'>
        <input type='radio' name='type' /> VIP
      </div>

      <div className='mb-3'>
        <input type='checkbox' /> Confirm
      </div>

      <button
        className='btn btn-success'
        onClick={createEvent}
      >
        Save Event
      </button>

    </div>
  )
}

export default EventPage