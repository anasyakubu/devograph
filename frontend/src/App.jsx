import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Toaster } from "react-hot-toast";
import Task from "./pages/Tasks/Task";
import CreateTask from "./pages/CreateTask/CreateTask";
import UpdateTask from "./pages/UpdateTask/UpdateTask";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
