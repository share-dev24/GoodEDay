import { useEffect, useState } from 'react';
import FormTitle from '../common/FormTitle';
import { createKakaoLocalUrl, getKakaoPlaces } from '../../modules/map/map';
import { ILocationProps, ILocationResult } from '../../types/createCardType';

export default function KakaoPlace({ userLocation, formData }: ILocationProps) {
  const [places, setPlaces] = useState<ILocationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectPlace, setSelectPlace] = useState('');

  const getKaKaoPlaces = async () => {
    try {
      if (!userLocation) return;
      setLoading(true);

      const res = await getKakaoPlaces(
        createKakaoLocalUrl(userLocation, formData, formData.themes[0])
      );
      const placeData = await res.data.documents;

      setPlaces(placeData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onClickPlace = (placeId: string) => {
    setSelectPlace(placeId);
  };

  useEffect(() => {
    if (userLocation) getKaKaoPlaces();
  }, [userLocation, formData]);

  return (
    <section className='w-full h-[250px] mt-3xl flex flex-col justify-center items-start'>
      <FormTitle title='굳이데이 추천 장소 목록' />
      {places.length ? (
        <>
          {loading ? (
            <div className='w-full h-full flex justify-center items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-[24px] h-[24px] fill-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          ) : (
            <div className='w-full h-full overflow-y-auto scroll-smooth'>
              <div className='flex flex-col justify-center items-center gap-5px '>
                {places.map((place) => (
                  <div
                    key={place.id}
                    onClick={() => onClickPlace(place.id)}
                    className={`w-full px-md py-2xl flex justify-between items-center gap-sm text-white bg-primary opacity-45 rounded-md cursor-pointer ${place.id === selectPlace ? 'border-4 border-solid border-black' : null}`}
                  >
                    <p>{place.place_name}</p>
                    <p>{place.address_name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className='w-full h-[200px] flex flex-col justify-center items-center gap-sm'>
          <p>추천 장소가 존재하지 않습니다.</p>
          <p>올바른 범위를 설정해주세요!</p>
        </div>
      )}
    </section>
  );
}
