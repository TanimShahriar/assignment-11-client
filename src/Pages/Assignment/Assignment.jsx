import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const Assignment = ({ assignment, assign, setAssign }) => {
  const { _id, name, imgUrl, difficultyLevel, createEmail } = assignment;

  const location = useLocation();
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const handleDeleteAssignment = _id => {
    if (createEmail == user.email) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`https://online-group-study-server-khaki.vercel.app/assignment/${_id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your assignment has been deleted.',
                  'success'
                )
                const remaining = assign.filter(pro => pro._id !== _id);
                navigate(location?.state ? location.state : '/assignments');
                setAssign(remaining);
              }

            })


        }
      })
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You don't have permission!",

      });
    }
  }

  return (
    <div className="rounded-lg bg-[#4287f5] p-2 shadow-lg drop-shadow-md shadow-current  h-auto  hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
      <img className="w-full h-44 lg:h-[270px] rounded-t-lg " src={imgUrl} alt="Assignment" />
      <p className=" mx-4 mb-2 mt-2 font-medium text-2xl">{name}</p>
      <p className=" mx-4 my-1 font-semibold text-lg">Level: {difficultyLevel}</p>
      <div className="flex">
        <Link to={`/assignments/${_id}`}><button className="ml-3 font-medium rounded-sm px-1 py-1 bg-white">View Assignment</button></Link>
        <Link to={`/updateAssignment/${_id}`}><button className="ml-3 font-medium rounded-sm px-1 py-1 bg-white">Update Assignment</button></Link>
        <button onClick={() => handleDeleteAssignment(_id)} className="ml-3 font-medium rounded-sm px-1 py-1 bg-white">Delete Assignment</button>
      </div>
    </div >
  );
};

export default Assignment;

// className="bg-gradient-to-t from-[#34e1eb] to-blue-300 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto  hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out  flex items-center justify-center flex-col space-y-2 mt-5"