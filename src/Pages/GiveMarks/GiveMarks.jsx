import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const GiveMarks = () => {
  const giveMarks = useLoaderData();
  const { _id } = useParams();
  const details = giveMarks.find(details => details._id == _id);
  console.log(details);
  console.log(giveMarks);

  const { user } = useContext(AuthContext)

  const { email } = user || "";


  const handleGiveMarks = e => {
    e.preventDefault();
    const form = e.target;
    const obtainedMarks = form.obtainedMarks.value;
    const feedback = form.feedback.value;
    const status = "Complete";
    const examineeName = user.displayName;
    const giveMarksEmail = user.email;
    const giveThemMarks = { obtainedMarks, feedback, status, email, examineeName, giveMarksEmail }
    console.log(giveThemMarks);


    //send data to the server
    fetch(`http://localhost:5000/marks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(giveThemMarks)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Assignment Completed',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

  }


  return (
    <div>
      <div className="">
        <h2 className="text-center text-2xl font-bold mb-4">Give marks on {details.name}</h2>
        <h2 className=" text-xl font-bold mb-4 ">Submitted Documents:</h2>
        <div className="rounded-lg border border-blue-400 p-2  shadow-lg ">

          <p className=" mx-4 mb-2 mt-2 font-medium text-2xl">Assignment marks: {details.marks}</p>
          <p className=" mx-4 mb-2 mt-2 font-medium text-2xl">Pdf Link: <a href=""> {details.pdf}</a> </p>
        </div>
      </div>

      <form className="p-4 shadow-lg border rounded-t-md" onSubmit={handleGiveMarks}>

        <div className=" gap-5 mb-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Obtained Marks</span>
            </label>
            <label className="">

              <input type="text" placeholder="Obtained Marks" name="obtainedMarks" className="input input-bordered w-72 lg:w-full" />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <label className="">

              <textarea className="textarea textarea-bordered w-full " name="feedback" placeholder="Feedback"></textarea>
            </label>
          </div>
        </div>




        <input type="submit" value="Submit" className="px-4 py-3 bg-[#4287f5] my-5 w-full rounded-md font-medium cursor-pointer" />


      </form>
    </div>
  );
};

export default GiveMarks;