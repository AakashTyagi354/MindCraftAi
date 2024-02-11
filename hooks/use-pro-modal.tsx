import { create } from "zustand";

interface useProModalStor {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// so this gives us the global state controls for open and close
// openning or closing the modal from where ever we want

export const useProModal = create<useProModalStor>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
