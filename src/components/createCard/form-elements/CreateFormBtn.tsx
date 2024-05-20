import { useNavigate } from 'react-router-dom';
import BasicButton from '../../common/BasicButton';
import { ICreateFormBtnProps, IFormData } from '../../../types/createCardType';

export default function CreateFormBtn({
  resetData,
  formData
}: ICreateFormBtnProps) {
  const navigate = useNavigate();

  const createCardBtn = (formData: IFormData) => {
    if (!formData.selectPlace) {
      alert('추천 장소 1가지를 선택해 주세요!');
      return;
    }

    navigate('/completed-card', {
      state: {
        range: formData.range,
        numbers: formData.numbers,
        selectPlace: formData.selectPlace
      }
    });
  };

  return (
    <section className='w-full grid grid-cols-2 gap-3xl'>
      <BasicButton text='reset' onClick={resetData} />
      <BasicButton
        text='굳이데이 카드 생성'
        onClick={() => createCardBtn(formData)}
      />
    </section>
  );
}
