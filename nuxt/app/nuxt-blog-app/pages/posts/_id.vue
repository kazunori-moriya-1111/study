<template>
  <section class="container posts-page">
    <div style="flex 1">
      <el-card v-if="post">
        <div slot="header" class="clearfix">
          <h2>{{ post.title }}</h2>
          <small>by {{ post.user.id }}</small>
        </div>
        <p>{{ post.body }}</p>
        <p class="text-right">
          <el-button :disabled="!idLoggedIn" type="warning" v-if="isLiked" @click="unlike" round>
            <span class="el-icon-star-on" />
            <span>{{ post.likes.length }}</span>
          </el-button>
          <el-button :disabled="!idLoggedIn" type="warning" v-else @click="like" round>
            <span class="el-icon-star-off" />
            <span>{{ post.likes.length }}</span>
          </el-button>
        </p>
        <p class="text-right">{{ post.create_at | time }}</p>
      </el-card>
      <p>
        <nuxt-link to="/posts">&lt; 投稿一覧へ戻る</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import moment from '~/plugins/moment.js'
import { mapGetters, mapActions } from 'vuex'
import cloneDeep from 'lodash.clonedeep'

export default {
  async asyncData({ store, route, error }) {
    const { id } = route.params
    if (store.getters['posts/posts'].find(p => p.id === id)){
      return
    }
    try {
      await store.dispatch('posts/fetchPost', { id })
      if (!(store.getters['posts/posts'].find(p => p.id === Number(route.params.id)))) {
        throw new Error('post not found')
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  computed: {
    post() {
      return this.posts.find(p => p.id === Number(this.$route.params.id))
    },
    ...mapGetters('posts', ['posts'])
  },
  methods: {
    like() {
      if(this.isLoggedIn) {
        return
      }
      const likePayload = { user: this.user, post: this.post }
      this.addLikeToPost(cloneDeep(likePayload))
      this.addLikeLogToUser(cloneDeep(likePayload))
    },
    unlike() {
      if(!this.isLoggedIn) {
        return
      }
      const likePayload = { user: this.user, post: this.post }
      this.removeLikeToPost(cloneDeep(likePayload))
      this.removeLikeLogToUser(cloneDeep(likePayload))
    },
    ...mapActions(['addLikeLogToUser']),
    ...mapActions('post', ['addlikePost'])
  },
  filters: {
    time(val) {
      return moment(val).format('YYYY/MM/DD HH:mm:ss')
    }
  }
}
</script>

<style>
.posts-page .el-table__row{
  cursor: pointer;
}
</style>