import html2canvas from 'html2canvas';
import { ICompletedCardBtnProps } from '../../types/completedCardType';
import BasicButton from '../common/BasicButton';
import { useUserStore } from '../../stores/store';
import FormContainer from '../common/FormContainer';

export default function ShareCard({ data }: { data: ICompletedCardBtnProps }) {
  const { displayName } = useUserStore((state) => ({
    displayName: state.displayName
  }));

  const shareBtn = () => {
    if (data.cardName === '') {
      return alert('카드 제목을 작성해 주세요!');
    }

    const target = document.getElementById('downloadContainer');
    if (!target) {
      return alert('사진 저장에 실패했습니다 😢');
    }

    html2canvas(target)
      .then((canvas) => {
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = canvas.toDataURL('image/png');
        link.download = `${data.cardName}.png`;
        link.click();
        document.body.removeChild(link);
      })
      .then(() => alert('사진을 저장했습니다 🙂'));
  };

  return (
    <div className='w-full h-full flex flex-col justify-start items-start gap-lg text-black'>
      <p>이미지 미리보기</p>
      <div id='downloadContainer' className='w-full h-full'>
        <FormContainer>
          <div className='w-full h-full flex flex-col justify-between items-center gap-md'>
            <h1 className='text-xl font-bold text-primary'>{data.cardName}</h1>
            <div className='flex flex-col justify-center items-center gap-5px text-center'>
              <p className='text-base text-primary font-light'>
                나의 굳이 할 일은?
              </p>
              <p className='text-md text-black font-semibold'>
                {data.randomTodo?.desc}
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5px text-center'>
              <p className='text-base text-primary font-light'>
                랜덤 추천 장소
              </p>
              <p className='text-md text-black font-semibold'>
                {data.selectPlace.place_name} ({data.selectPlace.address_url})
              </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-1px text-xs text-black'>
              <p>테마 : {data.theme}</p>
              <p>
                인원 : {data.numbers === '1' ? '나 혼자' : data.numbers}: 내
                현재
              </p>
              <p>범위 : 위치에서 {data.range}km 이내</p>
            </div>
            <p className='text-xs font-semibold text-gray-200'>
              @{displayName}
            </p>
          </div>
        </FormContainer>
      </div>
      <BasicButton text='이미지로 저장하기' onClick={shareBtn} />
    </div>
  );
}
