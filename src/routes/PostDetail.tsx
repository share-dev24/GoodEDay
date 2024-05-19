import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PopupLayout from "../components/posts/PopupLayout";
import { getPostCardById } from '../fetch/get'
import type { IPostCards } from '../types/postCardsType';
import getTimeSimple from '../modules/TimeCompiler';
import getThemeKR from '../modules/ThemeNameCompiling';
import HeartIcon from '../components/posts/HeartIcon';

const fetchPostDetailCardData = async (postId: string): Promise<IPostCards> => {
  const data = await getPostCardById(postId);
  return data || null
}

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const { data: post, error, isLoading } = useQuery({ queryKey: ['fetchPostCard', postId], queryFn: () => fetchPostDetailCardData(postId as string) });

  console.log(postId)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading post data</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <PopupLayout>
      <div className='flex flex-col gap-[8px] overflow-auto'>
        <div className='flex justify-between'>
          <div className='flex justify-center items-center gap-4px'>
            <div>{post.name}</div>
            {post.recommendation && <div className='flex justify-center items-center text-sm text-transparent bg-gradient-to-r from-secondary to-primary rounded-xl'>
              <span className=' p-3px px-6px bg-clip-text text-white bg-gradient-to-r from-secondary to-primary'>
                추천
              </span>
            </div>}
          </div>
          <span className='font-light text-gray-200'>{getTimeSimple(post.writeDate)}</span>
        </div>
        <img className='object-cover w-full h-[240px]' src={post.image} alt='리뷰사진' />

        <p>👉 테마: {getThemeKR(post.theme)}</p>
        <p>👉 주소: {post.address}</p>
        <p>👉 굳이 할 일: {post.randomTodo}</p>
        <p className='text-sm p-4px'>{post.content}</p>
        <div className='bg-gray p-md rounded-md w-[100px]'>

          <HeartIcon isLike={false} likeCounter={post.likeCount} />
        </div>
      </div>
    </PopupLayout>
  );
}
