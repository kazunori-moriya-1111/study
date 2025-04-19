'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RCCPage() {
    const [count, setCount] = useState(0)
    const router = useRouter()

    console.log('RCCPage')
    return (
        <div>
            <h1>RCCPage</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Link href="/about">About</Link>
            <button onClick={() => router.push('/about')}>About</button>
        </div>
        )
}