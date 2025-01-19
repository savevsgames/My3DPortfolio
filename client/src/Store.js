import { create } from "zustand";

export const usePortalStore = create((set) => ({
  activePortal: null, // Current active portal name
  cameraPosition: [0, 100, -200], // Default camera position
  cameraTarget: [0, -50, 0], // Default camera target

  setActivePortal: (portalName, cameraPosition, cameraTarget) =>
    set({
      activePortal: portalName,
      cameraPosition: cameraPosition || [0, 40, -100],
      cameraTarget: cameraTarget || [0, 40, 0],
    }),

  clearActivePortal: () =>
    set({
      activePortal: null,
      cameraPosition: [0, 100, -200], // Reset to default
      cameraTarget: [0, -50, 0], // Reset to default
    }),
}));
