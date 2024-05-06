import { create } from 'zustand';
import type { UserState } from '../types/staticType';

export const useUserStore = create<UserState>((set) => ({
  displayName: null,
  uid: null,
  setUser: (displayName, uid) => set({ displayName, uid })
}));
