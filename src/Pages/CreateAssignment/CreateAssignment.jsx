
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";



const CreateAssignment = () => {
  const { user } = useContext(AuthContext)
  const { displayName, email } = user || "";


  const handleAddAssignment = event => {
    event.preventDefault();

    console.log(user.email)
    const form = event.target;

    const name = form.name.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const imgUrl = form.url.value;
    const difficultyLevel = form.level.value;
    const dueDate = form.date.value;
    const status = "";



    const createdAssignment = { name, description, marks, imgUrl, dueDate, difficultyLevel, displayName, email, status };
    console.log(createdAssignment);

    //send data to the server
    fetch("http://localhost:5000/assignment", {
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




  return (
    <div>

      <div className="mx-auto p-10  shadow-xl border rounded-lg">
        <h2 className="text-2xl text-center font-semibold my-5">Create Assignment</h2>
        <form onSubmit={handleAddAssignment}>

          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="">

                <input type="text" placeholder="Title" name="name" className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="">

                <input type="text" placeholder="Assignment Description" name="description" className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>
          {/* supplier and taste row  */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label"><span className="label-text">Marks</span></label>

              <label className=""><input type="text" placeholder="Marks" name="marks" className="input input-bordered w-72 lg:w-full" />

              </label>

            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Thumbnail URL</span>
              </label>
              <label className="">

                <input type="text" placeholder="Thumbnail URL" name="url" className="input input-bordered w-72 lg:w-full" />
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

              <select type="text" placeholder="Difficulty Level" name="level" className="input input-bordered w-72 lg:w-full" >
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

                <input type="date" name="date" className="input input-bordered w-72 lg:w-full" />
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