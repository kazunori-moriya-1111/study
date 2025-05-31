import { auth } from '@/auth';
import { notFound } from 'next/navigation';
import { getOwnPost } from '@/lib/ownPost';
import EditPostForm from './EditPostForm';

type Params = {
  params: Promise<{ id: string }>;
};

export default async function EditPage({ params }: Params) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!session?.user?.email || !userId) {
    throw new Error('ログインしてください');
  }
  const { id } = await params;
  const post = await getOwnPost(userId, id);

  if (!post) {
    return notFound();
  }
  return <EditPostForm post={post} />;
}
