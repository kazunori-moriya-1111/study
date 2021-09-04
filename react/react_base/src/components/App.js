import React, {Component} from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

// クラスコンポーネントを定義
class App extends Component {
  render(){
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}
//コンポーネント内の値をpropsとして定義する
const mapStateToProps = state => ({ value: state.count.value })

//アクションを紐付けする
const mapDispatchProps = dispatch => ({
  increment: ()=> dispatch(increment()),
  decrement: ()=> dispatch(decrement())
})
// stateとactionを関連付する
export default connect(mapStateToProps, mapDispatchProps)(App)

// export default App