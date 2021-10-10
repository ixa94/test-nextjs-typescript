import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/usedTypedSelector';
import { CardPost } from '../../ui/PostCard';
import { CardPostBody } from '../../ui/CardPostBody';
import { useRouter } from 'next/router';
const Card: FC = () => {
  const router = useRouter()
  const {PostId} = router.query
  const post = useTypedSelector((state) => state.postState.posts).filter(
    (el) => el.id === parseInt(PostId as string)
  )[0];
  return (
    <CardPost>
      <h3>{post?.title}</h3>
      <CardPostBody>{post?.body}</CardPostBody>
    </CardPost>
  );
};

export default Card;
