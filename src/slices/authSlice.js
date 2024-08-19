import { createSlice } from '@reduxjs/toolkit'

// Define the initial state for the auth slice
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
}

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Define the reducer for logging in
    setCredentials: (state, action) => {
      // Set the user info in the state
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },

    // Define the reducer for logging out
    logout: (state, action) => {
      state.userInfo = null
      // clear the local storage
      localStorage.removeItem('userInfo')
    },
  },
})

// Export the action creators
export const { setCredentials, logout } = authSlice.actions

// Export the reducer
export default authSlice.reducer
