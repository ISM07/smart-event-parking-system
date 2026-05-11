import { createSlice } from '@reduxjs/toolkit'

const eventSlice = createSlice({
  name: 'events',

  initialState: {
    list: []
  },

  reducers: {
    setEvents: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setEvents } = eventSlice.actions
export default eventSlice.reducer