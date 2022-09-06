import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',

  state: () => {
    return {
      // all these properties will have their type inferred automatically
      language: '',
      posOfElems: [0, 0, 0, 0]
    }
  },

  getters: {
    getLanguage() {
      return this.language
    },
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