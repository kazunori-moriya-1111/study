import React, {Component} from 'react'

const App = () =>  {
  return (<Counter></Counter>)
}

// クラスコンポーネントを定義
class Counter extends Component {
  // 初期化処理で実行されるメソッド
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  // プラスカウントボタン setStateを使用すると関連するDOMが再レンダリングされる
  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }
  // マイナスカウントボタン
  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App