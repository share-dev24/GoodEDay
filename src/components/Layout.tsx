import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>nav 위치</nav>
      <Outlet />
    </>
  );
}
