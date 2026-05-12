import { useState, useEffect } from 'react'
import API from '../services/api'

function Parking() {

  const [personName, setPersonName] = useState('')
  const [carNumber, setCarNumber] = useState('')
  const [carColor, setCarColor] = useState('')
  const [list, setList] = useState([])

  const addCar = async () => {

    if (!personName || !carNumber || !carColor) {
      alert('Please fill all fields')
      return
    }

    try {

      await API.post('/parking', {
        personName,
        carNumber,
        carColor
      })

      alert('✅ Car Added')

      setPersonName('')
      setCarNumber('')
      setCarColor('')

      getData()

    } catch (error) {
      alert('❌ Failed To Add Car')
    }
  }

  const getData = async () => {

    try {

      const res = await API.get('/parking')
      setList(res.data)

    } catch (error) {
      alert('❌ Failed To Load Data')
    }
  }

  const deleteCar = async (id) => {

    try {

      await API.delete(`/parking/${id}`)

      alert('🗑️ Deleted')

      getData()

    } catch (error) {
      alert('❌ Delete Failed')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">

      <div className="card">

        <h2>Parking Management</h2>

        <input
          placeholder="Person Name"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
        />

        <input
          placeholder="Car Number"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
        />

        <input
          placeholder="Car Color"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
        />

        <button onClick={addCar}>
          Add Car
        </button>

      </div>

      <div className="list-container">

        {
          list.map((item) => (
            <div className="car-card" key={item._id}>

              <h3>{item.personName}</h3>

              <p>🚘 {item.carNumber}</p>

              <p>🎨 {item.carColor}</p>

              <button
                className="delete-btn"
                onClick={() => deleteCar(item._id)}
              >
                Delete
              </button>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Parking