import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";


import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/createAssignment",
        element: <CreateAssignment></CreateAssignment>
      },


    ]
  },
]);

export default router;