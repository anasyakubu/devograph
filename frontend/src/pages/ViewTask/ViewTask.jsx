// import React from "react";

import Nav from "../../components/Nav";
import Redirect from "../../Redirect";
import Footer from "../../sections/Footer/Footer";
import View from "../../sections/View/View";

const ViewTask = () => {
  return (
    <div className="ViewTask bg-white text-black">
      <Redirect />
      <Nav />
      <View />
      <Footer />
    </div>
  );
};

export default ViewTask;
