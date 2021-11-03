<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新規登録</span>
      </div>
      <el-table
        :data="showPosts"
        style="width: 100%"
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
          prop="created_at"
          label="投稿日時"
          width="240">
        </el-table-column>
      </el-table>
    </el-card>
  <button type="button" @click="logoutbuttom">logout</button>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
import Cookies from 'universal-cookie'

export default {
  asyncData({ store }){
    console.log("storeのuserの値",store.getters['user'])
  },
  computed: {
    showPosts() {
      return [
        {
          id: '001',
          title: 'How to development Nuxt.js Application',
          boby: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          created_at: '2018/08/10 12:00:00',
          user: {
            id: 'potato4d'
          }
        },
        {
          id: '002',
          title: 'Deployment Nuxt.js App',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          created_at: '2018/08/10 13:00:00',
          user: {
            id: 'potato4d'
          }
        },
      ]
    }
  },
  methods: {
    async logoutbuttom() {
      await this.logout()
      const cookies = new Cookies()
      const aaa = cookies.get('user')
      console.log("削除前",aaa)
      cookies.remove('user')
      const bbb = cookies.get('user')
      console.log("削除後",bbb)
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