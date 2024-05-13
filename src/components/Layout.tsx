import { Outlet } from 'react-router-dom';
import Container from './common/Container';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout() {


  return (
    <div className='min-h-screen flex justify-center bg-gray'>
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
}
