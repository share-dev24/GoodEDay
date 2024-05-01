interface IMapLink {
  placeTitle: string;
  placeID: string;
}

export default function MapLink({ placeTitle, placeID }: IMapLink) {
  const mapLink = `https://map.kakao.com/link/map/${placeID}`;

  return (
    <span className='flex justify-start items-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-[20px] h-[20px] text-primary'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
        />
      </svg>
      <a
        href={mapLink}
        className='text-base font-medium text-primary underline'
        target='_blank'
      >
        {placeTitle}
      </a>
    </span>
  );
}
