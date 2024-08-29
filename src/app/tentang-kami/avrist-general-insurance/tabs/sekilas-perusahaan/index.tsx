'use client';
import { useEffect, useState } from 'react';
import { ISetData } from '../../page';
import PurposeCard from '@/components/molecules/specifics/agi/Cards/PurposeCard';
import Timeline from '@/components/molecules/specifics/agi/TimeLine';
import VisiMisi from '@/components/molecules/specifics/agi/VisiMisi';
import {
  handleGetContent,
  handleGetContentPage
} from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import {
  contentStringTransformer,
  handleTransformedContent,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const SekilasPerusahaan: React.FC<ISetData> = ({ setData }) => {
  const [contentDataTitle, setContentDataTitle] = useState('');
  const [section2Title, setSection2Title] = useState('');
  const [section3Title, setSection3Title] = useState('');
  const [section3Link, setSection3Link] = useState('');
  const [contentData, setContentData] = useState<any>();
  const [tagline, setTagline] = useState('');
  const [desc, setDesc] = useState('');
  const [visiMisi, setVisiMisi] = useState<any>();
  const [purposeData, setPurposeData] = useState<any>();

  useEffect(() => {
    const groupedData: any = {};

    handleGetContentPage(
      BASE_SLUG.TENTANG_AVRIST_LIFE.PAGE.SEKILAS_PERUSAHAAN
    ).then((res: any) => {
      setData(res);
      const { content } = pageTransformer(res);

      setTagline(
        contentStringTransformer(content['sekilasperusahaan-tagline'])
      );
      setDesc(contentStringTransformer(content['sekilasperusahaan-deskripsi']));

      const descMisi: any = [];
      content['misi'].contentData.map((val: { details: { value: any }[] }) =>
        descMisi.push(val.details[0].value)
      );
      const tempVisiMisi = [
        {
          title: contentStringTransformer(content['nama-visi']),
          icon: singleImageTransformer(content['icon-visi']).imageUrl,
          desc: contentStringTransformer(content['isi-visi'])
        },
        {
          title: contentStringTransformer(content['nama-misi']),
          icon: singleImageTransformer(content['icon-misi']).imageUrl,
          desc: descMisi
        }
      ];
      setVisiMisi(tempVisiMisi);

      const purposeTemp = [];
      for (let i = 0; i < 6; i++) {
        const icon = singleImageTransformer(content[`icon-card-${i + 1}`]);
        const title = contentStringTransformer(content[`nama-card-${i + 1}`]);
        const subtitle = contentStringTransformer(
          content[`deskripsi-card-${i + 1}`]
        );
        const link = contentStringTransformer(
          content[`label-hyperlink-card-${i + 1}`]
        );
        const href = contentStringTransformer(
          content[`url-hyperlink-card-${i + 1}`]
        );

        if (icon && title && subtitle) {
          purposeTemp.push({
            icon: icon.imageUrl,
            title: title,
            desc: subtitle,
            link: link,
            href: href
          });
        }
      }

      setPurposeData(purposeTemp);
      setSection2Title(contentStringTransformer(content['nama-section-2']));
      setSection3Title(contentStringTransformer(content['nama-section-3']));
      setSection3Link(contentStringTransformer(content['isi-section-3']));
    });

    handleGetContent(BASE_SLUG.TENTANG_AVRIST_LIFE.CONTENT.SEKILAS_PERUSAHAAN, {
      includeAttributes: 'true'
    }).then((res) => {
      const newDataContent = res.data.contentDataList.map((item: any) => {
        return {
          ...handleTransformedContent(item.contentData, item.title),
          categoryName: item.categoryName,
          id: item.id
        };
      });

      const keyValuePairs = Object.entries(newDataContent[0].content);

      const arrayOfObjects: any = keyValuePairs.map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          return {
            section: key,
            ...value
          };
        } else {
          console.error(`Cannot spread non-object value for key: ${key}`);
        }
      });

      const transformData = (data: any) => {
        const transformed = data.map((entry: any) => {
          // Extract relevant information from the details
          const tag = entry.details.find(
            (detail: any) => detail.name === 'Tahun Timeline'
          );
          const title = entry.details.find(
            (detail: any) => detail.name === 'Judul Timeline'
          );
          const desc = entry.details.find(
            (detail: any) => detail.name === 'Deskripsi Timeline'
          );

          return {
            year: tag.value,
            title: title.value,
            desc: desc.value
          };
        });

        return {
          title: 'History', // Constant title for the structure
          data: transformed // The transformed array
        };
      };

      const transformedData = transformData(arrayOfObjects[1]?.contentData);

      transformedData?.data.forEach((item: any) => {
        const year = item.year;
        if (!groupedData[year]) {
          groupedData[year] = { year: year, data: [] };
        }
        groupedData[year]['data'].push({
          title: item.title,
          desc: item.desc
        });
      });

      const mergedData = Object.values(groupedData);
      setContentDataTitle(arrayOfObjects[0].value);
      setContentData(mergedData);
    });
  }, []);
  return (
    <div className="w-full flex flex-col bg-white justify-center">
      <div className="flex flex-col gap-4 px-[32px] pt-[50px] sm:px-[136px] sm:py-[72px]">
        <p
          className="xs:text-[30px] xs:-tracking-[1.44px] lg:text-sekilas-perusahaan-title font-light"
          dangerouslySetInnerHTML={{
            __html: tagline
          }}
        />

        <p
          className="text-[20px] lg:text-sekilas-perusahaan-text font-light"
          dangerouslySetInnerHTML={{
            __html: desc
          }}
        />
      </div>
      <div className="w-full mt-[3.125rem]">
        {contentData && (
          <Timeline data={contentData} title={contentDataTitle} />
        )}
      </div>
      {visiMisi && <VisiMisi data={visiMisi} />}

      <div className="flex flex-col items-center justify-center bg-purple_superlight w-full py-[5rem] px-[32px] lg:px-[136px]">
        <div className="flex justify-center items-center pb-[5rem]">
          <p className="font-karla text-center text-tanya-avgen-detail-title-mobile lg:text-tanya-avgen-detail-title-desktop font-bold text-purple_dark">
            {section2Title}
          </p>
        </div>
        <div className="xs:hidden sm:block">
          <div className="grid grid-cols-3 gap-5">
            {purposeData?.map((val: any, idx: any) => (
              <PurposeCard
                key={idx}
                title={val.title}
                desc={val.desc}
                link={val.link}
                icon={val.icon}
                href={val.href}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-full sm:hidden">
          <div className="w-full overflow-x-auto overflow-y-hidden flex flex-row gap-5">
            {purposeData?.map((val: any, idx: any) => (
              <PurposeCard
                key={idx}
                title={val.title}
                desc={val.desc}
                link={val.link}
                icon={val.icon}
                href={val.href}
                customClassName="flex-none !w-[85%] !h-[400px]"
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col p-5 gap-4 bg-white border rounded-xl mt-10">
          <p className="font-karla font-bold text-banner-title-mobile lg:text-banner-title-desktop text-purple_dark">
            {section3Title}
          </p>
          <p className="text-xl">{section3Link}</p>
        </div>
      </div>
    </div>
  );
};

export default SekilasPerusahaan;
