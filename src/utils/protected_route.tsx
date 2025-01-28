import { useEffect } from "react";
import { useFakeSigninStore } from "../stores/validation-store";
import { Outlet, useLocation, useNavigate } from "react-router";

function SigninProtectedRoute() {
  const signinStore = useFakeSigninStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  if (signinStore.loginState) {
    return <div></div>;
  } else {
    return <Outlet />;
  }
}

export { SigninProtectedRoute };
