import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/Order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../shared/secret/Secret";
import Dashboard from "../layout/Dashboard";
import MYCart from "../pages/dashboard/myCart/MYCart";
import AllUsers from "../pages/dashboard/allusers/AllUsers";
import AddItem from "../pages/dashboard/addItem/AddItem";
import AdminRoute from "./AdminRoute";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            }
            
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'myCart',
                element:<MYCart></MYCart>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'addItem',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            }
        ]
    }
])
export default router;