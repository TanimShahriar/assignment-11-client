import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";


const AssignmentDetails = () => {
  const assignmentDetails = useLoaderData();

  const { _id } = useParams();
  const details = assignmentDetails.find(details => details._id == _id);
  console.log(details);
  return (
    <div>
      <div className="shadow-lg p-5 rounded-lg mx-auto max-w-screen-2xl">
        <img className=" mx-auto h-[700px] w-full" src={details.imgUrl} alt="" />
        <h2 className="w-full lg:w-60  mt-2 bg-[#3361ac] text-white font-medium py-1 px-2 text-2xl  ">Total Marks: {details.marks}</h2>
        <h2 className="text-3xl font-bold mt-5 mx-auto">{details.name}</h2>
        <h2 className="my-5">{details.description}</h2>
        <h2 className="my-5 font-bold">Difficulty: {details.difficultyLevel}</h2>
        <div className="flex justify-between">

          <Link to='/assignments'> <button className="rounded-md flex items-center gap-3 px-1 lg:px-6 py-1 lg:py-2 bg-[#3361ac] text-white font-medium text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>Back to Assignments</button></Link>

          <Link to='/pricing'> <button className="rounded-md flex items-center gap-3 px-1 lg:px-6 py-1 lg:py-2 bg-[#3361ac] text-white font-medium text-xl">Choose Plans <BsFillArrowRightSquareFill className="text-xl"></BsFillArrowRightSquareFill></button></Link>

        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;