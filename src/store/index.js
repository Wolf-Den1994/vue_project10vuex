import { createStore } from 'vuex';
import counterModule from './modules/counter'

export default createStore({
  modules: {
    count: counterModule
  },
  state() {
    return {
      appTitle: 'Vuex Work'
    }
  },
  getters: {
    upperCaseTitle(state) {
      return state.appTitle.toUpperCase()
    }
  }
})