import BG from "../assets/signup_slide1.png";
import logo from "../assets/logo.svg";
import Input_fields from "../components/input_fields";
import { useSignUpInputStore } from "../stores/validation-store";
import Buttons from "../components/buttons";
import GoogleLogo from "../assets/google_2504739 1.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Toast } from "../utils/toast_utils";

export default () => {
  const AuthStore = useSignUpInputStore();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full justify-stretch items-stretch">
      <div className="flex-1 relative">
        <div
          style={{ backgroundImage: `url(${BG})` }}
          className="w-full bg-cover bg-center h-full"
        ></div>
        <div className="absolute top-0 left-0 p-[1.5em]">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="bg-white z-20 hover:cursor-pointer items-center justify-center flex space-x-2 rounded-full py-2 px-[0.6em]"
          >
            <FaArrowLeft className="text-xs text-gray-600" />
            <p className="text-xs text-gray-600 font-medium">Back</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0">
          <div id="auth-bg-drop" className="py-[3.5em] px-[3.5em]">
            <p className="text-2xl font-bold text-white">
              Login to continue experiencing the best job offers and lessons
            </p>
            <p className="text-gray-300 text-sm">Enter details to proceed</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start justify-center">
        <div className="px-[5em]">
          <div className="mb-[1.3em]">
            <img src="" alt="" srcSet={logo} className="w-[8em]" />
            <p className="text-[1.5em] text-gray-700 lexend-bold w-[60%]">
              Be part of the Driving force of Learning
            </p>
            <p className="text-sm text-gray-500">
              Fill in your details to begin
            </p>
          </div>
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              const find = localStorage.getItem(AuthStore.email);
              if (find != null) {
                Toast.error('Email has already been used, signin instead')
              } else {
                localStorage.setItem(AuthStore.email, AuthStore.password);
                navigate("/auth/signin");
              }
            }}
          >
            <div className="space-y-4">
              <Input_fields
                input_id="name"
                required
                hint="Enter your fullname"
                type="text"
                value={AuthStore.full_name}
                onChanged={(value) => AuthStore.setFullName(value)}
              />
              <Input_fields
                input_id="email"
                required
                hint="Enter your email address"
                type=""
                value={AuthStore.email}
                onChanged={(value) => AuthStore.setEmail(value)}
              />
              <Input_fields
                input_id="password"
                required
                hint="Enter your Password (8 - 20 characters)"
                type="password"
                value={AuthStore.password}
                onChanged={(value) => AuthStore.setPassword(value)}
              />
              <Input_fields
                input_id="password_again"
                required
                hint="Confirm your password"
                type="password"
                value={AuthStore.password_again}
                onChanged={(value) => AuthStore.setPasswordAgain(value)}
              />
              <Buttons.primary_button>
                <p className="text-sm font-medium">Sign Up</p>
              </Buttons.primary_button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
