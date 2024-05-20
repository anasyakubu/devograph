import { useState, useEffect } from "react";
import TaskCard from "../../components/TaskCard";
import "./TasksList.scss";
import { Link } from "react-router-dom";

const TasksList = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  function tick() {
    setDateTime(new Date());
  }

  function getFormattedDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate.replace(/(\d+)(th|st|nd|rd)/, "$1<sup>$2</sup>");
  }
  return (
    <div className="TasksList">
      <div className="p-10">
        <div className="sm:py-5">
          {/* Search */}
          <div className="flex justify-center">
            <div className="">
              <input
                className="p-2 bg-white text-black outline-none border-2 border-black  rounded-lg w-96"
                type="search"
                placeholder="Search Task...."
              />
              {/* <button className="ml-5 p-2 bg-black text-white rounded-lg">
                Search
              </button> */}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="">
              {" "}
              <h2
                className="font-bold"
                dangerouslySetInnerHTML={{
                  __html: getFormattedDate(dateTime),
                }}
              ></h2>
              <h6
                className="flex gap-3 mt-5 font-semibold sm:text-sm"
                style={{ fontSize: "12px" }}
              >
                <span className="bg-orange-500 p-2 rounded-md">
                  Inprogress (10)
                </span>
                <span className="bg-green-500 p-2 rounded-md">Done (10)</span>
                <span className="bg-red-500 p-2 rounded-md">Expire (10)</span>
                <span className="bg-black text-white p-2 rounded-md">
                  Total (30)
                </span>
              </h6>
            </div>
          </div>
          {/* List Task */}
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/*  */}
              <Link
                to="/create-task"
                className={`create p-5 py-5 text-center m-2 rounded-xl shadow-2xl text-black bg-white`}
              >
                <h6 className="text-xl font-bold my-10">Create a Task</h6>
                <p className="text-sm my-10">
                  Click the button to create a new task
                </p>
                <button className="bg-black text-white p-2 pr-5 pl-5 rounded-lg">
                  Create a task
                </button>
              </Link>
              {/*  */}
              <TaskCard
                name="Task One"
                desc="Welcome to TaskFlow, your ultimate task manager software designed to streamline your workflow and enhance your productivity. Whether you`re a busy professional, a student with multiple assignments, or a freelancer juggling various projects,"
                color="bg-green-500"
              />
              <TaskCard
                name="Task One"
                desc="Welcome to TaskFlow, your ultimate task manager software designed to streamline your workflow and enhance your productivity. Whether you`re a busy professional, a student with multiple assignments, or a freelancer juggling various projects,"
                color="bg-red-500"
              />
              <TaskCard
                name="Task One"
                desc="Welcome to TaskFlow, your ultimate task manager software designed to streamline your workflow and enhance your productivity. Whether you`re a busy professional, a student with multiple assignments, or a freelancer juggling various projects,"
                color="bg-green-500"
              />
              <TaskCard
                name="Task One"
                desc="Welcome to TaskFlow, your ultimate task manager software designed to streamline your workflow and enhance your productivity. Whether you`re a busy professional, a student with multiple assignments, or a freelancer juggling various projects,"
                color="bg-orange-500"
              />
              <TaskCard
                name="Task One"
                desc="Welcome to TaskFlow, your ultimate task manager software designed to streamline your workflow and enhance your productivity. Whether you`re a busy professional, a student with multiple assignments, or a freelancer juggling various projects,"
                color="bg-red-500"
              />
              <TaskCard
                name="Task One"
                desc="Welcome to TaskFlow, your ultimate task manager software designed to streamline your workflow and enhance your productivity. Whether you`re a busy professional, a student with multiple assignments, or a freelancer juggling various projects,"
                color="bg-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
