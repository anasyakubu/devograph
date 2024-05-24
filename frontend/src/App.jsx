import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Toaster } from "react-hot-toast";
import Task from "./pages/Tasks/Task";
import CreateTask from "./pages/CreateTask/CreateTask";
import UpdateTask from "./pages/UpdateTask/UpdateTask";
// import axios from "axios";
import ViewTask from "./pages/ViewTask/ViewTask";
import Notes from "./pages/Notes/Notes";
import Today from "./pages/Today/Today";
import Done from "./pages/Done/Done";

// axios.defaults.baseURL = "https://devograph.onrender.com";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/tasks" element={<Task />}></Route>
          <Route path="/create-task" element={<CreateTask />}></Route>
          <Route path="/update-task/:id" element={<UpdateTask />}></Route>
          <Route path="/view-task/:id" element={<ViewTask />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/today" element={<Today />}></Route>
          <Route path="/done" element={<Done />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
