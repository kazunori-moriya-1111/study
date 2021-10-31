<template>
  <section class="container">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
        <span>ログイン</span>
      </div>
      <form>
        <div class="form-content">
          <span>ユーザー　ID</span>
          <el-input placeholder="" v-model="formData.id" />
        </div>
        <div class="form-content">
          <el-checkbox v-model="isCreateMode">アカウントを作成する</el-checkbox>
        </div>
        <div class="text-rigth">
          <el-button type="primary">{{ buttonText }}</el-button>
        </div>
      </form>
      <button type="button" @click="buttontest">console.log</button>
    </el-card>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      isCreateMode: false,
      formData: {
        id: ''
      }
    }
  },
  computed: {
    buttonText() {
      return this.isCreateMode ? '新規登録' : 'ログイン'
    }
  },
  methods: {
    async buttontest() {
      const user = await this.$axios.$get(`http://localhost:8000/api/nuxt/2/`)
      console.log(user)
      console.log(`user.idは${user.id}`)
    }
  }
}
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>