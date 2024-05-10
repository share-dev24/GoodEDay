import { range } from '../../../stores/static';
import { ICreateFormSelectProps } from '../../../types/createCardType';
import FormSpanText from '../../common/FormSpanText';
import FormTitle from '../../common/FormTitle';

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
