import Icon from '@/components/atoms/Icon';

const Advantage = () => {
  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center md:px-20 xs:p-5 md:py-10">
      <div className="flex flex-col self-stretch p-9 gap-6">
        <div className="flex gap-2 items-center justify-center">
          <p className="md:text-[56px] xs:text-2xl whitespace-nowrap text-gray_body font-medium">
            <span className="text-purple_dark font-bold">Keunggulan</span> Kami
          </p>
        </div>
        <div className="flex md:flex-row xs:flex-col gap-4 items-center justify-center mt-10">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Icon
              width={48}
              height={48}
              name="award"
              color="purple_verylight"
            />
            <div>
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                Keahlian Profesional
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur. Purus tortor praesent
                feugiat ultricies aliquam lacinia pretium potenti.
              </p>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Icon
              width={48}
              height={48}
              name="heart"
              color="purple_verylight"
            />
            <div>
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                Pendekatan Yang Sesuai
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur. Purus tortor praesent
                feugiat ultricies aliquam lacinia pretium potenti.
              </p>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Icon width={48} height={48} name="eye" color="purple_verylight" />
            <div>
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                Transparansi Mutlak
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur. Purus tortor praesent
                feugiat ultricies aliquam lacinia pretium potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
