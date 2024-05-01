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
      className='block w-full p-[5px] bg-gradient-to-r from-secondary to-primary text-sm text-white font-semibold text-center rounded-full'
    >
      {postCheck ? '실천 완료!' : '포스트 작성하기'}
    </Link>
  );
}
