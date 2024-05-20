// import React from "react";
import "./Create.scss";

const Create = () => {
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
                  style={{ fontSize: "4rem" }}
                >
                  Create Task
                </h1>
              </div>
              <div className="mt-10">
                <form>
                  <div className="">
                    <label className="text-black text-sm">Name</label>
                    <input
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      type="text"
                      placeholder="Fix NYM Bugs"
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
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <label className="text-black text-sm">Status</label>
                    <select
                      className="w-full outline-none text-sm border border-black p-3 rounded-lg mt-3 bg-gray-100 text-black"
                      id=""
                    >
                      {/* <option disabled selected>
                        Selete an option
                      </option> */}
                      <option>Inprogress</option>
                      <option>Done</option>
                      <option>Expire</option>
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
