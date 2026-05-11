import { useState, useEffect } from 'react'
import API from '../services/api'

function Parking() {

  const [personName, setPersonName] = useState('')
  const [carNumber, setCarNumber] = useState('')
  const [carColor, setCarColor] = useState('')
  const [list, setList] = useState([])

  const addCar = async () => {
    await API.post('/parking', {
      personName,
      carNumber,
      carColor
    })

    getData()
  }

  const getData = async () => {
    const res = await API.get('/parking')
    setList(res.data)
  }

  const deleteCar = async (id) => {
    await API.delete(`/parking/${id}`)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h2>Parking Management</h2>

      <input placeholder="Person Name" onChange={(e)=>setPersonName(e.target.value)} />
      <input placeholder="Car Number" onChange={(e)=>setCarNumber(e.target.value)} />
      <input placeholder="Car Color" onChange={(e)=>setCarColor(e.target.value)} />

      <button onClick={addCar}>Add</button>

      {list.map(item => (
        <div key={item._id}>
          <p>{item.personName} - {item.carNumber} - {item.carColor}</p>
          <button onClick={()=>deleteCar(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Parking