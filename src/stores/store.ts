import { create } from 'zustand';
import type { UserState } from '../types/staticType';

export const useUserStore = create<UserState>((set) => ({
  displayName: null,
  uid: null,
  photo: null,
  setUser: (displayName, uid, photo) => set({ displayName, uid, photo })
}));
