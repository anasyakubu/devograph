// import React from 'react'

import Nav from "../../components/Nav";
import Footer from "../../sections/Footer/Footer";
import TasksList from "../../sections/TasksList/TasksList";

const Task = () => {
  return (
    <div className="Task bg-white text-black">
      <Nav />
      <TasksList />
      <Footer />
    </div>
  );
};

export default Task;
