import { createStore, createLogger } from 'vuex';
import counterModule from './modules/counter'
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule
  },
  state() {
    return {
      appTitle: 'Vuex Work'
    }
  },
  mutations: {
    ...mutations
  },
  actions: actions,
  getters: {
    upperCaseTitle(state) {
      return state.appTitle.toUpperCase()
    }
  }
})