import { create } from 'zustand';
import type { UserState, LikeCardsListState } from '../types/staticType';

export const useUserStore = create<UserState>((set) => ({
  displayName: null,
  uid: null,
  photo: null,
  setUser: (displayName, uid, photo) => set({ displayName, uid, photo })
}));

export const useLikeCardsListStore = create<LikeCardsListState>((set) => ({
  cardsList: [],
  setCardsList: (cardsList) => set({ cardsList })
}));
