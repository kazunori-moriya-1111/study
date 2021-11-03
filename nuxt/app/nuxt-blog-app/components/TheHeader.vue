<template>
  <el-menu mode="horizontal" :router="true">
    <el-menu-item index="1" style="pointer-events:none;">
      Nuxt Diary App
    </el-menu-item>
    <el-menu-item index="2" :router="{path: '/posts/'}">
      投稿一覧
    </el-menu-item>

    <el-menu-item index="4" style="float: rigth;" :router="{path: `/users/${user.id}`}" v-if="user">
      <span>{{ user.id }}</span>
    </el-menu-item>
    <el-menu-item index="4" style="float: rigth;" :router="{path: '/'}" v-else>
      <span>ログイン</span>
    </el-menu-item>
    <el-menu-item index="5" style="float: rigth" :router="{path: '/posts/new'}">
      新規登録
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
