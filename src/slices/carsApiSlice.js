import { apiSlice } from './apiSlice'

// Inject endpoints into the carsApiSlice
export const carsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get a list of cars
    getCars: builder.query({
      query: (pageNumber) => ({
        url: `/api/cars?pageNumber=${pageNumber}`, // Define the URL for getting cars
        method: 'GET', // Specify the HTTP method as GET
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
      providesTags: ['Cars'], // Provide tags for caching
    }),

    // Query to get a single car
    getCar: builder.query({
      query: (id) => ({
        url: `/api/cars/${id}`, // Define the URL for getting a single car
        method: 'GET', // Specify the HTTP method as GET
      }),
      providesTags: ['Car'], // Provide tags for caching
    }),

    // Mutation to add a new car
    addCar: builder.mutation({
      query: (data) => ({
        url: '/api/cars', // Define the URL for adding a new car
        method: 'POST', // Specify the HTTP method as POST
        body: data, // Include new car data in the request body
      }),
      // Optionally add tags or invalidates cache
    }),

    // Mutation to update an existing car
    updateCar: builder.mutation({
      query: ({ carId, formData }) => ({
        url: `/api/cars/${carId}`, // Define the URL for updating an existing car
        method: 'PUT', // Specify the HTTP method as PUT
        body: formData, // Include updated car data in the request body
      }),
      providesTags: ['Car'],
      invalidatesTags: ['Car'], // Invalidate tags for caching
    }),

    // Mutation to delete a car
    deleteCar: builder.mutation({
      query: (carId) => ({
        url: `/api/cars/${carId}`, // Define the URL for deleting a car
        method: 'DELETE', // Specify the HTTP method as DELETE
      }),
      invalidatesTags: [{ type: 'Car', id: 'LIST' }], // Invalidate tags for caching
    }),

    // Query to get featured cars
    getFeatured: builder.query({
      query: () => ({
        url: '/api/cars/featured', // Define the URL for getting featured cars
        method: 'GET', // Specify the HTTP method as GET
        headers: { 'Content-Type': 'application/json' }, // Set the request headers
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
      providesTags: ['Cars'], // Provide tags for caching
    }),

    // Query to search cars
    searchCars: builder.query({
      query: ({ make, model, year, price }) => ({
        url: '/api/cars/search', // Define the URL for searching cars
        params: { make, model, year, price }, // Include search query parameters in the request
      }),
    }),

    // Query to get car makes
    getMakes: builder.query({
      query: () => ({
        url: '/api/cars/makes', // Define the URL for getting car makes
        method: 'GET', // Specify the HTTP method as GET
      }),
      keepUnusedDataFor: 5, // Define data retention policy for unused data
      providesTags: ['Cars'], // Provide tags for caching
    }),

    // Query to get car models
    getModels: builder.query({
      query: (make) => ({
        url: '/api/cars/models', // Define the URL for getting car models
        params: { make }, // Include make parameter in the request
        method: 'GET', // Specify the HTTP method as GET
      }),
    }),

    // Query to get car years
    getYears: builder.query({
      query: ({ make, model }) => ({
        url: '/api/cars/years', // Define the URL for getting car years
        params: { make, model }, // Include make and model parameters in the request
        method: 'GET', // Specify the HTTP method as GET
      }),
    }),

    // Query to get car prices
    getPrices: builder.query({
      query: ({ make, model, year }) => ({
        url: '/api/cars/prices', // Define the URL for getting car prices
        method: 'GET', // Specify the HTTP method as GET
        params: { make, model, year }, // Include make, model, and year parameters in the request
      }),
    }),

    // Mutation to upload images
    uploadImages: builder.mutation({
      query: (data) => ({
        url: '/api/upload', // Define the URL for uploading images
        method: 'POST', // Specify the HTTP method as POST
        body: data, // Include image data in the request body
        // headers: { 'Content-Type': 'multipart/form-data' }, // Set the content type to multipart/form-data
      }),
    }),
  }),
})

// Export hooks for using the queries and mutations
export const {
  useGetCarsQuery,
  useGetCarQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useGetFeaturedQuery,
  useSearchCarsQuery,
  useGetMakesQuery,
  useGetModelsQuery,
  useGetYearsQuery,
  useGetPricesQuery,
  useUploadImagesMutation,
} = carsApiSlice
