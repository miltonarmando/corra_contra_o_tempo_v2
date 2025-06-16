import { create } from 'zustand'

interface AppStore {
  notifications: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  notifications: 0,
  increment: () => set((state) => ({ notifications: state.notifications + 1 })),
  decrement: () => set((state) => ({ notifications: Math.max(0, state.notifications - 1) })),
  reset: () => set({ notifications: 0 })
}))
