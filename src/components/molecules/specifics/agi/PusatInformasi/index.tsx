'use client';
import React from 'react';

import { useSearchParams } from 'next/navigation';
import ButtonMenu from '../ButtonMenu';
import Agency from './Agency';
import Formulir from './Formulir';
import KantorCabang from './KantorCabang';
import Klaim from './Klaim';
import Rekanan from './Rekanan';
import WordingPolis from './WordingPolis';

type mainContentProps = {
  pageData: any;
};

const MainContent = (props: mainContentProps) => {
  const { pageData } = props;
  const searchParams = useSearchParams();
  const params = searchParams.get('tab') ?? '';
  const content = searchParams.get('content');

  return (
    <div className="pt-[3.125rem] lg:pt-[6.25rem]">
      {!content && (
        <ButtonMenu
          buttonList={[
            'Formulir',
            'Klaim',
            'Rekanan',
            'Kantor Cabang',
            'Wording Polis & Klausula Asuransi',
            'Agency'
          ]}
        />
      )}

      {params.includes('Formulir') ? (
        <Formulir pageData={pageData} />
      ) : params.includes('Klaim') ? (
        <Klaim pageData={pageData} />
      ) : params.includes('Rekanan') ? (
        <Rekanan pageData={pageData} />
      ) : params.includes('Kantor Cabang') ? (
        <KantorCabang />
      ) : params.includes('Wording Polis & Klausula Asuransi') ? (
        <WordingPolis pageData={pageData} />
      ) : params.includes('Agency') ? (
        <Agency pageData={pageData} />
      ) : (
        <Formulir pageData={pageData} />
      )}
    </div>
  );
};

export default MainContent;
