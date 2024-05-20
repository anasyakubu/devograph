// import React from 'react'

const TaskCard = ({ name, desc, color }) => {
  return (
    <div className="TaskCard">
      <div className={`p-3 py-10 m-2 rounded-xl shadow-xl ${color}`}>
        <h5 className="text-xl font-bold">#{name}</h5>
        <p className="mt-5 text-sm" style={{ fontSize: "13px" }}>
          {desc}
        </p>
        <div className="mt-10 flex gap-3">
          <button className="bg-white p-1 pl-3 pr-3 rounded-lg text-sm">
            Edit
          </button>
          <button className="bg-white p-1 pl-3 pr-3 rounded-lg text-sm">
            Delete
          </button>
        </div>

        <div className="mt-5">
          <p className="text-sm flex justify-end text-left">2 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
