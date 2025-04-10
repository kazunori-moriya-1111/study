import React from 'react'

export default async function BlogPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
    <div>
      ブログID: {id}
    </div>
  )
}
