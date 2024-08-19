import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import './index.css'
import 'keen-slider/keen-slider.min.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ShowroomPage from './pages/ShowroomPage'
import ContactUsPage from './pages/ContactUsPage'
import CarDetail from './pages/CarDetail'
import AddCar from './pages/admin/AddCar'
import EditCar from './pages/admin/EditCar'
import CarList from './pages/admin/CarList'
import Results from './pages/Results'
import LoginPage from './pages/LoginPage'
import ForAdminRoute from './components/ForAdminRoute'
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/showroom' element={<ShowroomPage />} />
      <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/cars/:carId' element={<CarDetail />} />
      <Route path='/results' element={<Results />} />
      <Route path='/login' element={<LoginPage />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfilePage />} />
      </Route>

      <Route path='' element={<ForAdminRoute />}>
        <Route path='/admin/add-car' element={<AddCar />} />
        <Route path='/admin/edit-car/:id' element={<EditCar />} />
        <Route path='/admin/car-list' element={<CarList />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
