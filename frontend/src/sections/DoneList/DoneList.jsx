import { useState, useEffect } from "react";
import TaskCard from "../../components/TaskCard";
import "./DoneList.scss";
import axios from "axios";
import { toast } from "react-hot-toast";
import { format } from "date-fns";

const DoneList = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [doneTasksCount, setDoneTasksCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formatDate, setFormatDate] = useState();
  const tasksPerPage = 8; // Number of tasks per page

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    axios
      .get("https://devograph.onrender.com/taskList")
      .then((result) => {
        const fetchUser = result.data;
        const userTasks = fetchUser
          .filter(
            (task) =>
              task.userID === localStorage.getItem("userID") &&
              task.status === "Completed"
          )
          .reverse();
        // Get the count of completed tasks
        setDoneTasksCount(userTasks.length);

        // Map through userTasks and set color dynamically based on status
        const tasksWithColor = userTasks.map((task) => {
          let color;
          setFormatDate(format(new Date(task.startDate), "dd-MM-yyyy"));
          if (task.status === "Inprogress") {
            color = "bg-orange-500";
          } else if (task.status === "Completed") {
            color = "bg-green-600";
          } else if (task.status === "Expire") {
            color = "bg-red-600";
          }

          return { ...task, color }; // Add color property to task object
        });

        setUsers(tasksWithColor);
      })
      .catch((err) => console.log(err));
  }, []); // Add empty dependency array to ensure useEffect runs only once

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

  // Calculate the current tasks to display
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = users.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / tasksPerPage);

  const handleDelete = (id) => {
    console.log("deleting...", id);
    if (confirm("Do you want to delete this task")) {
      alert("Deleted");
      axios
        .delete("https://devograph.onrender.com/deleteUser/" + id)
        .then((res) => {
          console.log(res);
          toast.success("Task deleted successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Cancel successfully");
    }
  };

  return (
    <div className="DoneList">
      <div className="p-10">
        <div className="sm:py-5">
          {/* Search */}
          <div className="flex justify-center">
            <div className="">
              <input
                className="p-2 bg-white text-black outline-none border-2 border-black rounded-lg w-96"
                type="search"
                placeholder="Search Task...."
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="">
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
                <span className="bg-green-500 p-2 rounded-md">
                  Total Completed ({doneTasksCount})
                </span>
              </h6>
            </div>
          </div>
          {/* List Task */}
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {currentTasks.map((user) => (
                <TaskCard
                  key={user._id}
                  id={user._id}
                  name={user.name}
                  desc={user.description}
                  date={formatDate}
                  handleDelete={() => handleDelete(user._id)}
                  color={user.color}
                />
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="mt-5 flex justify-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 mx-1 rounded ${
                    index + 1 === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoneList;
