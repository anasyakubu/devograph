// import React from 'react'

import { Link } from "react-router-dom";

const TaskCard = ({ name, desc, date, color, id, handleDelete }) => {
  return (
    <div className="TaskCard">
      <div className={`p-3 py-10 m-2 rounded-xl shadow-xl ${color}`}>
        <h5 className="text-xl font-bold">
          <Link className="underline" to={`/view-task/${id}`}>
            #{name}
          </Link>
        </h5>
        <p className="mt-5 text-sm" style={{ fontSize: "13px" }}>
          {desc}
        </p>
        <div className="mt-10 flex gap-3">
          <Link
            to={`/update-task/${id}`}
            className="bg-white p-1 pl-3 pr-3 rounded-lg text-sm"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-white p-1 pl-3 pr-3 rounded-lg text-sm"
          >
            Delete
          </button>
        </div>

        <div className="mt-5">
          <p className="text-sm flex justify-end text-left">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
