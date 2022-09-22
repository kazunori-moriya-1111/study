export default {
  namespaced: true,
  state:{
    // 現在の時刻で初期化
    updated: (new Date()).toLocaleTimeString()
  },
  mutations: {
    // updatedを更新
    setUpdated(state){
      state.updated = (new Date()).toLocaleTimeString()
    }
  }
}