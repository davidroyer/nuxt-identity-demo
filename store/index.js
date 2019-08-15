export const state = () => ({
  currentUser: null
})

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user
  }
}

export const actions = {
  nuxtClientInit({ commit }, user) {
    commit('setCurrentUser', user)
  },

  handleUserUpdate({ commit }, user) {
    commit('setCurrentUser', user)
  }
}
