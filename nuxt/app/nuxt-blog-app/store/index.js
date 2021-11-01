export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutations = {
  serUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  }
}

export const actions = {
  async login({ commit }, { id }) {
    const user = await this.$axios.$get(`http://localhost:8000/api/nuxt/${id}/`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async register({ commit }, { id }) {
    const payload = {}
    payload['id'] = { id }
    await this.$axios.$patch(`http://localhost:8000/api/nuxt/${id}/`, payload)
    const user = await this.$axios.$get(`http://localhost:8000/api/nuxt/${id}/`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  }
}