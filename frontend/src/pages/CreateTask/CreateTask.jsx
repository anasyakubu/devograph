// import React from 'react'
import Nav from "../../components/Nav";
import Redirect from "../../Redirect";
import Create from "../../sections/Create/Create";
import Footer from "../../sections/Footer/Footer";

const CreateTask = () => {
  return (
    <div className="CreateTask bg-white text-black">
      <Redirect />
      <Nav />
      <Create />
      <Footer />
    </div>
  );
};

export default CreateTask;
