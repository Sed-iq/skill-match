import BG from "../assets/signup_slide1.png";
import logo from "../assets/logo.svg";
import Input_fields from "../components/input_fields";
import { useSignUpInputStore } from "../stores/validation-store";
import Buttons from "../components/buttons";

export default () => {
  const AuthStore = useSignUpInputStore();
  return (
    <div className="flex h-screen w-full justify-stretch items-stretch">
      <div className="flex-1 relative">
        <div
          style={{ backgroundImage: `url(${BG})` }}
          className="w-full bg-cover bg-center h-full"
        ></div>
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
        </div>
      </div>
    </div>
  );
};
