import PostCardsSection from '../components/posts/PostCardsSection';
import MainTitle from '../components/common/MainTitle';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../modules/ScrollToTop';

export default function Posts() {
  return (
    <>
      <ScrollToTop />
      <MainTitle text='나의 굳이데이를 자랑해보세요✍🏻' />
      <PostCardsSection rowInit={8} />
      <Outlet />
    </>
  );
}
