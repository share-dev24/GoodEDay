import FormTitle from '../common/FormTitle';

export default function KakaoPlace() {
  return (
    <section className='w-full mt-3xl flex flex-col justify-center items-start'>
      <FormTitle title='굳이데이 추천 장소 목록' />
      <div className='w-full h-[200px] flex flex-col justify-center items-center gap-sm'>
        <p>추천 장소가 존재하지 않습니다.</p>
        <p>올바른 범위를 설정해주세요!</p>
      </div>
    </section>
  );
}
