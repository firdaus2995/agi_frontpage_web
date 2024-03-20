'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Chart as GoogleChart } from 'react-google-charts';
import Email from '@/assets/images/email.svg';
import Facebook from '@/assets/images/facebook.svg';
import LinkedIn from '@/assets/images/linkedin.svg';
import Whatsapp from '@/assets/images/wa.svg';
import Icon from '@/components/atoms/Icon';

const data = [
  ['Date', 'Blue Savir', 'Tolak Ukur'],
  [new Date(2013, 1, 1), -7.5, -5],
  [new Date(2013, 2, 1), -10, -7.5],
  [new Date(2013, 3, 1), -5, -7.5],
  [new Date(2013, 4, 1), -7.5, -5],
  [new Date(2013, 5, 1), -5, -7.5],
  [new Date(2013, 6, 1), 2.5, 5],
  [new Date(2014, 1, 1), 5, 2.5],
  [new Date(2014, 2, 1), 2.5, 5],
  [new Date(2014, 3, 1), 5, 2.5],
  [new Date(2014, 4, 1), 2.5, 7.5],
  [new Date(2014, 5, 1), 5, 2.5],
  [new Date(2014, 6, 1), 2.5, 5],
  [new Date(2014, 7, 1), 2.5, 7.5],
  [new Date(2014, 8, 1), 5, 2.5],
  [new Date(2015, 1, 1), 7.5, 5],
  [new Date(2015, 2, 1), 10, 7.5],
  [new Date(2015, 3, 1), 5, -7.5],
  [new Date(2015, 4, 1), -7.5, -5],
  [new Date(2015, 5, 1), -5, -7.5],
  [new Date(2015, 6, 1), -2.5, -5],
  [new Date(2016, 1, 1), -5, -2.5],
  [new Date(2016, 2, 1), -2.5, -5],
  [new Date(2016, 3, 1), -5, -2.5],
  [new Date(2016, 4, 1), -2.5, -7.5],
  [new Date(2016, 5, 1), -5, -2.5],
  [new Date(2016, 6, 1), -2.5, -5],
  [new Date(2016, 7, 1), -2.5, -7.5],
  [new Date(2016, 8, 1), -5, -2.5],
  [new Date(2017, 1, 1), -7.5, -5],
  [new Date(2017, 2, 1), -10, -7.5],
  [new Date(2017, 3, 1), -5, -7.5],
  [new Date(2017, 4, 1), -7.5, -5],
  [new Date(2017, 5, 1), -5, -7.5],
  [new Date(2017, 6, 1), -2.5, -5],
  [new Date(2018, 1, 1), -5, -2.5],
  [new Date(2018, 2, 1), -2.5, -5],
  [new Date(2018, 3, 1), 5, 2.5],
  [new Date(2018, 4, 1), 2.5, 7.5],
  [new Date(2018, 5, 1), 5, 2.5],
  [new Date(2018, 6, 1), 2.5, 5],
  [new Date(2018, 7, 1), 2.5, 7.5],
  [new Date(2018, 8, 1), 5, 2.5],
  [new Date(2019, 1, 1), 7.5, 5],
  [new Date(2019, 2, 1), 10, 7.5],
  [new Date(2019, 3, 1), 5, 7.5],
  [new Date(2019, 4, 1), 7.5, 5],
  [new Date(2019, 5, 1), 5, 7.5],
  [new Date(2019, 6, 1), 2.5, 5],
  [new Date(2020, 1, 1), 5, 2.5],
  [new Date(2020, 2, 1), 2.5, 5],
  [new Date(2020, 3, 1), -5, -2.5],
  [new Date(2020, 4, 1), -2.5, -7.5],
  [new Date(2020, 5, 1), -5, -2.5],
  [new Date(2020, 6, 1), -2.5, -5],
  [new Date(2020, 7, 1), -2.5, -7.5],
  [new Date(2020, 8, 1), -5, -2.5],
  [new Date(2021, 1, 1), -7.5, -5],
  [new Date(2021, 2, 1), -10, -7.5],
  [new Date(2021, 3, 1), -5, -7.5],
  [new Date(2021, 4, 1), -7.5, -5],
  [new Date(2021, 5, 1), -5, -7.5],
  [new Date(2021, 6, 1), 2.5, 5],
  [new Date(2022, 1, 1), 5, 2.5],
  [new Date(2022, 2, 1), 2.5, 5],
  [new Date(2022, 3, 1), 5, 2.5],
  [new Date(2022, 4, 1), 2.5, 7.5],
  [new Date(2022, 5, 1), 5, 2.5],
  [new Date(2022, 6, 1), 2.5, 5],
  [new Date(2022, 7, 1), 2.5, 7.5],
  [new Date(2022, 8, 1), 5, 2.5]
];

const numDataPoints = data.length - 1; // Jumlah data - 1 karena data pertama adalah label
const minDateIndex = Math.max(numDataPoints - 10, 1); // Indeks dari data ke-10 sebelum terakhir atau 1 jika total data kurang dari 10
const maxDateIndex = numDataPoints; // Indeks dari data terakhir

