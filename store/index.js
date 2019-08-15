/* eslint-disable no-console */
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
  // async nuxtClientInit({ commit }) {
  //   commit('dispatchAction')
  // }
  // async nuxtServerInit({ commit, state }, { req, app }) {
  //   const user = await app.$identity.currentUser()
  //   console.log('TCL: user', user)
  //   if (user) await user.jwt()
  //   else Promise.resolve()
  //   commit('setCurrentUser', user)
  // }
}
