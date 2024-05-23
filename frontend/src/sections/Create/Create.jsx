import { useState } from "react";
import "./Create.scss";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  // const [status, setStatus] = useState("");
  const navigate = useNavigate();

  // setUserID(localStorage.getItem("userID"));
  // Set userID from local storage when component mounts
  // useState(() => {
  //   setUserID(localStorage.getItem("userID"));
  // }, []);

  const [data, setData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
    userID: localStorage.getItem("userID"),
  });

  // console.log(userID);

  const handleSubmite = async (e) => {
    e.preventDefault();
    const { name, description, startDate, endDate, status, userID } = data;
    console.log(data);

    try {
      const { data } = await axios.post("/createTask", {
        name,
        description,
        startDate,
        endDate,
        status,
        userID,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Task Created Successfully");
        navigate("/tasks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Create">
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
                  Create Task
                </h1>
              </div>
              <div className="mt-10">
                <form onSubmit={handleSubmite}>
                  <input
                    className="bg-white text-black"
                    type="hidden"
                    name=""
                    id=""
                    // value={userID}
                  />
                  <div className="">
                    <label className="text-black text-sm">Name</label>
                    <input
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      type="text"
                      placeholder="Fix NYM Bugs"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
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
                      value={data.description}
                      onChange={(e) =>
                        setData({ ...data, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                      <div className="">
                        <label className="text-black text-sm">Start Date</label>
                        <input
                          className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                          type="datetime-local"
                          value={data.startDate}
                          onChange={(e) =>
                            setData({ ...data, startDate: e.target.value })
                          }
                        />
                      </div>
                      {/*  */}
                      <div className="">
                        <label className="text-black text-sm">End Date</label>
                        <input
                          className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                          type="datetime-local"
                          value={data.endDate}
                          onChange={(e) =>
                            setData({ ...data, endDate: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="text-black text-sm">Status</label>
                    <select
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      value={data.status} // Use data.status
                      onChange={(e) =>
                        setData({ ...data, status: e.target.value })
                      }
                    >
                      <option selected>Select Status</option>
                      <option value="Inprogress">InProgress</option>
                      <option value="Completed">Completed</option>
                      <option value="Expire">Expired</option>
                    </select>
                  </div>
                  <div className="mt-5 justify-center flex">
                    <button
                      type="submit"
                      className="bg-black text-white p-2 pr-5 pl-5 rounded-md shadow-lg"
                    >
                      Add
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

export default Create;
