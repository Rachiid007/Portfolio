import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',

  state: () => {
    return {
      posOfElems: [0, 0, 0, 0]
    }
  },

  getters: {
    getPosOfElems(): number[] {
      return this.posOfElems
    }
  },

  actions: {
    setPosOfElems(key: number, value: number) {
      this.posOfElems[key] = value
    }
  }
})
