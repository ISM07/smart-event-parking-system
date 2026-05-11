import axios from 'axios'

const API = axios.create({

  baseURL: 'https://smart-event-parking-system.onrender.com/api/users/register'

})

export default API