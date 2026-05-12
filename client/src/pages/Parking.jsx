import { useState, useEffect } from 'react'
import API from '../services/api'

function Parking() {

  const [personName, setPersonName] = useState('')
  const [carNumber, setCarNumber] = useState('')
  const [carColor, setCarColor] = useState('')
  const [list, setList] = useState([])
  const [editId, setEditId] = useState(null)

  const getData = async () => {
    const res = await API.get('/parking')
    setList(res.data)
  }

  const addCar = async () => {

    // مهم جدًا منع 500
    if (!personName || !carNumber || !carColor) {
      alert("Fill all fields")
      return
    }

    await API.post('/parking', {
      personName,
      carNumber,
      carColor
    })

    getData()
  }

  const deleteCar = async (id) => {
    await API.delete(`/parking/${id}`)
    getData()
  }

  const editCar = (item) => {
    setEditId(item._id)
    setPersonName(item.personName)
    setCarNumber(item.carNumber)
    setCarColor(item.carColor)
  }

  const updateCar = async () => {
    await API.put(`/parking/${editId}`, {
      personName,
      carNumber,
      carColor
    })

    setEditId(null)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>

      <h2>Parking</h2>

      <input placeholder="Name" value={personName} onChange={(e)=>setPersonName(e.target.value)} />
      <input placeholder="Car Number" value={carNumber} onChange={(e)=>setCarNumber(e.target.value)} />
      <input placeholder="Color" value={carColor} onChange={(e)=>setCarColor(e.target.value)} />

      {
        editId ?
        <button onClick={updateCar}>Update</button>
        :
        <button onClick={addCar}>Add</button>
      }

      {
        list.map(item => (
          <div key={item._id}>
            {item.personName} - {item.carNumber} - {item.carColor}

            <button onClick={()=>editCar(item)}>Edit</button>
            <button onClick={()=>deleteCar(item._id)}>Delete</button>
          </div>
        ))
      }

    </div>
  )
}

export default Parking