import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Receipt from './pages/Receipt';
import Stock_movement from './pages/Stock_movement';
import Pick_ticket from './pages/Pick_ticket';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
      {
        path: "/WMS/Stock_movement",
        element:  <Stock_movement />,
      },
      {
        path: "/WMS/pick_ticket",
        element:<Pick_ticket />,
      },
      {
        path: "/WMS/receipt",
        element:<Receipt />,
      },

]
},
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
