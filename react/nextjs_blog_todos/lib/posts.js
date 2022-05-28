import fetch from "node-fetch";

export async function getAllPostsData() {
  console.log("動作確認")
  
  await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/auth/jwt/create/`)
  ).then((res) => {
    console.log("yata")
  })
  const posts = await res.json();
  const filteredPosts = posts.sort(
    (a, b) => new Data(b.created_at) - new Date(a.created_at)
  );
  return filteredPosts
}