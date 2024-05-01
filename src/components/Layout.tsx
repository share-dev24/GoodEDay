import { Outlet } from 'react-router-dom';
import BasicButton from './common/BasicButton';
import Container from './common/Container';

export default function Layout() {
  return (
    <>
      <Container>
        <nav>nav 위치</nav>
        <BasicButton text="button" />
        <Outlet />
      </Container>
    </>
  );
}
