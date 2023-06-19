import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import FormGenerator from './routes/Form-Generator.tsx'
import Form from './routes/Form.tsx'
import AllClubs from './routes/AllClubsPage.tsx'
import ClubPage from './routes/ClubPage/ClubPage.tsx'
import ErrorPage from './routes/ErrorPage.tsx';
import NavBar from './NavBar.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />
  },
  {
    path: "/clubs",
    element: <AllClubs />
  },
  {
    path: "/clubs/:id",
    element: <ClubPage/>
  },
  {
    path:"/clubs/:id/recruitment",
    element:<Form/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/Form",
    element: <FormGenerator />
  },
  {
    path :"/*",
    element:<ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
