import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import FormGenerator from './routes/Form-Generator.tsx'
import Form from './routes/Form.tsx'
import AllClubs from './routes/AllClubsPage.tsx'
import ErrorPage from './routes/ErrorPage.tsx';
import NavBar from './NavBar.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/React-Form",
    element: <NavBar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/React-Form/clubs",
    element: <AllClubs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/React-Form/clubs/:id",
    element: <Form/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/React-Form/Form",
    element: <FormGenerator />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
