import { create } from "zustand";

interface fakeLogin {
  email: string;
  password: string;
  loginState: boolean;
  setLoginState: (value: boolean) => void;
}

const useSignUpInputStore = create<SignupInputStore>((set) => ({
  email: "",
  password: "",
  password_again: "",
  full_name: "",
  setEmail: (value) => set(() => ({ email: value })),
  setFullName: (value) => set(() => ({ full_name: value })),
  setPassword: (value) => set(() => ({ password: value })),
  setPasswordAgain: (value) => set(() => ({ password_again: value })),
}));

const useSigninInputStore = create<SigninInputStore>((set) => ({
  email: "",
  password: "",
  setEmail: (value) => set(() => ({ email: value })),
  setPassword: (value) => set(() => ({ password: value })),
}));

const useFakeSigninStore = create<fakeLogin>((set) => ({
  email: "skill@match.com",
  password: "12345678",
  loginState: false,
  setLoginState: (value) => set({ loginState: value }),
}));

export { useSignUpInputStore, useSigninInputStore, useFakeSigninStore };
