import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/usedTypedSelector';
import { Post } from '../store/postTypes';
import { Card } from '../ui/Card';
import { DivContainer } from '../ui/DivContainer';
import { LinkContainer } from '../ui/LinkContainer';
import { Paragraph } from '../ui/Paragraph';
import { P } from '../ui/Link';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import New from './posts/new'
const PostList: FC = () => {
  const { posts } = useTypedSelector((state) => state.postState);
  const { fetchPost } = useAction();
  const router = useRouter();
  
  useEffect(() => {
    fetchPost();
  }, []);

  const ClickHandler = (id: number) => {
    router.push(`/posts/${id}`);
  };
  return (
    <>
      <LinkContainer>
        <Link href="/">
          <P>Post</P>
        </Link>
        <Link href="/posts/new">
          <P>AddPost</P>
        </Link>
      </LinkContainer>



      <DivContainer>
        {posts?.map((post: Post) => (
          <Card onClick={() => ClickHandler(post.id)}>
            <h3>{post.title}</h3>
            <Paragraph className="p">{post.body}</Paragraph>
          </Card>
        ))}
      </DivContainer>



    </>
  );
};

export default PostList;
