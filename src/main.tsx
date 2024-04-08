import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Films from './components/Films/Films'
import People from './components/People/People'
import Planets from './components/Planets/Planets'
import Species from './components/Species/Species'
import Starships from './components/Starships/Starships'
import Vehicles from './components/Vehicles/Vehicles'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/films',
    element: <Films/>
  },
  {
    path: '/people',
    element: <People/>
  },
  {
    path: '/planets',
    element: <Planets/>
  },
  {
    path: '/species',
    element: <Species/>
  },
  {
    path: '/starships',
    element: <Starships/>
  },
  {
    path: '/vehicles',
    element: <Vehicles/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = { router }/>
  </React.StrictMode>,
)
