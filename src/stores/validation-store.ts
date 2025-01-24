import { create } from "zustand";

const useSignUpInputStore = create<SigninInputStore>((set) => ({
  email: "",
  password: "",
  password_again: "",
  full_name: "",
  setEmail: (value) => set(() => ({ email: value })),
  setFullName: (value) => set(() => ({ full_name: value })),
  setPassword: (value) => set(() => ({ password: value })),
  setPasswordAgain: (value) => set(() => ({ password_again: value })),
}));
export { useSignUpInputStore };
