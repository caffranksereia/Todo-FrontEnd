import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage';
import Page404 from './Page404';
import   {
  createBrowserRouter,
  RouterProvider,
  Switch
} from 'react-router-dom';

import Cadastro from './Cadastro';
import Login from './Login';
import DetailUser from './DetailUser'

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>,
    errorElement:<Page404/>,
    children:[
      {
        path:"/Login",
        element: <Login/>,
      },
      {
        path:"/Cadastro",
        element: <Cadastro/>,
      },
      {
        path:"/Profile",
        element: <DetailUser/>,
      },
      {
        path:"/Todo/",
        element: <DetailUser/>,
      },
      {
        path:"/Todo/:id",
        element: <DetailUser/>,
      },
    ]
  },
  


])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);