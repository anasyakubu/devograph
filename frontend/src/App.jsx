import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* <Route path="/create" element={<CreateUsers />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
