// 회원 페이지

import { Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <>
      <div>profile page</div>
      {/* 회원 페이지에서 카드 후기 작성 클릭하면 작성 페이지가 팝업처럼 보이기 위해 작성 페이지를 아래 하위로 위치 */}
      <Outlet />
    </>
  );
}
