import React, { useState, useEffect } from 'react';
import NotFound from '@/components/atoms/NotFound';
import Accordion from '@/components/molecules/specifics/agi/Accordion';
import DownloadFileButton from '@/components/molecules/specifics/agi/DownloadFileButton';
import SearchBox from '@/components/molecules/specifics/agi/SearchBox';
import { handleGetContentCategory } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import { QueryParams } from '@/utils/httpService';
import { singleImageTransformer } from '@/utils/responseTransformer';

const Klaim = () => {
  const [transformedData, setTransFormedData] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [searchKeyWords, setSearchKeywords] = useState('');

  useEffect(() => {
    fetchContentDataWithCategory({ searchKeyWords }).then((data: any) => {
      setCategoryList(Object.keys(data.transformedData.categoryList));
      setTransFormedData(data.transformedData.categoryList);
    });
  }, [searchKeyWords]);

  return (
    <div className="flex flex-col gap-4 px-[2rem] md:px-[8.5rem] pb-[3.125rem] md:pb-[6.25rem]">
      <section className="w-full flex flex-col items-center text-center my-[30px] md:my-[60px]">
        <h1 className="font-karla text-[2.25rem] md:text-[3.5rem]">
          <span className="text-purple_dark font-medium">Transparansi</span> dan{' '}
          <span className="text-purple_dark font-medium">efisiensi</span> dalam
          menangani permohonan klaim nasabah.
        </h1>
      </section>

      <SearchBox
        onSearch={(value: string) => {
          setSearchKeywords(value);
        }}
        placeHolder="Cari Formulir"
      />
      <div className="flex flex-col gap-3">
        {transformedData && categoryList.length > 0 ? (
          categoryList?.map((element: any, idx: number) => {
            const currentData =
              transformedData[Object.keys(transformedData)[idx]];
            const subcategories = getSubcategories(currentData);

            return (
              <Accordion
                key={idx}
                bgColor="bg-purple_light_bg"
                title={element}
                description={currentData[0].categoryDescription}
              >
                <Accordion.Item>
                  {subcategories.map((list: any, index: number) => {
                    return (
                      <Accordion title={list} key={index}>
                        {currentData
                          .filter((i: any) => i.contentData[0].value === list)
                          .map((item: any, key: number) => (
                            <DownloadFileButton
                              key={key}
                              title={item.title}
                              fileType={JSON.parse(item.contentData[1].value)[0]
                                .imageUrl.split('.')
                                .pop()}
                              filePath={
                                singleImageTransformer(item.contentData[1])
                                  .imageUrl
                              }
                            />
                          ))}
                      </Accordion>
                    );
                  })}
                </Accordion.Item>
              </Accordion>
            );
          })
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default Klaim;

const fetchContentDataWithCategory = async (params: any) => {
  const queryParams: QueryParams = {
    includeAttributes: 'true',
    searchFilter: params?.searchKeyWords || ''
  };

  try {
    const apiContent = await handleGetContentCategory(
      BASE_SLUG.PUSAT_INFORMASI.CONTENT.KLAIM,
      queryParams
    );
    return transformsData(apiContent);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

function transformsData(responseData: any) {
  const transformedData: any = responseData.data;

  return { transformedData };
}

const getSubcategories = (data: any) => {
  const subcategories = data.map((item: any) => {
    const subkategori = item.contentData.find(
      (cd: any) => cd.fieldId === 'subkategori'
    );
    return subkategori ? subkategori.value : null;
  });
  const filteredSubcategories = subcategories.filter(
    (subcategory: any) => subcategory !== null
  );

  function removeDuplicates(arr: string[]) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }

  const uniqueSubcategories = removeDuplicates(filteredSubcategories);

  return uniqueSubcategories.sort();
};
