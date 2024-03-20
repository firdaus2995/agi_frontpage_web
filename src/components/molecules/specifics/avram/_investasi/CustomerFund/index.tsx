import React from 'react';
import StepsBox from '../../StepsBox';
import VideoPlayer, { VideoPlayerProps } from '../../VideoPlayer';
import CustomerFundTabs from './components/CustomerFundTabs';
import InvestmentAdvisorTab from './components/InvestmentAdvisorTab';
import SAMPLE_DATA from './sample-data.json';

import { CustomerFundProps, TabsItemType } from './types';
import Icon from '@/components/atoms/Icon';

const CustomerFund: React.FC<CustomerFundProps> = async ({ searchParams }) => {
  const currentTab = (() => {
    const tab = searchParams['tab'] ?? 'dana-nasabah';
    return tab;
  })();

  const getTabsData = async () => {
    return new Promise<TabsItemType[]>((resolve) => {
      setTimeout(() => {
        resolve(SAMPLE_DATA.tabs);
      }, 1000);
    });
  };

  const getVideosData = async () => {
    return new Promise<VideoPlayerProps[]>((resolve) => {
      setTimeout(() => {
        resolve(SAMPLE_DATA.videos);
      }, 1000);
    });
  };

  const tabs = await getTabsData();
  const videos = await getVideosData();
  const currentVideo = (() => {
    if (videos.length <= 1) return undefined;
    if (currentTab === 'dana-nasabah') {
      return videos[0];
    }
    return videos[1];
  })();
  const STEPS_DATA = [
    {
      icon: (
        <Icon name="keyIcon" color="purple_verylight" width={48} isSquare />
      ),
      title: 'Langkah 1',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto id nemo quis repellat illo?'
    },
    {
      icon: (
        <Icon name="xcrossIcon" color="purple_verylight" width={48} isSquare />
      ),
      title: 'Langkah 2',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto id nemo quis repellat illo?'
    },
    {
      icon: (
        <Icon name="globeIcon" color="purple_verylight" width={48} isSquare />
      ),
      title: 'Langkah 3',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto id nemo quis repellat illo?'
    },
    {
      icon: (
        <Icon name="fileIcon" color="purple_verylight" width={48} isSquare />
      ),
      title: 'Langkah 4',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto id nemo quis repellat illo?'
    }
  ];

  const SimpleText: React.FC<{ leading: string; highlight: string }> = ({
    leading,
    highlight
  }) => {
    return (
      <p className="text-[1.875rem] md:text-[3rem] leading-snug block font-karla font-light tracking-tighter">
        {leading}{' '}
        <span className="font-bold text-purple_dark">{highlight}</span>.
      </p>
    );
  };

  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center md:px-20 xs:p-5 md:py-10 gap-12">
      <div className="self-center">
        <CustomerFundTabs items={tabs} tab={currentTab} />
      </div>
      <SimpleText
        leading="Temukan semua kebutuhan investasi jangka panjang yang Anda butuhkan dengan"
        highlight="tim profesional kami."
      />
      {currentVideo !== undefined && (
        <div className="mx-auto max-w-[70rem] aspect-video w-full rounded-lg overflow-hidden shadow-lg">
          <VideoPlayer
            thumbnail={currentVideo.thumbnail}
            url={currentVideo.url}
          />
        </div>
      )}
      {currentTab === 'penasihat' ? (
        <InvestmentAdvisorTab />
      ) : (
        <>
          <SimpleText
            leading="Bagaimana kami mendukung"
            highlight="investasi Anda."
          />
          <div className="flex justify-around flex-wrap gap-6">
            {STEPS_DATA.map((item, index) => (
              <StepsBox
                key={index}
                iconRenderer={() => item.icon}
                title={item.title}
                desc={item.desc}
                customClass="basis-52 grow"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerFund;
