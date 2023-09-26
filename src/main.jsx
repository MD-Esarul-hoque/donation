import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';

import Root from './components/Root/Root';

import DonationDetails from './components/DonationDetails/DonationDetails';
import TotalDonation from './components/TotalDonation/TotalDonation';

import PchStore from './components/PchStore/PchStore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/home/:id',
        element:<DonationDetails></DonationDetails>,
        loader:()=>fetch('../public/donate.json')
      },
      {
        path:'/donation',
        element:<TotalDonation></TotalDonation>,
        loader:()=>fetch('../public/donate.json')

      },
      {
        path:"/Statistic",
        element:<PchStore></PchStore>,
        loader:()=>fetch('../public/donate.json')
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
