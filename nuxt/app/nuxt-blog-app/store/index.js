import moment from '~/plugins/moment'

export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user ? Object.assign({ likes: [] }, state.user) : null
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
  async addLikeLogToUser({ commit }, { user, post }) {
    user.likes.push({
      created_at : moment().format(),
      user_id : user_id,
      post_id : post_id
    })
    const newUser = await this.$axios.$put(`/user/${user.id}`, user)
    commmit('addUser', { user: newUser })
  },
  async logout({ commit }) {
    commit('removeUser')
  }
}