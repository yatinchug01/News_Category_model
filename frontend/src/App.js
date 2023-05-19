import React, { useState, useEffect } from 'react';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassifierPage from './pages/ClassifierPage';


const router=createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/classifier',element:<ClassifierPage/>}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
