import React from 'react';
import { createBrowserRouter } from "react-router";
import Navbar from '../Component/Navbar';
import Root from '../Layout/Root';
import ErrorHandling from '../Pages/ErrorHandling';

import AppCards from '../Pages/AppCart/AppCards';
import AppsFound from '../Pages/AppDetails';
import Install from '../Pages/AppCart/Install';
import AppsCard from '../Pages/AppCart/AppsMap';
import Home from '../Pages/Home';
import Allapps from '../Pages/Allapps';
import AppDetails from '../Pages/AppDetails';


const router = createBrowserRouter([
  {
    path: "/",
   element:<Root></Root>,
   errorElement:<ErrorHandling></ErrorHandling>,
   children:[
    {
      path:'/home',
     Component:Home
    },
    {
      path:'/apps',
      Component:Allapps
    },

    {
      path:'/apps/:id',
      Component:AppDetails
    },
    {
      path:'/install',
      Component:AppDetails
    }
   ]
   
 
  },

]);
export default router;