import FormSpanText from '../../common/FormSpanText';
import FormTitle from '../../common/FormTitle';

interface ICreateFormInputProps {
  stateNumbers: string;
  handleOnChangeNumbers: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CreateFormInput({
  stateNumbers,
  handleOnChangeNumbers
}: ICreateFormInputProps) {
  return (
    <div>
      <FormTitle title='인원 설정' />
      <input
        type='number'
        value={stateNumbers}
        onChange={handleOnChangeNumbers}
        min={1}
        className='w-[100px] mx-5px py-2px px-5px border-2 border-primary rounded-md focus:outline-none'
      />{' '}
      <FormSpanText text='명' />
    </div>
  );
}
