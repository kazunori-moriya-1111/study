<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新規登録</span>
      </div>
      <el-table
        :data="showPosts"
        style="width: 100%"
        @row-click="handleClick"
        class="table"
      >
        <el-table-column
          prop="title"
          label="タイトル">
        </el-table-column>
        <el-table-column
          prop="user.id"
          label="投稿者"
          width="180">
        </el-table-column>
        <el-table-column
          prop="create_at"
          label="投稿日時"
          width="240">
        </el-table-column>
      </el-table>
    </el-card>
  <button type="button" @click="logoutbuttom">logout</button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Cookies from 'universal-cookie'
import moment from '~/plugins/moment.js'

export default {
  async asyncData({ store }){
    await store.dispatch('posts/fetchPosts')
  },
  computed: {
    showPosts() {
      return this.posts.map(post => {
        // post.create_at = moment(post.create_at).format('YYYY/MM/DD HH:mm:ss')
        return post
      })
    },
    ...mapGetters('posts', ['posts'])
  },
  methods: {
    handleClick(post){
      this.$router.push(`/posts/${post.id}`)
    },
    async logoutbuttom() {
      await this.logout()
      const cookies = new Cookies()
      cookies.remove('user')
      this.$router.push('/')
    },
    ...mapActions(['logout'])
  },
}
</script>

<style>
.posts-page .el-table__row{
  cursor: pointer;
}
</style>