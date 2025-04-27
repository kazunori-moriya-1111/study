'use server';
import { redirect } from 'next/navigation';
import { ContactSchema } from '@/validations/contact';

// ActionStateの型定義
type ActionState = {
  success: boolean;
  errors: {
    name?: string[];
    email?: string[];
  };
  serverError?: string;
};

export async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name');
  const email = formData.get('email');

  // バリデーション
  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errorMessage = validationResult.error.flatten().fieldErrors;
    console.log('サーバー側でエラーが発生しました', errorMessage);
    return {
      success: false,
      errors: {
        name: errorMessage.name || [],
        email: errorMessage.email || [],
      },
    };
  }

  // DB登録

  console.log('送信されたデータ:', { name, email });
  redirect('/contacts/complete');
}
