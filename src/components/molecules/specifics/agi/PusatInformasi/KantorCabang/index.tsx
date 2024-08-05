'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Card } from './Card';
import { CardAddress } from './CardAddress';
import { SearchInput } from './form/Input';
import maps from '@/assets/images/Map-Pin.svg';
import Icon from '@/components/atoms/Icon';
import {
  handleGetContentCategory,
  handleGetContentDetail
} from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import { contentDetailTransformer } from '@/utils/responseTransformer';

// Import Leaflet dynamically
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

import 'leaflet/dist/leaflet.css';
const L = typeof window !== 'undefined' ? require('leaflet') : undefined;

const KantorCabang = () => {
  const [contentData, setContentData] = useState<any>();
  const [search, setSearch] = useState('');
  const [selectedMarker, setSelectedMarker] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 5
  });
  const totalPages = contentData
    ? Math.ceil(contentData?.length / pagination.itemsPerPage)
    : 0;

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  const fetchContent = async () => {
    try {
      const apiContent = await handleGetContentCategory(
        BASE_SLUG.PUSAT_INFORMASI.CONTENT.KANTOR_CABANG,
        {
          searchFilter: search
        }
      );
      const transformedContent = apiContent.data.categoryList[''] ?? [];
      const transformedData = await Promise.all(
        transformedContent?.map(async (item: any) => {
          const apiDetailContent = await handleGetContentDetail(item.id);
          const { content } = contentDetailTransformer(apiDetailContent);
          const title = item.title;
          const addressOffice = content['alamat-ho'].value;
          const operationalHourOffice = content['jam-operasional-ho'].value;
          const branchOffice = content['kantor-cabang'].value;
          const cityOffice = content['kota-ho'].value;
          const latOffice = content['latitude-ho'].value;
          const longOffice = content['longitude-ho'].value;
          const phoneOffice = content['nomor-telepon-ho'].value;
          return {
            title,
            addressOffice,
            operationalHourOffice,
            branchOffice,
            cityOffice,
            latOffice,
            longOffice,
            phoneOffice
          };
        })
      );
      setSelectedMarker(transformedData[0]);
      setContentData(transformedData);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const RenderMap = () => {
    const highOfficeCoordinate = {
      lat: selectedMarker?.latOffice,
      lng: selectedMarker?.longOffice
    };
    const defaultProps = {
      center: highOfficeCoordinate,
      zoom: 16
    };

    const eventHandlers = (item: any) => {
      setSelectedMarker(item);
    };

    return (
      <MapContainer
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '25.5rem', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {contentData?.map((item: any, index: number) => {
          const position = {
            lat: item.latOffice,
            lng: item.longOffice
          };
          return (
            <Marker
              key={index}
              eventHandlers={{ click: () => eventHandlers(item) }}
              position={position}
              icon={
                new L.Icon({
                  iconUrl: maps.src,
                  iconSize: [30, 25]
                })
              }
            ></Marker>
          );
        })}
      </MapContainer>
    );
  };

  useEffect(() => {
    fetchContent();
  }, [search]);

  return (
    <div className="flex flex-col gap-[6.25rem] w-full">
      <div className="px-[2rem] md:px-[8.5rem]">
        <p className="font-karla font-bold text-[2.25rem] md:text-[3.5rem] text-center text-purple_dark my-[80px] leading-[120%] -tracking-[0.04em]">
          Lokasi Kantor Cabang Avrist General Assurance
        </p>
        <Card className="bg-white p-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <span className="font-opensans font-bold text-[24px]">
              Kantor Cabang
            </span>
            <SearchInput
              onClick={(key: any) => setSearch(key)}
              placeholder="Cari Lokasi Kantor Cabang"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[12px] gap-y-[24px] mt-[24px]">
            {contentData?.slice(startIndex, endIndex).map((i: any, index: number) => (
              <CardAddress
                key={index}
                title={i?.title}
                address={i?.addressOffice}
                contact={i?.phoneOffice}
                workHour={i?.operationalHourOffice}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between mt-6">
            <div>
              <p className="text-[20px]">
                Menampilkan{' '}
                <span className="font-bold text-purple_dark">
                  {contentData?.length === 0 ? 0 : startIndex + 1}-
                  {Math.min(endIndex, contentData ? contentData.length : 0)}
                </span>{' '}
                dari <span className="font-bold">{contentData?.length}</span>{' '}
                hasil
              </p>
            </div>
            <div className="flex flex-row gap-[12px] items-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <div
                    key={page}
                    role="button"
                    onClick={() => {
                      setCurrentPage(page);
                      handlePageChange(page);
                    }}
                    className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                      currentPage === page ? 'text-purple_dark font-bold' : ''
                    }`}
                  >
                    {page}
                  </div>
                )
              )}
              <span
                className="mt-[3px]"
                role="button"
                onClick={() => handlePageChange(totalPages)}
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
            </div>
          </div>
        </Card>
      </div>
      <div className="bg-gray_bglightgray px-[2rem] md:px-[8.5rem] py-[5rem] md:py-[6.25rem] flex flex-col gap-[5rem]">
        <p className="font-karla font-bold text-[2.25rem] md:text-[3.5rem] text-center text-purple_dark">
          Lokasi Kantor Avrist General Assurance
        </p>
        <Card className="bg-white p-[1.5rem] grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <CardAddress
            title={selectedMarker?.title}
            address={selectedMarker?.addressOffice}
            workHour={selectedMarker?.operationalHourOffice}
            contact={selectedMarker?.phoneOffice}
            withNavigation={true}
          />
          {selectedMarker?.latOffice ? (
            <Card className="md:col-span-2 min-h-[100%] w-full">
              {RenderMap()}
            </Card>
          ) : null}
        </Card>
      </div>
    </div>
  );
};

export default KantorCabang;
