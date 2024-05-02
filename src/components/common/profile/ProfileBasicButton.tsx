import { Link } from 'react-router-dom';

interface IProfileBasicButton {
  cardId: string;
  postCheck: boolean;
}

export default function ProfileBasicButton({
  postCheck,
  cardId
}: IProfileBasicButton) {
  return (
    <Link
      to={postCheck ? `${cardId}` : `create-post/${cardId}`}
      className='w-full p-2px flex justify-center items-center bg-gradient-to-r from-secondary to-primary text-sm font-semibold text-center rounded-full'
    >
      <span
        className={`w-full py-5px rounded-full ${postCheck ? 'bg-transparent' : 'bg-white'}`}
      >
        <span
          className={`${postCheck ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary'}`}
        >
          {postCheck ? '실천 완료!' : '포스트 작성하기'}
        </span>
      </span>
    </Link>
  );
}
