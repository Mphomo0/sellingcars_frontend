import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import authReducer from './slices/authSlice'

//configure Redux store
export const store = configureStore({
  // Define reducers for different parts of the state
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // API slice reducer
    auth: authReducer, // Auth slice reducer
  },
  // Middleware configuration to handle API calls
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, // Enable Redux DevTools for debugging
})
