'use client'

import { useState } from 'react'

export default function RCCPage() {
    const [count, setCount] = useState(0)
    console.log('RCCPage')
    return (
        <div>
            <h1>RCCPage</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        )
}