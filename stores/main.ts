import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',

  state: () => {
    return {
      posOfElems: [0, 0, 0, 0]
    }
  },

  getters: {
    getPosOfElems() {
      return this.posOfElems
    }
  },

  actions: {
    setPosOfElems(key, value) {
      this.posOfElems[key] = value
    }
  }
})
