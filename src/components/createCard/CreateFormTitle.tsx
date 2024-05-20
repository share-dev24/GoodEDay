interface ICreateFormTitleProps {
  page: 'create' | 'completed';
  name?: string | null;
}

export default function CreateFormTitle({ page, name }: ICreateFormTitleProps) {
  return (
    <section className='w-full flex flex-col justify-center items-center gap-4xl text-center'>
      <h1 className='text-2xl text-black font-semibold'>
        {page === 'create'
          ? '굳이데이 랜덤카드 생성하기 📃'
          : `${name}님의 굳이데이 카드 🙂`}
      </h1>
      <h2 className='text-lg text-black font-medium'>
        {page === 'create' ? '아래 옵션을 설정하여' : '완성된 굳이데이 카드를'}{' '}
        <br></br>
        {page === 'create'
          ? '나만의 굳이데이 램덤카드를 만들어보세요!'
          : '저장해서 실천하고 공유해보세요!'}
      </h2>
    </section>
  );
}
