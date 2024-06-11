import { create } from 'zustand'

interface BearState {
  polarBears: number
  blackBears: number
  pandaBears: number

  increasePolarBears: (by: number) => void
  increaseBlackBears: (by: number) => void
  increasePandaBears: (by: number) => void
}

export const useBearStore = create<BearState>((set) => ({
  polarBears: 0,
  blackBears: 0,
  pandaBears: 0,

  increasePolarBears: (by) => set((state) => ({ polarBears: state.polarBears + by })),
  increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePandaBears: (by) => set((state) => ({ pandaBears: state.pandaBears + by })),
}))