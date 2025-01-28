import { Link } from "react-router";
import { Animate } from "react-simple-animate";

// 404 error code
export default () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex mb-[0.45em] items-center">
          <div className="border-r-2 border-gray-600 pr-3">
            <Animate
              play
              start={{ transform: "translateX(10px)" }}
              end={{ transform: "translateX(-5px)" }}
            >
              <p className="font-bold text-xl">404</p>
            </Animate>
          </div>
          <div>
            <Animate
              play
              start={{ transform: "translateX(-5px)" }}
              end={{ transform: "translateX(5px)" }}
            >
              <p className="pl-3 text-base">Page not found</p>
            </Animate>
          </div>
        </div>

        <div className="flex space-x-3">
          <Link to={"/"}>
            <p className="text-[var(--primary-color)] underline  text-xs">
              Home
            </p>
          </Link>
          <Link to={"/auth/signin"}>
            <p className="text-[var(--primary-color)] underline  text-xs">
              Signin
            </p>
          </Link>
          <Link to={"/auth/signup"}>
            <p className="text-[var(--primary-color)] underline  text-xs">
              Signup
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
