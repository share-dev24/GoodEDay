// 굳이데이 후기 포스트 리스트를 보여주는 페이지

import { Outlet } from 'react-router-dom';

export default function Posts() {
  return (
    <>
      <div>posts page</div>
      {/* 팝업 스타일로 구현하기 위해 디테일 페이지가 포스트 페이지의 하위에 위치하도록 */}
      <Outlet />
    </>
  );
}
