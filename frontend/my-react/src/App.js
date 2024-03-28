import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import HomeMain from './Components/Pages/HomeMain';
import Login from './Components/Forms/Login';
import About from './Components/Pages/About';
import ContactUs from './Components/Pages/ContactUs';
import Clist from './Components/Pages/Clist';
import Dashboard from './Components/Admin/Dashboard';
import AddCandidates from './Components/Forms/AddCandidates';
import AddVoters from './Components/Forms/AddVoters';
import Viewstates from './Components/Admin/Viewstates';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element:<><Navbar/><Login/></>
    },
    {
      path: "/",
      element:<><Navbar/><HomeMain/></>
    },
    {
      path: "/About",
      element:<><Navbar/><About/></>
    },
    {
      path: "/Contact",
      element:<><Navbar/><ContactUs/></>
    },
    {
      path: "/Clist",
      element:<><Navbar/><Clist/></>
    },
    {
      path: "/Dashboard",
      element:<><Navbar/><Dashboard/></>
    },
    {
      path: "/EditCandidates",
      element:<><Navbar/><AddCandidates/></>
    },
    {
      path: "/EditVoters",
      element:<><Navbar/><AddVoters/></>
    },
    {
      path: "/Viewstates",
      element:<><Navbar/><Viewstates/></>
    }
  ])
  return (
    <>     
      <RouterProvider router={router} />
    </>
  );
}

export default App;
