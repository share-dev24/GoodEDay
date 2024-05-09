interface ILoginButton {
  type: string;
  onClick: () => void;
}

export default function LoginButton({ type, onClick }: ILoginButton) {
  return (
    <button
      onClick={onClick}
      className='w-full p-md text-xl font-bold text-white bg-gradient-to-r from-secondary to-primary rounded-md transition duration-150 ease-in-out hover:opacity-80'
    >
      {type} 로그인으로 시작하기
    </button>
  );
}
