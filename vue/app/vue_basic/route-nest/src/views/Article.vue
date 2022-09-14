<template>
  <div class="about">
    <div>記事コード：{{ aid }}</div>
  </div>
</template>

<script>
const timeGuard = function(to){
  // 有効期限を設定
  const data = {
    13: new Date(2021, 10, 30),
    108:  new Date(2022, 10, 30)
  }

  // 移動先のaid値から有効期限を取得
  const limit = data[to.params.aid] ? data[to.params.aid] : new Data(2999, 11, 31)

  // 現在時刻
  const current = new Date()

  // 有効期限が切れている場合、移動をキャンセル
  if (limit && limit.getTime() < current.getTime()){
    window.alert('記事の有効期限が過ぎています')
    return false
  }
}
  export default{
    name: 'ArticleView',
    // ナビゲーションガードを紐付け
    beforeRouteEnter: timeGuard,
    beforeRouteUpdate: timeGuard,
    props: ['aid']
  }
</script>