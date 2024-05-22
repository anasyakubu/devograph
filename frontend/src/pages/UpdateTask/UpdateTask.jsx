import Nav from "../../components/Nav";
import Redirect from "../../Redirect";
import Footer from "../../sections/Footer/Footer";
import Update from "../../sections/Update/Update";
import "./UpdateTask.scss";

const UpdateTask = () => {
  return (
    <div className="UpdateTask bg-white text-black">
      <Redirect />
      <Nav />
      <Update />
      <Footer />
    </div>
  );
};

export default UpdateTask;
