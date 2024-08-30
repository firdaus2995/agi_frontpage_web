import React from 'react';
import CardCategoryA from '@/components/molecules/specifics/agi/Cards/CategoryA';

function AsuransiJiwa({ data }: { data: any }) {
  return (
    data && (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        {data.map((item: IDataCard, index: number) => (
          <CardCategoryA
            key={index}
            imageProduk={item.produkImage.imageUrl}
            symbol={item.kategoriProdukIcon.imageUrl}
            title="Asuransi Jiwa"
            summary={item.namaProduk}
            description={item.deskripsiSingkatProduk}
            tags={item.tags.split(',')}
            href={`/produk/individu/${item.id}`}
          />
        ))}
      </div>
    )
  );
}

export default AsuransiJiwa;

interface IDataCard {
  id: number;
  produkImage: {
    imageUrl: string;
  };
  kategoriProdukIcon: {
    imageUrl: string;
  };
  namaProduk: string;
  deskripsiSingkatProduk: string;
  tags: string;
}
