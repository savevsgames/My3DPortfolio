import { create } from "zustand";

const useCameraStore = create((set) => ({
  cameraPosition: [0, 100, -300],
  cameraTarget: [0, -50, 0],
  updateCamera: (position, target) =>
    set({ cameraPosition: position, cameraTarget: target }),
}));

export default useCameraStore;
