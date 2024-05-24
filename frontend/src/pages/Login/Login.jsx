import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [data, setDate] = useState({
    email: "",
    password: "",
  });

  // handle registration
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post(
        "https://devograph.onrender.com/login",
        { email, password }
      );
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.token);
      const token = response.data.token;
      const userId = response.data.userId;
      localStorage.setItem("token", token);
      localStorage.setItem("userID", userId);
      toast.success("Login Success");
      navigate("/tasks");
      // setLoggedIn(true);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="Login">
      <div className="high">
        <div className="lg:grid lg:grid-cols-2 lg:space-y-0">
          {/*  */}
          <div className="bg-black text-white text" style={{ height: "100vh" }}>
            <div className="">
              <div className="p-20">
                <div className="my-24">
                  <h2 className="font-extrabold text-2xl">Devograph</h2>
                </div>

                <div className="my-24">
                  <h6 className="font-bold text-5xl">Welcome Back 🙋</h6>
                  <p className="mt-8 font-semibold text-lg">
                    Manage your <span className="underline">Tasks</span> in a
                    easy and efficient way with devograph.
                  </p>
                </div>

                <div className="">
                  <p className="text-sm">
                    © 2024 devograph, Inc. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="text-black form"
            // style={{ height: "100vh" }}
          >
            <div className="p-20">
              <div className="p-10 rounded-2xl shadow-xl bg-white text-black">
                <div className="text-center flex justify-center">
                  <h2 className="font-bold text-4xl">Login</h2>
                </div>
                <div className="mt-10">
                  <form onSubmit={handleLogin}>
                    <div className="">
                      <label className="w-full text-sm" htmlFor="">
                        Email Address{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-3 w-full p-2 rounded-lg outline-none border bg-white border-black text-black text-sm"
                        placeholder="john@gmail.com"
                        value={data.email}
                        onChange={(e) =>
                          setDate({ ...data, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="mt-5">
                      <label className="w-full text-sm" htmlFor="">
                        Password{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        type="password"
                        className="mt-3 w-full p-2 rounded-lg outline-none border bg-white border-black text-black text-sm"
                        placeholder="********"
                        value={data.password}
                        onChange={(e) =>
                          setDate({ ...data, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="p-2 pl-5 pr-5 bg-black text-sm text-white rounded-lg"
                      >
                        Continue
                        {/* <div className="spinner"></div> */}
                      </button>
                    </div>
                    <div className="mt-10">
                      <p className="text-sm text-center">
                        Don`t have an account?{" "}
                        <span className="underline font-bold">
                          <Link to="/register">Register here</Link>
                        </span>
                      </p>
                    </div>
                    {/* <div className="mt-5">
                      <p className="text-sm text-center">
                        By continuing, you agree to the Self Service PSS and
                        Privacy Policy.
                      </p>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
