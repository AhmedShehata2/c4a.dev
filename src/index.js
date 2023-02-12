import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home';
import Css from './pages/Css';
import Html from './pages/Html';
import Javascript from './pages/Javascript';

// Router section
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Router section


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Css",
    element: <Css />,
  },

  {
    path: "/Html",
    element: <Html />,
  },

  {
    path: "/Javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

