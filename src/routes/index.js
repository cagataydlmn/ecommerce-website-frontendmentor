import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "../style/style.scss";
import Nav from "../components/nav";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/product";
import Checkout from "../pages/checkout";


const routes = createBrowserRouter([
    {
        element: <Nav />,
        children: [
            {
                element: <Home />,
                path: "/"
            }, 
            {
                element:<Category/>,
                path:"/:category"
            },
            {
                element:<Product/>,
                path:"/:category/:productid"
            },
            {
                element:<Checkout/>,
                path:"/checkout"
            }
            
        ]


    },

]);

export default routes;
