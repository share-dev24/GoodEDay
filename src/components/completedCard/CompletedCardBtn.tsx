import BasicButton from '../common/BasicButton';

export default function CompletedCardBtn() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-3xl'>
      <section className='w-full grid grid-cols-2 gap-3xl'>
        <BasicButton
          text='다시 생성하기'
          onClick={() => console.log('다시 생성!')}
        />
        <BasicButton
          text='카드 공유하기'
          onClick={() => console.log('카드 공유!')}
        />
      </section>
      <BasicButton
        text='나의 카드 목록에 저장하기'
        onClick={() => console.log('카드 저장!')}
      />
    </div>
  );
}

// 카드 저장 -> 랜덤으로 문서 ID 저장
