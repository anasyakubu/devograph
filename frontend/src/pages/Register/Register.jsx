import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [data, setDate] = useState({
    name: "",
    email: "",
    password: "",
  });
  // handle registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const { data } = await axios.post(
        "https://devograph.onrender.com/register",
        { name, email, password }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setDate({});
        toast.success("Account Created Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Register">
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
                  <h6 className="font-bold text-5xl">
                    Start documenting with your free plan
                  </h6>
                  <p className="mt-8 font-semibold text-lg">
                    No credit card required.
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
                  <h2 className="font-bold text-4xl">Create an Account</h2>
                </div>
                <div className="mt-10">
                  <form onSubmit={handleRegistration}>
                    <div className="">
                      <label className="w-full text-sm" htmlFor="">
                        Name <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-3 w-full p-2 rounded-lg outline-none border bg-white border-black text-black text-sm"
                        placeholder="John Doe"
                        value={data.name}
                        onChange={(e) =>
                          setDate({ ...data, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="mt-5">
                      <label className="w-full text-sm" htmlFor="">
                        Email Address{" "}
                        <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-3 w-full p-2 rounded-lg outline-none border bg-white border-black text-black text-sm"
                        placeholder="joh@gmail.com"
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
                      </button>
                    </div>
                    <div className="mt-10">
                      <p className="text-sm text-center">
                        Already have an account?{" "}
                        <span className="underline font-bold">
                          <Link to="/login">Login</Link>
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

export default Register;
