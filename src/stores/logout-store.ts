import { create } from "zustand";

const useLogoutDialogStore = create<LogoutPromptModalState>((set) => ({
  showModal: false,
  setShowModal(value) {
    set({ showModal: value });
  },
}));

export default useLogoutDialogStore;