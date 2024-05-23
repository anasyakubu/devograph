// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AddNotes.scss";
import NoteImage from "../../assets/Notes-amico.svg";

const AddNotes = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/taskList")
      .then((result) => {
        const fetchUser = result.data;
        const userTasks = fetchUser
          .filter((task) => task.userID === localStorage.getItem("userID"))
          .reverse();
        setUsers(userTasks);
      })
      .catch((err) => console.log(err));
  }, []); // Add empty dependency array to ensure useEffect runs only once

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
                <form
                //onSubmit={handleUpdate}
                >
                  <div className="mt-5">
                    <label className="text-black text-sm">Selete Task</label>
                    <select
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      id=""
                    >
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
