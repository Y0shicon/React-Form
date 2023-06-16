import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './routes/App.tsx'
import ErrorPage from './routes/ErrorPage.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1><a href='/Form'>Go to Form</a></h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Form",
    element: <App />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
