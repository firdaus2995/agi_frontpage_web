'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import WHATSAPP_IMAGE from '@/assets/images/whatsapp-image-small.svg';
import Icon from '@/components/atoms/Icon';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClose = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const lastNotificationDate = localStorage.getItem('lastNotificationDate');
    const currentDate = new Date().toDateString();

    if (!lastNotificationDate || lastNotificationDate !== currentDate) {
      setShowNotification(true);
      localStorage.setItem('lastNotificationDate', currentDate);
    }
  }, []);

  return (
    showNotification && (
      <div className="fixed z-50 left-0 top-0 h-full w-full flex justify-center items-center">
        <div className="max-w-3xl relative flex flex-col justify-center items-center gap-5 py-24 px-16 bg-white shadow-xl rounded-xl">
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={handleClose}
          >
            <Icon width={16} height={16} name="close" />
          </div>
          <Icon
            color="purple_verylight"
            width={120}
            height={120}
            name="alertCircle"
          />
          <h2 className="text-purple_dark font-bold text-5xl">
            HATI-HATI PENIPUAN
          </h2>
          <p className="px-9 text-center text-lg">
            Avrist Asset Management tidak terafiliasi dengan penawaran bisnis
            atau investasi di luar lingkup investasi reksa dana.
          </p>
          <p className="text-lg font-bold">
            Hubungi nomor di bawah ini untuk pengaduan.
          </p>
          <div className="flex flex-row px-10 py-3 border-1 border-purple_dark rounded-lg gap-3 items-center">
            <Image
              alt="Whatsapp"
              height={0}
              width={0}
              className=""
              src={WHATSAPP_IMAGE}
            />
            <p className="font-karla text-purple_dark font-bold text-4xl">
              0811 1960 1000
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Notification;
