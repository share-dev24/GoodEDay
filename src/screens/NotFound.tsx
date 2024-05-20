import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-md text-black'>
      <h1 className='text-3xl font-bold'>Not Found page</h1>
      <h3 className='text-xl font-semibold'>
        😢 죄송합니다, 존재하지 않는 페이지입니다.
      </h3>
      <p className='text-sm text-gray-200'>
        (아래 버튼 클릭하여 홈으로 이동해 주세요!)
      </p>
      <Link
        to='/'
        className='mt-sm p-sm border-2 border-solid border-primary text-primary font-medium rounded-md transition duration-250 ease-in-out hover:bg-primary hover:text-white'
      >
        Home으로 이동
      </Link>
    </main>
  );
}
