import Icon from '@/components/atoms/Icon';

const RelatedPage = () => {
  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center md:px-20 xs:p-5 md:py-10">
      <div className="flex flex-col self-stretch p-9 gap-6">
        <div className="grid md:grid-cols-4 xs:grid-cols-1 gap-4 items-center justify-center mt-10">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Icon
              width={48}
              height={48}
              name="newspaper"
              color="purple_verylight"
            />
            <div>
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                Berita Pers
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Purus tortor praesent
                feugiat ultricies aliquam lacinia pretium potenti.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-purple_dark text-xs font-bold gap-2"
              >
                Lihat Semua
                <Icon
                  width={16}
                  height={16}
                  name="chevronRight"
                  color="purple_dark"
                />
              </a>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Icon
              width={48}
              height={48}
              name="award"
              color="purple_verylight"
            />
            <div>
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                Penghargaan
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Purus tortor praesent
                feugiat ultricies aliquam lacinia pretium potenti.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-purple_dark text-xs font-bold gap-2"
              >
                Lihat Semua
                <Icon
                  width={16}
                  height={16}
                  name="chevronRight"
                  color="purple_dark"
                />
              </a>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Icon
              width={48}
              height={48}
              name="search"
              color="purple_verylight"
            />
            <div>
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                Tanya Avram
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Purus tortor praesent
                feugiat ultricies aliquam lacinia pretium potenti.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-purple_dark text-xs font-bold gap-2"
              >
                Kontak Kami
                <Icon
                  width={16}
                  height={16}
                  name="chevronRight"
                  color="purple_dark"
                />
              </a>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Icon
              width={48}
              height={48}
              name="helpcircle"
              color="purple_verylight"
            />
            <div>
              <h5 className="mb-2 md:text-[24px] xs:text-[20px] font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                FAQs
              </h5>
              <p className="mb-3 font-normal md:text-[16px] xs:text-[12px] text-gray-500 dark:text-gray-400 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Purus tortor praesent
                feugiat ultricies aliquam lacinia pretium potenti.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-purple_dark text-xs font-bold gap-2"
              >
                Lihat FAQs
                <Icon
                  width={16}
                  height={16}
                  name="chevronRight"
                  color="purple_dark"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPage;
