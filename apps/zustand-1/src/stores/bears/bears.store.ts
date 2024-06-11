import { create } from 'zustand'

interface Bear {
  id: number
  name: string
}

interface BearState {
  polarBears: number
  blackBears: number
  pandaBears: number
  bears: Bear[]
  computed: {
    getTotalBears: () => number
  }

  doNothing: () => void
  addBear: () => void
  clearBears: () => void

  increasePolarBears: (by: number) => void
  increaseBlackBears: (by: number) => void
  increasePandaBears: (by: number) => void
}

export const useBearStore = create<BearState>((set, get) => ({
  polarBears: 0,
  blackBears: 0,
  pandaBears: 0,

  bears: [
    { id: 1, name: 'Polar' },
    { id: 2, name: 'Black' },
    { id: 3, name: 'Panda' },
  ],
  // workaround: add get to totalBears to convert into a number, then change () => number to just number
  // computed: {
  // totalBears() {
  //   return get().polarBears + get().blackBears + get().pandaBears + get().bears.length
  // },
  // },
  // totalBears: () => get().polarBears + get().blackBears + get().pandaBears + get().bears.length,
  computed: {
    getTotalBears: () => get().polarBears + get().blackBears + get().pandaBears + get().bears.length
  },

  doNothing: () => { set((state) => ({ bears: [...state.bears] })) },
  addBear: () => set((state) => ({ bears: [...state.bears, { id: state.bears.length + 1, name: `Bear ${state.bears.length + 1}` }] })),
  clearBears: () => set({ bears: [] }),

  increasePolarBears: (by) => set((state) => ({ polarBears: state.polarBears + by })),
  increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePandaBears: (by) => set((state) => ({ pandaBears: state.pandaBears + by })),
}))