// import React from "react";

import Nav from "../../components/Nav";
import DoneList from "../../sections/DoneList/DoneList";
import Footer from "../../sections/Footer/Footer";

const Done = () => {
  return (
    <div className="Done bg-white text-black">
      <Nav />
      <DoneList />
      <Footer />
    </div>
  );
};

export default Done;
