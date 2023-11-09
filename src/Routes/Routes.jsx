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
import TakeAssignment from "../Pages/TakeAssignment/TakeAssignment";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";
import GiveMarks from "../Pages/GiveMarks/GiveMarks";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PdfComponent from "../Pages/PdfComponent/PdfComponent";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch("https://online-group-study-server-khaki.vercel.app/assignment")
      },
      {
        path: "/assignments/:_id",
        element: <PrivateRoutes><AssignmentDetails></AssignmentDetails></PrivateRoutes>,
        loader: () => fetch("https://online-group-study-server-khaki.vercel.app/assignment")
      },
      {
        path: "/updateAssignment/:_id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) => fetch(`https://online-group-study-server-khaki.vercel.app/assignment/${params._id}`)

      },
      {
        path: "/takeAssignment/:_id",
        element: <TakeAssignment></TakeAssignment>,
        loader: ({ params }) => fetch(`https://online-group-study-server-khaki.vercel.app/assignment/${params._id}`)

      },
      {
        path: "/submittedAssignment",
        element: <PrivateRoutes><SubmittedAssignment></SubmittedAssignment></PrivateRoutes>,
        loader: () => fetch("https://online-group-study-server-khaki.vercel.app/report")
      },
      {
        path: "/giveMarks/:_id",
        element: <GiveMarks></GiveMarks>,
        loader: () => fetch("https://online-group-study-server-khaki.vercel.app/report")
      },
      {
        path: "/myAssignments",
        element: <PrivateRoutes> <MyAssignments></MyAssignments></PrivateRoutes>,
        loader: () => fetch("https://online-group-study-server-khaki.vercel.app/assignment")
      },
      {
        path: "/pdfComponent",
        element: <PdfComponent></PdfComponent>,
        // loader: () => fetch("https://online-group-study-server-khaki.vercel.app/report")
      },



    ]
  },
]);

export default router;