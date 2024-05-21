import { useState } from "react";
import "./Create.scss";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  // const [userID, setUserID] = useState(null);
  const navigate = useNavigate();

  // setUserID(localStorage.getItem("userID"));
  // Set userID from local storage when component mounts
  // useState(() => {
  //   setUserID(localStorage.getItem("userID"));
  // }, []);

  const [data, setDate] = useState({
    name: "",
    description: "",
    status: "",
    userID: localStorage.getItem("userID"),
  });

  // console.log(userID);

  const handleSubmite = async (e) => {
    e.preventDefault();
    const { name, description, status, userID } = data;
    console.log(data);

    try {
      const { data } = await axios.post("/createTask", {
        name,
        description,
        status,
        userID,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setDate({});
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
                        setDate({ ...data, name: e.target.value })
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
                        setDate({ ...data, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <label className="text-black text-sm">Status</label>
                    <select
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      value={data.status}
                      onChange={(e) =>
                        setDate({ ...data, status: e.target.value })
                      }
                    >
                      <option value="Inprogress">In Progress</option>
                      <option value="Done">Done</option>
                      <option value="Expire">Expired</option>
                    </select>
                  </div>
                  <div className="mt-5 justify-center flex">
                    <button className="bg-black text-white p-2 pr-5 pl-5 rounded-md shadow-lg">
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
