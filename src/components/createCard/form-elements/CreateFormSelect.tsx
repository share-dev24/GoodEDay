import FormSpanText from '../../common/FormSpanText';
import FormTitle from '../../common/FormTitle';

const range = ['제한없음', '1', '5', '10', '15', '20'];

interface ICreateFormSelectProps {
  stateRange: string;
  handleOnChangeRange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CreateFormSelect({
  stateRange,
  handleOnChangeRange
}: ICreateFormSelectProps) {
  return (
    <div>
      <FormTitle title='범위 설정' />
      <FormSpanText text='현재 위치에서' />
      <select
        value={stateRange}
        onChange={handleOnChangeRange}
        className='mx-5px py-2px px-5px border-2 border-primary rounded-md focus:outline-none'
      >
        {range.map((rangeType) => (
          <option key={rangeType} value={rangeType}>
            {rangeType}
          </option>
        ))}
      </select>
      <FormSpanText text='km 이내' />
    </div>
  );
}
