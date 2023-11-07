import { useLoaderData, useParams } from "react-router-dom";


const GiveMarks = () => {
  const giveMarks = useLoaderData();
  const { _id } = useParams();
  const details = giveMarks.find(details => details._id == _id);
  console.log(details);
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Give your marks here:{details.name}</h2>
    </div>
  );
};

export default GiveMarks;