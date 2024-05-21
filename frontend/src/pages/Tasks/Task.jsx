import Nav from "../../components/Nav";
import Redirect from "../../Redirect";
import Footer from "../../sections/Footer/Footer";
import TasksList from "../../sections/TasksList/TasksList";

const Task = () => {
  return (
    <div className="Task bg-white text-black">
      <Redirect />
      <Nav />
      <TasksList />
      <Footer />
    </div>
  );
};

export default Task;
