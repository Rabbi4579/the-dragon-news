import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import Newspage from "../pages/Newspages/Newspage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('news.json'),

            },
            {
                path: '/news/:id',
                element: <Newspage></Newspage>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
])

export default router;