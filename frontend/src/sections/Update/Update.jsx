import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import "./Update.scss";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    axios
      .get(`https://devograph.onrender.com/getTask/${id}`)
      .then((result) => {
        const taskData = result.data[0];
        console.log(taskData);
        setName(taskData.name);
        setDescription(taskData.description);
        setStatus(taskData.status);
        setStartDate(taskData.startDate);
        setEndDate(taskData.endDate);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://devograph.onrender.com/updateTask/${id}`, {
        name,
        description,
        startDate,
        endDate,
        status,
      })
      .then((result) => {
        console.log(result);
        toast.success("Task Updated Successfully");
        navigate("/tasks");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Update">
      <div className="p-10">
        <div className="sm:py-5">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/*  */}
            <div className="">
              <div className="">
                <h1
                  className="text-4xl font-extrabold text-black"
                  style={{ fontSize: "3rem" }}
                >
                  Update Task
                </h1>
              </div>
              <div className="mt-10">
                <form onSubmit={handleUpdate}>
                  <div className="">
                    <label className="text-black text-sm">Name</label>
                    <input
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      type="text"
                      placeholder="Fix NYM Bugs"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-5">
                    <label className="text-black text-sm">Description</label>
                    <textarea
                      rows="10"
                      cols="30"
                      id=""
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      placeholder="1. Fix the entaire sections & deploy to production"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <div className="mt-5">
                      <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        <div className="">
                          <label className="text-black text-sm">
                            Start Date
                          </label>
                          <input
                            className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                        </div>
                        {/*  */}
                        <div className="">
                          <label className="text-black text-sm">End Date</label>
                          <input
                            className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                            type="text"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-black text-sm">Status</label>
                    <select
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      id=""
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>{status}</option>
                      <option>Inprogress</option>
                      <option>Completed</option>
                      <option>Expire</option>
                    </select>
                  </div>
                  <div className="mt-5 justify-center flex">
                    <button
                      type="submit"
                      className="bg-black text-white p-2 pr-5 pl-5 rounded-md shadow-lg"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/*  */}
            <div className="background"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
