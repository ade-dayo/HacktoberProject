import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Authentication/UserLogin";
import SignupPage from "../pages/Authentication/UserSignUp";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signUp" element={<SignupPage />} />
    </Routes>
  );
};

export default Allroutes;
