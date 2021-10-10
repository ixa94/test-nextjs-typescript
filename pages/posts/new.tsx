import React, { FC, useRef } from 'react';
import { useAction } from '../../hooks/useAction';
import { RedButton } from '../../ui/Buttton';
import { Input } from '../../ui/Input';
import { Form } from '../../ui/Form';
import { TextArea } from '../../ui/TextArea';
import { useRouter } from 'next/router';
const CreatePost: FC = () => {
    const title = useRef<HTMLInputElement>(null)
    const body = useRef<HTMLTextAreaElement>(null)
  const router = useRouter();
  const { createPost } = useAction();
  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if(!title.current || !body.current)return
    createPost(title.current.value, body.current.value);
    e.target.reset();
    router.push('/')
  };
  return (
    <div>
      <Form method="POST" onSubmit={formHandler}>
        <Input
        ref={title}
          name="title"
          type="text"
          placeholder="title"
        />
        <TextArea
        ref={body}
          name="body"
          placeholder="body"
        />
        <RedButton>Добавить</RedButton>
      </Form>
    </div>
  );
};

export default CreatePost;
