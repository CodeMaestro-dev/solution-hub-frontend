import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import Layout from "./assets/components/Layout";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/app" element={<Layout />}>
      
      </Route>
    </Routes>
  );
}
