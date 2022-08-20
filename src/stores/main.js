import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',

  state: () => {
    return {
      // all these properties will have their type inferred automatically
      position: 0,
      language: ''
    }
  },

  getters: {
    getPosition() {
      return this.position
    },
    getLanguage() {
      return this.language
    }
  },

  actions: {
    setScrollPosition(position) {
      this.$patch({
        position
      })
    },
    setLanguage(language) {
      this.$patch({
        language
      })
    }
  }
})
