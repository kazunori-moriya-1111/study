export const state = () => ({
  users: []
})

export const getters = {
  users: (state) => state.users
}

export const mutations = {
  addUser(state, { user }){
    state.user.push(user)
  },
  addUserPost(state, { user, post }){
    state.userPosts[user.id].push(post)
  },
  clearUserPost(state, { user }){
    state.userPosts[user.id] = []
  }
}

export const actions = {
  async fetchUser({ commit }, { id }){
    const user = await this.$axios.$get(`api/post/${id}`)
    commit('addUser', { user }) 
  }
}