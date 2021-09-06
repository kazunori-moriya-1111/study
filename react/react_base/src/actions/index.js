import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'http://localhost:8000/api/v1'
// アクションクリエイター:アクションをリターンする関数
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/event/`)
    dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/event/`, values)
    dispatch({ type: CREATE_EVENT, response })
}