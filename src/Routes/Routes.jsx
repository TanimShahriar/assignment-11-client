import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";


import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoutes from "./PrivateRoutes";
import Assignments from "../Pages/Assignments/Assignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";




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
        element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignment")
      },
      {
        path: "/assignments/:_id",
        element: <AssignmentDetails></AssignmentDetails>,
        loader: () => fetch("http://localhost:5000/assignment")
      },
      {
        path: "/updateAssignment/:_id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params._id}`)

      },



    ]
  },
]);

export default router;