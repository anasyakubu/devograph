// import React from 'react'
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="Register">
      <div className="high">
        <div className="lg:grid lg:grid-cols-2 lg:space-y-0">
          {/*  */}
          <div className="bg-white text-black text" style={{ height: "100vh" }}>
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
              <div className="p-10 rounded-2xl shadow-xl bg-black text-white">
                <div className="text-center flex justify-center">
                  <h2 className="font-bold text-4xl">Create an Account</h2>
                </div>
                <div className="mt-10">
                  <form>
                    <div className="">
                      <label className="w-full text-sm" htmlFor="">
                        Name
                      </label>
                      <input
                        type="text"
                        className="mt-3 w-full p-2 rounded-lg outline-none border border-black text-black text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mt-5">
                      <label className="w-full text-sm" htmlFor="">
                        Email Address
                      </label>
                      <input
                        type="text"
                        className="mt-3 w-full p-2 rounded-lg outline-none border border-black text-black text-sm"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="mt-5">
                      <label className="w-full text-sm" htmlFor="">
                        Password
                      </label>
                      <input
                        type="password"
                        className="mt-3 w-full p-2 rounded-lg outline-none border border-black text-black text-sm"
                        placeholder="********"
                      />
                    </div>
                    <div className="mt-5">
                      <button className="p-2 pl-5 pr-5 bg-white text-sm text-black rounded-lg">
                        Continue
                      </button>
                    </div>
                    <div className="mt-10">
                      <p className="text-sm text-center">
                        Already have an account?{" "}
                        <span className="underline font-bold">
                          <Link to="/">Login</Link>
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
