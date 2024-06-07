import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home, HomeLayout, NotFound, Gallery, Projects, Contact } from '.'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomeLayout />} >
        <Route index element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
