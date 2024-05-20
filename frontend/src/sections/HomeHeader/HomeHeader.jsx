// import React from 'react'

import Nav from "../../components/Nav";
import Image from "../../assets/Taskbook.jpg";
import "./HomeHeader.scss";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="HomeHeader bg-white text-black">
      <Nav />
      <div className="lg:px-6 sm:py-20">
        <div className="p-10 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* text  */}
          <div className="text">
            <h1 className="text-balck text-4xl font-extrabold">
              Manage Your Task Easily.
            </h1>
            <p className="mt-10 text-sm">
              Welcome to TaskFlow, your ultimate task manager software designed
              to streamline your workflow and enhance your productivity. Whether
              you`re a busy professional, a student with multiple assignments,
              or a freelancer juggling various projects, TaskFlow is here to
              help you stay organized, focused, and on top of your tasks.
            </p>
            <div className="mt-10">
              <button className="p-2 pl-5 pr-5 bg-black text-sm text-white rounded-lg">
                <Link to="/login">Get Started</Link>
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="image flex justify-center">
            <div className="">
              <img
                className="w-80"
                src={Image}
                alt="Image"
                // style={{ width: "69%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
