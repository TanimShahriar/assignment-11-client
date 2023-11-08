import { useLoaderData } from "react-router-dom";
import MyAssignmentCard from "../MyAssignmentCard/MyAssignmentCard";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyAssignments = () => {
  const myAssignments = useLoaderData();
  console.log(myAssignments);

  const { user } = useContext(AuthContext)
  const { email } = user || "";
  return (
    <div>

      <div className='grid lg:grid-cols-3 p-1 lg:p-2  gap-5 container mx-auto my-5 '>
        {
          myAssignments.filter(card => { return card.createEmail == email }).map(assignment => <MyAssignmentCard key={assignment._id} assignment={assignment}></MyAssignmentCard>)
        }
      </div>
    </div>
  );
};

export default MyAssignments;

