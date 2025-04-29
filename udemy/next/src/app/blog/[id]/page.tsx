import React from 'react';

type Params = {
  params: Promise<{ id: string }>;
};

export default async function BlogPage({ params }: Params) {
  const { id } = await params;
  return <div>ブログID: {id}</div>;
}
