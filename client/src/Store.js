import create from "zustand";

export const usePortalStore = create((set) => ({
  activePortal: null, // Tracks the active portal by name (string)
  prevCameraState: null, // Stores previous camera position and lookAt target -> ex. [x, y, z, x, y, z]

  // Set the active portal to the given portal name and store the current camera state (when entering)
  setActivePortal: (portalName) =>
    set((state) => ({
      activePortal: portalName,
      prevCameraState: state.prevCameraState, // Preserve camera state
    })),
  // Set the active portal to null and set the camera to the old store value (when exiting the portal)
  setPrevCameraState: (cameraState) => set({ prevCameraState: cameraState }),
  clearActivePortal: () => set({ activePortal: null }),
}));
