export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// アクションクリエイター:アクションをリターンする関数
export const incremet = () => ({
    type: INCREMENT
})

export const decremet = () => ({
    type: DECREMENT
})

