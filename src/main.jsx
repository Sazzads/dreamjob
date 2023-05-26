import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Statistics from './Components/Statistics/Statistics'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import Blog from './Components/Blog/Blog'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import JobDetails from './Components/JobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobfile.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobfile.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobfile.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },

    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
