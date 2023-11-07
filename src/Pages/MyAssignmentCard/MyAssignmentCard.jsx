

const MyAssignmentCard = ({ assignment }) => {
  const { _id, name, imgUrl, difficultyLevel, email } = assignment;

  return (
    <div className="rounded-lg bg-[#68f37f] p-2  shadow-lg drop-shadow-md shadow-current  h-auto  hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
      <img className="w-full h-44 lg:h-[270px] rounded-t-lg " src={imgUrl} alt="Assignment" />
      <p className=" mx-4 mb-2 mt-2 font-medium text-2xl">{name}</p>
      <p className=" mx-4 my-1 font-semibold text-lg">Level: {difficultyLevel}</p>
    </div >
  );
};

export default MyAssignmentCard;