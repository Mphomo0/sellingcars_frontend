import { apiSlice } from './apiSlice'

// Inject endpoints into the usersApiSlice
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation to log in a user
    login: builder.mutation({
      query: (data) => {
        return {
          url: '/api/users/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        }
      },
    }),

    // Mutation to log out a user
    logout: builder.mutation({
      query: () => ({
        url: '/api/users/logout', // Define the URL for user logout
        method: 'POST', // Specify the HTTP method as POST
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

    // Mutation to update user profile
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/api/users/profile', // Define the URL for updating user profile
        method: 'PUT', // Specify the HTTP method as PUT
        body: data, // Include updated user profile data in the request body
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
    }),
  }),
})

// Export the login, logout, and profile mutations
export const { useLoginMutation, useLogoutMutation, useUpdateUserMutation } =
  usersApiSlice
