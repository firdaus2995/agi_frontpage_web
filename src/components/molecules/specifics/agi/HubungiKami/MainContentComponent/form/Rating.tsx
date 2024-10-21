import React from 'react';
import Image from 'next/image';
import BAD_ACTIVE from '@/assets/images/rating/bad-active.svg';
import BAD from '@/assets/images/rating/bad.svg';
import HAPPY_ACTIVE from '@/assets/images/rating/happy-active.svg';
import HAPPY from '@/assets/images/rating/happy.svg';
import NEUTRAL_ACTIVE from '@/assets/images/rating/neutral-active.svg';
import NEUTRAL from '@/assets/images/rating/neutral.svg';
import VERY_BAD_ACTIVE from '@/assets/images/rating/very-bad-active.svg';
import VERY_BAD from '@/assets/images/rating/very-bad.svg';
import VERY_HAPPY_ACTIVE from '@/assets/images/rating/very-happy-active.svg';
import VERY_HAPPY from '@/assets/images/rating/very-happy.svg';

type RatingEmojiProps = {
  title: string;
  onChange: (e: string) => void;
  ids: any; // Tambahkan prop untuk menerima ID yang dipisahkan oleh ;
};

const listEmoji = [
  { id: '', active: VERY_HAPPY_ACTIVE, inactive: VERY_HAPPY },
  { id: '', active: HAPPY_ACTIVE, inactive: HAPPY },
  { id: '', active: NEUTRAL_ACTIVE, inactive: NEUTRAL },
  { id: '', active: BAD_ACTIVE, inactive: BAD },
  { id: '', active: VERY_BAD_ACTIVE, inactive: VERY_BAD }
];

export const RatingEmoji = (props: RatingEmojiProps) => {
  const { title, onChange, ids } = props;
  const [active, setActive] = React.useState('');

  // Memecah string ids menjadi array
  const idArray = ids?.split(';'); // Hasilnya ["1", "2", "3", "4", "5"]

  // Membatasi jumlah emoji berdasarkan panjang idArray
  const filteredEmojis = listEmoji
    .slice(0, idArray?.length)
    .map((emoji, index) => ({
      ...emoji,
      id: idArray[index] // Mengisi id dari idArray
    }));

  return (
    <div>
      <div className="lg:flex flex-row flex-wrap xs:hidden">
        {filteredEmojis.map((i) => (
          <Image
            key={i.id}
            src={i.id === active ? i.active : i.inactive}
            alt={i.id}
            width={85}
            height={85}
            className="mr-[4rem] cursor-pointer"
            onClick={() => {
              setActive(i.id);
              onChange(i.id);
            }}
          />
        ))}
      </div>
      <div className="flex flex-row flex-wrap lg:hidden justify-between">
        {filteredEmojis.map((i) => (
          <Image
            key={i.id}
            src={i.id === active ? i.active : i.inactive}
            alt={i.id}
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={() => {
              setActive(i.id);
              onChange(i.id);
            }}
          />
        ))}
      </div>
      <p className="font-bold mt-[1.5rem]">{title}</p>
    </div>
  );
};

export default RatingEmoji;
