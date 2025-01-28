import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Home from "./screens/home";
import Signin from "./screens/signin";
import Not_found from "./screens/not_found";
import Signup from "./screens/signup";
import { useViewState as useViewStore } from "./stores/view-store";
import Loading from "./screens/loading";
import { SigninProtectedRoute } from "./utils/protected_route";
import Dashboard from "./screens/dashboard";

export default () => {
  const viewModel = useViewStore();
  return (
    <div>
      {viewModel.isLoading == true ? <Loading /> : null}
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth" element={<SigninProtectedRoute />}> */}
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* </Route> */}
          <Route path="*" element={<Not_found />} />
        </Routes>
      </Router>
    </div>
  );
};
