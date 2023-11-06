

const SubmittedAssignmentCard = ({ assignment }) => {
  const { status, name, description, imgUrl, marks } = assignment;
  return (
    <div className="rounded-lg bg-[#4287f5] p-2  shadow-lg ">
      <img className="w-full h-44 lg:h-[270px] rounded-t-lg " src={imgUrl} alt="Assignment" />
      <p className=" mx-4 mb-2 mt-2 font-medium text-2xl">{name}</p>

      <p className=" mx-4 my-1 font-semibold text-lg">Marks: {marks}</p>
      <div className="flex justify-between">
        <p className=" mx-4 my-1 font-semibold text-lg">Status: <button className="bg-white px-2 rounded-sm">{status}</button> </p>
        <button className="bg-white px-2 rounded-sm mx-4 my-1 font-semibold text-lg">Give Mark</button>
      </div>

    </div >
  );
};

export default SubmittedAssignmentCard;