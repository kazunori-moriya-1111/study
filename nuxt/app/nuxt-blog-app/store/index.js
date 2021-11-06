export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutations = {
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  },
  removeUser(state) {
    state.user = null
    state.idLoggedIn = false
  }
}

export const actions = {
  async login({ commit }, { id }) {
    const user = await this.$axios.$get(`/api/nuxtuser/${id}/`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async register({ commit }, { id }) {
    const payload = { id }
    await this.$axios.$post(`/api/nuxtuser/`, payload)
    const user = await this.$axios.$get(`/api/nuxtuser/${id}/`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async logout({ commit }) {
    commit('removeUser')
  }
}