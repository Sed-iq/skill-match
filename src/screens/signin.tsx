import BG from "../assets/signin_logo.jpeg";
import logo from "../assets/logo.svg";
import Input_fields from "../components/input_fields";
import {
  useFakeSigninStore,
  useSigninInputStore,
} from "../stores/validation-store";
import Buttons from "../components/buttons";
import GoogleLogo from "../assets/google_2504739 1.png";
import { FaArrowLeft } from "react-icons/fa";
import { NavigateFunction, useNavigate } from "react-router";
import { Toast } from "../utils/toast_utils";
import { useViewState } from "../stores/view-store";

export default () => {
  const AuthStore = useSigninInputStore();
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
            <img src="" alt="" srcSet={logo} className="w-[8em] mb-[0.5em]" />
            <p className="text-[1.5em] break-words text-gray-700 lexend-bold w-[60%] tracking-[-0.02em]">
              Welcome back, login to proceed
            </p>
            <p className="text-sm text-gray-500">
              Fill in your details to begin
            </p>
          </div>
          <form
            onSubmit={(event) => {
              Signin(event, navigate);
            }}
          >
            <div className="space-y-4">
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
              <Buttons.primary_button>
                <p className="text-sm font-medium">Continue</p>
              </Buttons.primary_button>
            </div>
            <div className="space-y-6 mt-[1.2em]">
              <div className="flex space-x-5 justify-between items-center">
                <div className=" border flex-1 border-gray-300"></div>
                <p className="text-sm text-gray-700">or</p>
                <div className=" border flex-1 border-gray-300"></div>
              </div>
            </div>
          </form>
          <div className="mt-[1.2em]">
            <Buttons.custom_outline_button outline_color="border-gray-400">
              <div className="flex justify-center items-center py-1 space-x-3">
                <img srcSet={GoogleLogo} alt="" className="w-[1.3em]" />
                <p className="text-sm text-gray-500 font-medium">
                  Continue with Google
                </p>
              </div>
            </Buttons.custom_outline_button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Signin(
  event: React.FormEvent<HTMLFormElement>,
  navigator: NavigateFunction
) {
  event.preventDefault();
  const EnteredDetails = useSigninInputStore.getState();
  const ConstDetails = useFakeSigninStore.getState();
  const ViewModel = useViewState.getState();
  if (EnteredDetails.email.trim() == "") {
    Toast.error("Please enter email before proceeding");
  } else if (EnteredDetails.password == "") {
    Toast.error("Please enter password before proceeding");
  } else if (
    EnteredDetails.email == ConstDetails.email &&
    EnteredDetails.password == ConstDetails.password
  ) {
    localStorage.setItem("loginToken", "logintokenishere");
    ConstDetails.setLoginState(true);
    ViewModel.setLoading(true);
    setTimeout(() => {
      ViewModel.setLoading(false);
      Toast.success("Logged in Successfully");
      navigator("/dashboard");
    }, 1500);
  } else {
    Toast.error("Incorrect email or password");
  }
}
