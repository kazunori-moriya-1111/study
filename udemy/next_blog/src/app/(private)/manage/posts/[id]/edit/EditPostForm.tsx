'use client';
import { useState, useActionState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import TextareaAutosize from 'react-textarea-autosize';
import 'highlight.js/styles/github.css'; // コードハイライト用のスタイル
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { updatePost } from '@/lib/actions/updatePost';
import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type EditPostFormProps = {
  post: {
    id: string;
    title: string;
    content: string;
    topImage?: string | null;
    published: boolean;
  };
};

export default function EditPostForm({ post }: EditPostFormProps) {
  const [content, setContent] = useState(post.content);
  const [contextLenght, setContextLenght] = useState(0);
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [published, setPublished] = useState(post.published);
  const [imagePreview, setImagePreview] = useState(post.topImage || '');

  const [state, formAction] = useActionState(updatePost, {
    success: false,
    error: {},
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    setContextLenght(value.length);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview !== post.topImage) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview, post.topImage]);

  return (
    <div className='contaier mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4'>記事更新（マークダウン対応）</h1>
      <form action={formAction} className='space-y-4'>
        <div>
          <Label htmlFor='title' className='mb-1'>
            タイトル
          </Label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='タイトルを入力してください'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full border p-2'
          />
          {state.error.title && <p className='text-red-500 text-sm mt-1'>{state.error.title.join(',')}</p>}
        </div>
        <div>
          <Label htmlFor='topImage'>トップ画像</Label>
          <Input type='file' id='topImage' accept='image/*' name='topImage' onChange={handleImageChange} />
          {imagePreview && (
            <div className='mt-2'>
              <Image
                src={imagePreview}
                alt={post.title}
                width={0}
                height={0}
                sizes='200px'
                className='w-[200px]'
                priority
              />
            </div>
          )}
          {state.error.topImage && <p className='text-red-500 text-sm mt-1'>{state.error.topImage.join(',')}</p>}
        </div>
        <div>
          <Label htmlFor='content' className='mb-1'>
            内容（マークダウン）
          </Label>
          <TextareaAutosize
            id='content'
            name='content'
            className='w-full border p-2'
            placeholder='マークダウン形式で入力してください'
            minRows={8}
            value={content}
            onChange={handleContentChange}
          />
          {state.error.content && <p className='text-red-500 text-sm mt-1'>{state.error.content.join(',')}</p>}
        </div>
        <div className='text-right text-sm text-gray-500 mt-1'>文字数：{contextLenght}</div>
        <div>
          <Button type='button' onClick={() => setPreview(!preview)}>
            {preview ? 'プレビューを非表示' : 'プレビューを表示'}
          </Button>
        </div>
        {preview && (
          <div className='border p-4 bg-gray-50 prose max-w-none'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              skipHtml={false}
              unwrapDisallowed={true}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
        <RadioGroup
          value={published.toString()}
          name='published'
          onValueChange={(value) => setPublished(value === 'true')}
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='true' id='published-one' />
            <Label htmlFor='published-one'>表示</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='false' id='published-two' />
            <Label htmlFor='published-two'>非表示</Label>
          </div>
        </RadioGroup>

        <Button type='submit' className='bg-blue-500 text-white px-4 py-2 rounnded'>
          更新する
        </Button>
        <input type='hidden' name='postId' value={post.id} />
        <input type='hidden' name='oldImageUrl' value={post.topImage || ''} />
      </form>
    </div>
  );
}
