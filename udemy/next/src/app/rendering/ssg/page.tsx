import Image from 'next/image'

export default async function SSGPage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const resJson = await res.json()
  const image = resJson.message

  const timestamp = new Date().toISOString()
  return (
    <div>
      <h1>SSG ビルド時に生成されて固定</h1>
      <Image src={image} alt="dog" width={400} height={400} />
      <p>Timestamp: {timestamp}</p>
    </div>
  )
}
