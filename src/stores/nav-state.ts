import { create } from "zustand";

const useNavStore = create<NavStore>((set) => ({
  current_select: 0,
  setSelection: (index) => set(() => ({ current_select: index })),
}));

export default useNavStore;
