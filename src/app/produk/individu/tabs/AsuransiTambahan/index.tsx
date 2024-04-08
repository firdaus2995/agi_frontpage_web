import React from 'react';
import HeartSymbol from '@/assets/symbols/heart-symbol.svg';
import CardCategoryA from '@/components/molecules/specifics/avrast/Cards/CategoryA';

function AsuransiTambahan() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
      {[...Array(9)].map((_, index) => (
        <CardCategoryA
          key={index}
          symbol={HeartSymbol}
          title="Asuransi Tambahan"
          summary="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet"
          tags={['Asuransi Tambahan', 'Premi Tetap', 'Premi Berkala']}
          href={`/produk/individu/produk-asuransi-tambahan-` + index}
        />
      ))}
    </div>
  );
}

export default AsuransiTambahan;
