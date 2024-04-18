import React from 'react';
import Image from 'next/image';

import ANZ from '@/assets/images/anz.svg';
import BANK_MEGA from '@/assets/images/bank-mega.svg';
import BCA from '@/assets/images/bca.svg';
import BI from '@/assets/images/bi.svg';
import BJB from '@/assets/images/bjb.svg';
import BUKOPIN from '@/assets/images/bukopin.svg';
import CIMB from '@/assets/images/cimb.svg';
import CITI from '@/assets/images/citi.svg';
import DANAMON from '@/assets/images/danamon.svg';
import DIGIBANK from '@/assets/images/digibank.svg';
import MAYBANK from '@/assets/images/maybank.svg';
import OCBC from '@/assets/images/ocbc.svg';
import Icon from '@/components/atoms/Icon';

const Bank = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-10">
        <Image src={ANZ} alt="anz" className="rounded-xl" />
        <Image src={BCA} alt="anz" className="rounded-xl" />
        <Image src={BI} alt="anz" className="rounded-xl" />
        <Image src={BJB} alt="anz" className="rounded-xl" />
        <Image src={BUKOPIN} alt="anz" className="rounded-xl" />
        <Image src={CIMB} alt="anz" className="rounded-xl" />
        <Image src={CITI} alt="anz" className="rounded-xl" />
        <Image src={DANAMON} alt="anz" className="rounded-xl" />
        <Image src={DIGIBANK} alt="anz" className="rounded-xl" />
        <Image src={MAYBANK} alt="anz" className="rounded-xl" />
        <Image src={BANK_MEGA} alt="anz" className="rounded-xl" />
        <Image src={OCBC} alt="anz" className="rounded-xl" />
      </div>
      <div className="px-4 flex flex-row justify-between">
        <p className="text-xl">
          Menampilkan <span className="font-bold text-purple_dark">1-5</span>{' '}
          dari <span className="font-bold">50</span> hasil
        </p>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-xl">
            <span className="font-bold text-purple_dark">1</span> 2 3 4 5 ... 10{' '}
          </p>
          <Icon
            width={20}
            height={20}
            name="chevronRight"
            color="purple_dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Bank;
