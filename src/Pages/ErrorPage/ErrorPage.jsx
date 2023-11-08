import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto mt-60">

      <div className="flex items-center justify-center " >
        <div className="flex-col space-y-6 text-center">
          <div className="text-blue-600 text-2xl font-medium">Study Group</div>
          <div className="text-blue-400 text-7xl font-bold">404</div>
          <div className="text-7xl font-medium text-red-700">Page not found</div>
          <div className="text-gray-500">Sorry, the page you're looking for isn't available.</div>
          <div className="flex items-center justify-center">
            <Link to="/"> <div className="bg-blue-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">Visit Homepage</div></Link>

          </div>
        </div>
      </div>

    </div>






  );
};

export default ErrorPage;