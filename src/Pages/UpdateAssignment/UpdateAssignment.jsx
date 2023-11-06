import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateAssignment = () => {
  const updateAssignment = useLoaderData();
  const { _id, name, description, marks, imgUrl, dueDate, difficultyLevel } = updateAssignment;
  console.log(updateAssignment);
  const handleUpdateAssignment = event => {

    event.preventDefault();


    const form = event.target;

    const name = form.name.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const imgUrl = form.url.value;
    const difficultyLevel = form.level.value;
    const dueDate = form.date.value;

    const updatedAssignment = { description, marks, name, imgUrl, difficultyLevel, dueDate };
    console.log(updatedAssignment);

    //send data to the server
    fetch(`http://localhost:5000/assignment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedAssignment)
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
  return (
    <div>

      <div className="mx-auto p-10  shadow-xl border rounded-lg">
        <h2 className="text-2xl text-center font-semibold my-5">Update Assignment</h2>
        <form onSubmit={handleUpdateAssignment}>

          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="">

                <input type="text" placeholder="Name" defaultValue={name} name="name" className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="">

                <input type="text" placeholder="Assignment Description" defaultValue={description} name="description" className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>
          {/* supplier and taste row  */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label"><span className="label-text">Marks</span></label>

              <label className=""><input type="text" placeholder="Marks" defaultValue={marks} name="marks" className="input input-bordered w-72 lg:w-full" />

              </label>

            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Thumbnail URL</span>
              </label>
              <label className="">

                <input type="text" placeholder="Thumbnail URL" defaultValue={imgUrl} name="url" className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>
          {/* category and details row*/}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Difficulty Level</span>
              </label>
              <label className="">

                <input type="text" placeholder="Difficulty Level" defaultValue={difficultyLevel} name="level" className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <label className="">

                <input type="date" name="date" defaultValue={dueDate} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>


          <input type="submit" value="Update Assignment" className="px-4 py-3 bg-[#4287f5] my-5 w-full rounded-md font-medium cursor-pointer" />


        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;