import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { IPlaceInfo } from '../../types/createCardType';

export default function KakaoMap({ data }: { data: IPlaceInfo }) {
  return (
    <div className='w-full'>
      <Map
        center={{ lat: Number(data.y), lng: Number(data.x) }}
        style={{
          width: 'full',
          height: '200px',
          borderRadius: '20px'
        }}
      >
        <MapMarker position={{ lat: Number(data.y), lng: Number(data.x) }} />
      </Map>
      <a
        href={data.place_url}
        target='_blank'
        className='block mt-md text-primary underline'
      >
        {data.place_name}
      </a>
    </div>
  );
}
