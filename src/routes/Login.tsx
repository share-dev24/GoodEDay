import LoginButton from '../components/common/login/LoginButton';

export default function Login() {
  return (
    <section className=' flex justify-center min-h-screen'>
      <div className='mt-[100px] w-[350px] h-[300px] flex flex-col justify-center items-center gap-[16px]'>

        <div className='text-3xl font-bold'>반가워요</div>

        <svg xmlns='http://www.w3.org/2000/svg' className='w-[24px] h-[24px] fill-primary'>
          <path d='M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z' />
        </svg>

        <div className='text-center text-12px tracking-tighter'>
          <div><span className='text-primary'>굳이데이</span>는 회원가입 없이</div>
          <div className='mt-4px'>소셜 로그인으로 간현하게 사용 가능합니다.</div>
        </div>

        <LoginButton />
      </div>
    </section>
  );
}
