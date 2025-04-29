import Image from 'next/image';
export const revalidate = 10; //ISR 10秒ごとに更新

export default async function SSGPage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: {
      revalidate: 10,
    },
  });
  const resJson = await res.json();
  const image = resJson.message;

  const timestamp = new Date().toISOString();
  return (
    <div>
      <h1>ISR 10ごとにリロード</h1>
      <Image src={image} alt="dog" width={400} height={400} />
      <p>Timestamp: {timestamp}</p>
    </div>
  );
}
