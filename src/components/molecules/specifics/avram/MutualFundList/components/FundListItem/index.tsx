import React from 'react';
import { FundListItemType } from '../../types';
import PerformancePolygon from '../PerformancePolygon';
import PerformanceProgressBar from '../PerformanceProgressBar';
import TagPill from '../TagPill';
import Button from '@/components/atoms/Button/Button';

type FundListItemProps = {
  item: FundListItemType;
};

const FundListItem: React.FC<FundListItemProps> = ({ item }) => {
  const determineMetaData = (sign: 'high' | 'mid' | 'low') => {
    switch (sign) {
      case 'high':
        return {
          color: 'text-green_approval',
          sign: '+'
        };
      case 'mid':
        return {
          color: 'text-yellow_warning',
          sign: ''
        };
      case 'low':
        return {
          color: 'text-red_error',
          sign: '-'
        };
      default:
        return {
          color: '',
          sign: ''
        };
    }
  };

  const performanceData = [
    {
      name: 'Tahun Berjalan',
      number: item.yearlyPerformance.ongoing.number,
      sign: item.yearlyPerformance.ongoing.sign
    },
    {
      name: '1 Tahun',
      number: item.yearlyPerformance.firstYear.number,
      sign: item.yearlyPerformance.firstYear.sign
    },
    {
      name: '3 Tahun',
      number: item.yearlyPerformance.thirdYear.number,
      sign: item.yearlyPerformance.thirdYear.sign
    },
    {
      name: '5 Tahun',
      number: item.yearlyPerformance.fifthYear.number,
      sign: item.yearlyPerformance.fifthYear.sign
    }
  ];

  return (
    <div className="flex flex-col gap-6 border-1 border-solid border-gray_bglightgray rounded-xl p-8 shadow-lg">
      {/* Top content */}
      <div className="flex flex-col gap-2">
        <p className="text-dark-purple text-xl sm:text-2xl font-bold">
          {item.title}
        </p>
        <div className="flex gap-2">
          {item.tags.map((tag, index) => (
            <TagPill key={index}>{tag}</TagPill>
          ))}
        </div>
      </div>

      {/* Main Content */}
      {/* <div className="flex gap-4 justify-between self-stretch"> */}
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr_2fr]">
        {/* NAB */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center text-base">
            <TagPill>NAB</TagPill>
            {item.nab}
          </div>
          <p className="text-3xl sm:text-5xl font-light !font-karla whitespace-nowrap">
            Rp. <span className="text-dark-purple font-bold">{item.rp}</span>
          </p>
        </div>

        {/* Kinerja per hari */}
        <div className="flex flex-col gap-2 items-start">
          <TagPill>Kinerja per hari</TagPill>
          <div className="flex gap-1 items-center">
            <PerformancePolygon type={item.dailyPerformance.threshold} />
            <p
              className={`
                ${determineMetaData(item.dailyPerformance.threshold).color}
                text-xl
              `}
            >
              {item.dailyPerformance.number}%
            </p>
          </div>
        </div>

        {/* Kinerja per tahun majemuk */}
        <div className="flex flex-col gap-2 items-start">
          <TagPill>Kinerja per tahun majemuk</TagPill>
          <div className="flex gap-x-6 sm:gap-x-9 gap-y-4 flex-wrap">
            {performanceData.map((performanceItem, index) => (
              <div className="flex flex-col gap-1" key={index}>
                <p className="text-sm font-bold">{performanceItem.name}</p>
                <p className="text-xl">
                  <span>{determineMetaData(performanceItem.sign).sign}</span>
                  {performanceItem.number}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-x-8 gap-y-4 flex-wrap">
          <TagPill>Tingkat Risiko</TagPill>
          <PerformanceProgressBar value={item.risk} />
        </div>
        <Button title="Pelajari Selengkapnya" />
      </div>
    </div>
  );
};

export default FundListItem;
