import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate} from "react-router-dom"

import CitiesList from './components/CitiesList'
import CountriesList from './components/CountriesList'
import CityDescription from './components/CityDescription'
import AddCityForm from './components/AddCityForm'
import { CitiesProvider } from './contexts/CitiesContext'
import { AuthProvider } from './contexts/FakeAuthContext'
import LocProvider from './contexts/LocProvider'
import ProtectedRoute from './components/ProtectedRoute'
import SuspenseLayout from './lazyload/SuspenseLayout'
import './index.css'

const Homepage = lazy(() => import("./pages/Homepage"))
const Product = lazy(() => import("./pages/Product"))
const Pricing = lazy(() => import("./pages/Pricing"))
const PageNotFound = lazy(() => import("./pages/PageNotFound"))
const Login = lazy(() => import('./pages/Login'))
const AppLayout = lazy(() => import('./pages/AppLayout'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LocProvider/>}>
      <Route element={<AuthProvider/>}>
        <Route element={<CitiesProvider/>}>
          <Route element={<SuspenseLayout/>}>
            <Route index element={<Homepage />}/>
            <Route path="product" element={<Product />}/>
            <Route path="pricing" element={<Pricing />}/>
            <Route path="login" element={<Login />}/>
            <Route path="*" element={<PageNotFound />}/>
            <Route path="app" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route index element={<Navigate replace to="cities" />}/>
              <Route path="cities" element={<CitiesList/>}/>
              <Route path="cities/:id" element={<CityDescription />}/>
              <Route path="form" element={<AddCityForm/>}/>
              <Route path="countries" element={<CountriesList />}/>
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
