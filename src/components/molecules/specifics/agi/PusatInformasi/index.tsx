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

const MainContent = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get('tab') ?? '';

  console.log(params);

  return (
    <div>
      <ButtonMenu
        buttonList={[
          'Formulir Penutupan',
          'Klaim',
          'Rekanan',
          'Kantor Cabang',
          'Wording Polis & Klausula Asuransi ',
          'Agency'
        ]}
      />

      {params.includes('Formulir') ? (
        <Formulir />
      ) : params.includes('Klaim') ? (
        <Klaim />
      ) : params.includes('Rekanan') ? (
        <Rekanan />
      ) : params.includes('Kantor Cabang') ? (
        <KantorCabang />
      ) : params.includes('Wording Polis & Klausula Asuransi ') ? (
        <WordingPolis />
      ) : params.includes('Agency') ? (
        <Agency />
      ) : (
        <Formulir />
      )}
    </div>
  );
};

export default MainContent;
