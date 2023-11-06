import { Link } from "react-router-dom";


const Assignment = ({ assignment }) => {
  const { _id, name, imgUrl, difficultyLevel } = assignment;

  return (
    <div className="rounded-lg bg-[#4287f5] p-2  shadow-lg ">
      <img className="w-full h-44 lg:h-[270px] rounded-t-lg " src={imgUrl} alt="Assignment" />
      <p className=" mx-4 mb-2 mt-2 font-medium text-2xl">{name}</p>
      <p className=" mx-4 my-1 font-semibold text-lg">Level: {difficultyLevel}</p>
      <Link to={`/assignments/${_id}`}><button className="ml-3 font-medium rounded-sm px-3 py-1 bg-white">View Assignment</button></Link>
      <Link to={`/updateAssignment/${_id}`}><button className="ml-3 font-medium rounded-sm px-3 py-1 bg-white">Update Assignment</button></Link>
    </div >
  );
};

export default Assignment;