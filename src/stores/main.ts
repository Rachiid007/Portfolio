import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    posOfElems: [0, 0, 0, 0] as number[]
  }),

  getters: {
    getPosOfElems: (state): number[] => state.posOfElems
  },

  actions: {
    setPosOfElems(key: number, value: number) {
      this.posOfElems[key] = value
    }
  }
})
