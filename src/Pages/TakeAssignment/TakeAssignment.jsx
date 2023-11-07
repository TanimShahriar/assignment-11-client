import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const TakeAssignment = () => {
  const takeAssignment = useLoaderData();
  const { _id } = useParams();
  // const details = assignmentDetails.find(details => details._id == _id);
  console.log(_id);

  const { user } = useContext(AuthContext);
  console.log(user)

  const { email } = user || "";

  const handleTakeAssignment = e => {
    e.preventDefault();
    const form = e.target;
    const examineeName = user.displayName;
    const takeAssignEmail = user.email;

    const pdf = form.pdf.value;
    const note = form.note.value;
    const status = "Pending";
    const tanim = { examineeName, pdf, note, status, takeAssignEmail }
    console.log(tanim)


    //send data to the server
    fetch(`http://localhost:5000/news/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(tanim)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Assignment updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

  }





  // const details = takeAssignment.find(details => details._id == _id);
  console.log(takeAssignment);
  return (
    <div>
      <h2 className='text-center font-semibold text-xl mb-4'>Take <span className="text-blue-600 font-bold "> {takeAssignment.name} </span>assignment</h2>
      <form className="p-4 shadow-lg border rounded-t-md" onSubmit={handleTakeAssignment}>

        <div className="md:flex gap-5 mb-5">
          {/* <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Examinee Name</span>
            </label>
            <label className="">

              <input type="text" defaultValue={takeAssignment.examineeName} name="examineeName" className="input input-bordered w-72 lg:w-full" />
            </label>
          </div> */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">PDF</span>
            </label>
            <label className="">

              <input type="text" placeholder="PDF" name="pdf" className="input input-bordered w-72 lg:w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Note</span>
            </label>
            <label className="">

              <textarea className="textarea textarea-bordered" name="note" placeholder="Note"></textarea>
            </label>
          </div>
        </div>




        <input type="submit" value="Submit" className="px-4 py-3 bg-[#4287f5] my-5 w-full rounded-md font-medium cursor-pointer" />


      </form>
    </div>
  );
};

export default TakeAssignment;