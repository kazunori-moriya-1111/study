'use client';
import { useState, useActionState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import TextareaAutosize from 'react-textarea-autosize';
import 'highlight.js/styles/github.css'; // コードハイライト用のスタイル
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createPost } from '@/lib/actions/createPost';

export default function CreatePage() {
  const [content, setContent] = useState('');
  const [contextLenght, setContextLenght] = useState(0);
  const [preview, setPreview] = useState(false);

  const [state, formAction] = useActionState(createPost, {
    success: false,
    error: {},
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    setContextLenght(value.length);
  };

  return (
    <div className='contaier mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4'>新規記事投稿（マークダウン対応）</h1>
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
            className='w-full border p-2'
          />
          {state.error.title && <p className='text-red-500 text-sm mt-1'>{state.error.title.join(',')}</p>}
        </div>
        <div>
          <Label htmlFor='topImage'>トップ画像</Label>
          <Input type='file' id='topImage' accept='image/*' name='topImage' />
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
        <Button type='submit' className='bg-blue-500 text-white px-4 py-2 rounnded'>
          送信する
        </Button>
      </form>
    </div>
  );
}
