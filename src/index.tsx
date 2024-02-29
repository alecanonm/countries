import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts'
import './styles/index.css'
import App from './App'
import CountryProvider from './context/CountryContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/', element: <App /> }],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CountryProvider>
      <RouterProvider router={router} />
    </CountryProvider>
  </React.StrictMode>,
)
