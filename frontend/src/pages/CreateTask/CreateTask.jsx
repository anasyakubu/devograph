// import React from 'react'

import Nav from "../../components/Nav";
import Create from "../../sections/Create/Create";
import Footer from "../../sections/Footer/Footer";

const CreateTask = () => {
  return (
    <div className="CreateTask bg-white text-black">
      <Nav />
      <Create />
      <Footer />
    </div>
  );
};

export default CreateTask;
