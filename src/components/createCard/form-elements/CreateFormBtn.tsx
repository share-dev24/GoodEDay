import { useNavigate } from 'react-router-dom';
import BasicButton from '../../common/BasicButton';

interface IFormData {
  themes: string[];
  range: string;
  numbers: string;
}

interface ICreateFormBtnProps {
  resetData: () => void;
  formData: IFormData;
}

export default function CreateFormBtn({
  resetData,
  formData
}: ICreateFormBtnProps) {
  const navigate = useNavigate();

  const createCardBtn = (formData: IFormData) => {
    navigate('/completed-card', {
      state: {
        themes: formData.themes,
        range: formData.range,
        numbers: formData.numbers
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
