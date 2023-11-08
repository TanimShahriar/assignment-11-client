import { useLoaderData } from "react-router-dom";
import Assignment from "../Assignment/Assignment";
import { useState } from "react";


const Assignments = () => {
  const loadedAssignments = useLoaderData();
  const [assign, setAssign] = useState(loadedAssignments);
  const [selects, setSelects] = useState("All")

  return (
    <div>
      <div className="flex items-center justify-end my-4 p-2">

        <select className="bg-blue-400 px-3 py-2 rounded-md " value={selects} onChange={e => setSelects(e.target.value)}>
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div className='grid lg:grid-cols-3 p-1 lg:p-2  gap-5 container mx-auto my-5 '>
        {
          loadedAssignments.filter(card => { return selects == "All" ? card : selects == card.difficultyLevel }).map(assignment => <Assignment key={assignment._id} assign={assign} setAssign={setAssign} assignment={assignment}></Assignment>)
        }
      </div>
    </div>
  );
};

export default Assignments;