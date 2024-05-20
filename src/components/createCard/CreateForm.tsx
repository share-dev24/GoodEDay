import { useCallback, useEffect, useState } from 'react';
import FormContainer from '../common/FormContainer';
import KakaoPlace from './KakaoPlace';
import CreateFormCheckbox from './form-elements/CreateFormCheckbox';
import CreateFormSelect from './form-elements/CreateFormSelect';
import CreateFormInput from './form-elements/CreateFormInput';
import CreateFormBtn from './form-elements/CreateFormBtn';
import { useLocation } from 'react-router-dom';
import { ILocation, IPlaceInfo } from '../../types/createCardType';
import FormTitle from '../common/FormTitle';

export default function CreateForm() {
  const searchTheme = useLocation().pathname.split('/')[2];
  const [location, setLocation] = useState<ILocation>();
  const [themes, setThemes] = useState<string[]>(
    searchTheme !== 'random' ? [searchTheme] : []
  );
  const [range, setRange] = useState('제한없음');
  const [numbers, setNumbers] = useState('1');
  const [selectPlace, setSelectPlace] = useState<IPlaceInfo | null>(null);

  const getLocationSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;
    setLocation({ latitude, longitude });
  };

  const getLocationError = (error: GeolocationPositionError) => {
    console.log(error.message);
  };

  const handleOnChangeTheme = (value: string) => {
    const isChecked = themes.includes(value);

    if (isChecked) {
      setThemes((pre) => pre.filter((theme) => theme !== value));
    } else {
      setThemes((pre) => [...pre, value]);
    }
  };

  const handleOnChangeRange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRange(e.target.value);
    },
    []
  );

  const handleOnChangeNumbers = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNumbers(e.target.value);
    },
    []
  );

  const handleOnClickPlace = (placeInfo: IPlaceInfo | null) => {
    setSelectPlace(placeInfo);
  };

  const resetData = useCallback(() => {
    setThemes(searchTheme !== 'random' ? [searchTheme] : []);
    setRange('제한없음');
    setNumbers('1');
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getLocationSuccess,
      getLocationError
    );
  }, []);

  return (
    <>
      <form className='w-full'>
        <FormContainer>
          <CreateFormCheckbox
            pathTheme={searchTheme}
            stateThemes={themes}
            handleOnChangeTheme={handleOnChangeTheme}
          />
          <>
            <CreateFormSelect
              stateRange={range}
              handleOnChangeRange={handleOnChangeRange}
            />
          </>
          <CreateFormInput
            stateNumbers={numbers}
            handleOnChangeNumbers={handleOnChangeNumbers}
          />
        </FormContainer>
      </form>
      <section className='w-full h-[250px] flex flex-col justify-center items-start'>
        <FormTitle title='굳이데이 추천 장소 목록' />
        {location && themes ? (
          <KakaoPlace
            userLocation={location}
            formData={{ themes, range }}
            userPlace={{ selectPlace, handleOnClickPlace }}
          />
        ) : (
          <div className='w-full h-full flex flex-col justify-center items-center gap-sm text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-[24px] h-[24px] fill-black'
            >
              <path
                fillRule='evenodd'
                d='M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z'
                clipRule='evenodd'
              />
            </svg>
            <p>현재 위치를 가져오고 있습니다.</p>
          </div>
        )}
      </section>
      <CreateFormBtn
        resetData={resetData}
        formData={{ themes, range, numbers, selectPlace }}
      />
    </>
  );
}
