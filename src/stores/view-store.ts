import { create } from "zustand";

interface ViewState {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}
const useViewStore = create<ViewState>((set) => ({
  isLoading: false,
  setLoading: (state) => set({ isLoading: state }),
}));
export { useViewStore as useViewState };
