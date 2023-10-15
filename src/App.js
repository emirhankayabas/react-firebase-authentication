import Details from "pages/Details";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}
