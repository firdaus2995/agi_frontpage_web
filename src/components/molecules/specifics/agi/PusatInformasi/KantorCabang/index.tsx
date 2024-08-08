'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useMap } from 'react-leaflet';
import { Card } from './Card';
import { CardAddress } from './CardAddress';
import { SearchInput } from './form/Input';
import maps from '@/assets/images/Map-Pin.svg';
import Icon from '@/components/atoms/Icon';
import NotFound from '@/components/atoms/NotFound';
import { handleGetContentCategory } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import {
  contentCategoryTransformer,
  contentStringTransformer
} from '@/utils/responseTransformer';

// Import Leaflet dynamically
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

import 'leaflet/dist/leaflet.css';
const L = typeof window !== 'undefined' ? require('leaflet') : undefined;

const KantorCabang = () => {
  const [contentData, setContentData] = useState<any>([]);
  const [tempData, setTempData] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [dataHo, setDataHo] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = contentData
    ? contentData.slice(startIndex, endIndex)
    : [];
  const totalPages = contentData
    ? Math.ceil(contentData.length / itemsPerPage)
    : 0;
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const [mapCenter, setMapCenter] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const apiContent = await handleGetContentCategory(
          BASE_SLUG.PUSAT_INFORMASI.CONTENT.KANTOR_CABANG,
          {
            includeAttributes: 'true'
          }
        );
        const transformedContent = contentCategoryTransformer(apiContent, '');
        if (transformedContent?.length === 0) {
          return setTempData([]);
        }
        const content = transformedContent[0].content;
        const title = content['kota-ho'].value;
        const addressOffice = content['alamat-ho'].value;
        const operationalHourOffice = content['jam-operasional-ho'].value;
        const branchOffice = content['kantor-cabang'].value;
        const cityOffice = content['kota-ho'].value;
        const latOffice = parseFloat(content['latitude-ho'].value);
        const longOffice = parseFloat(content['longitude-ho'].value);
        const phoneOffice = content['nomor-telepon-ho'].value;
        const data = {
          title,
          addressOffice,
          operationalHourOffice,
          branchOffice,
          cityOffice,
          latOffice,
          longOffice,
          phoneOffice
        };
        setDataHo(data);

        const branchData: any = [];
        transformedContent[0]?.content['kantor-cabang']?.contentData.map(
          (item: any) => {
            const kota = contentStringTransformer(
              item.details.find(
                (detail: { fieldId: string }) => detail.fieldId === 'kota'
              )
            );
            const alamat = contentStringTransformer(
              item.details.find(
                (detail: { fieldId: string }) => detail.fieldId === 'alamat'
              )
            );
            const jam = contentStringTransformer(
              item.details.find(
                (detail: { fieldId: string }) =>
                  detail.fieldId === 'jam-operasional'
              )
            );
            const nomorTelepon = contentStringTransformer(
              item.details.find(
                (detail: { fieldId: string }) =>
                  detail.fieldId === 'nomor-telepon'
              )
            );
            const latitude = parseFloat(
              contentStringTransformer(
                item.details.find(
                  (detail: { fieldId: string }) => detail.fieldId === 'latitude'
                )
              )
            );
            const longitude = parseFloat(
              contentStringTransformer(
                item.details.find(
                  (detail: { fieldId: string }) =>
                    detail.fieldId === 'longitude'
                )
              )
            );
            branchData.push({
              kota,
              alamat,
              jam,
              nomorTelepon,
              latitude,
              longitude
            });
          }
        );
        setTempData(branchData);
      } catch (error: any) {
        throw new Error(error.message);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    if (dataHo) {
      onClickMarker(dataHo?.latOffice, dataHo?.longOffice);
    }
  }, [dataHo]);

  const onClickMarker = (lat: number, lng: number) => {
    if (lat !== 0 || lng !== 0) {
      setMapCenter([lat, lng]);
    }
  };

  const RenderMap = () => {
    const highOfficeCoordinate = {
      lat: dataHo?.latOffice,
      lng: dataHo?.longOffice
    };
    const defaultProps = {
      center: highOfficeCoordinate,
      zoom: 16
    };

    const ChangeView = ({ center, zoom }: any) => {
      const map = useMap();
      map.setView(center, zoom);
      return null;
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
        <ChangeView center={mapCenter} zoom={defaultProps.zoom} />
        <Marker
          position={highOfficeCoordinate}
          icon={
            new L.Icon({
              iconUrl: maps.src,
              iconSize: [30, 25]
            })
          }
        ></Marker>
        {contentData?.map((item: any, index: number) => {
          const position = {
            lat: item.latitude,
            lng: item.longitude
          };
          return (
            <Marker
              key={index}
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
    if (search === '') {
      setContentData(tempData);
    } else {
      const temp = tempData?.filter((value: any) =>
        value.kota?.toLowerCase().includes(search.toLowerCase())
      );
      setContentData(temp);
    }
  }, [tempData, search]);

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
          {paginatedData?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[12px] gap-y-[24px] mt-[24px]">
              {paginatedData?.map((i: any, index: number) => (
                <CardAddress
                  key={index}
                  title={i?.kota}
                  address={i?.alamat}
                  contact={i?.nomorTelepon}
                  workHour={i?.jam}
                  lat={i?.latitude}
                  lng={i.longitude}
                  onChangeCenter={onClickMarker}
                />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
          <div className="flex flex-col gap-4 md:flex-row justify-between mt-[24px]">
            <p className="text-[20px]">
              Menampilkan{' '}
              <span className="font-bold text-purple_dark">
                {contentData?.length === 0 ? 0 : startIndex + 1}-
                {Math.min(endIndex, contentData ? contentData.length : 0)}
              </span>{' '}
              dari <span className="font-bold">{contentData?.length}</span>{' '}
              hasil
            </p>
            <div className="flex flex-row gap-1 lg:gap-[12px] items-center">
              <span
                className="mt-[3px] rotate-180"
                role="button"
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
              >
                <Icon name="chevronRight" color="purple_dark" />
              </span>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <div
                    key={page}
                    role="button"
                    onClick={() => handlePageChange(page)}
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
                onClick={() =>
                  handlePageChange(
                    currentPage === totalPages ? currentPage : currentPage + 1
                  )
                }
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
            title={dataHo?.title}
            address={dataHo?.addressOffice}
            workHour={dataHo?.operationalHourOffice}
            contact={dataHo?.phoneOffice}
            lat={dataHo?.latOffice}
            lng={dataHo?.longOffice}
            onChangeCenter={onClickMarker}
          />
          {dataHo?.latOffice ? (
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
