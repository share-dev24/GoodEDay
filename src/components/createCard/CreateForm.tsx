import { useCallback, useEffect, useState } from 'react';
import FormContainer from '../common/FormContainer';
import KakaoPlace from './KakaoPlace';
import CreateFormCheckbox from './form-elements/CreateFormCheckbox';
import CreateFormSelect from './form-elements/CreateFormSelect';
import CreateFormInput from './form-elements/CreateFormInput';
import CreateFormBtn from './form-elements/CreateFormBtn';
import { useLocation } from 'react-router-dom';

interface ILocation {
  latitude: number;
  longitude: number;
}

export default function CreateForm() {
  const searchTheme = useLocation().pathname.split('/')[2];
  const [location, setLocation] = useState<ILocation>();
  const [themes, setThemes] = useState<string[]>(
    searchTheme !== 'random' ? [searchTheme] : []
  );
  const [range, setRange] = useState('제한없음');
  const [numbers, setNumbers] = useState('1');

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
      <KakaoPlace userLocation={location} formData={{ themes, range }} />
      <CreateFormBtn
        resetData={resetData}
        formData={{ themes, range, numbers }}
      />
    </>
  );
}
