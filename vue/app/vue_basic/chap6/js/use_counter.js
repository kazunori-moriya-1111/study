const useCounter = function(init){
  const current = Vue.ref(init);
  const onclick = () => {
    current.value++;
  }
  // データオブジェクト(Ref変数)とカウンター機能(メソッド)を束ねる
  return{
    current,
    onclick
  }
}