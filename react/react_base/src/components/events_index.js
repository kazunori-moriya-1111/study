import React, {Component} from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

// クラスコンポーネントを定義
class EventsIndex extends Component {
  // コンポーネントがマウントされた時に実行されるメソッド
  componentDidMount (){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}
//コンポーネント内の値をpropsとして定義する
const mapStateToProps = state => ({events: state.events})

//アクションを紐付けする
const mapDispatchProps = ({ readEvents })

// stateとactionを関連付する
export default connect(mapStateToProps, mapDispatchProps)(EventsIndex)

// export default App