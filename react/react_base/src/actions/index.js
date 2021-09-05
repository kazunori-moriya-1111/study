import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

// アクションクリエイター:アクションをリターンする関数
export const readEvents = () => async dispatch => {
    const ROOT_URL = 'http://localhost:8000/api/v1'
    const response = await axios.get(`${ROOT_URL}/event/`)
    dispatch({ type: READ_EVENTS, response })
}
