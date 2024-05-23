// import React from 'react'

import Nav from "../../components/Nav";
import Redirect from "../../Redirect";
import Footer from "../../sections/Footer/Footer";
import TodayList from "../../sections/TodayList/TodayList";

const Today = () => {
  return (
    <div className="Today bg-white text-black">
      <Redirect />
      <Nav />
      <TodayList />
      <Footer />
    </div>
  );
};

export default Today;
