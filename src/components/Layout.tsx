import { Outlet } from 'react-router-dom';
import Container from './common/Container';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
}
