import { useEffect, useState } from 'react'

import API from '../services/api'

function EventPage() {

  const [title, setTitle] = useState('')

  const [events, setEvents] = useState([])

  const [editingId, setEditingId] = useState(null)

  const getEvents = async () => {

    const res = await API.get('/events')

    setEvents(res.data)

  }

  useEffect(() => {

    getEvents()

  }, [])

  const saveEvent = async () => {

    if(editingId){

      await API.put(`/events/${editingId}`, {

        title

      })

      setEditingId(null)

    } else {

      await API.post('/events', {

        title

      })

    }

    setTitle('')

    getEvents()

  }

  const deleteEvent = async (id) => {

    await API.delete(`/events/${id}`)

    getEvents()

  }

  const editEvent = (event) => {

    setTitle(event.title)

    setEditingId(event._id)

  }

  return (

    <div className='container mt-5'>

      <h2>Event Management</h2>

      <input
        type='text'
        placeholder='Event Title'
        className='form-control mb-3'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className='btn btn-success mb-4'
        onClick={saveEvent}
      >
        Save Event
      </button>

      {

        events.map((event) => (

          <div
            key={event._id}
            className='border p-3 mb-2'
          >

            <h5>{event.title}</h5>

            <button
              className='btn btn-warning me-2'
              onClick={() => editEvent(event)}
            >
              Edit
            </button>

            <button
              className='btn btn-danger'
              onClick={() => deleteEvent(event._id)}
            >
              Delete
            </button>

          </div>

        ))

      }

    </div>
  )
}

export default EventPage