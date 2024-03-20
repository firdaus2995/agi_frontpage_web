'use client'

import { ChangeEvent, useState } from "react";

import Button from "@/components/atoms/Button/Button";

const Kalkulator = () => {
  const [widthUpper, setWidthUpper] = useState(28);
  const [widthBelow, setWidthBelow] = useState(28);

  const handlerWidthUpperChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setWidthUpper(30 + (e.target.value.length * 28));
  };

  const handlerWidthBelowChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setWidthBelow(30 + (e.target.value.length * 28));
  };

  return (
    <div className='w-full flex flex-col self-stretch items-center justify-center px-20 gap-12'>
      <div className='flex flex-col self-stretch bg-white rounded-xl p-9 gap-12'>
        <div className="w-full flex flex-row justify-center gap-3">
          <Button
            title="Investasi per bulan"
            customTextClass="font-semibold text-xl"
          />
          <Button
            title="Investasi satu kali"
            customTextClass="font-semibold text-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl text-center">Modal Awal</p>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="text-5xl font-light">Rp</p>
            <input className="text-5xl font-bold focus:outline-none" placeholder="0" style={{ width: widthUpper }} onChange={handlerWidthUpperChanged} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl text-center">Dana yang diinvestasikan</p>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="text-5xl font-light">Rp</p>
            <input className="text-5xl font-bold focus:outline-none" placeholder="0" style={{ width: widthBelow }} onChange={handlerWidthBelowChanged} />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6">
          <div className="flex flex-col p-6 gap-6 justify-center border-1 border-gray_bglightgray rounded-xl shadow">
            <p className="font-bold text-2xl text-center">Jangka waktu investasi</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <Button
                  title="1 tahun"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
                <Button
                  title="3 tahun"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  title="5 tahun"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
                <Button
                  title="10 tahun"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 gap-6 justify-center border-1 border-gray_bglightgray rounded-xl shadow">
            <p className="font-bold text-2xl text-center">Jangka waktu investasi</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <Button
                  title="Pasar Uang"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
                <Button
                  title="Pendapatan Tetap"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  title="Campuran"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
                <Button
                  title="Saham"
                  customTextClass="w-60 font-semibold text-xl text-purple_dark"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl text-center">Nilai investasi saya di masa depan</p>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="text-5xl font-light">Rp</p>
            <input className="text-5xl font-bold focus:outline-none" placeholder="0" style={{ width: widthBelow }} onChange={handlerWidthBelowChanged} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Kalkulator;
