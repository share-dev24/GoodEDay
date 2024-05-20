import { useQuery } from '@tanstack/react-query';
import { createKakaoLocalUrl, getKakaoPlaces } from '../../modules/map/map';
import { ILocationProps, ILocationResult } from '../../types/createCardType';

export default function KakaoPlace({
  userLocation,
  formData,
  userPlace
}: ILocationProps) {
  const getPlaces = async (): Promise<ILocationResult[] | undefined> => {
    userPlace?.handleOnClickPlace(null);
    const fetchPlaces = [];

    try {
      if (!userLocation) return;

      for (let i = 0; i < formData.themes.length; i++) {
        const res = await getKakaoPlaces(
          createKakaoLocalUrl(userLocation, formData, formData.themes[i])
        );

        fetchPlaces.push(...res.data.documents);
      }

      return fetchPlaces;
    } catch (error) {
      throw new Error(`Error fetching recommended places: ${error}`);
    }
  };

  const { isLoading, data: places } = useQuery({
    queryKey: ['kakaoPlaces', userLocation, formData.themes, formData.range],
    queryFn: getPlaces
  });

  if (isLoading)
    return (
      <div className='w-full h-full flex flex-col justify-center items-center text-black'>
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
      </div>
    );

  return (
    <>
      {places?.length ? (
        <div className='w-full h-full overflow-y-auto scroll-smooth'>
          <div className='flex flex-col justify-center items-center gap-sm '>
            {places?.map((place) => (
              <div
                key={place.id}
                onClick={() =>
                  userPlace?.handleOnClickPlace({
                    id: place.id,
                    x: place.x,
                    y: place.y,
                    category_group_code: place.category_group_code,
                    place_name: place.place_name,
                    place_url: place.place_url
                  })
                }
                className={`w-full px-md py-2xl flex flex-col justify-center items-start gap-xl text-black  border border-solid border-gray-200 rounded-md cursor-pointer hover:bg-gray ${place.id === userPlace?.selectPlace?.id ? 'bg-gray' : null}`}
              >
                <div className='w-full flex justify-between items-center gap-md'>
                  <p className='text-md font-semibold'>
                    {`${place.category_group_name}) ${place.place_name}`}
                  </p>
                  <p className='text-sm'>{place.address_name}</p>
                </div>
                <div className='w-full flex justify-start items-center gap-5px text-sm text-gray-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[12px] h-[12px] fill-gray-200'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
                      clip='evenodd'
                    />
                  </svg>
                  <p>
                    {place.phone
                      ? place.phone
                      : '전화번호가 존재하지 않습니다.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='w-full h-[200px] flex flex-col justify-center items-center gap-sm'>
          <p>추천 장소가 존재하지 않습니다.</p>
          <p>올바른 테마와 범위를 설정해주세요!</p>
        </div>
      )}
    </>
  );
}
