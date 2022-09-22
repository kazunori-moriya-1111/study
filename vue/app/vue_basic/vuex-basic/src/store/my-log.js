export default function(store){
  store.subscribeAction((action, state) => {
    console.log(state)
    console.log(action.type)
    console.log(action.payload)
  })
}