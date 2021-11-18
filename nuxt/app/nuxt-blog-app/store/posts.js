import moment from "~/plugins/moment.js";

export const state = ()=> ({
  posts: []
})

export const getters = {
  posts: (state) => state.posts.map((post) => Object.assign({ likes: [] }, post))
}

export const mutations = {
  addPost(state, { post }){
    state.posts.push(post)
  },
  updatePost(state, { post }){
    state.posts = state.posts.map((p) => (p.id === post.id ? post : p))
  },
  clearPosts(state){
    state.post = []
  }
}

export const actions = {
  async fetchPost({ commit }, { id }){
    const post = await this.$axios.$get(`/api/post/${id}`)
    commit('clearPosts')
    commit('addPost', { post:post })
  },
  async fetchPosts({ commit }){
    const posts = await this.$axios.$get(`/api/post/`)
    commit('clearPosts')
    for (let key in posts){
      commit('addPost', { post:posts[key] })
    }
  },
  async addLikeToPost({ commit }, { user, post }) {
    post.likes.push({
      created_at: moment().format(),
      user_id: user_id,
      post_id: post_id
    })
    const newPost = await this.$axios.$put(`/post/${post.id}`, post)
    commit('updatePost', { post: newPost })
  },
  async publishPost({ commit }, { payload }){
    const user = await this.$axios.$get(`/api/nuxtuser/${payload.user_id}`)
    const post_id = await this.$axios.$post(`/api/post/`, payload)
    const created_at = moment().format()
    const post = {id: post_id, ...payload, created_at}
    // const putData = {id:post_id, ...payload, created_at}
    // delete putData.user
    // await this.$axios.$put(`/api/post/`, [
    //   ...(user.posts || []),
    //   putData
    // ])
    commit('addPost', { post })
  }
}