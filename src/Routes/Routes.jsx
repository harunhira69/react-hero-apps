import React from 'react';
import { createBrowserRouter } from "react-router";
import Navbar from '../Component/Navbar';
import Root from '../Layout/Root';
import ErrorHandling from '../Pages/ErrorHandling';

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<ErrorHandling></ErrorHandling>
 
  },

]);
export default router;