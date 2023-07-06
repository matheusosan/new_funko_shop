import { create } from "zustand";
import { SidebarState } from "@/types/app.types";

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
