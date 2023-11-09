
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext)
  const { displayName } = user || "";


  const handleAddAssignment = event => {
    event.preventDefault();

    console.log(user.email)
    const form = event.target;
    const createEmail = user.email;

    const name = form.name.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const imgUrl = form.url.value;
    const difficultyLevel = form.level.value;
    const dueDate = form.date.value;
    const status = "";




    const createdAssignment = { name, description, marks, imgUrl, dueDate, difficultyLevel, displayName, status, createEmail };
    console.log(createdAssignment);

    //send data to the server
    fetch("https://online-group-study-server-khaki.vercel.app/assignment", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(createdAssignment)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Assignment created successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

  }

  //https://i.ibb.co/vYLDzM4/assigment-Banner2.jpg



  return (
    <div className="" style={{ backgroundImage: 'url(https://i.ibb.co/PcQHC30/assi-Banner.jpg)' }}>

      <div className="mx-auto px-10 py-5  shadow-xl border rounded-lg">
        <h2 className="text-3xl text-center font-semibold my-5 text-blue-600">Create Assignment</h2>
        <form onSubmit={handleAddAssignment}>

          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="">

                <input type="text" placeholder="Title" name="name" required className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="">

                <input type="text" placeholder="Assignment Description" name="description" required className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>
          {/* supplier and taste row  */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label"><span className="label-text">Marks</span></label>

              <label className=""><input type="text" placeholder="Marks" name="marks" required className="input input-bordered w-72 lg:w-full" />

              </label>

            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Thumbnail URL</span>
              </label>
              <label className="">

                <input type="text" placeholder="Thumbnail URL" name="url" required className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>
          {/* category and details row*/}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Difficulty Level</span>
              </label>
              {/* <label className="">

                <input type="text" placeholder="Difficulty Level" name="level" className="input input-bordered w-72 lg:w-full" />
              </label>  */}

              <select type="text" placeholder="Difficulty Level" name="level" required className="input input-bordered w-72 lg:w-full" >
                <option>All</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

            </div>



            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <label className="">

                {/* <input type="date" name="date" required className="input input-bordered w-72 lg:w-full" /> */}
                <DatePicker className="input input-bordered w-72 lg:w-[720px]" name="date" required selected={startDate} onChange={(date) => setStartDate(date)} />
              </label>
            </div>
          </div>


          <input type="submit" value="Create Assignment" className="px-4 py-3 bg-[#4287f5] my-5 w-full rounded-md font-medium cursor-pointer" />


        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;

// value={selects} onChange={e => setSelects(e.target.value)}