import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../sections/Footer/Footer";
import TasksList from "../../sections/TasksList/TasksList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve  token from localStorage
        const token = localStorage.getItem("token");
        setUserID(localStorage.getItem("userID"));
        // setUserID(userID);
        const headersList = {
          Authorization: `Bearer ${token}`,
        };

        const reqOptions = {
          url: "http://localhost:9000/profile",
          method: "GET",
          headers: headersList,
        };

        const response = await axios.request(reqOptions);
        setData(response.data);
        setIsAuthenticated(
          response.status === 200 && response.data.message === "Authorized"
        );
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // This effect runs only once on component mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return navigate("/login");
  }

  return (
    <div className="Task bg-white text-black">
      <Nav />
      <h2>Protected Data: {JSON.stringify(data)}</h2>
      <p>UserID:{userID}</p>
      <TasksList />
      <Footer />
    </div>
  );
};

export default Task;
