import React from 'react'

// ダミーデータ
const articles = [
  { id: '1', title: 'ブログ1' },
  { id: '2', title: 'ブログ2' },
  { id: '3', title: 'ブログ3' },
]
// 3秒待機
async function fetchArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return articles
}

export default async function BlogPage() {
  const articles = await fetchArticles()
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  )
}
