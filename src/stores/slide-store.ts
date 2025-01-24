import { create } from "zustand";

const useSignUpSlideStore = create<AuthSlide>((set) => ({
  current_slide: 0,
  forward: () => set((state) => ({ current_slide: state.current_slide + 1 })),
  backward: () => set((state) => ({ current_slide: state.current_slide - 1 })),
}));

const useSignInSlideStore = create<AuthSlide>((set) => ({
  current_slide: 0,
  forward: () => set((state) => ({ current_slide: state.current_slide + 1 })),
  backward: () => set((state) => ({ current_slide: state.current_slide - 1 })),
}));

export { useSignUpSlideStore, useSignInSlideStore };
