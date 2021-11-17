export const state = () => ({
  users: []
})

export const getters = {
  users: state => state.users
}

export const mutations = {
  addUser(state, { user }) {
    state.users.push(user)
  },
  clearUser(state) {
    state.users = []
  },
  addUserPost(state, { user, post }) {
    state.userPosts[user.id].push(post)
  },
  clearUserPosts(state, { user }) {
    state.userPosts[user.id] = []
  }
}

export const actions = {
  async fetchUser({ commit }, { id }){
    commit('clearUser')
    const user = await this.$axios.$get(`api/user/${id}`)
    commit('addUser', { user }) 
  }
}