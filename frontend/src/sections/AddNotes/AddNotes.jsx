// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./AddNotes.scss";
import NoteImage from "../../assets/Notes-amico.svg";

const AddNotes = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    name: "",
    note: "",
    taskID: "",
    userID: localStorage.getItem("userID"),
  });

  // console.log(userID);

  useEffect(() => {
    axios
      .get("https://devograph.onrender.com/taskList")
      .then((result) => {
        const fetchUser = result.data;
        const userTasks = fetchUser
          .filter((task) => task.userID === localStorage.getItem("userID"))
          .reverse();
        setUsers(userTasks);
      })
      .catch((err) => console.log(err));
  }, []); // Add empty dependency array to ensure useEffect runs only once

  const handleSubmite = async (e) => {
    e.preventDefault();
    const { name, note, taskID, userID } = data;
    console.log(data);

    try {
      const { data } = await axios.post(
        "https://devograph.onrender.com/createNote",
        {
          name,
          note,
          taskID,
          userID,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Note Added Successfully");
        navigate("/tasks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddNotes">
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
                  Add Notes
                </h1>
              </div>
              <div className="mt-10">
                <form onSubmit={handleSubmite}>
                  <div className="mt-5">
                    <label className="text-black text-sm">Selete Task</label>
                    <select
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      id=""
                      value={data.taskID} // Use data.taskID
                      onChange={(e) =>
                        setData({ ...data, taskID: e.target.value })
                      }
                    >
                      <option selected>Select a Task</option>
                      {users.map((user) => (
                        <option key={user._id} value={user._id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-5">
                    <label className="text-black text-sm">Name</label>
                    <input
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      type="text"
                      placeholder="Note One"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <label className="text-black text-sm">Notes</label>
                    <textarea
                      rows="10"
                      cols="30"
                      id=""
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      placeholder="Secrete key is **********"
                      value={data.note}
                      onChange={(e) =>
                        setData({ ...data, note: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div className="mt-5 justify-center flex">
                    <button
                      type="submit"
                      className="bg-black text-white p-2 pr-5 pl-5 rounded-md shadow-lg"
                    >
                      Add Note
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/*  */}
            <div className="background">
              <img src={NoteImage} alt="Note" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
