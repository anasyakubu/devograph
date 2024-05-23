import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const headersList = {
          Authorization: `Bearer ${token}`,
        };

        const reqOptions = {
          url: "https://devograph.onrender.com/profile",
          method: "GET",
          headers: headersList,
        };

        const response = await axios.request(reqOptions);
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

  useEffect(() => {
    // Redirect based on authentication status
    if (!isLoading) {
      if (!isAuthenticated) {
        // Redirect to login page if not authenticated
        navigate("/login");
      } else {
        // Redirect to dashboard or home page if authenticated
        // navigate("/");
      }
    }
  }, [isLoading, isAuthenticated, navigate]); // This effect runs when isLoading or isAuthenticated changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // No need to return anything here since the redirection is handled in the useEffect
};

export default Redirect;
