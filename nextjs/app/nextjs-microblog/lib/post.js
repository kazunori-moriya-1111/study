import path from 'path';
import fs from 'fs';
import matter from 'matter';

const postDirectory = path.join(process.cwd(), 'posts');

// mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    // idとデータを返す
    return {
      id,
      ...matterResult,
    };
  });
}
