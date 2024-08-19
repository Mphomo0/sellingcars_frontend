import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { logout } from './authSlice'

// NOTE: code here has changed to handle when our JWT and Cookie expire.
// We need to customize the baseQuery to be able to intercept any 401 responses
// and log the user out
// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-queries-with-basequery

// Define the baseQuery with the base URL
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://sellingcars.onrender.com',
  credentials: 'include',
})

// Create a custom baseQueryWithAuth function to handle authentication and logout on 401 errors
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  // Execute the baseQuery with provided arguments
  let result = await baseQuery(args, api, extraOptions)
  // Check if the response contains an error with status code 401 (Unauthorized)
  if (result.error && result.error.status === 401) {
    // If a 401 error is detected, dispatch the logout action
    api.dispatch(logout())
  }
  // Return the result of the baseQuery
  return result
}

// Create the API slice with the customized baseQuery
export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Cars', 'Users'],
  endpoints: (builder) => ({}), // Define your API endpoints here if needed
})
