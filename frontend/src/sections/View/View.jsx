import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NoteCard from "../../components/NoteCard";
import "./View.scss";

const View = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    axios
      .get(`/getTask/${id}`)
      .then((result) => {
        const taskData = result.data[0];
        // let color;
        // console.log(taskData);
        if (taskData.status === "Inprogress") {
          setStatusColor("bg-orange-500");
        } else if (taskData.status === "Completed") {
          setStatusColor("bg-green-600");
        } else if (taskData.status === "Expire") {
          setStatusColor("bg-red-600");
        }
        setName(taskData.name);
        setDescription(taskData.description);
        setStatus(taskData.status);
        setStartDate(taskData.startDate);
        setEndDate(taskData.endDate);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="View">
      <div className="p-10">
        <div className="sm:py-5">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* Task */}
            <div className="">
              <div className="">
                <h2
                  className="text-4xl font-extrabold text-black"
                  style={{ fontSize: "2rem" }}
                >
                  {name}
                </h2>
              </div>
              <div className="mt-3">
                <textarea
                  rows="10"
                  cols="30"
                  id=""
                  className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                  placeholder=" 1. Daily Morning standups 2. Discuss on what to do today"
                  disabled
                  value={description}
                ></textarea>
              </div>
              <div className="mt-3">
                <p className="text-black text-xl">
                  Start: <span className="font-semibold">{startDate}</span>
                </p>
                <p className="mt-3 text-black text-xl">
                  End: <span className="font-semibold">{endDate}</span>
                </p>
              </div>
              <div className="mt-5">
                <button
                  className={`${statusColor} w-full text-white p-2 pr-5 pl-5 rounded-md shadow-lg`}
                  disabled
                >
                  {status}
                </button>
              </div>
            </div>
            {/* Notes */}
            <div className="">
              <div className="py-5">
                <h3
                  className="text-4xl font-extrabold text-black"
                  style={{ fontSize: "2rem" }}
                >
                  My Notes 🗒️
                </h3>
              </div>
              <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <NoteCard />
                <NoteCard />
                <NoteCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
