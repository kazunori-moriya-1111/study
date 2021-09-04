export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// アクションクリエイター:アクションをリターンする関数
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

