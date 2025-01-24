import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Home from "./screens/home";
import Signin from "./screens/signin";
import Not_found from "./screens/not_found";
import Signup from "./screens/signup";

export default () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Not_found />} />
        </Routes>
      </Router>
    </div>
  );
};
