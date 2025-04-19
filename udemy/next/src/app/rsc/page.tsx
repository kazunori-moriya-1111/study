import ClientComponent from '@/components/ClientComponent'
import Link from 'next/link'

export default function RSCPage() {
    console.log('RSCPage')
    return (
    <div>
        <h1>RSCPage</h1>
        <ClientComponent />
        <Link href="/about">About</Link>
    </div>
    )
}