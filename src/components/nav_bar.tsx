import logo from "../assets/logo.svg";
import useNavStore from "../stores/nav-state";
import { FaCircle } from "react-icons/fa";
import Buttons from "./buttons";
import { useNavigate } from "react-router";

// const nav_links = ["Home", "Courses", "Jobs"];

export default () => {
  const navigate = useNavigate();
  return (
    <div className="w-full top-0 sticky backdrop-blur-sm bg-[#ffffffa1] z-10 h-[4.7em] px-[2em] flex items-center justify-between border-b-2 border-gray-5001">
      <div>
        <img src="" alt="" srcSet={logo} className="w-[8em]" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-[2em]">
          {/* {nav_links.map((link, index) => {
            return <NavLink key={index} index={index} title={link} route="" />;
          })} */}
          <Buttons.primary_button
            onClick={() => {
              navigate("/auth/signup");
            }}
          >
            <p className="text-sm font-medium">Join Us</p>
          </Buttons.primary_button>
          <Buttons.custom_outline_button
            onClick={() => {
              navigate("/auth/signin");
            }}
          >
            <p className="text-sm text-[var(--primary-color)]">Sign In</p>
          </Buttons.custom_outline_button>
        </div>
      </div>
    </div>
  );
};

function NavLink({
  index,
  title,
  route,
}: {
  index: number;
  title: string;
  route: string;
}) {
  const { current_select, setSelection } = useNavStore();
  if (index == current_select) {
    return (
      <div className="flex hover:cursor-pointer space-x-1.5 items-center">
        <FaCircle className="text-[0.36em] text-blue-700" />
        <p className="font-bold">{title}</p>
      </div>
    );
  } else {
    return (
      <div className="hover:cursor-pointer" onClick={() => setSelection(index)}>
        <p className="font-medium text-gray-700">{title}</p>
      </div>
    );
  }
}
