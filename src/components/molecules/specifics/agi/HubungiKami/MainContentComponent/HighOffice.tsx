import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import { Card } from './Card';
import { CardAddress } from './CardAddress';
import maps from '@/assets/images/agi/hubungi-kami/Map-Pin.svg';

export const HighOffice = () => {
  const renderMap = () => {
    const highOfficeCoordinate = {
      lat: -6.214663280751351,
      lng: 106.82071668189862
    };
    const defaultProps = {
      center: highOfficeCoordinate,
      zoom: 16
    };

    return (
      <div className="w-full sm:h-[37.5rem] xs:h-[12rem]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <div
            style={{
              color: 'white',
              padding: '15px 10px',
              display: 'inline-flex',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Image
              src={maps}
              className="w-full h-full object-none"
              alt="maps"
            />
          </div>
        </GoogleMapReact>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[4rem]">
      <p className="font-karla font-bold sm:text-[3.5rem] xs:text-[2.25rem] text-center text-purple_dark">
        Lokasi Kantor Pusat Avrist Assurance
      </p>
      <Card className="bg-white p-[1.5rem] flex sm:flex-row xs:flex-col-reverse gap-6">
        <div className="sm:w-1/3 xs:w-full">
          <CardAddress
            title="Kantor Pusat Jakarta"
            address="World Trade Center II Lt. 7 & 8, Jl. Jenderal Sudirman Jl. Setiabudi Raya Kav 29-31, RT.8/RW.3"
            workHour="Senin-Jumat 10.00 - 14.00 WIB"
            contact="(021) 5789 8188"
          />
        </div>
        <div className="sm:w-2/3 xs:w-full">
          <Card>{renderMap()}</Card>
        </div>
      </Card>
    </div>
  );
};
