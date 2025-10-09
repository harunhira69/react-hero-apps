import React from 'react';
import { createBrowserRouter } from "react-router";

import Root from '../Layout/Root';
import ErrorHandling from '../Pages/ErrorHandling';


import Install from '../Pages/AppCart/Install';

import Home from '../Pages/Home';
import Allapps from '../Pages/Allapps';

import CardDetails from '../Pages/CardDetails';
import ShowError from '../Pages/ShowError';


const router = createBrowserRouter([
  {
    path: "/",
   element:<Root></Root>,
   errorElement:<ShowError></ShowError>,
   children:[
    {
     index:true,
     Component:Home
    },
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
      Component:CardDetails
    },
    {
      path:'/install',
      Component:Install
    }
   ]
   
 
  },

]);
export default router;