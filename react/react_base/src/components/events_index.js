import React, {Component} from 'react'
import { connect } from 'react-redux'

import { readEvents } from '../actions'

// クラスコンポーネントを定義
class EventsIndex extends Component {
  // コンポーネントがマウントされた時に実行されるメソッド
  componentDidMount (){
    this.props.readEvents()
  }
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
const mapStateToProps = state => ({})

//アクションを紐付けする
const mapDispatchProps = ({ readEvents })

// stateとactionを関連付する
export default connect(mapStateToProps, mapDispatchProps)(EventsIndex)

// export default App