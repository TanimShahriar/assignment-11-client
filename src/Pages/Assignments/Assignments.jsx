import { useLoaderData } from "react-router-dom";
import Assignment from "../Assignment/Assignment";
import { useState } from "react";


const Assignments = () => {
  const assignments = useLoaderData();
  const [selects, setSelects] = useState("All")
  console.log(assignments);
  return (
    <div>
      <div className="flex items-center justify-between my-4 p-2">
        <h2 className="text-3xl font-semibold text-center">Total assignments: {assignments.length}</h2>
        <select className="bg-blue-400 px-3 py-2 rounded-md " value={selects} onChange={e => setSelects(e.target.value)}>
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div className='grid lg:grid-cols-3 p-1 lg:p-2  gap-5 container mx-auto my-5 '>
        {
          assignments.filter(card => { return selects == "All" ? card : selects == card.difficultyLevel }).map(assignment => <Assignment key={assignment._id} assignment={assignment}></Assignment>)
        }
      </div>
    </div>
  );
};

export default Assignments;