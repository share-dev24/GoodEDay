// 인스타그램 계정과 굳이데이 노션 링크도 추가 예정 (현재 : 깃허브, 페이스북)

export default function Footer() {
  return (
    <footer className='w-full mt-5xl p-5xl flex flex-col justify-center items-start gap-5xl bg-gray-300 text-gray-200'>
      <section>
        <h1 className='text-3xl font-bold'>굳이데이</h1>
      </section>
      <section className='w-full flex flex-col justify-center items-start gap-xl font-light'>
        <p>굳이데이 제작 : GoodEDay 강지은 한세빈</p>
        <div className='flex justify-start items-center gap-md'>
          <a href='https://github.com/share-dev24/GoodEDay' target='_blank'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-gray-200 hover:fill-black'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=61559044870921'
            target='_black'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-gray-200 hover:fill-black'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z' />
            </svg>
          </a>
        </div>
        <p>문의 메일 : sharedev24@gmail.com</p>
      </section>
    </footer>
  );
}
