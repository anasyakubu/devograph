// import React from 'react'

import Nav from "../../components/Nav";
import AddNotes from "../../sections/AddNotes/AddNotes";
import Footer from "../../sections/Footer/Footer";

const Notes = () => {
  return (
    <div className="Notes bg-white text-black">
      <Nav />
      <AddNotes />
      <Footer />
    </div>
  );
};

export default Notes;
