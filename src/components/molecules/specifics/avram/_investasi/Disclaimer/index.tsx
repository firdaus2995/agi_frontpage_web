import Icon from "@/components/atoms/Icon";

const Disclaimer = () => {
  return (
    <div className='w-full flex flex-col self-stretch items-center justify-center px-20'>
      <div className='flex flex-col self-stretch bg-white rounded-xl p-9 gap-6'>
        <div className='flex gap-2'>
          <Icon width={32} height={32} name='sealWarning' color='reddist' />
          <p className='text-2xl text-gray_body font-bold'>Disclaimer</p>
        </div>
        <p className='text-sm'>
          Investasi melalui reksa dana mengandung risiko. Calon pemodal wajib memahami risiko berinvestasi di Pasar Modal, oleh sebab itu calon pemodal wajib membaca dan memahami isi prospektus sebelum memutuskan untuk berinvestasi melalui Reksa Dana. Kinerja masa lalu tidak mencerminkan kinerja masa datang.
        </p>
      </div>
    </div>
  )
};

export default Disclaimer;
