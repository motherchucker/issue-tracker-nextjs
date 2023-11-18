'use client';

import { createIssue } from '@/app/lib/api/issues';
import { createIssueSchema } from '@/app/lib/validation/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Callout, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Spinner from '../global/Spinner';
import ErrorField from './ErrorField';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

export type IssueForm = z.infer<typeof createIssueSchema>;

export default function NewIssueForm() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState<string>('');

  const onSubmitHandler = async (data: IssueForm) => {
    try {
      await createIssue(data);
      router.push('/issues');
    } catch (error) {
      setError('An unexpected error occured.');

      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  return (
    <div className="max-w-xl space-y-3">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register('title')} />
        </TextField.Root>
        <ErrorField message={errors.title?.message} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorField message={errors.description?.message} />
        <Button disabled={isSubmitting || isLoading}>
          Submit New Issue
          {isSubmitting && <Spinner />}
        </Button>
      </form>
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
    </div>
  );
}
