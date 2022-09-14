import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/details",
    element: <Details/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App; 
