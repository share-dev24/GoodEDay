import FormTitle from '../../common/FormTitle';

const themeList = [
  { id: 1, label: '카페', value: 'cafe' },
  { id: 2, label: '맛집', value: 'restaurant' },
  { id: 3, label: '문화생활', value: 'event' },
  { id: 4, label: '관광명소', value: 'spot' }
];

interface ICreateFormCheckboxProps {
  pathTheme: string;
  stateThemes: string[];
  handleOnChangeTheme: (value: string) => void;
}

export default function CreateFormCheckbox({
  pathTheme,
  stateThemes,
  handleOnChangeTheme
}: ICreateFormCheckboxProps) {
  // pathname -> 한글로 변경하는 함수
  const changePathTheme = (pathTheme: string) => {
    switch (pathTheme) {
      case 'cafe':
        return '카페';
      case 'restaurant':
        return '맛집';
      case 'event':
        return '문화생활';
      case 'spot':
        return '관광명소';
    }
  };

  return (
    <div>
      <FormTitle title='테마 설정' />
      {pathTheme === 'random' ? (
        themeList.map((theme) => (
          <label key={theme.id} htmlFor={theme.label} className='ml-sm'>
            <input
              type='checkbox'
              id={theme.label}
              onChange={() => handleOnChangeTheme(theme.value)}
              checked={stateThemes.includes(theme.value)}
              className='mr-2px'
            />{' '}
            {theme.label}
          </label>
        ))
      ) : (
        <p className='text-center'>{changePathTheme(pathTheme)}</p>
      )}
    </div>
  );
}