const minDate = new Date((data[minDateIndex][0] as Date).getTime());
const maxDate = new Date((data[maxDateIndex][0] as Date).getTime());

const options = {
  hAxis: {
    slantedText: false,
    format: 'MM-yyyy',
    gridlines: {
      color: 'transparent'
    }
  },
  colors: ['#5E217C', '#6FB06E'],
  vAxis: {
    format: "#,##0.0'%'",
    ticks: [-10, -7.5, -5, -2.5, 0, 2.5, 5, 7.5, 10]
  },
  animation: {
    duration: 1000,
    easing: 'out',
    startup: true
  },
  enableInteractivity: false,
  legend: { position: 'top', alignment: 'center' }
};

const Chart = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center pb-64 relative">
      <div className="w-full flex md:flex-row xs:flex-col gap-4 justify-between items-center">
        <div className="flex flex-row gap-4">
          <div className="text-xl font-semibold">Kinerja</div>
          <div className="flex flex-row gap-2">
            <div
              role="button"
              className="p-2 border font-semibold border-bright-purple text-bright-purple bg-white rounded-lg text-xs"
            >
              YTD
            </div>
            <div
              role="button"
              className="p-2 border font-semibold border-bright-purple text-bright-purple bg-white rounded-lg text-xs"
            >
              1Y
            </div>
            <div
              role="button"
              className="p-2 border font-semibold border-bright-purple text-bright-purple bg-white rounded-lg text-xs"
            >
              3Y
            </div>
            <div
              role="button"
              className="p-2 border font-semibold border-bright-purple text-bright-purple bg-white rounded-lg text-xs"
            >
              5Y
            </div>
            <div
              role="button"
              className="p-2 border font-semibold border-bright-purple text-bright-purple bg-white rounded-lg text-xs"
            >
              Semua
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div
            role="button"
            className="p-2 flex flex-row items-center gap-2 border font-semibold border-light-purple bg-white rounded-lg text-xs"
          >
            <Icon
              width={16}
              height={16}
              name="calendarIcon"
              color="purple_verylight"
            />
            <div>1 Januari 2024</div>
            <Icon
              width={16}
              height={16}
              name="arrowRightIcon"
              color="purple_verylight"
            />
            <div>31 Januari 2024</div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div
              className="flex items-center"
              role="button"
              onClick={() => setIsVisible(!isVisible)}
            >
              <Icon
                width={16}
                height={16}
                name="share"
                color="purple_verylight"
              />
            </div>

            <div className="text-xs font-bold">Share</div>

            {isVisible && (
              <div
                className="absolute right-0 mt-10 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
                role="menu"
              >
                <div className="py-1 flex flex-row gap-5" role="none">
                  <div className="flex flex-col gap-1 items-center">
                    <Image
                      role="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className="h-auto w-5"
                      src={Whatsapp}
                      alt="whatsapp"
                    />
                    <div className="text-xs font-bold">Whatsapp</div>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <Image
                      role="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className="h-auto w-5"
                      src={Email}
                      alt="email"
                    />
                    <div className="text-xs font-bold">Email</div>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <Image
                      role="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className="h-auto w-5"
                      src={LinkedIn}
                      alt="linkedin"
                    />
                    <div className="text-xs font-bold">LinkedIn</div>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <Image
                      role="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className="h-auto w-5"
                      src={Facebook}
                      alt="facebook"
                    />
                    <div className="text-xs font-bold">Facebook</div>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <div
                      role="button"
                      className="items-center"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      <Icon
                        width={18}
                        height={18}
                        name="copyUrl"
                        color="purple_verylight"
                      />
                    </div>
                    <div className="text-xs font-bold">Copy URL</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <GoogleChart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        chartPackages={['corechart', 'controls']}
        controls={[
          {
            controlType: 'ChartRangeFilter',
            options: {
              curveType: 'function',
              filterColumnIndex: 0,
              ui: {
                chartType: 'LineChart',
                chartOptions: {
                  colors: ['#5E217C', '#6FB06E'],
                  curveType: 'function',
                  chartArea: {
                    width: '75%',
                    height: '50%'
                  },
                  hAxis: {
                    baselineColor: 'none',
                    textPosition: 'none',
                    gridlines: {
                      color: 'transparent'
                    }
                  },
                  vAxis: {
                    slantedText: false,
                    viewWindow: { min: -10, max: 10 },
                    gridlines: {
                      color: 'transparent'
                    }
                  },
                  series: {
                    0: { color: '#5E217C' },
                    1: { color: 'transparent' }
                  }
                }
              }
            },
            controlPosition: 'bottom',
            controlWrapperParams: {
              state: {
                range: {
                  start: minDate,
                  end: maxDate
                }
              }
            }
          }
        ]}
      />
    </div>
  );
};

export default Chart;
